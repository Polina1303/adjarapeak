import { useEffect, useState } from "react";
import { listRecommendedProducts, type ShopProduct } from "@/lib/catalog.functions";
import { ProductCarousel } from "./ProductCarousel";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function BrandStrip() {
  const [featuredProducts, setFeaturedProducts] = useState<ShopProduct[]>([]);
  const { lang } = useLanguage();
  const text = getSiteText(lang).home;

  useEffect(() => {
    listRecommendedProducts({ data: { limit: 12 } })
      .then(setFeaturedProducts)
      .catch(() => setFeaturedProducts([]));
  }, []);

  if (featuredProducts.length === 0) return null;

  return (
    <section className="section-padding py-8 md:py-11">
      <div className="max-w-7xl mx-auto">
        <div className="mb-5 flex items-end justify-between gap-4 md:mb-7">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {text.featuredProducts}
          </h2>
          <Link
            to="/sale"
            className="group inline-flex shrink-0 items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wide text-ember transition-colors hover:text-foreground sm:text-sm"
          >
            {text.actions.shop}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <ProductCarousel products={featuredProducts} />
      </div>
    </section>
  );
}
