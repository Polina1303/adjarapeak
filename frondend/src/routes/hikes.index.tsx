import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Mountain,
  Route as RouteIcon,
} from "lucide-react";
import { listHikes } from "@/lib/hikes.functions";
import { localizeHike } from "@/lib/hike-translations";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import denisGuide1 from "@/assets/denis-guide-1.jpg";
import denisGuide2 from "@/assets/denis-guide-2.jpg";
import denisGuide3 from "@/assets/denis-guide-3.jpg";
import denisGuide4 from "@/assets/denis-guide-4.jpg";
import lesyaGuide1 from "@/assets/lesya-guide-1.jpg";
import lesyaGuide2 from "@/assets/lesya-guide-2.jpg";
import lesyaGuide3 from "@/assets/lesya-guide-3.jpg";
import {
  HikeDifficultyBadge,
  HikeDifficultyScale,
} from "@/components/HikeDifficultyScale";

const denisGallery = [denisGuide1, denisGuide2, denisGuide3, denisGuide4];
const lesyaGallery = [lesyaGuide1, lesyaGuide2, lesyaGuide3];

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

function getDateSortValue(hike: { start_date?: string | null }) {
  if (!hike.start_date) return Number.MAX_SAFE_INTEGER;
  const timestamp = Date.parse(`${hike.start_date}T00:00:00`);
  return Number.isFinite(timestamp) ? timestamp : Number.MAX_SAFE_INTEGER;
}

function useGuideCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = scroller.current;
    if (!element) return;

    const update = () => {
      setCanLeft(element.scrollLeft > 4);
      setCanRight(
        element.scrollLeft + element.clientWidth < element.scrollWidth - 4
      );
      const maxScroll = element.scrollWidth - element.clientWidth;
      setProgress(
        maxScroll > 0
          ? Math.min(1, Math.max(0, element.scrollLeft / maxScroll))
          : 1
      );
    };

    update();
    element.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      element.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (direction: -1 | 1) => {
    const element = scroller.current;
    if (!element) return;
    element.scrollBy({
      left: direction * Math.max(element.clientWidth * 0.72, 280),
      behavior: "smooth",
    });
  };

  return { scroller, canLeft, canRight, progress, scroll };
}

type GuideProfileProps = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  highlights: readonly string[];
  name: string;
  role: string;
  galleryTitle: string;
  galleryLabel: string;
  previousPhoto: string;
  nextPhoto: string;
  detailsLabel: string;
  photoAlt: (n: number) => string;
  gallery: readonly string[];
};

function GuideProfile({
  eyebrow,
  title,
  paragraphs,
  highlights,
  name,
  role,
  galleryTitle,
  galleryLabel,
  previousPhoto,
  nextPhoto,
  detailsLabel,
  photoAlt,
  gallery,
}: GuideProfileProps) {
  const carousel = useGuideCarousel();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      className="overflow-hidden rounded-3xl bg-foreground text-background"
    >
      <div className="relative border-b border-background/15 bg-background/5 p-3 md:p-4">
        <div className="absolute left-6 right-6 top-6 z-10 flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/20 bg-black/35 px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            {galleryTitle}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => carousel.scroll(-1)}
              disabled={!carousel.canLeft}
              aria-label={previousPhoto}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition-colors hover:border-ember hover:text-ember disabled:cursor-default disabled:opacity-35"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => carousel.scroll(1)}
              disabled={!carousel.canRight}
              aria-label={nextPhoto}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition-colors hover:border-ember hover:text-ember disabled:cursor-default disabled:opacity-35"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={carousel.scroller}
          role="region"
          aria-roledescription="carousel"
          aria-label={galleryLabel}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              carousel.scroll(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              carousel.scroll(1);
            }
          }}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-ember [&::-webkit-scrollbar]:hidden"
          style={{
            touchAction: "pan-x pan-y",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {gallery.map((src, index) => (
            <figure
              key={src}
              role="group"
              aria-label={`${index + 1} / ${gallery.length}`}
              className="relative aspect-[4/3] w-full shrink-0 snap-start overflow-hidden rounded-2xl bg-background/10"
            >
              <img
                src={src}
                alt={photoAlt(index + 1)}
                width={960}
                height={1280}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-16 text-white">
                <div className="font-display text-sm font-bold uppercase tracking-wider">
                  {name}
                </div>
                <div className="mt-1 font-body text-xs text-white/70">{role}</div>
                <div className="absolute bottom-5 right-5 font-body text-[10px] tracking-[0.16em] text-white/65">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(gallery.length).padStart(2, "0")}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mx-2 mt-3 h-[3px] overflow-hidden rounded-full bg-background/15">
          <div
            className="h-full rounded-full bg-ember transition-[margin] duration-200 ease-out"
            style={{
              width: `${100 / gallery.length}%`,
              marginLeft: `${carousel.progress * (100 - 100 / gallery.length)}%`,
            }}
          />
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-background/15 px-3 py-1.5">
          <Mountain className="h-3.5 w-3.5 text-ember" />
          <span className="font-body text-[10px] uppercase tracking-[0.18em] text-background/60">
            {eyebrow}
          </span>
        </div>

        <h2 className="mt-5 font-display text-2xl font-bold leading-[1.08] md:text-3xl">
          {title}
        </h2>

        <p className="mt-5 font-body text-sm leading-relaxed text-background/70 md:text-[15px]">
          {paragraphs[0]}
        </p>

        {paragraphs.length > 1 && (
          <details className="group mt-4 border-t border-background/15 pt-4">
            <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-4 font-display text-xs uppercase tracking-[0.14em] text-background/70 transition-colors hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember [&::-webkit-details-marker]:hidden">
              {detailsLabel}
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="space-y-3 pt-3">
              {paragraphs.slice(1).map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-body text-sm leading-relaxed text-background/70"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </details>
        )}

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={role}>
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-background/15 bg-background/5 px-3 py-2 font-body text-[10px] uppercase tracking-[0.1em] text-background/70"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function HikesIndex() {
  const rawHikes = Route.useLoaderData();
  const { lang } = useLanguage();
  const text = getSiteText(lang).hikes;
  const hikes = rawHikes
    .map((hike) => localizeHike(hike, lang))
    .sort((a, b) => {
      const byDate = getDateSortValue(a) - getDateSortValue(b);
      if (byDate !== 0) return byDate;
      const bySortOrder = Number(a.sort_order ?? 0) - Number(b.sort_order ?? 0);
      if (bySortOrder !== 0) return bySortOrder;
      return a.title.localeCompare(b.title, lang === "ka" ? "ka" : "ru");
    });

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

        <HikeDifficultyScale lang={lang} />

        <section className="section-padding pb-16 md:pb-20">
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
                          <HikeDifficultyBadge
                            difficulty={hike.difficulty}
                            lang={lang}
                            className="absolute left-4 top-4"
                          />
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

        <section className="section-padding pb-24" aria-label={text.guideSectionLabel}>
          <div className="max-w-7xl mx-auto grid gap-5 md:grid-cols-2 md:items-start">
            <GuideProfile
              eyebrow={text.guideEyebrow}
              title={text.guideTitle}
              paragraphs={text.guideParagraphs}
              highlights={text.guideHighlights}
              name={text.guideName}
              role={text.guideRole}
              galleryTitle={text.guideGalleryTitle}
              galleryLabel={text.guideGalleryLabel}
              previousPhoto={text.guidePreviousPhoto}
              nextPhoto={text.guideNextPhoto}
              detailsLabel={text.guideDetailsLabel}
              photoAlt={text.guidePhotoAlt}
              gallery={denisGallery}
            />
            <GuideProfile
              eyebrow={text.guideEyebrow}
              title={text.lesyaGuideTitle}
              paragraphs={text.lesyaGuideParagraphs}
              highlights={text.lesyaGuideHighlights}
              name={text.lesyaGuideName}
              role={text.lesyaGuideRole}
              galleryTitle={text.lesyaGuideGalleryTitle}
              galleryLabel={text.lesyaGuideGalleryLabel}
              previousPhoto={text.lesyaGuidePreviousPhoto}
              nextPhoto={text.lesyaGuideNextPhoto}
              detailsLabel={text.guideDetailsLabel}
              photoAlt={text.lesyaGuidePhotoAlt}
              gallery={lesyaGallery}
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
