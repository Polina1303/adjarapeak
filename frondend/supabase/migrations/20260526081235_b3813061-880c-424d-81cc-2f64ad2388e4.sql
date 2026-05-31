
-- 1. Role infrastructure
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 2. Soft-hide columns
ALTER TABLE public.shop_products ADD COLUMN IF NOT EXISTS hidden boolean NOT NULL DEFAULT false;
ALTER TABLE public.rental_items ADD COLUMN IF NOT EXISTS hidden boolean NOT NULL DEFAULT false;

-- 3. Admin write policies for all 8 catalog tables
DO $$
DECLARE
  t text;
  tables text[] := ARRAY[
    'shop_groups','shop_categories','shop_subcategories','shop_products',
    'rental_groups','rental_categories','rental_subcategories','rental_items'
  ];
BEGIN
  FOREACH t IN ARRAY tables LOOP
    EXECUTE format('DROP POLICY IF EXISTS "Admins can insert %1$s" ON public.%1$s', t);
    EXECUTE format('DROP POLICY IF EXISTS "Admins can update %1$s" ON public.%1$s', t);
    EXECUTE format('DROP POLICY IF EXISTS "Admins can delete %1$s" ON public.%1$s', t);

    EXECUTE format('CREATE POLICY "Admins can insert %1$s" ON public.%1$s FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), ''admin''))', t);
    EXECUTE format('CREATE POLICY "Admins can update %1$s" ON public.%1$s FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), ''admin'')) WITH CHECK (public.has_role(auth.uid(), ''admin''))', t);
    EXECUTE format('CREATE POLICY "Admins can delete %1$s" ON public.%1$s FOR DELETE TO authenticated USING (public.has_role(auth.uid(), ''admin''))', t);
  END LOOP;
END $$;

-- 4. Storage bucket for catalog images
INSERT INTO storage.buckets (id, name, public)
VALUES ('catalog-images', 'catalog-images', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read catalog-images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'catalog-images');

CREATE POLICY "Admins can upload catalog-images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'catalog-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update catalog-images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'catalog-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete catalog-images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'catalog-images' AND public.has_role(auth.uid(), 'admin'));
