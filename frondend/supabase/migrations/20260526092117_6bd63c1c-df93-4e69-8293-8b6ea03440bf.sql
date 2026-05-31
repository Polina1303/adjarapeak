CREATE SCHEMA IF NOT EXISTS app_private;

CREATE OR REPLACE FUNCTION app_private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM anon;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM authenticated;
REVOKE ALL ON FUNCTION app_private.has_role(uuid, public.app_role) FROM PUBLIC;
GRANT USAGE ON SCHEMA app_private TO authenticated;
GRANT EXECUTE ON FUNCTION app_private.has_role(uuid, public.app_role) TO authenticated;

ALTER POLICY "Admins can delete rental_categories" ON public.rental_categories USING (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can insert rental_categories" ON public.rental_categories WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can update rental_categories" ON public.rental_categories USING (app_private.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));

ALTER POLICY "Admins can delete rental_groups" ON public.rental_groups USING (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can insert rental_groups" ON public.rental_groups WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can update rental_groups" ON public.rental_groups USING (app_private.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));

ALTER POLICY "Admins can delete rental_items" ON public.rental_items USING (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can insert rental_items" ON public.rental_items WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can read all rental_items" ON public.rental_items USING (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can update rental_items" ON public.rental_items USING (app_private.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));

ALTER POLICY "Admins can delete rental_subcategories" ON public.rental_subcategories USING (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can insert rental_subcategories" ON public.rental_subcategories WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can update rental_subcategories" ON public.rental_subcategories USING (app_private.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));

ALTER POLICY "Admins can delete shop_categories" ON public.shop_categories USING (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can insert shop_categories" ON public.shop_categories WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can update shop_categories" ON public.shop_categories USING (app_private.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));

ALTER POLICY "Admins can delete shop_groups" ON public.shop_groups USING (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can insert shop_groups" ON public.shop_groups WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can update shop_groups" ON public.shop_groups USING (app_private.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));

ALTER POLICY "Admins can delete shop_products" ON public.shop_products USING (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can insert shop_products" ON public.shop_products WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can read all shop_products" ON public.shop_products USING (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can update shop_products" ON public.shop_products USING (app_private.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));

ALTER POLICY "Admins can delete shop_subcategories" ON public.shop_subcategories USING (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can insert shop_subcategories" ON public.shop_subcategories WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));
ALTER POLICY "Admins can update shop_subcategories" ON public.shop_subcategories USING (app_private.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));

ALTER POLICY "Admins can manage roles" ON public.user_roles USING (app_private.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (app_private.has_role(auth.uid(), 'admin'::public.app_role));