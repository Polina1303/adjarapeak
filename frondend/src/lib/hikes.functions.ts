/* eslint-disable @typescript-eslint/no-explicit-any */
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export type Hike = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  shortly: string | null;
  image: string | null;
  gallery: string[];
  price: number;
  sale_price: number | null;
  duration: string | null;
  distance_km: number | null;
  difficulty: string | null;
  group_size: string | null;
  location: string | null;
  start_date: string | null;
  end_date: string | null;
  start_time: string | null;
  features: string[];
  hidden: boolean;
  sort_order: number;
  reasons: { image: string; text: string }[];
  packing_list: { title: string; items: string[] }[];
};

function normalize(row: any): Hike {
  return {
    ...row,
    gallery: Array.isArray(row.gallery) ? row.gallery : [],
    features: Array.isArray(row.features) ? row.features : [],
    reasons: Array.isArray(row.reasons) ? row.reasons : [],
    packing_list: Array.isArray(row.packing_list) ? row.packing_list : [],
  };
}

function getDateSortValue(hike: Hike) {
  if (!hike.start_date) return Number.MAX_SAFE_INTEGER;
  const timestamp = Date.parse(`${hike.start_date}T00:00:00`);
  return Number.isFinite(timestamp) ? timestamp : Number.MAX_SAFE_INTEGER;
}

function sortHikesByDate(a: Hike, b: Hike) {
  const byDate = getDateSortValue(a) - getDateSortValue(b);
  if (byDate !== 0) return byDate;
  const bySortOrder = Number(a.sort_order ?? 0) - Number(b.sort_order ?? 0);
  if (bySortOrder !== 0) return bySortOrder;
  return a.title.localeCompare(b.title, "ru");
}

export const listHikes = createServerFn({ method: "GET" }).handler(async () => {
  const today = new Date().toISOString().slice(0, 10);
  const { data, error } = await supabase
    .from("hikes")
    .select("*")
    .or(`end_date.is.null,end_date.gte.${today}`)
    .order("start_date", { ascending: true, nullsFirst: false })
    .order("id", { ascending: true });
  if (error) throw new Error(error.message);
  return ((data ?? []) as any[]).map(normalize).sort(sortHikesByDate);
});

export const getHikeBySlug = createServerFn({ method: "GET" })
  .inputValidator((input: { slug: string }) =>
    z.object({ slug: z.string().min(1) }).parse(input),
  )
  .handler(async ({ data }) => {
    const { data: hike, error } = await supabase
      .from("hikes")
      .select("*")
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return hike ? normalize(hike) : null;
  });
