-- Keep standalone martial arts shorts in one clothing subcategory.
-- Product IDs are explicit so clothing sets and protective shorts are unchanged.
do $$
declare
  martial_clothes_category_id uuid;
  martial_shorts_subcategory_id uuid;
  matched_product_count integer;
  shorts_product_ids uuid[] := array[
    '4dbd1135-2d2e-43e4-903b-cf9fd7afe508'::uuid, -- EVIL WOLF MMA shorts
    '2374dd87-4beb-4389-b529-7ff87be8f902'::uuid, -- PowerBoxing shorts
    'bcbe44a0-7245-4494-bf6b-ee55a2748a76'::uuid, -- Fight House leopard shorts
    '9239fa2f-f9d9-4df1-a644-951a8e66021a'::uuid, -- Fight House dragon shorts
    '7194c7d3-002e-4443-8451-051b69b3849b'::uuid  -- Fight House dragon shorts
  ];
begin
  select category.id into martial_clothes_category_id
  from public.shop_categories as category
  join public.shop_groups as shop_group on shop_group.id = category.group_id
  where shop_group.slug = 'martial'
    and category.slug = 'martialart_clothes';

  if martial_clothes_category_id is null then
    raise exception 'Martial arts clothing category not found; shorts were not moved';
  end if;

  select count(*) into matched_product_count
  from public.shop_products
  where id = any(shorts_product_ids);

  if matched_product_count <> cardinality(shorts_product_ids) then
    raise exception 'Expected % known martial arts shorts, found %; shorts were not moved',
      cardinality(shorts_product_ids), matched_product_count;
  end if;

  insert into public.shop_subcategories (category_id, slug, title, sort_order)
  values (martial_clothes_category_id, 'shorts', 'Шорты для единоборств', 1)
  on conflict (category_id, slug) do update
    set title = excluded.title
  returning id into martial_shorts_subcategory_id;

  update public.shop_products
  set category_id = martial_clothes_category_id,
      subcategory_id = martial_shorts_subcategory_id
  where id = any(shorts_product_ids)
    and (
      category_id is distinct from martial_clothes_category_id
      or subcategory_id is distinct from martial_shorts_subcategory_id
    );
end $$;
