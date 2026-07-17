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
