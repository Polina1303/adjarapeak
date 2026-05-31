import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { BrandStrip } from "@/components/BrandStrip";
import { Footer } from "@/components/Footer";
import { listShopGroups, listRentalGroups } from "@/lib/catalog.functions";

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
      { title: "Adjara Peak — снаряжение, прокат и туры в Грузии" },
      { name: "description", content: "Премиальное outdoor-снаряжение, горные туры с гидами и прокат экипировки в Аджарии, Грузия." },
      { property: "og:title", content: "Adjara Peak — готовьтесь к приключениям" },
      { property: "og:description", content: "Туры, снаряжение и прокат для хайкинга, лыж и приключений на Кавказе." },
    ],
  }),
  component: Index,
});

function Index() {
  const { groups, rentalGroups } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-18">
        <HeroCarousel />
        <BrandStrip />
        <Suspense fallback={null}>
          <ActivityCategories groups={groups} />
          <RentalSection groups={rentalGroups} />
          <NewArrivals />
          <ClimbingPromo />
          <GiftCardSection />
          <StoreSection />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
