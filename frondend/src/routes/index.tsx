import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeOffers } from "@/components/HomeOffers";
import { GiftCardSection } from "@/components/GiftCardSection";
import { StoreSection } from "@/components/StoreSection";
import { ActivityCategories } from "@/components/ActivityCategories";
import { FeaturedBrands } from "@/components/FeaturedBrands";
import { SeasonalHero } from "@/components/SeasonalHero";
import { SkiRentalCards, SeasonalProducts, SkiServiceSummary, ResortsSummary, ReviewsSummary, HikesSummary, CompactActivities } from "@/components/SeasonalSections";
import { listShopGroups } from "@/lib/catalog.functions";
import { listHikes } from "@/lib/hikes.functions";
import { getSeasonalHome } from "@/lib/seasonal.functions";
import { seasonalHero, homeSectionOrder } from "@/lib/seasonal-config";
import { SEASONAL_TEXT } from "@/lib/seasonal-text";
import { ADJARA_PEAK_LOCAL_BUSINESS_SCHEMA, canonicalLink } from "@/lib/seo";
export const Route = createFileRoute("/")({
 staleTime: 5*60*1000,
 loader: async () => {
  const [groups,seasonal,hikes]=await Promise.all([listShopGroups(),getSeasonalHome(),listHikes()]);
  return {groups,seasonal,hikes};
 },
 head: () => ({ meta:[{title:seasonalHero.mode==='winter'?SEASONAL_TEXT.RU.winterMeta:SEASONAL_TEXT.RU.summerMeta},{name:"description",content:SEASONAL_TEXT.RU.description},{"script:ld+json":ADJARA_PEAK_LOCAL_BUSINESS_SCHEMA}],links:[canonicalLink('/'),{rel:'preload',as:'image',href:seasonalHero[seasonalHero.mode].image,fetchPriority:'high'}] }),
 component: Index,
});
function Index() {
 const {groups,seasonal,hikes}=Route.useLoaderData();
 const sections={
 hero:<SeasonalHero/>, rental:<SkiRentalCards items={seasonal.skiRentals} categories={seasonal.skiCategories}/>, offers:<HomeOffers/>,
 ski:<><SeasonalProducts products={seasonal.ski} featuredConfirmed={seasonal.featuredConfirmed}/><ActivityCategories groups={groups}/><FeaturedBrands/></>,
 service:<SkiServiceSummary/>, resorts:<ResortsSummary/>, fitness:<SeasonalProducts products={seasonal.fitness} fitness/>,
 reviews:<ReviewsSummary/>,hikes:<HikesSummary hikes={hikes}/>,activities:<CompactActivities/>,gift:<GiftCardSection/>,contacts:<StoreSection hideReviews/>,
 };
 return <div className="min-h-screen bg-background"><Header/><main className="pt-16 lg:pt-18">{homeSectionOrder[seasonalHero.mode].map(key=><div key={key} data-home-section={key}>{sections[key]}</div>)}</main><Footer/></div>;
}
