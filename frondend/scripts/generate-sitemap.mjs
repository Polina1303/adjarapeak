import { loadEnvFile } from 'node:process';
import { fileURLToPath } from 'node:url';
import { writeFile } from 'node:fs/promises';
import { createClient } from '@supabase/supabase-js';
import { buildSitemap } from '../src/lib/sitemap.ts';
const root=new URL('../',import.meta.url);
try{loadEnvFile(fileURLToPath(new URL('.env',root)));}catch(error){if(error.code!=='ENOENT')throw error;}
const url=process.env.VITE_SUPABASE_URL||process.env.SUPABASE_URL;
const key=process.env.VITE_SUPABASE_PUBLISHABLE_KEY||process.env.SUPABASE_PUBLISHABLE_KEY;
if(!url||!key)throw new Error('Supabase public catalog configuration is required');
const db=createClient(url,key,{auth:{persistSession:false}});
async function rows(table,columns,{visible=false}={}){
 const result=[];
 for(let offset=0;;offset+=1000){let query=db.from(table).select(columns).order('id').range(offset,offset+999);if(visible)query=query.eq('hidden',false);const {data,error}=await query;if(error)throw new Error(`${table}: ${error.message}`);result.push(...data);if(data.length<1000)break;}
 return result;
}
const [groups,cats,subs,rentalGroups,rentalCats,rentalSubs,products,rentals,hikes]=await Promise.all([
 rows('shop_groups','id,slug'),rows('shop_categories','id,slug,group_id'),rows('shop_subcategories','id,slug,category_id'),
 rows('rental_groups','id,slug'),rows('rental_categories','id,slug,group_id'),rows('rental_subcategories','id,slug,category_id'),
 rows('shop_products','id,slug',{visible:true}),rows('rental_items','id,slug',{visible:true}),rows('hikes','id,slug',{visible:true}),
]);
const paths=['/','/sale','/sale/sale','/rent','/rent/sale','/hikes/','/rockClimbing','/service','/contact','/tourismCamping/','/sale/boards'];
const segment=encodeURIComponent;
const groupPaths=new Map(groups.map(g=>[g.id,g.slug==='tourismCamping'?'/tourismCamping/':`/sale/${segment(g.slug)}`]));
const groupSlugs=new Map(groups.map(g=>[g.id,g.slug]));
paths.push(...groupPaths.values());
const categoryPaths=new Map();
for(const c of cats){const group=groupSlugs.get(c.group_id);if(!group||(group==='fitness'&&c.slug==='balance_board'))continue;const slug=group==='tourismCamping'&&c.slug==='hermo'?'raincoat':c.slug;const path=`/sale/${segment(group)}/${segment(slug)}`;categoryPaths.set(c.id,path);paths.push(path);}
for(const s of subs){const parent=categoryPaths.get(s.category_id);if(parent)paths.push(`${parent}/${segment(s.slug)}`);}
for(const slug of ['skateboards','longboards','surfskates','balanceboards'])paths.push(`/sale/boards/${slug}`);
const rentalGroupSlugs=new Map(rentalGroups.map(g=>[g.id,g.slug]));
paths.push(...rentalGroups.map(g=>`/rent/${segment(g.slug)}`));
const rentalCategoryPaths=new Map();
for(const c of rentalCats){const group=rentalGroupSlugs.get(c.group_id);if(!group)continue;const path=`/rent/${segment(group)}/${segment(c.slug)}`;rentalCategoryPaths.set(c.id,path);paths.push(path);}
for(const s of rentalSubs){const parent=rentalCategoryPaths.get(s.category_id);if(parent)paths.push(`${parent}/${segment(s.slug)}`);}
for(const item of [...products,...rentals])if(item.slug)paths.push(`/app/${segment(item.slug)}`);
for(const hike of hikes)if(hike.slug)paths.push(`/hikes/${segment(hike.slug)}`);
await writeFile(new URL('public/sitemap.xml',root),buildSitemap(paths));
console.log(`Sitemap: ${new Set(paths).size} existing URLs; ${products.length} shop products, ${rentals.length} rental items. Language variants are not separate URLs.`);
