-- Transform shop_products.colors from string[] (hex) to {color, image}[] (image optional)
UPDATE public.shop_products
SET colors = COALESCE(
  (
    SELECT jsonb_agg(
      CASE
        WHEN jsonb_typeof(elem) = 'string' THEN jsonb_build_object('color', elem, 'image', NULL)
        WHEN jsonb_typeof(elem) = 'object' AND elem ? 'color' THEN
          jsonb_build_object('color', elem->'color', 'image', COALESCE(elem->'image', 'null'::jsonb))
        ELSE NULL
      END
    )
    FROM jsonb_array_elements(colors) elem
    WHERE jsonb_typeof(elem) IN ('string','object')
  ),
  '[]'::jsonb
)
WHERE jsonb_typeof(colors) = 'array' AND jsonb_array_length(colors) > 0;