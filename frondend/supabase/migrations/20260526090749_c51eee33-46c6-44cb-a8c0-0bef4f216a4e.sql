
-- 1. Restrict public SELECT on shop_products and rental_items to non-hidden rows
DROP POLICY IF EXISTS "Public read shop_products" ON public.shop_products;
CREATE POLICY "Public read shop_products"
ON public.shop_products
FOR SELECT
TO public
USING (hidden = false);

DROP POLICY IF EXISTS "Public read rental_items" ON public.rental_items;
CREATE POLICY "Public read rental_items"
ON public.rental_items
FOR SELECT
TO public
USING (hidden = false);

-- 2. Allow admins to read all rows (including hidden) via separate policy
CREATE POLICY "Admins can read all shop_products"
ON public.shop_products
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can read all rental_items"
ON public.rental_items
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- 3. Lock down has_role: revoke EXECUTE from public/authenticated/anon
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM authenticated;

-- 4. Restrict storage object listing for catalog-images bucket:
--    keep public read of individual objects (by URL) but disallow listing all objects.
--    We achieve this by replacing the broad SELECT policy with one that returns
--    true only for service_role / authenticated admins; public URLs continue to
--    work because Supabase serves them through the storage CDN, which does not
--    require a SELECT policy match for direct object fetches on public buckets.

-- Drop any existing broad SELECT policies on storage.objects for this bucket
DO $$
DECLARE pol record;
BEGIN
  FOR pol IN
    SELECT policyname FROM pg_policies
    WHERE schemaname='storage' AND tablename='objects'
      AND (qual ILIKE '%catalog-images%' OR policyname ILIKE '%catalog-images%')
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON storage.objects', pol.policyname);
  END LOOP;
END $$;

-- Admins can manage all files in catalog-images
CREATE POLICY "Admins manage catalog-images"
ON storage.objects
FOR ALL
TO authenticated
USING (bucket_id = 'catalog-images' AND public.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (bucket_id = 'catalog-images' AND public.has_role(auth.uid(), 'admin'::public.app_role));
