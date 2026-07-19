ALTER TABLE public.service_summer_prices
  ADD COLUMN IF NOT EXISTS category TEXT;

UPDATE public.service_summer_prices
SET category = CASE
  WHEN lower(trim(title)) ~ '(диагност|выезд|эвакуац)'
    THEN 'diagnostics'
  WHEN lower(trim(title)) ~ '(тормоз|колод|ротор|калипер|гидравл)'
    THEN 'brakes'
  WHEN lower(trim(title)) ~ '(вилк|рулев.*колон|амортиз)'
    THEN 'fork'
  WHEN lower(trim(title)) ~ '(кол[её]с|покрыш|камер|бескамер|прокол|восьм|втулк|эксцентрик|спиц)'
    THEN 'wheels'
  WHEN lower(trim(title)) ~ '(трансмисс|цеп|кассет|трещот|переключ|карет|трос|рубаш|педал|зв[её]зд|шатун)'
    THEN 'drivetrain'
  ELSE 'general'
END
WHERE category IS NULL
   OR category NOT IN (
     'diagnostics',
     'drivetrain',
     'wheels',
     'brakes',
     'fork',
     'general'
   );

ALTER TABLE public.service_summer_prices
  ALTER COLUMN category SET DEFAULT 'general',
  ALTER COLUMN category SET NOT NULL;

ALTER TABLE public.service_summer_prices
  DROP CONSTRAINT IF EXISTS service_summer_prices_category_check;

ALTER TABLE public.service_summer_prices
  ADD CONSTRAINT service_summer_prices_category_check
  CHECK (
    category IN (
      'diagnostics',
      'drivetrain',
      'wheels',
      'brakes',
      'fork',
      'general'
    )
  );
