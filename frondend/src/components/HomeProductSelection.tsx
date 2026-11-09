import { Link } from "@tanstack/react-router";
import type { ShopProduct } from "@/lib/catalog.functions";
import { useLanguage } from "@/lib/i18n";
import { SALES_TEXT } from "@/lib/sales-text";
import { ProductCard } from "./ProductCard";
export function HomeProductSelection({
  products,
  kind,
}: {
  products: ShopProduct[];
  kind: "ski" | "fitness";
}) {
  const { lang } = useLanguage();
  const t = SALES_TEXT[lang];
  const ski = kind === "ski";
  const title = ski ? t.skiTitle : t.fitnessTitle;
  const group = ski ? "alpinesking" : "fitness";
  if (products.length < 4)
    return (
      <section className="section-padding py-8" data-no-translate>
        <div className="mx-auto max-w-7xl">
          <Link
            to="/sale/$group"
            params={{ group }}
            className="section-alt-bg block rounded-xl border border-border p-6 font-display text-xl font-bold text-ember"
          >
            {title} →
          </Link>
        </div>
      </section>
    );
  return (
    <section
      className={`section-padding py-8 md:py-11 ${ski ? "" : "section-alt-bg"}`}
      data-no-translate
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="mb-6 mt-3 max-w-3xl font-body text-sm leading-relaxed text-muted-foreground">
          {ski ? t.skiSubtitle : t.fitnessSubtitle}
        </p>
        <div
          className={`grid grid-cols-2 gap-3 md:gap-5 ${ski ? "md:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-6"}`}
        >
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              categoryLabel={ski ? t.skiShop : t.fitnessTitle}
              analyticsCategory={group}
              bordered
            />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/sale/$group"
            params={{ group }}
            data-fitness-banner={!ski ? true : undefined}
            className="inline-flex items-center rounded-full border border-border px-6 py-3 font-display text-xs uppercase tracking-wider text-ember"
          >
            {ski ? t.allSki : t.allFitness}
          </Link>
          {ski && (
            <Link
              to="/rent/$group"
              params={{ group: "skiRental" }}
              className="inline-flex items-center rounded-full bg-ember px-6 py-3 font-display text-xs uppercase tracking-wider text-primary-foreground"
            >
              {t.skiRent}
            </Link>
          )}
        </div>
        {!ski && (
          <p className="mt-4 font-body text-sm text-muted-foreground">
            {t.balanceIntro}{" "}
            <Link
              to="/sale/$group"
              params={{ group: "boards" }}
              className="text-ember underline underline-offset-4"
            >
              {t.balance}
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
