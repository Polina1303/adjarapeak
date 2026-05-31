import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
      { title: loaderData?.q ? `Поиск: ${loaderData.q} — Adjara Peak` : "Поиск — Adjara Peak" },
      { name: "description", content: "Поиск товаров в магазине Adjara Peak." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
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
            <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/sale" className="hover:text-foreground transition-colors">Магазин</Link>
            <span>/</span>
            <span className="text-foreground">Поиск</span>
          </nav>

          <div className="mb-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              {q ? `Результаты по запросу «${q}»` : "Поиск товаров"}
            </h1>
            <p className="font-body text-muted-foreground mt-2">
              {q ? `${products.length} товаров найдено` : "Введите запрос в строке поиска."}
            </p>
          </div>

          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : q ? (
            <div className="py-20 text-center font-body text-muted-foreground">
              Ничего не найдено. Попробуйте другой запрос.
            </div>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
}
