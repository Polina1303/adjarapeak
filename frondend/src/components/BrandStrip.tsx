import { useEffect, useState } from "react";
import { listRecommendedProducts, type ShopProduct } from "@/lib/catalog.functions";
import { ProductCard } from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselProgress,
} from "@/components/ui/carousel";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

export function BrandStrip() {
  const [featuredProducts, setFeaturedProducts] = useState<ShopProduct[]>([]);
  const { lang } = useLanguage();
  const text = getSiteText(lang).home;

  useEffect(() => {
    listRecommendedProducts({ data: { limit: 8 } })
      .then(setFeaturedProducts)
      .catch(() => setFeaturedProducts([]));
  }, []);

  if (featuredProducts.length === 0) return null;

  return (
    <section className="section-padding py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {text.featuredProducts}
          </h2>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile/tablet carousel (embla — proper touch swipe) */}
        <Carousel
          opts={{ align: "start", dragFree: true }}
          className="w-full lg:hidden"
        >
          <CarouselContent className="-ml-4">
            {featuredProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 basis-[60%] sm:basis-[42%] md:basis-[32%]"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselProgress className="mt-6 max-w-xs mx-auto" />
        </Carousel>
      </div>
    </section>
  );
}
