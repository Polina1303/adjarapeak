import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { ArrowLeft } from "lucide-react";
import { z } from "zod";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { searchShopProducts } from "@/lib/catalog.functions";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/sale/search")({
  validateSearch: zodValidator(searchSchema),
  loaderDeps: ({ search }) => ({ q: search.q }),
  loader: async ({ deps }) => {
    const q = deps.q.trim();
    if (!q) return { products: [], q };
    const products = await searchShopProducts({ data: { q } });
    return { products, q };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.q
          ? `Поиск по магазину: ${loaderData.q} — Adjara Peak`
          : "Поиск по магазину — Adjara Peak",
      },
      { name: "description", content: "Поиск товаров в магазине Adjara Peak." },
    ],
  }),
  component: SaleSearchPage,
});

function SaleSearchPage() {
  const { products, q } = Route.useLoaderData();

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
            <Link to="/" className="hover:text-foreground transition-colors">
              Главная
            </Link>
            <span>/</span>
            <Link to="/sale" className="hover:text-foreground transition-colors">
              Магазин
            </Link>
            <span>/</span>
            <span className="text-foreground">Поиск</span>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-display font-bold text-foreground tracking-tight">
              {q ? `Результаты в магазине по запросу «${q}»` : "Поиск по магазину"}
            </h1>
            {!q && (
              <p className="font-body text-muted-foreground mt-2">
                Введите запрос в поиске магазина.
              </p>
            )}
          </div>

          {q ? (
            products.length > 0 ? (
              <ProductGrid products={products} />
            ) : (
              <EmptyState text="Ничего не найдено в магазине." />
            )
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return <div className="py-20 text-center font-body text-muted-foreground">{text}</div>;
}
