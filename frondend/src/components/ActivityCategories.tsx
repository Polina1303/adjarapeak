import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { resolveCatalogImage } from "@/lib/catalog-image";
import { useCatalogTranslations } from "@/lib/catalog-translations";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProgress,
} from "@/components/ui/carousel";

type Group = {
  id: string;
  slug: string;
  title: string;
  image: string | null;
};

export function ActivityCategories({ groups }: { groups: Group[] }) {
  const { lang } = useLanguage();
  const catalogTranslations = useCatalogTranslations(lang);
  const text = getSiteText(lang).home;
  if (!groups || groups.length === 0) return null;
  const translatedGroups = groups.map((group) => ({
    ...group,
    title: catalogTranslations.group("shop", group.slug, group.title),
  }));

  return (
    <section className="section-padding py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-10">
          {text.popularCategories}
        </h2>

        {/* Mobile: 2-column grid of small tiles */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {translatedGroups.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.04, 0.3) }}
            >
              <Link
                to="/sale"
                                className="group flex flex-col items-center text-center rounded-xl bg-secondary/40 hover:bg-secondary/70 transition-colors p-3"
              >
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-secondary/60 flex items-center justify-center mb-3">
                  <img
                    src={resolveCatalogImage(cat.image)}
                    alt={cat.title}
                    loading="lazy"
                    style={{ mixBlendMode: "multiply" }}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm leading-tight group-hover:text-ember transition-colors">
                  {cat.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Tablet/desktop: carousel */}
        <Carousel opts={{ align: "start", slidesToScroll: "auto" }} className="w-full hidden md:block">
          <CarouselContent className="-ml-3 md:-ml-5">
            {translatedGroups.map((cat, i) => (
              <CarouselItem
                key={cat.id}
                className="pl-3 md:pl-5 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.04, 0.3) }}
                >
                  <Link
                    to="/sale"
                                        className="group flex flex-col items-center text-center"
                  >
                    <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-secondary/60 mb-3 flex items-center justify-center">
                      <img
                        src={resolveCatalogImage(cat.image)}
                        alt={cat.title}
                        loading="lazy"
                        style={{ mixBlendMode: "multiply" }}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-sm md:text-base group-hover:text-ember transition-colors">
                      {cat.title}
                    </h3>
                  </Link>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
          <CarouselProgress className="mt-6 max-w-xs mx-auto" />
        </Carousel>
      </div>
    </section>
  );
}
