ALTER TABLE public.shop_products
  ADD COLUMN IF NOT EXISTS featured BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS featured_priority INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS featured_until DATE,
  ADD COLUMN IF NOT EXISTS featured_label TEXT,
  ADD COLUMN IF NOT EXISTS featured_tags JSONB NOT NULL DEFAULT '[]'::jsonb;

CREATE INDEX IF NOT EXISTS idx_shop_products_featured
  ON public.shop_products (featured, featured_priority DESC)
  WHERE hidden = false AND in_stock = true;

UPDATE public.shop_products
SET
  featured = true,
  featured_priority = 80,
  featured_label = 'Выбор команды',
  featured_tags = '["team-pick", "seasonal"]'::jsonb
WHERE slug IN (
  'roliki-oxelo-learn-100-30-32-32-34-32-34-2440764376743',
  'girya-10-kg-1940979943254661000',
  'turisticheskiy-ryukzak-naturehike-rock-60-51-100036',
  'palatka-naturehike-cloud-up-2-20d-2-h-mestnaya-dvuhsloynaya-1204091',
  'vetrovka-explore-haki-12043040314845'
);
