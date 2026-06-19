UPDATE public.rental_items
SET image = btrim(image)
WHERE image IS NOT NULL
  AND image <> btrim(image);

UPDATE public.rental_items
SET image = 'trinx-junior-1-0-20.jpg'
WHERE slug = '9871222';

UPDATE public.rental_items
SET image = 'freshandblack.png'
WHERE slug = 'rent-200891234';
