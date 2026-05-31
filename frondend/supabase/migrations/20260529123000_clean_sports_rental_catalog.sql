alter table public.rental_items
  alter column legacy_id type numeric using legacy_id::numeric;

alter table public.rental_items
  add column if not exists hidden boolean not null default false;

alter table public.rental_items
  add column if not exists sale_price_per_day numeric(10,2);

insert into public.rental_groups (slug, title, image, sort_order)
values ('sportsRental', 'Спортивный прокат', 'kross-r6-rent.jpg', 3)
on conflict (slug) do update
set title = excluded.title,
    image = excluded.image,
    sort_order = excluded.sort_order;

with sports_group as (
  select id
  from public.rental_groups
  where slug = 'sportsRental'
),
category_seed(slug, title, sort_order) as (
  values
    ('rentROLLER', 'Ролики', 1),
    ('rentBOARD', 'Скейты и доски', 2),
    ('rentBIKE', 'Велосипеды', 3),
    ('rentTEAMSPORT', 'Командные виды спорта', 4),
    ('rentFITNESS', 'Фитнес', 5)
)
insert into public.rental_categories (group_id, slug, title, sort_order)
select sports_group.id, category_seed.slug, category_seed.title, category_seed.sort_order
from sports_group
cross join category_seed
on conflict (group_id, slug) do update
set title = excluded.title,
    sort_order = excluded.sort_order;

with sports_group as (
  select id
  from public.rental_groups
  where slug = 'sportsRental'
)
delete from public.rental_items
where category_id in (
  select id
  from public.rental_categories
  where group_id in (select id from sports_group)
);

with sports_group as (
  select id
  from public.rental_groups
  where slug = 'sportsRental'
)
delete from public.rental_categories
where group_id in (select id from sports_group)
  and slug not in ('rentROLLER', 'rentBOARD', 'rentBIKE', 'rentTEAMSPORT', 'rentFITNESS');

with sports_group as (
  select id
  from public.rental_groups
  where slug = 'sportsRental'
),
category_map as (
  select c.id, c.slug
  from public.rental_categories c
  join sports_group g on g.id = c.group_id
),
item_seed(row_order, legacy_id, slug, title, image, description, category_slug, price_per_day, shortly, features) as (
  values
    (
      1,
      21980409005132::numeric,
      'sports-rent-volleyball-ball',
      'Мяч волейбольный',
      'beach-volleyball-size-5-bv100-classic-turquoise-kipsta.png',
      'Универсальный',
      'rentTEAMSPORT',
      5::numeric,
      '',
      array[]::text[]
    ),
    (
      2,
      21980409405132::numeric,
      'sports-rent-football-ball',
      'Мяч футбольный',
      '018.29.27.png',
      'Универсальный',
      'rentTEAMSPORT',
      5::numeric,
      '',
      array[]::text[]
    ),
    (
      3,
      219804094051324::numeric,
      'sports-rent-badminton-set',
      'Набор из 2 ракеток для бадминтона',
      '6337498439.jpg',
      'и воланчика',
      'rentTEAMSPORT',
      5::numeric,
      '',
      array[]::text[]
    ),
    (
      4,
      21980409405132445::numeric,
      'sports-rent-yoga-mat',
      'Коврик для йоги',
      'mat_with_case.jpg',
      'на улице',
      'rentFITNESS',
      4::numeric,
      '',
      array[]::text[]
    ),
    (
      5,
      77344523751611::numeric,
      'sports-rent-easy-roll-3in1',
      'Роликовые коньки EASY ROLL 3в1',
      'easy-roll-3in1-skates-1-773445237516.png',
      'S, M, L, XL. От 3 часов',
      'rentROLLER',
      40::numeric,
      '',
      array['10 лари в час (аренда от 3 часов)', '40 лари в сутки']::text[]
    ),
    (
      6,
      24407676723::numeric,
      'sports-rent-pro-adult-rollers',
      'Профессиональные взрослые ролики',
      'f3a392a0-9695-41c1-9895-084b1f7b477e-Photoroom.png',
      '45-46. От 3 часов',
      'rentROLLER',
      40::numeric,
      '',
      array['10 лари в час (аренда от 3 часов)', '40 лари в сутки']::text[]
    ),
    (
      7,
      800445659241022::numeric,
      'sports-rent-super-youngster-3in1',
      'Роликовые коньки SUPER YOUNGSTER 3в1',
      'super-youngster-3in1-skates-2-800565924102.png',
      'S, M, L. От 3 часов',
      'rentROLLER',
      40::numeric,
      '',
      array['10 лари в час (аренда от 3 часов)', '40 лари в сутки']::text[]
    ),
    (
      8,
      348005659241021::numeric,
      'sports-rent-super-youngster-3in1-img-9518',
      'Роликовые коньки SUPER YOUNGSTER 3в1',
      'IMG_9518.PNG',
      'S, M, L',
      'rentROLLER',
      40::numeric,
      '',
      array['10 лари в час (аренда от 3 часов)', '40 лари в сутки']::text[]
    ),
    (
      9,
      348005659241021::numeric,
      'sports-rent-super-youngster-3in1-img-9520',
      'Роликовые коньки SUPER YOUNGSTER 3в1',
      'IMG_9520.PNG',
      'S, M, L',
      'rentROLLER',
      40::numeric,
      '',
      array['10 лари в час (аренда от 3 часов)', '40 лари в сутки']::text[]
    ),
    (
      10,
      1244076745678::numeric,
      'sports-rent-zsd-1-adult-rollers',
      'Ролики взрослые ZSD-1',
      '9b748ca8-550b-4653-bf5b-a16d9981e097.webp',
      'L. От 3 часов',
      'rentROLLER',
      40::numeric,
      '',
      array['10 лари в час (аренда от 3 часов)', '40 лари в сутки']::text[]
    ),
    (
      11,
      2440764476723421::numeric,
      'sports-rent-rollers-m-gro',
      'Роликовые коньки',
      '52f839fd-e196-4c58-b2b6-1262bfa2da10.png',
      'M-Gro. От 3 часов',
      'rentROLLER',
      40::numeric,
      '',
      array['10 лари в час (аренда от 3 часов)', '40 лари в сутки']::text[]
    ),
    (
      12,
      947096861241::numeric,
      'sports-rent-surfskate-i-can-play',
      'СЕРФСКЕЙТ I CAN PLAY',
      'i-can-play-surfskate-947096861241.png',
      '',
      'rentBOARD',
      25::numeric,
      '',
      array['3 часа — 20 лари', 'Сутки — 25 лари']::text[]
    ),
    (
      13,
      850429808748171::numeric,
      'sports-rent-longboard-i-can-play-8857',
      'ЛОНГБОРД I CAN PLAY',
      'IMG_8857.PNG',
      '',
      'rentBOARD',
      25::numeric,
      '',
      array['3 часа — 20 лари', 'Сутки — 25 лари']::text[]
    ),
    (
      14,
      850429808748212::numeric,
      'sports-rent-longboard-i-can-play-8860',
      'ЛОНГБОРД I CAN PLAY',
      'IMG_8860.JPEG',
      '',
      'rentBOARD',
      25::numeric,
      '',
      array['3 часа — 20 лари', 'Сутки — 25 лари']::text[]
    ),
    (
      15,
      298975409101291297544::numeric,
      'sports-rent-balance-board',
      'Баланс - борд',
      'IMG_4474.PNG',
      '70х27 см, с чехлом',
      'rentBOARD',
      10::numeric,
      '',
      array['Сутки — 10 лари']::text[]
    ),
    (
      16,
      9000006001::numeric,
      'sports-rent-trinx-m600',
      'Велосипед Trinx M600',
      'trinx-m600-rent.png',
      'S размер',
      'rentBIKE',
      10::numeric,
      '',
      array['10 лари в час (аренда от 2 часов)', '40 лари в сутки']::text[]
    ),
    (
      17,
      9000006002::numeric,
      'sports-rent-kross-6-0',
      'Велосипед KROSS 6.0',
      'kross-6-0-rent.jpg',
      'S, M размер',
      'rentBIKE',
      10::numeric,
      '',
      array['10 лари в час (аренда от 2 часов)', '40 лари в сутки']::text[]
    ),
    (
      18,
      9000006003::numeric,
      'sports-rent-kross-r6',
      'Велосипед KROSS R6',
      'kross-r6-rent.jpg',
      'L размер',
      'rentBIKE',
      10::numeric,
      '',
      array['10 лари в час (аренда от 2 часов)', '40 лари в сутки']::text[]
    ),
    (
      19,
      9000006004::numeric,
      'sports-rent-kross-5-0',
      'Велосипед KROSS 5.0',
      'kross-5-0-rent.jpg',
      'L размер',
      'rentBIKE',
      10::numeric,
      '',
      array['10 лари в час (аренда от 2 часов)', '40 лари в сутки']::text[]
    )
)
insert into public.rental_items (
  legacy_id,
  slug,
  title,
  description,
  shortly,
  price_per_day,
  sale_price_per_day,
  image,
  category_id,
  subcategory_id,
  features,
  available,
  hidden,
  created_at
)
select
  item_seed.legacy_id,
  item_seed.slug,
  item_seed.title,
  nullif(item_seed.description, ''),
  nullif(item_seed.shortly, ''),
  item_seed.price_per_day,
  null,
  item_seed.image,
  category_map.id,
  null,
  to_jsonb(item_seed.features),
  true,
  false,
  timestamptz '2026-05-29 12:00:00+00' - (item_seed.row_order * interval '1 second')
from item_seed
join category_map on category_map.slug = item_seed.category_slug
order by item_seed.row_order;
