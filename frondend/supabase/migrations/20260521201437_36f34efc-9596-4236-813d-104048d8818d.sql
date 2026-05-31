-- Shop products: slug = legacy_id (with suffix for duplicates)
WITH ranked AS (
  SELECT id, legacy_id,
    ROW_NUMBER() OVER (PARTITION BY legacy_id ORDER BY created_at, id) AS rn
  FROM shop_products
  WHERE legacy_id IS NOT NULL
)
UPDATE shop_products p
SET slug = CASE WHEN r.rn = 1
  THEN r.legacy_id::text
  ELSE r.legacy_id::text || '-' || r.rn::text
END
FROM ranked r
WHERE p.id = r.id;

-- Rental items: same pattern, skip NULL legacy_id
WITH ranked AS (
  SELECT id, legacy_id,
    ROW_NUMBER() OVER (PARTITION BY legacy_id ORDER BY created_at, id) AS rn
  FROM rental_items
  WHERE legacy_id IS NOT NULL
)
UPDATE rental_items i
SET slug = CASE WHEN r.rn = 1
  THEN r.legacy_id::text
  ELSE r.legacy_id::text || '-' || r.rn::text
END
FROM ranked r
WHERE i.id = r.id;