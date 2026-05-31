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

export function RentalSection({ groups }: { groups: Group[] }) {
  const { lang } = useLanguage();
  const catalogTranslations = useCatalogTranslations(lang);
  const text = getSiteText(lang).home;
  if (!groups || groups.length === 0) return null;
  const tiles: Array<
    | { kind: "group"; id: string; slug: string; title: string; image: string | null }
    | { kind: "sale"; id: string; title: string }
  > = groups.map((g) => ({
    kind: "group" as const,
    ...g,
    title: catalogTranslations.group("rentals", g.slug, g.title),
  }));

  return (
    <section className="section-padding py-12 md:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-10">
          {text.rentalEquipment}
        </h2>

        {/* Mobile: 2-column grid of tiles */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {tiles.map((tile, i) => {
            const inner = (
              <>
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-secondary/60 mb-3 flex items-center justify-center">
                  <img
                    src={resolveCatalogImage(tile.kind === "group" ? tile.image : "sale.webp")}
                    alt={tile.title}
                    loading="lazy"
                    style={{ mixBlendMode: "multiply" }}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm leading-tight group-hover:text-ember transition-colors text-center">
                  {tile.title}
                </h3>
              </>
            );
            return (
              <motion.div
                key={tile.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.3) }}
              >
                {tile.kind === "group" ? (
                  <Link
                    to="/rent"
                                        className="group flex flex-col items-center text-center rounded-xl bg-secondary/40 hover:bg-secondary/70 transition-colors p-3"
                  >
                    {inner}
                  </Link>
                ) : (
                  <Link
                    to="/sale/sale"
                    className="group flex flex-col items-center text-center rounded-xl bg-secondary/40 hover:bg-secondary/70 transition-colors p-3"
                  >
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Tablet/desktop: carousel */}
        <Carousel opts={{ align: "start", slidesToScroll: "auto" }} className="w-full hidden md:block">
          <CarouselContent className="-ml-3 md:-ml-5">
            {tiles.map((tile, i) => (
              <CarouselItem
                key={tile.id}
                className="pl-3 md:pl-5 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.04, 0.3) }}
                >
                  {tile.kind === "group" ? (
                    <Link
                      to="/rent"
                                            className="group flex flex-col items-center text-center"
                    >
                      <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-secondary/60 mb-3 flex items-center justify-center">
                        <img
                          src={resolveCatalogImage(tile.image)}
                          alt={tile.title}
                          loading="lazy"
                          style={{ mixBlendMode: "multiply" }}
                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="font-display font-semibold text-foreground text-sm md:text-base group-hover:text-ember transition-colors">
                        {tile.title}
                      </h3>
                    </Link>
                  ) : (
                    <Link
                      to="/sale/sale"
                      className="group flex flex-col items-center text-center"
                    >
                      <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-secondary/60 mb-3 flex items-center justify-center">
                        <img
                          src={resolveCatalogImage("sale.webp")}
                          alt={tile.title}
                          loading="lazy"
                          style={{ mixBlendMode: "multiply" }}
                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="font-display font-semibold text-foreground text-sm md:text-base group-hover:text-ember transition-colors">
                        {tile.title}
                      </h3>
                    </Link>
                  )}
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
