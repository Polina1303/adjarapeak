import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { BrandStrip } from "@/components/BrandStrip";
import { Footer } from "@/components/Footer";
import { listShopGroups, listRentalGroups } from "@/lib/catalog.functions";
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
const ClimbingPromo = lazy(() =>
  import("@/components/ClimbingPromo").then((m) => ({ default: m.ClimbingPromo })),
);
const InterestingSection = lazy(() =>
  import("@/components/InterestingSection").then((m) => ({
    default: m.InterestingSection,
  })),
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
    const [groups, rentalGroups] = await Promise.all([
      listShopGroups(),
      listRentalGroups(),
    ]);
    return { groups, rentalGroups };
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
  const { groups, rentalGroups } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-18">
        <h1 className="sr-only">
          Спортивный и туристический магазин Adjara Peak в Батуми
        </h1>
        <HeroCarousel />
        <BrandStrip />
        <Suspense fallback={null}>
          <ActivityCategories groups={groups} />
          <RentalSection groups={rentalGroups} />
          <NewArrivals />
          <ClimbingPromo />
          <InterestingSection />
          <GiftCardSection />
          <StoreSection />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
