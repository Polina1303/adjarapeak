-- Recreate storage policy referencing the canonical app_private.has_role
DROP POLICY IF EXISTS "Admins manage catalog-images" ON storage.objects;
CREATE POLICY "Admins manage catalog-images" ON storage.objects
  FOR ALL TO authenticated
  USING (bucket_id = 'catalog-images' AND app_private.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (bucket_id = 'catalog-images' AND app_private.has_role(auth.uid(), 'admin'::public.app_role));

-- Remove duplicate function in public schema to eliminate ambiguity
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);