import { useEffect, useState } from "react";
import { listLatestProducts, type ShopProduct } from "@/lib/catalog.functions";
import { ProductCarousel } from "./ProductCarousel";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function NewArrivals() {
  const [products, setProducts] = useState<ShopProduct[]>([]);
  const { lang } = useLanguage();
  const text = getSiteText(lang).home;

  useEffect(() => {
    listLatestProducts({ data: { limit: 12 } })
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="section-padding bg-muted/25 py-8 md:py-11">
      <div className="max-w-7xl mx-auto">
        <div className="mb-5 flex items-end justify-between gap-4 md:mb-7">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {text.newArrivals}
          </h2>
          <Link
            to="/sale"
            className="group inline-flex shrink-0 items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wide text-ember transition-colors hover:text-foreground sm:text-sm"
          >
            {text.actions.newArrivals}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <ProductCarousel products={products} />
      </div>
    </section>
  );
}
