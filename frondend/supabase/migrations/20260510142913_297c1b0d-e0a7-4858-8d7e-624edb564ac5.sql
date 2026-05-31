UPDATE public.shop_groups SET title = CASE slug
  WHEN 'sale' THEN 'Распродажа'
  WHEN 'clothesandshoes' THEN 'Одежда и обувь'
  WHEN 'martial' THEN 'Единоборства'
  WHEN 'tourismcamping' THEN 'Туризм и кемпинг'
  WHEN 'sports' THEN 'Спорт'
  WHEN 'fitness' THEN 'Фитнес'
  WHEN 'swimmingsup' THEN 'Плавание и SUP'
  WHEN 'cyclingroller' THEN 'Велосипеды и ролики'
  WHEN 'alpinesking' THEN 'Альпинизм и лыжи'
  ELSE title
END
WHERE slug IN ('sale','clothesandshoes','martial','tourismcamping','sports','fitness','swimmingsup','cyclingroller','alpinesking');