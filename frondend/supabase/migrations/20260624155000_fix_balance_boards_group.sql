insert into public.shop_groups (slug, title, image, sort_order)
values ('boards', 'Баланс и доски', 'sport-skates-boards.png', 3)
on conflict (slug) do update
set
  title = excluded.title,
  image = coalesce(public.shop_groups.image, excluded.image),
  sort_order = excluded.sort_order;

update public.shop_categories
set
  group_id = (select id from public.shop_groups where slug = 'boards'),
  sort_order = case
    when slug in ('balance_board', 'balance-board') then 1
    else sort_order
  end
where slug in ('balance_board', 'balance-board', 'balanceboards')
  and exists (select 1 from public.shop_groups where slug = 'boards');
