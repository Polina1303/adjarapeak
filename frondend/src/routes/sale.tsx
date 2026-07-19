import { createFileRoute, Link, Outlet, useChildMatches, useNavigate } from "@tanstack/react-router";
import { LoaderCircle, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { resolveCatalogImage } from "@/lib/catalog-image";
import { searchShopProducts, listShopGroups, type ShopProduct } from "@/lib/catalog.functions";
import { getDisplayPrice, getSalePrice } from "@/lib/discount";
import { TilePicker } from "@/components/TilePicker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
      buildHref={(slug) =>
        slug === "tourismCamping"
          ? { to: "/tourismCamping/" }
          : { to: "/sale/$group", params: { group: slug } }
      }
      emptyText="Категории пока недоступны."
    >
      <ShopLandingSearch lang={lang} />
    </TilePicker>
  );
}

const SEARCH_DEBOUNCE_MS = 220;

const shopSearchText: Record<Lang, {
  title: string;
  placeholder: string;
  clear: string;
  close: string;
  submit: string;
  empty: string;
  start: string;
  loading: string;
  resultsLabel: (count: number) => string;
}> = {
  RU: {
    title: "Поиск по магазину",
    placeholder: "Поиск",
    clear: "Очистить поиск",
    close: "Закрыть поиск",
    submit: "Показать все",
    empty: "Ничего не найдено",
    start: "Введите название товара",
    loading: "Ищем...",
    resultsLabel: (count) => `${count} ${count === 1 ? "результат" : count > 1 && count < 5 ? "результата" : "результатов"}`,
  },
  EN: {
    title: "Search the shop",
    placeholder: "Search",
    clear: "Clear search",
    close: "Close search",
    submit: "Show all",
    empty: "No results found",
    start: "Start typing a product name",
    loading: "Searching...",
    resultsLabel: (count) => `${count} ${count === 1 ? "result" : "results"}`,
  },
  GE: {
    title: "ძებნა მაღაზიაში",
    placeholder: "ძებნა",
    clear: "ძებნის გასუფთავება",
    close: "ძებნის დახურვა",
    submit: "ყველას ჩვენება",
    empty: "ვერაფერი მოიძებნა",
    start: "დაიწყეთ პროდუქტის სახელის შეყვანა",
    loading: "ძებნა...",
    resultsLabel: (count) => `${count} შედეგი`,
  },
};

function ShopLandingSearch({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
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
    if (!canSearch) return text.start;
    if (loading) return text.loading;
    if (products.length === 0) return text.empty;
    return "";
  }, [canSearch, loading, products.length, text]);

  const submitSearch = () => {
    if (!trimmedQuery) {
      inputRef.current?.focus();
      return;
    }
    setOpen(false);
    navigate({ to: "/sale/search", search: { q: trimmedQuery } });
  };

  return (
    <section className="mb-10 w-full" aria-label={text.title}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            type="button"
            className="group flex h-14 w-full items-center gap-4 rounded-xl border border-border bg-background px-5 text-left font-body text-base text-muted-foreground outline-none transition-[border-color,box-shadow,background-color] hover:border-foreground/25 hover:bg-muted/20 focus-visible:border-ember focus-visible:ring-4 focus-visible:ring-ember/10"
            aria-label={text.title}
          >
            <Search className="h-5 w-5 shrink-0 text-foreground/40 transition-colors group-hover:text-ember" />
            <span className={query ? "truncate text-foreground" : "truncate"}>
              {query || text.placeholder}
            </span>
          </button>
        </DialogTrigger>

        <DialogContent
          closeLabel={text.close}
          overlayClassName="bg-foreground/35 backdrop-blur-[3px]"
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            inputRef.current?.focus();
          }}
          className="left-0 top-0 !flex h-[100dvh] max-h-[100dvh] max-w-none translate-x-0 translate-y-0 flex-col gap-0 overflow-hidden border-0 p-0 shadow-2xl data-[state=closed]:slide-out-to-left-0 data-[state=closed]:slide-out-to-top-0 data-[state=open]:slide-in-from-left-0 data-[state=open]:slide-in-from-top-0 sm:left-1/2 sm:top-[8vh] sm:h-auto sm:max-h-[84vh] sm:max-w-3xl sm:-translate-x-1/2 sm:translate-y-0 sm:rounded-2xl sm:border [&>button:last-child]:right-5 [&>button:last-child]:top-5 [&>button:last-child]:flex [&>button:last-child]:h-10 [&>button:last-child]:w-10 [&>button:last-child]:items-center [&>button:last-child]:justify-center [&>button:last-child]:rounded-full [&>button:last-child]:bg-muted [&>button:last-child]:opacity-100"
        >
          <DialogTitle className="sr-only">{text.title}</DialogTitle>
          <DialogDescription className="sr-only">{text.start}</DialogDescription>

          <form
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              submitSearch();
            }}
            className="relative border-b border-border px-5 pr-28 sm:px-6 sm:pr-28"
          >
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/45 sm:left-6" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={text.placeholder}
              aria-label={text.title}
              className="h-20 w-full appearance-none bg-transparent pl-9 font-body text-lg text-foreground outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden"
            />
            {loading && (
              <LoaderCircle
                aria-hidden="true"
                className="absolute right-16 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin text-ember"
              />
            )}
            {query && !loading && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                aria-label={text.clear}
                className="absolute right-16 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </form>

          <div className="flex min-h-0 flex-1 flex-col sm:max-h-[calc(84vh-5rem)]">
            {statusText ? (
              <div
                className="flex min-h-[260px] flex-1 flex-col items-center justify-center gap-4 px-6 py-12 text-center font-body text-sm text-muted-foreground"
                aria-live="polite"
              >
                {loading ? (
                  <LoaderCircle aria-hidden="true" className="h-8 w-8 animate-spin text-ember" />
                ) : (
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                    <Search className="h-6 w-6 text-foreground/35" />
                  </span>
                )}
                {statusText}
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3 sm:px-6">
                  <span className="font-body text-xs uppercase tracking-wider text-muted-foreground" aria-live="polite">
                    {text.resultsLabel(products.length)}
                  </span>
                  <button
                    type="button"
                    onClick={submitSearch}
                    className="rounded-md px-2 py-1 font-body text-xs font-bold uppercase tracking-wider text-ember transition-colors hover:bg-ember/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                  >
                    {text.submit}
                  </button>
                </div>
                <div className="min-h-0 flex-1 divide-y divide-border overflow-y-auto px-1 sm:px-2">
                  {products.map((product) => (
                    <ShopSearchRow
                      key={product.id}
                      product={product}
                      outOfStockText={commonText.outOfStock}
                      onSelect={() => setOpen(false)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ShopSearchRow({
  product,
  outOfStockText,
  onSelect,
}: {
  product: ShopProduct;
  outOfStockText: string;
  onSelect: () => void;
}) {
  const salePrice = getSalePrice(product.price, product.sale_price);
  const displayPrice = getDisplayPrice(product.price, product.sale_price);

  return (
    <Link
      to="/app/$slug"
      params={{ slug: product.slug }}
      onClick={onSelect}
      className="grid grid-cols-[64px_1fr] gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-inset"
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
