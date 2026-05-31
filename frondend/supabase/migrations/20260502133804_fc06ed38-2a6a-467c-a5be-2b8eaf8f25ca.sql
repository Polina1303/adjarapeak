
-- Shop hierarchy
CREATE TABLE public.shop_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  image text,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.shop_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid NOT NULL REFERENCES public.shop_groups(id) ON DELETE CASCADE,
  slug text NOT NULL,
  title text NOT NULL,
  image text,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (group_id, slug)
);

CREATE TABLE public.shop_subcategories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES public.shop_categories(id) ON DELETE CASCADE,
  slug text NOT NULL,
  title text NOT NULL,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (category_id, slug)
);

CREATE TABLE public.shop_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  legacy_id bigint,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL DEFAULT 0,
  image text,
  category_id uuid NOT NULL REFERENCES public.shop_categories(id) ON DELETE CASCADE,
  subcategory_id uuid REFERENCES public.shop_subcategories(id) ON DELETE SET NULL,
  features jsonb NOT NULL DEFAULT '[]'::jsonb,
  in_stock boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_shop_products_category ON public.shop_products(category_id);
CREATE INDEX idx_shop_products_subcategory ON public.shop_products(subcategory_id);

-- Rental hierarchy
CREATE TABLE public.rental_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  image text,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.rental_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid NOT NULL REFERENCES public.rental_groups(id) ON DELETE CASCADE,
  slug text NOT NULL,
  title text NOT NULL,
  image text,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (group_id, slug)
);

CREATE TABLE public.rental_subcategories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES public.rental_categories(id) ON DELETE CASCADE,
  slug text NOT NULL,
  title text NOT NULL,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (category_id, slug)
);

CREATE TABLE public.rental_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  legacy_id bigint,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  description text,
  shortly text,
  price_per_day numeric(10,2) NOT NULL DEFAULT 0,
  image text,
  category_id uuid NOT NULL REFERENCES public.rental_categories(id) ON DELETE CASCADE,
  subcategory_id uuid REFERENCES public.rental_subcategories(id) ON DELETE SET NULL,
  features jsonb NOT NULL DEFAULT '[]'::jsonb,
  available boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_rental_items_category ON public.rental_items(category_id);
CREATE INDEX idx_rental_items_subcategory ON public.rental_items(subcategory_id);

-- Enable RLS on all
ALTER TABLE public.shop_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shop_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shop_subcategories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shop_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rental_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rental_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rental_subcategories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rental_items ENABLE ROW LEVEL SECURITY;

-- Public read policies (catalog is public)
CREATE POLICY "Public read shop_groups" ON public.shop_groups FOR SELECT USING (true);
CREATE POLICY "Public read shop_categories" ON public.shop_categories FOR SELECT USING (true);
CREATE POLICY "Public read shop_subcategories" ON public.shop_subcategories FOR SELECT USING (true);
CREATE POLICY "Public read shop_products" ON public.shop_products FOR SELECT USING (true);
CREATE POLICY "Public read rental_groups" ON public.rental_groups FOR SELECT USING (true);
CREATE POLICY "Public read rental_categories" ON public.rental_categories FOR SELECT USING (true);
CREATE POLICY "Public read rental_subcategories" ON public.rental_subcategories FOR SELECT USING (true);
CREATE POLICY "Public read rental_items" ON public.rental_items FOR SELECT USING (true);
