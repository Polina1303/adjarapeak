DO $$
DECLARE
  has_sale_price boolean;
BEGIN
  SELECT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'rental_items'
      AND column_name = 'sale_price_per_day'
  )
  INTO has_sale_price;

  IF has_sale_price THEN
    UPDATE public.rental_items AS item
    SET
      price_per_day = 40,
      sale_price_per_day = NULL,
      features = CASE
        WHEN item.features IS NULL THEN '["10 лари в час (аренда от 2 часов)", "40 лари в сутки"]'::jsonb
        ELSE (
          SELECT jsonb_agg(
            CASE
              WHEN value #>> '{}' ILIKE '%лари в сутки%' THEN '"40 лари в сутки"'::jsonb
              ELSE value
            END
          )
          FROM jsonb_array_elements(item.features) AS feature(value)
        )
      END
    FROM public.rental_categories AS category
    WHERE item.category_id = category.id
      AND category.slug = 'rentBIKE';
  ELSE
    UPDATE public.rental_items AS item
    SET
      price_per_day = 40,
      features = CASE
        WHEN item.features IS NULL THEN '["10 лари в час (аренда от 2 часов)", "40 лари в сутки"]'::jsonb
        ELSE (
          SELECT jsonb_agg(
            CASE
              WHEN value #>> '{}' ILIKE '%лари в сутки%' THEN '"40 лари в сутки"'::jsonb
              ELSE value
            END
          )
          FROM jsonb_array_elements(item.features) AS feature(value)
        )
      END
    FROM public.rental_categories AS category
    WHERE item.category_id = category.id
      AND category.slug = 'rentBIKE';
  END IF;
END $$;
