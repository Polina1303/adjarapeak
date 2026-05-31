import { useEffect, useState } from "react";
import { listLatestProducts, type ShopProduct } from "@/lib/catalog.functions";
import { ProductCarousel } from "./ProductCarousel";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

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
    <section className="section-padding py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {text.newArrivals}
          </h2>
        </div>

        <ProductCarousel products={products} />
      </div>
    </section>
  );
}
