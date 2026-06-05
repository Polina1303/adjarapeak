import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { RentalGrid } from "@/components/RentalGrid";
import { searchShopProducts, searchRentalItems } from "@/lib/catalog.functions";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  mode: fallback(z.enum(["sale", "rent"]), "sale").default("sale"),
});

export const Route = createFileRoute("/search")({
  validateSearch: zodValidator(searchSchema),
  loaderDeps: ({ search }) => ({ q: search.q, mode: search.mode }),
  loader: async ({ deps }) => {
    const q = deps.q.trim();
    if (!q) return { products: [], items: [], q, mode: deps.mode };
    const [products, items] = await Promise.all([
      searchShopProducts({ data: { q } }),
      searchRentalItems({ data: { q } }),
    ]);
    return { products, items, q, mode: deps.mode };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.q ? `Поиск: ${loaderData.q} — Adjara Peak` : "Поиск — Adjara Peak" },
      { name: "description", content: "Поиск товаров и аренды Adjara Peak." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { products, items, q, mode } = Route.useLoaderData();
  const saleCount = products.length;
  const rentCount = items.length;

  // If user didn't specify mode and one side has zero results, prefer the non-empty one.
  const effectiveMode: "sale" | "rent" =
    mode === "rent" || (mode === "sale" && saleCount === 0 && rentCount > 0) ? "rent" : "sale";

  const otherCount = effectiveMode === "sale" ? rentCount : saleCount;
  const otherMode: "sale" | "rent" = effectiveMode === "sale" ? "rent" : "sale";
  const otherLabel = otherMode === "rent" ? "в аренде" : "в магазине";

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
            <span className="text-foreground">Поиск</span>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-display font-bold text-foreground tracking-tight">
              {q ? `Результаты по запросу «${q}»` : "Поиск товаров и аренды"}
            </h1>
            {!q && (
              <p className="font-body text-muted-foreground mt-2">
                Введите запрос в строке поиска.
              </p>
            )}
          </div>

          {q && (
            <>
              {(saleCount > 0 && rentCount > 0) && (
                <div className="flex gap-1 border-b border-border mb-6">
                  <TabLink active={effectiveMode === "sale"} to="/search" q={q} mode="sale" label="Купить" count={saleCount} />
                  <TabLink active={effectiveMode === "rent"} to="/search" q={q} mode="rent" label="Арендовать" count={rentCount} />
                </div>
              )}

              {saleCount > 0 && rentCount > 0 && otherCount > 0 && (
                <Link
                  to="/search"
                  search={{ q, mode: otherMode }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-ember/10 border border-ember/30 text-sm font-body text-foreground hover:bg-ember/15 transition-colors"
                >
                  Также доступно {otherLabel}: {otherCount} {plural(otherCount)}
                </Link>
              )}

              {effectiveMode === "sale" ? (
                saleCount > 0 ? (
                  <ProductGrid products={products} />
                ) : (
                  <EmptyState text="Ничего не найдено в магазине." />
                )
              ) : rentCount > 0 ? (
                <RentalGrid items={items} />
              ) : (
                <EmptyState text="Ничего не найдено в аренде." />
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function plural(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "вариант";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return "варианта";
  return "вариантов";
}

function TabLink({
  active,
  to,
  q,
  mode,
  label,
  count,
}: {
  active: boolean;
  to: "/search";
  q: string;
  mode: "sale" | "rent";
  label: string;
  count: number;
}) {
  const base = "relative inline-flex items-center gap-2 px-4 py-3 text-xs font-display font-bold uppercase tracking-wider transition-colors";
  const cls = active
    ? `${base} text-ember`
    : `${base} text-foreground/60 hover:text-foreground`;
  return (
    <Link to={to} search={{ q, mode }} className={cls}>
      {label}
      <span className="text-[10px] font-body normal-case tracking-normal text-foreground/50">
        {count}
      </span>
      {active && <span className="absolute left-2 right-2 -bottom-px h-[3px] bg-ember rounded-full" />}
    </Link>
  );
}

function EmptyState({ text }: { text: string }) {
  return <div className="py-20 text-center font-body text-muted-foreground">{text}</div>;
}