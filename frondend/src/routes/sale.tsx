import { createFileRoute, Link, Outlet, useChildMatches, useNavigate } from "@tanstack/react-router";
import { LoaderCircle, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { resolveCatalogImage } from "@/lib/catalog-image";
import { searchShopProducts, listShopGroups, type ShopProduct } from "@/lib/catalog.functions";
import { getDisplayPrice, getSalePrice } from "@/lib/discount";
import { TilePicker } from "@/components/TilePicker";
import { useCatalogTranslations } from "@/lib/catalog-translations";
import { useLanguage, type Lang } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

export const Route = createFileRoute("/sale")({
  staleTime: 5 * 60 * 1000,
  loader: async () => await listShopGroups(),
  head: () => ({
    meta: [
      { title: "Магазин — Adjara Peak" },
      { name: "description", content: "Снаряжение, одежда и экипировка для приключений." },
    ],
  }),
  component: ShopIndex,
});

function ShopIndex() {
  const childMatches = useChildMatches();
  const groups = Route.useLoaderData();
  const { lang } = useLanguage();
  const catalogTranslations = useCatalogTranslations(lang);
  if (childMatches.length > 0) return <Outlet />;
  return (
    <TilePicker
      title="Магазин"
      items={groups.map((g) => ({
        id: g.id,
        slug: g.slug,
        title: catalogTranslations.group("shop", g.slug, g.title),
        image: g.image,
      }))}
      buildHref={(slug) => ({ to: "/sale/$group", params: { group: slug } })}
      emptyText="Категории пока недоступны."
    >
      <ShopLandingSearch lang={lang} />
    </TilePicker>
  );
}

const SEARCH_DEBOUNCE_MS = 220;

const shopSearchText: Record<Lang, {
  placeholder: string;
  clear: string;
  submit: string;
  empty: string;
  start: string;
  loading: string;
  resultsLabel: (count: number) => string;
}> = {
  RU: {
    placeholder: "Поиск",
    clear: "Очистить поиск",
    submit: "Показать все",
    empty: "Ничего не найдено",
    start: "Введите название товара",
    loading: "Ищем...",
    resultsLabel: (count) => `${count} ${count === 1 ? "результат" : count > 1 && count < 5 ? "результата" : "результатов"}`,
  },
  EN: {
    placeholder: "Search",
    clear: "Clear search",
    submit: "Show all",
    empty: "No results found",
    start: "Start typing a product name",
    loading: "Searching...",
    resultsLabel: (count) => `${count} ${count === 1 ? "result" : "results"}`,
  },
  GE: {
    placeholder: "ძებნა",
    clear: "ძებნის გასუფთავება",
    submit: "ყველას ჩვენება",
    empty: "ვერაფერი მოიძებნა",
    start: "დაიწყეთ პროდუქტის სახელის შეყვანა",
    loading: "ძებნა...",
    resultsLabel: (count) => `${count} შედეგი`,
  },
};

function ShopLandingSearch({ lang }: { lang: Lang }) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<ShopProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const text = shopSearchText[lang];
  const commonText = getSiteText(lang).common;
  const trimmedQuery = query.trim();
  const canSearch = trimmedQuery.length >= 2;

  useEffect(() => {
    if (!canSearch) {
      setProducts([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    const timer = window.setTimeout(() => {
      searchShopProducts({ data: { q: trimmedQuery, limit: 8 } })
        .then((results) => {
          if (!cancelled) setProducts(results);
        })
        .catch(() => {
          if (!cancelled) setProducts([]);
        })
        .finally(() => {
          if (!cancelled) setLoading(false);
        });
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [canSearch, trimmedQuery]);

  const statusText = useMemo(() => {
    if (!canSearch) return "";
    if (loading) return text.loading;
    if (products.length === 0) return text.empty;
    return "";
  }, [canSearch, loading, products.length, text]);
  const showDropdown = canSearch;

  const submitSearch = () => {
    if (!trimmedQuery) {
      inputRef.current?.focus();
      return;
    }
    navigate({ to: "/sale/search", search: { q: trimmedQuery } });
  };

  return (
    <section className="relative mb-10 max-w-xl" aria-label={text.placeholder}>
      <form
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          submitSearch();
        }}
        className="relative"
      >
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={text.placeholder}
          aria-label={text.placeholder}
          className="h-12 w-full rounded-lg border border-border bg-background pl-12 pr-24 font-body text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ember"
        />
        {loading && (
          <LoaderCircle
            aria-hidden="true"
            className="absolute right-14 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin text-ember"
          />
        )}
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            aria-label={text.clear}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 max-h-[420px] overflow-y-auto rounded-lg border border-border bg-background shadow-xl">
          {statusText ? (
            <div className="flex min-h-14 items-center justify-center gap-3 px-4 py-4 text-center font-body text-sm text-muted-foreground">
              {loading && <LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin text-ember" />}
              {statusText}
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
                <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                  {text.resultsLabel(products.length)}
                </span>
                <button
                  type="button"
                  onClick={submitSearch}
                  className="font-body text-xs font-bold uppercase tracking-wider text-ember transition-colors hover:text-ember/80"
                >
                  {text.submit}
                </button>
              </div>
              <div className="divide-y divide-border">
                {products.map((product) => (
                  <ShopSearchRow
                    key={product.id}
                    product={product}
                    outOfStockText={commonText.outOfStock}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}

function ShopSearchRow({
  product,
  outOfStockText,
}: {
  product: ShopProduct;
  outOfStockText: string;
}) {
  const salePrice = getSalePrice(product.price, product.sale_price);
  const displayPrice = getDisplayPrice(product.price, product.sale_price);

  return (
    <Link
      to="/app/$slug"
      params={{ slug: product.slug }}
      className="grid grid-cols-[64px_1fr] gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/50"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background">
        {product.image ? (
          <img
            src={resolveCatalogImage(product.image)}
            alt={product.title}
            loading="lazy"
            decoding="async"
            className="h-12 w-12 object-contain"
          />
        ) : (
          <Search className="h-5 w-5 text-foreground/25" />
        )}
      </div>
      <div className="flex min-w-0 flex-col justify-center gap-1">
        <h3 className="line-clamp-2 font-body text-sm font-bold leading-snug text-foreground">
          {product.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-display text-base font-bold text-ember">₾{displayPrice}</span>
          {salePrice && (
            <span className="font-body text-xs text-muted-foreground line-through">₾{product.price}</span>
          )}
        </div>
        {!product.in_stock && (
          <span className="font-body text-[11px] uppercase tracking-wide text-muted-foreground">
            {outOfStockText}
          </span>
        )}
      </div>
    </Link>
  );
}
