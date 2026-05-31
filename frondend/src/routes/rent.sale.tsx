import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RentalGrid } from "@/components/RentalGrid";
import { getSaleRentals } from "@/lib/catalog.functions";
import { useCatalogTranslations } from "@/lib/catalog-translations";
import { useLanguage, type Lang } from "@/lib/i18n";

const RENT_SALE_TEXT: Record<
  Lang,
  {
    back: string;
    home: string;
    rental: string;
    limited: string;
    subtitle: string;
    discountedCount: (count: number) => string;
  }
> = {
  RU: {
    back: "Назад",
    home: "Главная",
    rental: "Прокат",
    limited: "Ограниченное время",
    subtitle: "Лучшие позиции проката со скидками — обновляем еженедельно.",
    discountedCount: (count) => `${count} позиций со скидкой`,
  },
  EN: {
    back: "Back",
    home: "Home",
    rental: "Rental",
    limited: "Limited time",
    subtitle: "The best discounted rental items, updated weekly.",
    discountedCount: (count) => `${count} discounted ${count === 1 ? "item" : "items"}`,
  },
  GE: {
    back: "უკან",
    home: "მთავარი",
    rental: "ქირაობა",
    limited: "შეზღუდული დროით",
    subtitle: "საუკეთესო ფასდაკლებული ქირაობის პოზიციები, განახლება ყოველკვირეულად.",
    discountedCount: (count) => `${count} ფასდაკლებული პოზიცია`,
  },
};

export const Route = createFileRoute("/rent/sale")({
  staleTime: 60 * 1000,
  loader: () => getSaleRentals(),
  head: () => ({
    meta: [
      { title: "Распродажа проката — Adjara Peak" },
      { name: "description", content: "Снаряжение в прокат со скидками в Adjara Peak. Предложения ограничены." },
      { property: "og:title", content: "Распродажа проката — Adjara Peak" },
      { property: "og:description", content: "Снаряжение в прокат со скидками в Adjara Peak." },
    ],
  }),
  component: RentalSalePage,
});

function RentalSalePage() {
  const { items } = Route.useLoaderData();
  const { lang } = useLanguage();
  const catalogTranslations = useCatalogTranslations(lang);
  const text = RENT_SALE_TEXT[lang];
  const saleTitle = catalogTranslations.sale();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {text.back}
          </button>
          <nav className="hidden md:flex items-center gap-2 text-sm font-body text-muted-foreground mb-6 flex-wrap">
            <Link to="/" className="hover:text-foreground transition-colors">{text.home}</Link>
            <span>/</span>
            <Link to="/rent" className="hover:text-foreground transition-colors">{text.rental}</Link>
            <span>/</span>
            <span className="text-foreground">{saleTitle}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="inline-block bg-ember text-primary-foreground text-xs font-body font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full mb-3">
                {text.limited}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                {saleTitle}
              </h1>
              <p className="font-body text-muted-foreground mt-2 max-w-xl">
                {text.subtitle}
              </p>
            </div>
            <span className="text-sm font-body text-muted-foreground">
              {text.discountedCount(items.length)}
            </span>
          </div>

          <RentalGrid items={items} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
