CREATE TABLE public.hikes (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  description text,
  shortly text,
  image text,
  gallery jsonb NOT NULL DEFAULT '[]'::jsonb,
  price numeric NOT NULL DEFAULT 0,
  sale_price numeric,
  duration text,
  difficulty text,
  group_size text,
  location text,
  features jsonb NOT NULL DEFAULT '[]'::jsonb,
  hidden boolean NOT NULL DEFAULT false,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT ON public.hikes TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.hikes TO authenticated;
GRANT ALL ON public.hikes TO service_role;

ALTER TABLE public.hikes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read hikes" ON public.hikes FOR SELECT USING (hidden = false);
CREATE POLICY "Admins can read all hikes" ON public.hikes FOR SELECT TO authenticated USING (app_private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can insert hikes" ON public.hikes FOR INSERT TO authenticated WITH CHECK (app_private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update hikes" ON public.hikes FOR UPDATE TO authenticated USING (app_private.has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (app_private.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete hikes" ON public.hikes FOR DELETE TO authenticated USING (app_private.has_role(auth.uid(), 'admin'::app_role));