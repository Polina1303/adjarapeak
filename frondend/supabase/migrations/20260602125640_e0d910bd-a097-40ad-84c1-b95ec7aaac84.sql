
CREATE TABLE public.service_winter_prices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price TEXT NOT NULL DEFAULT '',
  highlight BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.service_summer_prices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price TEXT NOT NULL DEFAULT '',
  highlight BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT ON public.service_winter_prices TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.service_winter_prices TO authenticated;
GRANT ALL ON public.service_winter_prices TO service_role;

GRANT SELECT ON public.service_summer_prices TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.service_summer_prices TO authenticated;
GRANT ALL ON public.service_summer_prices TO service_role;

ALTER TABLE public.service_winter_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_summer_prices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read service_winter_prices" ON public.service_winter_prices FOR SELECT USING (true);
CREATE POLICY "Admins manage service_winter_prices" ON public.service_winter_prices FOR ALL TO authenticated
  USING (app_private.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (app_private.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public read service_summer_prices" ON public.service_summer_prices FOR SELECT USING (true);
CREATE POLICY "Admins manage service_summer_prices" ON public.service_summer_prices FOR ALL TO authenticated
  USING (app_private.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (app_private.has_role(auth.uid(), 'admin'::app_role));

INSERT INTO public.service_winter_prices (title, description, price, highlight, sort_order) VALUES
  ('Комплексное обслуживание', 'Заточка кантов, чистка скользящей поверхности, снятие старого парафина и нанесение нового (парафины от +3 до −20, шаг 6°).', '≈ 80 ₾', true, 10),
  ('Заточка кантов', 'Восстановление угла кромки для уверенного контроля на льду и жёстком склоне.', '≈ 40 ₾', false, 20),
  ('Консервация', 'Подготовка снаряжения к межсезонному хранению: чистка, толстый слой защитного парафина.', 'от 20 ₾', false, 30),
  ('Ремонт скользящей поверхности', 'Заливка царапин Ptex, выравнивание базы, восстановление структуры.', 'от 20 ₾', false, 40),
  ('Нанесение температурного парафина', 'Подбор парафина под температуру и тип снега, горячая прокатка утюгом.', '40 ₾', false, 50),
  ('Установка и настройка креплений', 'Монтаж креплений, регулировка по росту, весу и уровню катания.', 'от 30 ₾', false, 60);

INSERT INTO public.service_summer_prices (title, description, price, highlight, sort_order) VALUES
  ('Чистка трансмиссии', 'Полная чистка трансмиссии с последующей смазкой цепи и узлов. Смазка оплачивается отдельно.', '50 ₾', true, 10),
  ('Установка аксессуаров', 'Монтаж крыльев, флягодержателей, велокомпьютеров и других аксессуаров.', '10 ₾', false, 20),
  ('Замена кассеты', 'Снятие изношенной кассеты и установка новой.', '15 ₾', false, 30),
  ('Замена цепи', 'Демонтаж старой цепи и установка новой с подгонкой длины.', '15 ₾', false, 40),
  ('Прокачка тормозов', 'Прокачка гидравлической линии одного контура, удаление воздуха.', '35 ₾', false, 50),
  ('Замена тормозных колодок', 'Установка новых колодок с проверкой ротора и суппорта.', '15 ₾', false, 60),
  ('Настройка дисковых тормозов', 'Центровка суппорта, устранение трения и настройка хода ручки.', '30 ₾', false, 70),
  ('Замена камеры', 'Снятие покрышки, замена камеры и накачка до рабочего давления.', '20 ₾', false, 80),
  ('Замена покрышки', 'Демонтаж старой покрышки и установка новой с центровкой.', '20 ₾', false, 90),
  ('Устранение прокола', 'Поиск прокола, заклейка камеры и обратная сборка колеса.', '15 ₾', false, 100),
  ('Смазка и обслуживание эксцентрика', 'Разборка, чистка и смазка эксцентрикового зажима втулки.', '10 ₾', false, 110);
