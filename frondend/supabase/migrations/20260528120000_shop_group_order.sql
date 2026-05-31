INSERT INTO public.shop_groups (slug, title, image, sort_order)
VALUES ('boards', 'Баланс и доски', 'sport-skates-boards.png', 3)
ON CONFLICT (slug) DO UPDATE
SET
  title = EXCLUDED.title,
  image = COALESCE(public.shop_groups.image, EXCLUDED.image),
  sort_order = EXCLUDED.sort_order;

UPDATE public.shop_groups
SET
  title = CASE slug
    WHEN 'sale' THEN 'Распродажа'
    WHEN 'cyclingRoller' THEN 'Велоспорт и ролики'
    WHEN 'boards' THEN 'Баланс и доски'
    WHEN 'clothesAndShoes' THEN 'Одежда и обувь'
    WHEN 'martial' THEN 'Единоборства'
    WHEN 'tourismCamping' THEN 'Туризм и кемпинг'
    WHEN 'sports' THEN 'Игровой спорт'
    WHEN 'fitness' THEN 'Фитнес и йога'
    WHEN 'swimmingSup' THEN 'Плавание и сапы'
    WHEN 'alpinesking' THEN 'Горнолыжный спорт'
    ELSE title
  END,
  sort_order = CASE slug
    WHEN 'sale' THEN 1
    WHEN 'cyclingRoller' THEN 2
    WHEN 'boards' THEN 3
    WHEN 'clothesAndShoes' THEN 4
    WHEN 'martial' THEN 5
    WHEN 'tourismCamping' THEN 6
    WHEN 'sports' THEN 7
    WHEN 'fitness' THEN 8
    WHEN 'swimmingSup' THEN 9
    WHEN 'alpinesking' THEN 10
    ELSE sort_order
  END
WHERE slug IN (
  'sale',
  'cyclingRoller',
  'boards',
  'clothesAndShoes',
  'martial',
  'tourismCamping',
  'sports',
  'fitness',
  'swimmingSup',
  'alpinesking'
);

UPDATE public.shop_categories
SET
  group_id = (SELECT id FROM public.shop_groups WHERE slug = 'boards'),
  sort_order = CASE slug
    WHEN 'balance_board' THEN 1
    WHEN 'skateboard' THEN 2
    WHEN 'longboard' THEN 3
    ELSE sort_order
  END
WHERE slug IN ('balance_board', 'skateboard', 'longboard')
  AND EXISTS (SELECT 1 FROM public.shop_groups WHERE slug = 'boards');
