import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { SEASONAL_TEXT } from "@/lib/seasonal-text";
import { contacts } from "@/lib/contacts";
import { formatPrice } from "@/lib/price";
import { getDisplayPrice } from "@/lib/discount";
import { selectSkiRentalCards } from "@/lib/seasonal-data";
import { seasonalHero } from "@/lib/seasonal-config";
import { catalogImageProps } from "@/lib/catalog-image";
import type { RentalItem, ShopCategory, ShopProduct } from "@/lib/catalog.functions";
import type { Hike } from "@/lib/hikes.functions";
import { ProductCard } from "./ProductCard";
import reviews from "@/data/reviews.json";
import climbingPhoto from "@/assets/climbing-promo.jpeg";
import bikePhoto from "@/assets/nikita-bike-service-1.jpg";

export function HomeSection({title,children,id}: {title:string;children:React.ReactNode;id?:string}) {
 return <section id={id} className="section-padding scroll-mt-24 py-8 md:py-11" data-no-translate><div className="mx-auto max-w-7xl"><h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">{title}</h2>{children}</div></section>;
}
export function SkiRentalCards({items,categories}: {items:RentalItem[];categories:ShopCategory[]}) {
 const {lang}=useLanguage();const t=SEASONAL_TEXT[lang];
 const cards=selectSkiRentalCards(items,categories);
 const winter=seasonalHero.mode==='winter';
 return <HomeSection title={winter?t.rentalTitle:t.summerRental} id="ski-rental"><div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">{winter?cards.map((card,i)=><article key={card.key} className="flex flex-col rounded-xl border border-border bg-card p-3">
  {card.item?.image?<img {...catalogImageProps(card.item.image)} alt={t.rentalCards[i]} width={240} height={240} loading="lazy" className="aspect-square w-full rounded-lg object-contain"/>:<div className="flex aspect-square items-center justify-center rounded-lg bg-muted p-3 text-center text-[10px] text-muted-foreground">{t.photoTodo}</div>}
  <h3 className="mt-3 font-display font-bold">{t.rentalCards[i]}</h3><p className="my-3 text-sm">{card.item?formatPrice(getDisplayPrice(card.item.price_per_day,card.item.sale_price_per_day),{from:true,lang,unit:t.perDay}):t.priceTodo}</p>
  <Link to="/rent/$group" params={{group:"skiRental"}} search={{equipment:card.key}} hash="booking" className="mt-auto rounded-lg bg-ember px-2 py-3 text-center text-xs font-bold text-ember-foreground">{t.book}</Link>
 </article>):t.summerCards.map((name,i)=><Link key={name} to={["/rent/tents","/rent/sup","/rent/bikes"][i]} className="rounded-xl border border-border p-6 font-display font-bold">{name}</Link>)}</div><Link to="/rent" className="mt-5 inline-block font-body text-sm text-ember underline underline-offset-4">{t.allRental}</Link></HomeSection>;
}
export function SeasonalProducts({products,fitness=false,featuredConfirmed=false}: {products:ShopProduct[];fitness?:boolean;featuredConfirmed?:boolean}) {
 const {lang}=useLanguage(); const t=SEASONAL_TEXT[lang];
 return <HomeSection title={fitness?t.fitnessTitle:t.skiTitle} id={fitness?"fitness":"ski-shop"}>
  {fitness&&<p className="mb-5 max-w-2xl text-sm text-muted-foreground">{t.fitnessText}</p>}
  <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${fitness?'lg:grid-cols-5':'lg:grid-cols-4'} md:gap-5`}>{products.map(p=><ProductCard key={p.id} product={p} bordered/>)}</div>
  {!products.length&&<p className="rounded-xl bg-muted p-5 text-sm">{t.skiEmpty}</p>}
  {!fitness&&!featuredConfirmed&&<p className="mt-4 text-xs text-muted-foreground">{t.featuredTodo}</p>}
  {fitness&&<p className="mt-4 text-xs text-muted-foreground">{t.bundleTodo}</p>}
  <Link to="/sale/$group" params={{group:fitness?"fitness":"alpinesking"}} hash="catalog" className="mt-5 inline-block text-sm text-ember underline underline-offset-4">{fitness?t.allFitness:t.allSki}</Link>
 </HomeSection>;
}
export function SkiServiceSummary() {
 const {lang}=useLanguage();const t=SEASONAL_TEXT[lang];
 return <HomeSection title={t.serviceTitle}><div className="rounded-2xl bg-foreground p-6 text-background md:p-9"><ul className="grid grid-cols-2 gap-5 md:grid-cols-4">{t.serviceItems.map((item,i)=><li key={item}><span className="mb-2 block text-xs text-ember">0{i+1}</span><h3 className="font-display text-lg font-bold">{item}</h3></li>)}</ul><div className="mt-7 flex flex-wrap gap-3"><Link to="/service" search={{season:"winter"}} hash="prices" className="rounded-full bg-ember px-6 py-3 text-sm text-ember-foreground">{t.serviceCta}</Link><a href={`tel:${contacts.phone}`} className="rounded-full border border-background/30 px-6 py-3 text-sm">{t.call}</a></div></div></HomeSection>;
}
export function ResortsSummary() {
 const {lang}=useLanguage();const t=SEASONAL_TEXT[lang];
 return <HomeSection title={t.resorts}><div className="grid gap-4 md:grid-cols-3">{t.resortNames.map((name,i)=><article key={name} className="rounded-xl border border-border p-5"><h3 className="font-display text-xl font-bold">{name}</h3><p className="my-4 text-xs text-muted-foreground">{t.resortText}</p><Link to="/rent/$group" params={{group:"skiRental"}} search={{resort:["gudauri","goderdzi","bakuriani"][i]}} className="text-sm text-ember underline underline-offset-4">{t.resortCta}</Link></article>)}</div></HomeSection>;
}
export function ReviewsSummary() {
 const {lang}=useLanguage();const t=SEASONAL_TEXT[lang];
 return <HomeSection title={t.reviews}><p className="mb-4 text-sm text-muted-foreground">{reviews.rating!==null&&reviews.count!==null?`${reviews.rating} / 5 · ${reviews.count} · ${reviews.source}`:t.reviewTodo}</p><div className="grid gap-4 md:grid-cols-3">{reviews.items.slice(0,5).map((review,i)=><blockquote key={i} className="rounded-xl border border-border p-5 text-sm"><p>{review.text}</p>{review.author!=="TODO_REAL_DATA"&&<cite className="mt-3 block">{review.author}</cite>}</blockquote>)}</div><div className="mt-5 flex flex-wrap gap-5"><a href={contacts.googleReview} target="_blank" rel="noopener noreferrer" className="text-sm text-ember underline">{t.googleReview}</a><a href={contacts.yandexReview} target="_blank" rel="noopener noreferrer" className="text-sm text-ember underline">{t.yandexReview}</a></div></HomeSection>;
}
export function HikesSummary({hikes}: {hikes:Hike[]}) {
 const {lang}=useLanguage(); const t=SEASONAL_TEXT[lang];
 const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tbilisi',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 const upcoming=hikes.filter(h=>!h.hidden&&h.start_date&&h.start_date>=today).slice(0,3);
 return <HomeSection title={t.hikes}><div className="grid gap-4 md:grid-cols-3">{upcoming.map(h=><article key={h.id} className="rounded-xl border border-border p-5"><h3 className="font-display text-lg font-bold">{h.title}</h3><p className="mt-3 text-sm">{h.start_date} · {formatPrice(getDisplayPrice(h.price,h.sale_price))}</p><p className="my-3 text-xs text-muted-foreground">{t.placesTodo}</p><Link to="/hikes/$slug" params={{slug:h.slug}} className="text-sm text-ember underline">{t.signup}</Link></article>)}</div>{!upcoming.length&&<div className="rounded-xl bg-muted p-5"><p className="mb-3">{t.noHikes}</p><a href={`${contacts.telegram}?text=${encodeURIComponent(t.hikes)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-ember underline">{t.message}</a></div>}</HomeSection>;
}
export function CompactActivities() {
 const {lang}=useLanguage(); const t=SEASONAL_TEXT[lang];
 return <div className="section-padding mx-auto grid max-w-[1400px] gap-4 py-8 md:grid-cols-2" data-no-translate>
  <article className="overflow-hidden rounded-xl border border-border"><img src={climbingPhoto} alt={t.climbing} width={640} height={360} loading="lazy" className="aspect-[16/7] w-full object-cover"/><div className="p-5"><h2 className="font-display text-2xl font-bold">{t.climbing}</h2><p className="mt-3 text-sm">{t.climbingSchedule} · {formatPrice(50)}</p><a href={contacts.climbingTelegram} data-analytics="click_telegram_climbing" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-full bg-ember px-5 py-3 text-sm text-ember-foreground">{t.climbingCta}</a><p className="mt-3 text-xs text-muted-foreground">{t.climbingHint}</p></div></article>
  <article className="overflow-hidden rounded-xl border border-border"><img src={bikePhoto} alt={t.bike} width={640} height={360} loading="lazy" className="aspect-[16/7] w-full object-cover"/><div className="p-5"><h2 className="font-display text-2xl font-bold">{t.bike}</h2><Link to="/service" search={{season:"summer"}} className="mt-4 inline-block rounded-full bg-ember px-5 py-3 text-sm text-ember-foreground">{t.bikeCta}</Link></div></article>
 </div>;
}
