import { HomeProductSelection } from "@/components/HomeProductSelection";
import { sortHomeGroups } from "@/lib/home-selection";
import { EcosystemStrip } from "@/components/EcosystemStrip";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { HomeOffers } from "@/components/HomeOffers";
import { FeaturedBrands } from "@/components/FeaturedBrands";
import { Footer } from "@/components/Footer";
import { getHomeSalesSelections, listShopGroups, listRentalGroups } from "@/lib/catalog.functions";
import {
  ADJARA_PEAK_LOCAL_BUSINESS_SCHEMA,
  canonicalLink,
} from "@/lib/seo";

const ActivityCategories = lazy(() =>
  import("@/components/ActivityCategories").then((m) => ({ default: m.ActivityCategories })),
);
const RentalSection = lazy(() =>
  import("@/components/RentalSection").then((m) => ({ default: m.RentalSection })),
);
const NewArrivals = lazy(() =>
  import("@/components/NewArrivals").then((m) => ({ default: m.NewArrivals })),
);
const BikeServicePromo = lazy(() =>
  import("@/components/BikeServicePromo").then((m) => ({
    default: m.BikeServicePromo,
  })),
);
const ClimbingPromo = lazy(() =>
  import("@/components/ClimbingPromo").then((m) => ({ default: m.ClimbingPromo })),
);
const GiftCardSection = lazy(() =>
  import("@/components/GiftCardSection").then((m) => ({ default: m.GiftCardSection })),
);
const StoreSection = lazy(() =>
  import("@/components/StoreSection").then((m) => ({ default: m.StoreSection })),
);

export const Route = createFileRoute("/")({
  staleTime: 5 * 60 * 1000,
  loader: async () => {
    const [groups, rentalGroups, selections] = await Promise.all([
      listShopGroups(),
      listRentalGroups(),
      getHomeSalesSelections().catch(() => ({ski:[],fitness:[]})),
    ]);
    return { groups: sortHomeGroups(groups), rentalGroups: [...rentalGroups].sort((a,b)=>Number(b.slug==='skiRental')-Number(a.slug==='skiRental')), selections };
  },
  head: () => ({
    meta: [
      { title: "Спортивный магазин в Батуми — Adjara Peak" },
      { name: "description", content: "Adjara Peak — спортивный магазин в Батуми: товары для спорта, туризма и кемпинга, одежда, обувь, велосипеды, SUP, лыжи и прокат снаряжения." },
      { property: "og:title", content: "Adjara Peak — спортивный магазин в Батуми" },
      { property: "og:description", content: "Спортивные товары, туристическое снаряжение, прокат и горные туры в Батуми и Аджарии." },
      { "script:ld+json": ADJARA_PEAK_LOCAL_BUSINESS_SCHEMA },
    ],
    links: [canonicalLink("/")],
  }),
  component: Index,
});

function Index() {
  const { groups, rentalGroups, selections } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-18">
        <HeroCarousel />
        <EcosystemStrip />
        <HomeOffers />
        <HomeProductSelection products={selections.ski} kind="ski" />
        <Suspense fallback={null}>
          <ActivityCategories groups={groups} />
          <HomeProductSelection products={selections.fitness} kind="fitness" />
          <RentalSection groups={rentalGroups} />
          <NewArrivals excludeSlugs={[...selections.ski,...selections.fitness].map(p=>p.slug)} />
          <BikeServicePromo />
          <ClimbingPromo />
          <GiftCardSection />
          <StoreSection />
        </Suspense>
        <FeaturedBrands />
      </div>
      <Footer />
    </div>
  );
}
