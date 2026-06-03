import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, Route as RouteIcon } from "lucide-react";
import { listHikes } from "@/lib/hikes.functions";
import { localizeHike } from "@/lib/hike-translations";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

export const Route = createFileRoute("/hikes/")({
  staleTime: 5 * 60 * 1000,
  loader: async () => await listHikes(),
  head: () => ({
    meta: [
      { title: "Походы — Adjara Peak" },
      { name: "description", content: "Авторские походы и горные туры в Аджарии и на Кавказе с гидами Adjara Peak." },
      { property: "og:title", content: "Походы — Adjara Peak" },
      { property: "og:description", content: "Авторские походы и горные туры в Аджарии и на Кавказе." },
    ],
  }),
  component: HikesIndex,
});

function HikesIndex() {
  const rawHikes = Route.useLoaderData();
  const { lang } = useLanguage();
  const text = getSiteText(lang).hikes;
  const hikes = rawHikes.map((hike) => localizeHike(hike, lang));

  useEffect(() => {
    document.title = text.metaTitle;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.content = text.metaDescription;
  }, [text.metaDescription, text.metaTitle]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-18">
        <section className="section-padding pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-display font-bold text-foreground leading-[1.05] mb-5">
                {text.indexTitle}
              </h1>
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                {text.indexLead}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding pb-24">
          <div className="max-w-7xl mx-auto">
            {hikes.length === 0 ? (
              <div className="rounded-3xl border border-border bg-card p-12 text-center">
                <p className="font-body text-muted-foreground">
                  {text.empty}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {hikes.map((hike, i) => {
                  const price =
                    hike.sale_price && hike.sale_price < hike.price
                      ? hike.sale_price
                      : hike.price;
                  const fmt = (d: string) => {
                    const dt = new Date(d);
                    const dd = String(dt.getDate()).padStart(2, "0");
                    const mm = String(dt.getMonth() + 1).padStart(2, "0");
                    return `${dd}.${mm}.${dt.getFullYear()}`;
                  };
                  const dateLabel = hike.start_date
                    ? hike.end_date && hike.end_date !== hike.start_date
                      ? `${fmt(hike.start_date)} — ${fmt(hike.end_date)}`
                      : fmt(hike.start_date)
                    : null;
                  const timeLabel = hike.start_time
                    ? hike.start_time.slice(0, 5)
                    : null;
                  return (
                    <motion.div
                      key={hike.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: Math.min(i * 0.08, 0.4) }}
                    >
                      <Link
                        to="/hikes/$slug"
                        params={{ slug: hike.slug }}
                        className="block bg-card rounded-2xl overflow-hidden card-hover group h-full"
                      >
                        <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                          {hike.image ? (
                            <img
                              src={hike.image}
                              alt={hike.title}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                              <MapPin className="h-10 w-10" />
                            </div>
                          )}
                          {hike.difficulty && (
                            <span className="absolute top-4 left-4 pill-tag bg-background/90 text-foreground backdrop-blur-sm">
                              {hike.difficulty}
                            </span>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="font-display font-semibold text-lg text-foreground leading-snug mb-4">
                            {hike.title}
                          </h3>
                          {dateLabel && (
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-body mb-5">
                              <Calendar className="h-4 w-4" /> {dateLabel}
                              {timeLabel && <span>· {timeLabel}</span>}
                            </div>
                          )}
                          {hike.distance_km != null && (
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-body mb-5 -mt-3">
                              <RouteIcon className="h-4 w-4" /> ~{hike.distance_km} {text.distanceUnit}
                            </div>
                          )}
                          <div className="pt-4 border-t border-border">
                            <span className="font-display font-bold text-foreground text-xl">
                              ₾{price}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
