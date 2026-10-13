-- Match the shop's editable color/photo variants for rental equipment.
alter table public.rental_items
  add column if not exists colors jsonb not null default '[]'::jsonb;

notify pgrst, 'reload schema';
