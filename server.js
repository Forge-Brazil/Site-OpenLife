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

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

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
app.post('/api/leads/register', async (req, res) => {
  const { name, email, phone, city, type, source, metadata } = req.body || {};
  if (!email || !name) {
    return res.status(400).json({ error: 'Nome e e-mail são obrigatórios' });
  }

  try {
    let databaseStored = false;
    if (supabase) {
      const { error: dbError } = await supabase.from('leads').insert([{ name, email, phone, city, type, source, metadata: metadata || {} }]);
      if (!dbError) databaseStored = true;
      else console.error('Lead DB Error:', dbError);
    }

    if (resend && process.env.ADMIN_EMAIL) {
      try {
        await resend.emails.send({
          from: 'OpenLife CRM <crm@openlifebrasil.com>',
          to: process.env.ADMIN_EMAIL,
          subject: `Novo Lead: ${name} (${source})`,
          html: `<p>Novo lead cadastrado no site:</p><ul><li>Nome: ${name}</li><li>Email: ${email}</li><li>Telefone: ${phone}</li><li>Origem: ${source}</li></ul>`,
        });
      } catch (e) {
        console.error('Admin notification failed:', e);
      }
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
