-- Execute este comando no SQL Editor do seu Supabase Dashboard
-- para criar a tabela necessária para o funcionamento da Newsletter.

CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  source TEXT,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  city TEXT,
  type TEXT,
  source TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Permitir inserções anônimas para que o formulário funcione
CREATE POLICY "Allow anonymous insertions" ON subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous insertions leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Permitir leitura apenas para usuários autenticados (Admin)
CREATE POLICY "Allow authenticated read" ON subscribers
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read leads" ON leads
  FOR SELECT TO authenticated USING (true);

-- ── Tabela: smartform_leads ──────────────────────────────────────────────────
-- Captura progressiva do SmartForm (Épico 2).
-- Cada visita ao site cria um registro ao 1° toque (persona); os campos são
-- preenchidos progressivamente até o /complete, que envia ao ERP CRM.

CREATE TABLE smartform_leads (
  id              UUID    DEFAULT gen_random_uuid() PRIMARY KEY,
  pagina_origem   TEXT,
  persona         TEXT,
  nivel           TEXT,
  urgencia        TEXT,
  nome            TEXT,
  whatsapp        TEXT,
  email           TEXT,
  campos          JSONB,
  status          TEXT    DEFAULT 'iniciado',
  consentimento_lgpd JSONB,
  erp_enviado     BOOLEAN DEFAULT FALSE,
  utm_source      TEXT,
  utm_medium      TEXT,
  utm_campaign    TEXT,
  utm_term        TEXT,
  utm_content     TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE smartform_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert smartform" ON smartform_leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous update smartform" ON smartform_leads
  FOR UPDATE USING (true);

CREATE POLICY "Allow authenticated read smartform" ON smartform_leads
  FOR SELECT TO authenticated USING (true);
