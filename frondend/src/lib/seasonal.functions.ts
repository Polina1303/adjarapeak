import { createServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import type { RentalItem, ShopCategory, ShopGroup, ShopProduct } from "./catalog.functions";
import { diverseProducts } from "./seasonal-data";
export const getSeasonalHome = createServerFn({ method: "GET" }).handler(async () => {
 const [shopCats, rentalCats, groups, rentals] = await Promise.all([
  supabase.from("shop_categories").select("*"), supabase.from("rental_categories").select("*"),
  supabase.from("shop_groups").select("*"), supabase.from("rental_groups").select("*"),
 ]);
 for (const result of [shopCats,rentalCats,groups,rentals]) if(result.error) throw new Error(result.error.message);
 const categories = (shopCats.data ?? []) as ShopCategory[];
 const shopGroups = (groups.data ?? []) as ShopGroup[];
 const skiGroup = shopGroups.find(g => g.slug === "alpinesking");
 const fitnessGroup = shopGroups.find(g => g.slug === "fitness");
 const rentalGroup = rentals.data?.find(g => g.slug === "skiRental");
 const skiCategories = (rentalCats.data ?? []).filter(c => c.group_id === rentalGroup?.id) as ShopCategory[];
 const winterCategories = categories.filter(c => c.group_id === skiGroup?.id);
 const fitnessCategories = categories.filter(c => c.group_id === fitnessGroup?.id);
 const queryProducts = async (cats: ShopCategory[], perCategory: number) => {
  const batches = await Promise.all(cats.map(c => supabase.from("shop_products").select("*").eq("category_id", c.id).eq("in_stock",true).eq("hidden",false).order("created_at",{ascending:false}).limit(perCategory)));
  for(const result of batches) if(result.error) throw new Error(result.error.message);
  return batches.flatMap(r => r.data ?? []).map(row => ({...row,sizes:Array.isArray(row.sizes)?row.sizes.filter((v): v is string => typeof v === "string"):[],colors:Array.isArray(row.colors)?row.colors.filter((v): v is {color:string;image:string|null} => typeof v === "object" && v !== null && !Array.isArray(v) && typeof v.color === "string" && (typeof v.image === "string" || v.image === null)):[],features:Array.isArray(row.features)?row.features.filter((v): v is string => typeof v === "string"):[]})) as ShopProduct[];
 };
 const [skiProducts, fitnessProducts, rentalResult] = await Promise.all([
  queryProducts(winterCategories, 6), queryProducts(fitnessCategories, 2),
  skiCategories.length ? supabase.from("rental_items").select("*").in("category_id",skiCategories.map(c=>c.id)).eq("available",true) : Promise.resolve({data:[],error:null}),
 ]);
 if(rentalResult.error) throw new Error(rentalResult.error.message);
 // Balance boards belong to fitness in source data, even though the shop exposes a virtual boards group.
 const balanceIds = new Set(fitnessCategories.filter(c=>c.slug === "balance_board").map(c=>c.id));
 const fitness = diverseProducts(fitnessProducts, 5);
 const balance = fitnessProducts.find(p => balanceIds.has(p.category_id));
 return { ski: diverseProducts(skiProducts, 12), fitness: balance ? [...fitness.filter(p=>p.id!==balance.id).slice(0,4),balance] : fitness, skiRentals: (rentalResult.data ?? []) as RentalItem[], skiCategories, featuredConfirmed: skiProducts.some(p=>p.featured) };
});
