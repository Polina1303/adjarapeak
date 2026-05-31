alter table public.shop_products
  add column if not exists sale_price numeric(10,2);

alter table public.rental_items
  add column if not exists sale_price_per_day numeric(10,2);

update public.shop_products
set sale_price = null;

update public.rental_items
set sale_price_per_day = null;

update public.shop_groups
set image = 'b1f2b627383337af48f04d809f5c9453.webp'
where slug = 'cyclingRoller';

update public.shop_groups
set image = 'b4a5-68313d694eb1a61.avif'
where slug = 'martial';

update public.rental_groups
set image = 'kross-r6-rent.jpg'
where slug = 'sportsRental';
