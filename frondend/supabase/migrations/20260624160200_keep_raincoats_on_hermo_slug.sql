do $$
declare
  tourism_group_id uuid;
  hermo_category_id uuid;
  raincoat_category_id uuid;
begin
  select id into tourism_group_id
  from public.shop_groups
  where slug = 'tourismCamping'
  limit 1;

  if tourism_group_id is null then
    raise notice 'tourismCamping group not found; skipping raincoat category fix';
    return;
  end if;

  select id into hermo_category_id
  from public.shop_categories
  where slug = 'hermo'
    and group_id = tourism_group_id
  limit 1;

  if hermo_category_id is null then
    insert into public.shop_categories (group_id, slug, title, image, sort_order)
    values (tourism_group_id, 'hermo', 'Дождевики', 'raincoat.jpg', 6)
    returning id into hermo_category_id;
  else
    update public.shop_categories
    set title = 'Дождевики',
        image = coalesce(image, 'raincoat.jpg'),
        sort_order = coalesce(sort_order, 6)
    where id = hermo_category_id;
  end if;

  select id into raincoat_category_id
  from public.shop_categories
  where slug = 'raincoat'
    and group_id = tourism_group_id
  limit 1;

  if raincoat_category_id is not null and raincoat_category_id <> hermo_category_id then
    update public.shop_subcategories
    set category_id = hermo_category_id
    where category_id = raincoat_category_id;

    update public.shop_products
    set category_id = hermo_category_id
    where category_id = raincoat_category_id;

    delete from public.shop_categories
    where id = raincoat_category_id
      and not exists (
        select 1 from public.shop_products where category_id = raincoat_category_id
      )
      and not exists (
        select 1 from public.shop_subcategories where category_id = raincoat_category_id
      );
  end if;

  update public.shop_subcategories
  set title = case
        when slug = 'hermo' then 'Дождевики и пончо'
        when slug = 'raincoat' then 'Дождевики на рюкзак'
        else title
      end,
      sort_order = case
        when slug = 'hermo' then 1
        when slug = 'raincoat' then 2
        else sort_order
      end
  where category_id = hermo_category_id
    and slug in ('hermo', 'raincoat');

  insert into public.shop_subcategories (category_id, slug, title, sort_order)
  select hermo_category_id, 'hermo', 'Дождевики и пончо', 1
  where not exists (
    select 1
    from public.shop_subcategories
    where category_id = hermo_category_id
      and slug = 'hermo'
  );

  insert into public.shop_subcategories (category_id, slug, title, sort_order)
  select hermo_category_id, 'raincoat', 'Дождевики на рюкзак', 2
  where not exists (
    select 1
    from public.shop_subcategories
    where category_id = hermo_category_id
      and slug = 'raincoat'
  );

  update public.shop_products
  set category_id = hermo_category_id
  where title ilike '%дожд%'
     or title ilike '%пончо%'
     or title ilike '%плащ%';
end $$;
