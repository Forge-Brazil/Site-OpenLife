import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(__dirname, 'dist/client');
const PORT = Number(process.env.PORT) || 3000;

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Supabase é opcional aqui (só usado pela newsletter e pelo fallback local de
// leads, caso o ERP esteja indisponível). Uma URL ausente/mal configurada
// nunca deve derrubar o servidor inteiro — só desativa essas duas partes.
const supabaseUrl = (process.env.VITE_SUPABASE_URL || '').trim();
const supabaseKey = (process.env.VITE_SUPABASE_ANON_KEY || '').trim();
let supabase = null;
if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
  } catch (err) {
    console.error('Failed to initialize Supabase client (check VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY):', err.message);
  }
}

const app = express();
app.use(express.json());
app.use(cors());

// ── API: newsletter ──────────────────────────────────────────
app.post('/api/newsletter/subscribe', async (req, res) => {
  const { email } = req.body || {};
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  try {
    let databaseStored = false;
    if (supabase) {
      const { error: dbError } = await supabase.from('subscribers').insert([{ email, source: 'newsletter_footer' }]);
      if (!dbError) databaseStored = true;
      else if (dbError.code !== '23505') console.error('DB Error:', dbError);
    }

    let emailSent = false;
    let emailError = null;
    if (resend) {
      try {
        const data = await resend.emails.send({
          from: 'OpenLife <newsletter@openlifebrasil.com>',
          to: email,
          subject: 'Bem-vindo à Newsletter da OpenLife!',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 12px; overflow: hidden;">
              <div style="background-color: #6B2D8B; padding: 40px; text-align: center;">
                <img src="https://openlifebrasil.com.br/logomarca-nobg.png" width="120" alt="OpenLife" />
              </div>
              <div style="padding: 40px; color: #333;">
                <h1 style="color: #6B2D8B; font-size: 24px; margin-bottom: 20px;">Você está dentro! 🚀</h1>
                <p style="font-size: 16px; line-height: 1.6;">Olá!</p>
                <p style="font-size: 16px; line-height: 1.6;">Ficamos muito felizes em ter você na nossa comunidade. A partir de agora, você receberá dicas exclusivas para destravar seu inglês, novidades da escola e conteúdos estratégicos diretamente no seu e-mail.</p>
                <p style="margin-top: 30px; font-size: 16px; color: #333;">Até breve,<br /><strong>Equipe OpenLife</strong></p>
              </div>
              <div style="background-color: #F57C20; padding: 20px; text-align: center; color: white; font-size: 12px;">
                © ${new Date().getFullYear()} OpenLife English School. Todos os direitos reservados.
              </div>
            </div>
          `,
        });
        if (data.error) emailError = data.error.message;
        else emailSent = true;
      } catch (err) {
        console.error('Resend Exception:', err);
        emailError = err.message;
      }
    } else {
      emailError = 'Newsletter ainda não configurada no servidor.';
    }

    res.status(200).json({ message: 'Inscrito com sucesso!', emailSent, databaseStored, emailError });
  } catch (error) {
    console.error('Subscription process error:', error);
    res.status(500).json({ error: 'Erro ao processar sua inscrição. Tente novamente mais tarde.' });
  }
});

// ── Leads: encaminha pro ERP (CRM real) via endpoint público protegido por
// chave secreta. O ERP cuida de: salvar no CRM, mandar e-mail de confirmação
// (com PDF de cursos anexado) e notificar Diretor/CEO/Owner.
// Se o ERP estiver fora do ar, cai pro Supabase local do site como rede de
// segurança, pra não perder o lead — o visitante nunca vê esse detalhe.
// Usada tanto pelo formulário de contato quanto pela Alice (chat).
async function registerLead({ name, email, phone, message, source }) {
  if (!email || !name) {
    return { ok: false, error: 'Nome e e-mail são obrigatórios' };
  }

  if (process.env.ERP_API_URL && process.env.SITE_SHARED_SECRET) {
    try {
      const erpResponse = await fetch(`${process.env.ERP_API_URL}/api/leads/site`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Site-Key': process.env.SITE_SHARED_SECRET,
        },
        body: JSON.stringify({ nome: name, email, telefone: phone, descricao: message }),
      });

      if (erpResponse.ok) {
        return { ok: true };
      }
      const errText = await erpResponse.text();
      console.error('ERP lead endpoint returned error status:', erpResponse.status, errText);
      if (erpResponse.status === 400) {
        return { ok: false, error: 'Confira o e-mail e o telefone informados.' };
      }
    } catch (err) {
      console.error('Failed to forward lead to ERP:', err);
    }
  } else {
    console.warn('ERP_API_URL/SITE_SHARED_SECRET não configurados — lead não foi enviado ao CRM.');
  }

  // Fallback: ERP indisponível ou não configurado — salva localmente pra não perder o lead.
  try {
    let databaseStored = false;
    if (supabase) {
      const { error: dbError } = await supabase.from('leads').insert([{ name, email, phone, type: 'contact', source, metadata: { message } }]);
      if (!dbError) databaseStored = true;
      else console.error('Lead fallback DB Error:', dbError);
    }
    return { ok: true, databaseStored };
  } catch (error) {
    console.error('Lead registration error:', error);
    return { ok: false, error: 'Erro interno ao salvar lead' };
  }
}

// ── API: leads (formulário de contato) ──────────────────────────
app.post('/api/leads/register', async (req, res) => {
  const { name, email, phone, message, source, website } = req.body || {};

  // Honeypot: bots preenchem esse campo invisível, humanos não.
  if (website) {
    return res.status(200).json({ message: 'Lead registrado com sucesso!' });
  }

  const result = await registerLead({ name, email, phone, message, source: source || 'site_contato' });
  if (result.ok) {
    res.status(200).json({ message: 'Lead registrado com sucesso!', databaseStored: result.databaseStored });
  } else {
    res.status(400).json({ error: result.error || 'Erro ao registrar lead' });
  }
});

// ── API: Alice (chat consultivo com IA, via Groq) ─────────────────
const GROQ_MODEL = 'llama-3.3-70b-versatile';

const registrarLeadTool = {
  type: 'function',
  function: {
    name: 'registrar_lead',
    description: 'Registra o cadastro da pessoa no CRM da escola quando já se sabe nome completo, contato (telefone/WhatsApp) e e-mail.',
    parameters: {
      type: 'object',
      properties: {
        nome: { type: 'string', description: 'Nome completo da pessoa' },
        contato: { type: 'string', description: 'Telefone ou WhatsApp com DDD' },
        email: { type: 'string', description: 'E-mail da pessoa' },
        descricao: { type: 'string', description: 'Resumo do que a pessoa procura ou seu objetivo com o inglês' },
      },
      required: ['nome', 'contato', 'email'],
    },
  },
};

const ALICE_SYSTEM_INSTRUCTION = `
Você é a Alice, consultora de admissões da OpenLife English School, atendendo pelo chat do site. Você NÃO é uma assistente virtual genérica — fale como uma pessoa real, calorosa, atenciosa e profissional, uma consultora de verdade puxando papo com um visitante interessado.

Informações da escola:
- Metodologia: ESL (English as a Second Language), foco em falar sem tradução mental.
- Promessa: fluência em 18 meses.
- Cursos: Kids (6-9 anos), Teens (10-12 anos), Journey (13+ anos, carro-chefe), Keep the Fluency (manutenção/avançado).
- História: 21 anos no mercado, mais de 66.000 alunos.

Seu objetivo na conversa: entender o que a pessoa procura e coletar, de forma natural e SEM parecer um formulário/interrogatório (uma pergunta por vez, dentro do fluxo da conversa):
1. Nome completo
2. Telefone/WhatsApp com DDD
3. E-mail
4. O que ela procura (curso, faixa etária, objetivo) — incentive, mas não é bloqueante.

Antes de registrar, confirme rapidamente os dados coletados com a pessoa (ex: "confirma que seu WhatsApp é (11) 99999-9999 e e-mail joao@email.com?"). Só depois de confirmado, chame a função registrar_lead com nome, contato e email (obrigatórios) e descricao (se houver). Chame essa função no máximo uma vez por conversa — se o lead já foi registrado, não chame de novo, mesmo que a pessoa continue conversando.

Depois de registrar, agradeça e diga que a equipe vai entrar em contato em breve; não repita palavra por palavra o e-mail de confirmação que ela já vai receber. Se ela só quiser tirar dúvidas sobre os cursos, responda normalmente sem forçar o cadastro. Responda sempre em português, de forma breve e natural (chat, não e-mail).
`;

app.post('/api/alice/chat', async (req, res) => {
  const { messages, leadRegistered } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages é obrigatório' });
  }
  if (!process.env.GROQ_API_KEY) {
    return res.json({ reply: 'Estou com uma instabilidade agora, mas você pode nos chamar no WhatsApp!' });
  }

  try {
    const groqMessages = [
      { role: 'system', content: ALICE_SYSTEM_INSTRUCTION },
      ...messages.map((m) => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '') })),
    ];

    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: groqMessages,
        temperature: 0.7,
        ...(leadRegistered ? {} : { tools: [registrarLeadTool] }),
      }),
    });

    if (!groqResponse.ok) {
      console.error('Groq API error:', groqResponse.status, await groqResponse.text());
      return res.json({ reply: 'Estou com um pouco de instabilidade agora, mas você pode nos chamar no WhatsApp!' });
    }

    const data = await groqResponse.json();
    const message = data.choices?.[0]?.message || {};
    const toolCall = message.tool_calls?.find((t) => t.function?.name === 'registrar_lead');

    if (toolCall) {
      let args = {};
      try { args = JSON.parse(toolCall.function.arguments || '{}'); } catch { /* ignora argumentos malformados */ }
      const { nome, contato, email, descricao } = args;
      const result = await registerLead({ name: nome, email, phone: contato, message: descricao, source: 'site_alice' });
      if (result.ok) {
        return res.json({
          reply: message.content?.trim() || `Perfeito, ${nome}! Já registrei seus dados por aqui e nossa equipe vai entrar em contato em breve. 😊`,
          leadRegistered: true,
        });
      }
      return res.json({ reply: `Hmm, não consegui confirmar seus dados (${result.error || 'erro ao registrar'}). Pode conferir o e-mail e o telefone pra mim?` });
    }

    res.json({ reply: message.content || 'Desculpe, tive um problema ao processar sua resposta. Tente novamente!' });
  } catch (error) {
    console.error('Alice chat error:', error);
    res.json({ reply: 'Estou com um pouco de instabilidade agora, mas você pode nos chamar no WhatsApp!' });
  }
});

// ── Estáticos + rotas pré-renderizadas (SSG) ────────────────────
// dist/client contém os assets do build e, para cada rota do
// scripts/prerender.mjs, um index.html com o HTML e o SEO já embutidos.
app.use(express.static(clientDir, { index: false, redirect: false }));

app.get(/.*/, (req, res) => {
  let pathname = decodeURIComponent(req.path);
  if (pathname !== '/' && pathname.endsWith('/')) pathname = pathname.slice(0, -1);

  const prerenderedPath = path.join(clientDir, pathname, 'index.html');
  if (prerenderedPath.startsWith(clientDir)) {
    return res.sendFile(prerenderedPath, (err) => {
      if (err) res.sendFile(path.join(clientDir, 'index.html'));
    });
  }
  res.sendFile(path.join(clientDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  if (!supabase) console.warn('Supabase não configurado — newsletter/leads não serão persistidos (defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY).');
  if (!resend) console.warn('Resend não configurado — e-mails não serão enviados (defina RESEND_API_KEY).');
});
