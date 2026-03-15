-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS leads (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre        TEXT NOT NULL,
  telefono      TEXT NOT NULL,
  empresa       TEXT,
  num_sucursales INTEGER,
  como_se_entero TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for querying newest leads first
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);

-- Optional: enable Row Level Security (recommended for Supabase)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow server-side inserts via service role key (anon cannot SELECT)
CREATE POLICY "Allow insert for anon" ON leads
  FOR INSERT TO anon WITH CHECK (true);
