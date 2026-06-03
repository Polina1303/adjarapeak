ALTER TABLE public.service_winter_prices
  ADD COLUMN IF NOT EXISTS title_en TEXT,
  ADD COLUMN IF NOT EXISTS title_ka TEXT,
  ADD COLUMN IF NOT EXISTS description_en TEXT,
  ADD COLUMN IF NOT EXISTS description_ka TEXT,
  ADD COLUMN IF NOT EXISTS price_en TEXT,
  ADD COLUMN IF NOT EXISTS price_ka TEXT;

ALTER TABLE public.service_summer_prices
  ADD COLUMN IF NOT EXISTS title_en TEXT,
  ADD COLUMN IF NOT EXISTS title_ka TEXT,
  ADD COLUMN IF NOT EXISTS description_en TEXT,
  ADD COLUMN IF NOT EXISTS description_ka TEXT,
  ADD COLUMN IF NOT EXISTS price_en TEXT,
  ADD COLUMN IF NOT EXISTS price_ka TEXT;

ALTER TABLE public.hikes
  ADD COLUMN IF NOT EXISTS title_en TEXT,
  ADD COLUMN IF NOT EXISTS title_ka TEXT,
  ADD COLUMN IF NOT EXISTS shortly_en TEXT,
  ADD COLUMN IF NOT EXISTS shortly_ka TEXT,
  ADD COLUMN IF NOT EXISTS description_en TEXT,
  ADD COLUMN IF NOT EXISTS description_ka TEXT,
  ADD COLUMN IF NOT EXISTS difficulty_en TEXT,
  ADD COLUMN IF NOT EXISTS difficulty_ka TEXT,
  ADD COLUMN IF NOT EXISTS duration_en TEXT,
  ADD COLUMN IF NOT EXISTS duration_ka TEXT,
  ADD COLUMN IF NOT EXISTS group_size_en TEXT,
  ADD COLUMN IF NOT EXISTS group_size_ka TEXT,
  ADD COLUMN IF NOT EXISTS location_en TEXT,
  ADD COLUMN IF NOT EXISTS location_ka TEXT,
  ADD COLUMN IF NOT EXISTS features_en JSONB,
  ADD COLUMN IF NOT EXISTS features_ka JSONB,
  ADD COLUMN IF NOT EXISTS reasons_en JSONB,
  ADD COLUMN IF NOT EXISTS reasons_ka JSONB,
  ADD COLUMN IF NOT EXISTS packing_list_en JSONB,
  ADD COLUMN IF NOT EXISTS packing_list_ka JSONB;

UPDATE public.service_winter_prices
SET
  title_en = 'Full service',
  title_ka = 'სრული მომსახურება',
  description_en = 'Edge sharpening, base cleaning, old wax removal and fresh wax application (waxes from +3 to −20, 6° steps).',
  description_ka = 'კანტების ალესვა, სასრიალო ზედაპირის წმენდა, ძველი პარაფინის მოხსნა და ახლის დატანა (პარაფინები +3-დან −20-მდე, 6° ნაბიჯით).',
  price_en = '≈ 80 ₾',
  price_ka = 'დაახლ. 80 ₾'
WHERE title = 'Комплексное обслуживание';

UPDATE public.service_winter_prices
SET
  title_en = 'Edge sharpening',
  title_ka = 'კანტების ალესვა',
  description_en = 'Restores edge angle for confident control on ice and hardpack.',
  description_ka = 'კანტის კუთხის აღდგენა ყინულსა და მყარ ფერდობზე თავდაჯერებული კონტროლისთვის.',
  price_en = '≈ 40 ₾',
  price_ka = 'დაახლ. 40 ₾'
WHERE title = 'Заточка кантов';

UPDATE public.service_winter_prices
SET
  title_en = 'Storage wax',
  title_ka = 'კონსერვაცია',
  description_en = 'Off-season preparation: cleaning and a thick protective wax layer.',
  description_ka = 'აღჭურვილობის მომზადება სეზონებს შორის შესანახად: წმენდა და დამცავი პარაფინის სქელი ფენა.',
  price_en = 'from 20 ₾',
  price_ka = '20 ₾-დან'
WHERE title = 'Консервация';

UPDATE public.service_winter_prices
SET
  title_en = 'Base repair',
  title_ka = 'სასრიალო ზედაპირის შეკეთება',
  description_en = 'Ptex scratch filling, base leveling and structure restoration.',
  description_ka = 'ნაკაწრების Ptex-ით შევსება, ბაზის გასწორება და სტრუქტურის აღდგენა.',
  price_en = 'from 20 ₾',
  price_ka = '20 ₾-დან'
WHERE title = 'Ремонт скользящей поверхности';

UPDATE public.service_winter_prices
SET
  title_en = 'Temperature wax',
  title_ka = 'ტემპერატურული პარაფინი',
  description_en = 'Wax selected for snow and temperature, hot-applied with an iron.',
  description_ka = 'პარაფინის შერჩევა ტემპერატურისა და თოვლის მიხედვით, ცხლად დატანა უთოთი.',
  price_en = '40 ₾',
  price_ka = '40 ₾'
WHERE title = 'Нанесение температурного парафина';

UPDATE public.service_winter_prices
SET
  title_en = 'Binding setup',
  title_ka = 'სამაგრების დაყენება და რეგულირება',
  description_en = 'Binding installation and adjustment for height, weight and riding level.',
  description_ka = 'სამაგრების მონტაჟი და მორგება სიმაღლის, წონისა და დონის მიხედვით.',
  price_en = 'from 30 ₾',
  price_ka = '30 ₾-დან'
WHERE title = 'Установка и настройка креплений';

UPDATE public.service_summer_prices
SET
  title_en = 'Drivetrain cleaning',
  title_ka = 'ტრანსმისიის წმენდა',
  description_en = 'Full drivetrain cleaning followed by chain and component lubrication. Lubricant is charged separately.',
  description_ka = 'ტრანსმისიის სრული წმენდა და შემდეგ ჯაჭვისა და კვანძების შეზეთვა. საპოხი ცალკე ანგარიშდება.',
  price_en = '50 ₾',
  price_ka = '50 ₾'
WHERE title = 'Чистка трансмиссии';

UPDATE public.service_summer_prices
SET title_en = 'Accessory installation', title_ka = 'აქსესუარების დაყენება', description_en = 'Mounting fenders, bottle cages, bike computers and other accessories.', description_ka = 'ფრთების, ბოთლის სამაგრების, ველოკომპიუტერებისა და სხვა აქსესუარების მონტაჟი.', price_en = '10 ₾', price_ka = '10 ₾'
WHERE title = 'Установка аксессуаров';

UPDATE public.service_summer_prices
SET title_en = 'Cassette replacement', title_ka = 'კასეტის შეცვლა', description_en = 'Removing a worn cassette and installing a new one.', description_ka = 'გაცვეთილი კასეტის მოხსნა და ახლის დაყენება.', price_en = '15 ₾', price_ka = '15 ₾'
WHERE title = 'Замена кассеты';

UPDATE public.service_summer_prices
SET title_en = 'Chain replacement', title_ka = 'ჯაჭვის შეცვლა', description_en = 'Removing the old chain and fitting a new one to length.', description_ka = 'ძველი ჯაჭვის მოხსნა და ახლის მორგება სიგრძეზე.', price_en = '15 ₾', price_ka = '15 ₾'
WHERE title = 'Замена цепи';

UPDATE public.service_summer_prices
SET title_en = 'Brake bleeding', title_ka = 'მუხრუჭების დაჰაერება', description_en = 'Bleeding one hydraulic brake circuit and removing air from the line.', description_ka = 'ერთი ჰიდრავლიკური მუხრუჭის ხაზის დაჰაერება და ჰაერის მოცილება.', price_en = '35 ₾', price_ka = '35 ₾'
WHERE title = 'Прокачка тормозов';

UPDATE public.service_summer_prices
SET title_en = 'Brake pad replacement', title_ka = 'მუხრუჭის ხუნდების შეცვლა', description_en = 'Installing new pads with rotor and caliper check.', description_ka = 'ახალი ხუნდების დაყენება როტორისა და კალიპერის შემოწმებით.', price_en = '15 ₾', price_ka = '15 ₾'
WHERE title = 'Замена тормозных колодок';

UPDATE public.service_summer_prices
SET title_en = 'Disc brake adjustment', title_ka = 'დისკური მუხრუჭების რეგულირება', description_en = 'Caliper centering, rub removal and lever feel adjustment.', description_ka = 'კალიპერის ცენტრირება, ხახუნის მოცილება და სახელურის სვლის მორგება.', price_en = '30 ₾', price_ka = '30 ₾'
WHERE title = 'Настройка дисковых тормозов';

UPDATE public.service_summer_prices
SET title_en = 'Tube replacement', title_ka = 'კამერის შეცვლა', description_en = 'Removing the tire, replacing the inner tube and inflating to working pressure.', description_ka = 'საბურავის მოხსნა, კამერის შეცვლა და სამუშაო წნევამდე დაბერვა.', price_en = '20 ₾', price_ka = '20 ₾'
WHERE title = 'Замена камеры';

UPDATE public.service_summer_prices
SET title_en = 'Tire replacement', title_ka = 'საბურავის შეცვლა', description_en = 'Removing the old tire and installing a new one with centering.', description_ka = 'ძველი საბურავის მოხსნა და ახლის დაყენება ცენტრირებით.', price_en = '20 ₾', price_ka = '20 ₾'
WHERE title = 'Замена покрышки';

UPDATE public.service_summer_prices
SET title_en = 'Puncture repair', title_ka = 'პუნქციის შეკეთება', description_en = 'Finding the puncture, patching the tube and reassembling the wheel.', description_ka = 'პუნქციის პოვნა, კამერის დაწებება და ბორბლის აწყობა.', price_en = '15 ₾', price_ka = '15 ₾'
WHERE title = 'Устранение прокола';

UPDATE public.service_summer_prices
SET title_en = 'Quick-release service', title_ka = 'ექსცენტრიკის მომსახურება', description_en = 'Disassembly, cleaning and lubrication of the hub quick-release clamp.', description_ka = 'ბორბლის ექსცენტრიკული დამჭერის დაშლა, წმენდა და შეზეთვა.', price_en = '10 ₾', price_ka = '10 ₾'
WHERE title = 'Смазка и обслуживание эксцентрика';

UPDATE public.hikes
SET
  title_en = 'HIKE TO MYSTERIOUS SAMEGRELO',
  title_ka = 'ლაშქრობა იდუმალ სამეგრელოში',
  shortly_en = 'A new signature route that we have not seen anywhere online yet. Samegrelo is a land of ancient princes, forgotten fortresses and legends. The Dadiani family ruled here for centuries, leaving towers, ruins and plenty of mysteries behind. On the first Saturday of summer, we set out to explore one of the region''s most interesting corners.',
  shortly_ka = 'ახალი, ავტორული მიმართულება, რომელიც ინტერნეტში ჯერ არ შეგვხვედრია. სამეგრელო არის ძველი მთავრების, მივიწყებული ციხეებისა და ლეგენდების მხარე. აქ საუკუნეების განმავლობაში დადიანების გვარი მმართველობდა და უკან კოშკები, ნანგრევები და უამრავი საიდუმლო დატოვა. ზაფხულის პირველ შაბათს რეგიონის ერთ-ერთ ყველაზე საინტერესო კუთხეს ვიკვლევთ.',
  description_en = E'Intsira Waterfalls\nA short but very rich route through forest and canyon.\nOn the trail we will have:\n- creek crossings over stones;\n- descents by ladders;\n- boulder sections and small adventures;\n- several scenic waterfalls;\n- a chance to swim in crystal-clear water;\n- a cave above one of the waterfalls for the bravest participants.\n\nChakvindzhi Fortress\nAfter the hike, we will visit one of Samegrelo''s largest and least-known fortresses. Its exact founding date is still unknown. The fortress is well preserved, and its walls open beautiful views over the surrounding valleys.',
  description_ka = E'ინცირას ჩანჩქერები\nმოკლე, მაგრამ ძალიან მრავალფეროვანი მარშრუტი ტყესა და ხეობაში.\nბილიკზე გველოდება:\n- ნაკადულების ქვებზე გადაკვეთა;\n- კიბეებით დაშვებები;\n- ლოდებიანი მონაკვეთები და პატარა თავგადასავლები;\n- რამდენიმე თვალწარმტაცი ჩანჩქერი;\n- კრისტალურად სუფთა წყალში ბანაობის შესაძლებლობა;\n- გამოქვაბული ერთ-ერთი ჩანჩქერის ზემოთ ყველაზე გაბედული მონაწილეებისთვის.\n\nჭაქვინჯის ციხე\nლაშქრობის შემდეგ სამეგრელოს ერთ-ერთ უდიდეს და ნაკლებად ცნობილ ციხეს ვესტუმრებით. მისი დაარსების ზუსტი თარიღი დღემდე უცნობია. ციხე კარგად არის შემონახული, ხოლო კედლებიდან მიმდებარე ხეობებზე შესანიშნავი ხედები იშლება.',
  difficulty_en = 'Medium',
  difficulty_ka = 'საშუალო',
  features_en = '["Experienced guide", "Transfer with waiting time"]'::jsonb,
  features_ka = '["გამოცდილი გიდი", "ტრანსფერი ლოდინით"]'::jsonb,
  packing_list_en = $$[{"title":"Comfortable trekking clothes and shoes","items":["Pants or leggings, as there are thorns and nettles","Headwear","Sunscreen","Tick repellent","Trekking poles, optional","Swimsuit and towel","Flashlight for visiting the cave","Crocs or shoes you do not mind getting wet for the cave"]}]$$::jsonb,
  packing_list_ka = $$[{"title":"კომფორტული ტანსაცმელი და ფეხსაცმელი ტრეკინგისთვის","items":["შარვალი ან ლეგინსი, რადგან არის ეკლები და ჭინჭარი","თავსაბურავი","მზისგან დამცავი კრემი","ტკიპების საწინააღმდეგო საშუალება","ტრეკინგის ჯოხები სურვილისამებრ","საცურაო კოსტიუმი და პირსახოცი","ფანარი გამოქვაბულის მოსანახულებლად","კროქსები ან ფეხსაცმელი, რომლის დასველებაც არ დაგენანებათ"]}]$$::jsonb
WHERE slug = 'SAMEGRELO';

UPDATE public.hikes
SET
  title_en = 'GOMIS MTA — hiking to Mount Didi Vake and a sunset above a sea of clouds',
  title_ka = 'გომის მთა — ლაშქრობა დიდი ვაკეს მთაზე და ღრუბლების ზღვაში ჩასვლა',
  shortly_en = 'One of Guria''s most magical locations: misty ridges, abandoned summer houses and sunsets above the clouds at more than 2000 meters.',
  shortly_ka = 'გურიის ერთ-ერთი ყველაზე ჯადოსნური ადგილი: ნისლიანი ქედები, მიტოვებული საზაფხულო სახლები და ღრუბლების ზემოთ ჩასვლები 2000 მეტრზე მეტ სიმაღლეზე.',
  description_en = E'We will climb to the summit of Didi Vake, enjoy signature aromatic tea with sweets, and take in panoramic views from 2333 meters.\nTo finish, we will watch the sunset over a sea of clouds from the viewpoint, weather permitting. We leave at 9:00 so you can sleep before a full hiking day.\nAfter arrival, we will rest a little and start the hike to Mount Didi Vake: a 10 km out-and-back route with 350 meters of ascent and descent.',
  description_ka = E'ავდივართ დიდი ვაკეს მწვერვალზე, ვსვამთ არომატულ ავტორულ ჩაის ტკბილეულთან ერთად და 2333 მეტრიდან პანორამულ ხედებს ვტკბებით.\nდასასრულს კი, თუ ამინდი გაგვიმართლებს, ღრუბლების ზღვის ზემოთ ჩასვლას ვნახავთ. გავდივართ 9:00-ზე, რომ აქტიური სალაშქრო დღის წინ გამოძინება მოასწროთ.\nჩასვლის შემდეგ ცოტას დავისვენებთ და დიდი ვაკეს მთისკენ გავემართებით: რადიალური 10 კმ მარშრუტი 350 მეტრი ასვლითა და დაშვებით.',
  difficulty_en = 'Medium',
  difficulty_ka = 'საშუალო',
  features_en = '["Experienced guide", "Round-trip transfer"]'::jsonb,
  features_ka = '["გამოცდილი გიდი", "ტრანსფერი ორივე მიმართულებით"]'::jsonb,
  packing_list_en = $$[{"title":"Water (1-1.5 l), snacks or food for the day","items":["Warm sweater or windbreaker, as it can be cool at sunset or during the hike","Blanket or sit pad","Charged phone or camera — the views will be worth it","Trekking poles, optional. Rent them online and we will bring them for you"]}]$$::jsonb,
  packing_list_ka = $$[{"title":"წყალი (1-1.5 ლ), წასახემსებელი ან დღის საკვები","items":["თბილი ზედა ან ქარსაცავი, რადგან ჩასვლისას ან ლაშქრობის დროს შეიძლება გრილოდეს","პლედი ან დასაჯდომი","დამუხტული ტელეფონი ან კამერა — ხედები ნამდვილად იქნება","ტრეკინგის ჯოხები სურვილისამებრ. იქირავეთ ონლაინ და ჩვენ წამოგიღებთ"]}]$$::jsonb
WHERE slug = 'gomis-mta';

UPDATE public.hikes
SET
  title_en = 'Anaklia | Information is being prepared.',
  title_ka = 'ანაკლია | ინფორმაცია მზადდება.'
WHERE slug = 'anaklia';

UPDATE public.hikes
SET
  title_en = 'BAKHMARO and Mount Gadrekili',
  title_ka = 'ბახმარო და გადრეკილის მწვერვალი',
  shortly_en = 'A hike to Mount Gadrekili (2508 m), with sweeping views over the Meskheti Range.',
  shortly_ka = 'ლაშქრობა გადრეკილის მწვერვალზე (2508 მ), საიდანაც მესხეთის ქედზე შთამბეჭდავი ხედი იშლება.',
  description_en = E'On the way to Bakhmaro, we will make a short stop at the Nabeghlavi plant to stretch before the serpentine road and fill your bottle with mineral water.\n\nAfter arriving in Bakhmaro, we will take a short break and then start toward the summit.\nThe route begins along scenic paths and continues with a climb along the alpine ridge.',
  description_ka = E'ბახმაროს გზაზე მოკლე გაჩერებას გავაკეთებთ ნაბეღლავის ქარხანასთან, რომ სერპანტინამდე გავივარჯიშოთ და ბოთლი მინერალური წყლით შევავსოთ.\n\nბახმაროში ჩასვლის შემდეგ მოკლედ დავისვენებთ და მწვერვალისკენ გავემართებით.\nმარშრუტი იწყება თვალწარმტაცი ბილიკებით, შემდეგ კი ალპურ ქედზე ასვლით გაგრძელდება.',
  difficulty_en = 'Medium',
  difficulty_ka = 'საშუალო',
  features_en = '["Transfer with waiting time: Batumi — Bakhmaro — Batumi", "Guide support", "Stop at the Nabeghlavi plant with mineral water"]'::jsonb,
  features_ka = '["ტრანსფერი ლოდინით: ბათუმი — ბახმარო — ბათუმი", "გიდის თანხლება", "გაჩერება ნაბეღლავის ქარხანასთან მინერალური წყლით"]'::jsonb,
  packing_list_en = $$[{"title":"Water (1.5-2 l), snacks or food for the day","items":["Mat or sit pad","Wind and/or rain jacket, just in case","Trekking poles are recommended. Rent them from us and we will bring them along"]}]$$::jsonb,
  packing_list_ka = $$[{"title":"წყალი (1.5-2 ლ), წასახემსებელი ან დღის საკვები","items":["ხალიჩა ან დასაჯდომი","ქარისგან ან წვიმისგან დამცავი ქურთუკი, ყოველი შემთხვევისთვის","ტრეკინგის ჯოხები სასურველია. იქირავეთ ჩვენთან და წამოგიღებთ"]}]$$::jsonb
WHERE slug = 'bakhmaro';
