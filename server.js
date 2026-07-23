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

// ── API: leads ────────────────────────────────────────────────
// Encaminha o cadastro pro ERP (CRM real) via endpoint público protegido por
// chave secreta. O ERP cuida de: salvar no CRM, mandar e-mail de confirmação
// (com PDF de cursos anexado) e notificar Diretor/CEO/Owner.
// Se o ERP estiver fora do ar, cai pro Supabase local do site como rede de
// segurança, pra não perder o lead — o visitante nunca vê esse detalhe.
app.post('/api/leads/register', async (req, res) => {
  const { name, email, phone, message, source, website } = req.body || {};
  if (!email || !name) {
    return res.status(400).json({ error: 'Nome e e-mail são obrigatórios' });
  }

  // Honeypot: bots preenchem esse campo invisível, humanos não.
  if (website) {
    return res.status(200).json({ message: 'Lead registrado com sucesso!' });
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
        return res.status(200).json({ message: 'Lead registrado com sucesso!' });
      }
      console.error('ERP lead endpoint returned error status:', erpResponse.status, await erpResponse.text());
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
    res.status(200).json({ message: 'Lead registrado com sucesso!', databaseStored });
  } catch (error) {
    console.error('Lead registration error:', error);
    res.status(500).json({ error: 'Erro interno ao salvar lead' });
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
