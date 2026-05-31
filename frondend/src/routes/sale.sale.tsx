import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { getSaleProducts } from "@/lib/catalog.functions";
import { useCatalogTranslations } from "@/lib/catalog-translations";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/sale/sale")({
  staleTime: 60 * 1000,
  loader: () => getSaleProducts(),
  head: () => ({
    meta: [
      { title: "Распродажа — Adjara Peak" },
      { name: "description", content: "Outdoor-снаряжение и прокат со скидками в Adjara Peak. Предложения ограничены." },
      { property: "og:title", content: "Распродажа — Adjara Peak" },
      { property: "og:description", content: "Outdoor-снаряжение со скидками в Adjara Peak." },
      { property: "og:image", content: "/img/sale.webp" },
    ],
  }),
  component: SalePage,
});

function SalePage() {
  const { products } = Route.useLoaderData();
  const { lang } = useLanguage();
  const catalogTranslations = useCatalogTranslations(lang);
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
            Назад
          </button>
          <nav className="hidden md:flex items-center gap-2 text-sm font-body text-muted-foreground mb-6 flex-wrap">
            <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/sale" className="hover:text-foreground transition-colors">Магазин</Link>
            <span>/</span>
            <span className="text-foreground">{saleTitle}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="inline-block bg-ember text-primary-foreground text-xs font-body font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full mb-3">
                Ограниченное время
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                {saleTitle}
              </h1>
              <p className="font-body text-muted-foreground mt-2 max-w-xl">
                Отобранное снаряжение с максимальными скидками — обновляем каждую неделю.
              </p>
            </div>
            <span className="text-sm font-body text-muted-foreground">
              {products.length} товаров со скидкой
            </span>
          </div>

          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
