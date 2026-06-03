import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Calendar,
  Route as RouteIcon,
  Mountain,
  Wallet,
  ChevronLeft,
  Check,
  MapPin,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselProgress,
} from "@/components/ui/carousel";
import { getHikeBySlug } from "@/lib/hikes.functions";
import { localizeHike } from "@/lib/hike-translations";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

export const Route = createFileRoute("/hikes/$slug")({
  staleTime: 5 * 60 * 1000,
  loader: async ({ params }) => {
    const hike = await getHikeBySlug({ data: { slug: params.slug } });
    if (!hike) throw notFound();
    return hike;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Походы Adjara Peak` },
          {
            name: "description",
            content:
              loaderData.shortly ??
              loaderData.description?.slice(0, 160) ??
              "Поход с гидами Adjara Peak.",
          },
          { property: "og:title", content: loaderData.title },
          {
            property: "og:description",
            content: loaderData.shortly ?? "Поход с гидами Adjara Peak.",
          },
          ...(loaderData.image
            ? [{ property: "og:image", content: loaderData.image }]
            : []),
        ]
      : [{ title: "Поход — Adjara Peak" }],
  }),
  component: HikePage,
  notFoundComponent: HikeNotFound,
});

function HikeNotFound() {
  const { lang } = useLanguage();
  const text = getSiteText(lang).hikes;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-24 section-padding text-center">
        <h1 className="font-display text-3xl font-bold mb-4">
          {text.notFoundTitle}
        </h1>
        <Link to="/hikes" className="text-ember hover:underline">
          {text.allHikes}
        </Link>
      </div>
      <Footer />
    </div>
  );
}

function HikePage() {
  const rawHike = Route.useLoaderData();
  const { lang } = useLanguage();
  const text = getSiteText(lang).hikes;
  const hike = localizeHike(rawHike, lang);
  const price =
    hike.sale_price && hike.sale_price < hike.price
      ? hike.sale_price
      : hike.price;
  const hasDiscount = price !== hike.price;

  const dateLabel = hike.start_date
    ? new Date(hike.start_date).toLocaleDateString(text.dateLocale, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;
  const timeLabel = hike.start_time ? hike.start_time.slice(0, 5) : null;
  const dateTimeLabel = [dateLabel, timeLabel].filter(Boolean).join(" | ");

  const metaRows: { icon: typeof Calendar; text: string }[] = [];
  if (dateTimeLabel) metaRows.push({ icon: Calendar, text: dateTimeLabel });
  if (hike.distance_km != null)
    metaRows.push({ icon: RouteIcon, text: `${hike.distance_km} ${text.distanceUnit}` });
  if (hike.difficulty) metaRows.push({ icon: Mountain, text: hike.difficulty });
  metaRows.push({ icon: Wallet, text: `${price} ₾` });

  const reasons = hike.reasons;

  const features = hike.features.length > 0 ? hike.features : text.demoFeatures;
  const packingList =
    hike.packing_list.length > 0 ? hike.packing_list : text.demoPackingList;

  const demoPhotos = [
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=900&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
    "https://images.unsplash.com/photo-1496545672447-f699b503d270?w=900&q=80",
    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&q=80",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=900&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=900&q=80",
    "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=900&q=80",
  ];
  const photos = (hike.gallery.length > 0 ? hike.gallery : demoPhotos).slice(
    0,
    6,
  );

  useEffect(() => {
    document.title = text.detailTitle(hike.title);
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        hike.shortly ?? hike.description?.slice(0, 160) ?? text.detailDescriptionFallback;
    }
  }, [hike.description, hike.shortly, hike.title, text]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-18">
        {/* HERO */}
        <section className="relative overflow-hidden min-h-[78vh] md:min-h-screen flex items-center">
          {hike.image ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${hike.image})` }}
              aria-hidden
            />
          ) : (
            <div className="absolute inset-0 bg-muted" aria-hidden />
          )}
          <div className="absolute inset-0 bg-black/30" aria-hidden />
          <div className="relative w-full px-6 md:px-12 lg:px-16 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
              <Link
                to="/hikes"
                className="inline-flex items-center gap-1 text-xs font-body uppercase tracking-wider text-white/80 hover:text-white mb-10"
              >
                <ChevronLeft className="h-3.5 w-3.5" /> {text.allHikes}
              </Link>
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mx-0 px-0">
                {/* RIGHT — meta rows */}
                <motion.ul
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4 md:space-y-7 text-white order-2 md:order-2 md:justify-self-end"
                >
                  {metaRows.map(({ icon: Icon, text }, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3">
                      <Icon className="h-6 w-6 md:h-9 md:w-9 shrink-0 stroke-[1.5]" />
                      <span className="font-body text-base md:text-2xl">
                        {text}
                      </span>
                    </li>
                  ))}
                </motion.ul>

                {/* LEFT — title + CTA */}
                <div className="text-white order-1 md:order-1">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] mb-6"
                  >
                    {hike.title}
                  </motion.h1>
                  {hike.shortly && (
                    <p className="font-body text-base md:text-xl text-white/90 max-w-xl mb-8 leading-relaxed">
                      {hike.shortly}
                    </p>
                  )}
                  {hasDiscount && (
                    <div className="mb-6 text-white/70 font-display line-through">
                      ₾{hike.price}
                    </div>
                  )}
                  <a
                    href="https://t.me/shpaksn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center gap-2 bg-ember text-ember-foreground hover:bg-ember/90 transition-colors px-10 py-4 rounded-full font-display text-sm uppercase tracking-wider"
                  >
                    {text.book}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESCRIPTION + FEATURES */}
        <section className="section-padding py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="py-2">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                {text.routeTitle}
              </h2>
              {hike.description ? (
                <div className="font-body text-sm md:text-base text-foreground/80 leading-relaxed whitespace-pre-line">
                  {hike.description}
                </div>
              ) : (
                <p className="font-body text-sm text-muted-foreground">
                  {text.descriptionComing}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* REASONS — Why go on this hike */}
        {reasons.length > 0 && (
          <section className="section-padding pt-0 pb-12 md:pb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 md:mb-12 text-center">
                {text.reasonsTitle}
              </h2>

              {/* Mobile: shadcn carousel */}
              <div className="md:hidden">
                <Carousel
                  opts={{ align: "start", slidesToScroll: "auto" }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {reasons.map((r, i) => (
                      <CarouselItem key={i} className="pl-4 basis-[80%]">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-3">
                          <img
                            src={r.image}
                            alt={r.text}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="font-body text-sm text-foreground/80 leading-relaxed">
                          {r.text}
                        </p>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselProgress className="mt-4 max-w-xs mx-auto" />
                </Carousel>
              </div>

              {/* Desktop: 3-column grid (two rows for 6 items) */}
              <div className="hidden md:grid grid-cols-3 gap-x-8 gap-y-10">
                {reasons.map((r, i) => (
                  <div key={i}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-4">
                      <img
                        src={r.image}
                        alt={r.text}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <p className="font-body text-base text-foreground/80 leading-relaxed">
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


        {/* FAQ */}
        <section className="section-padding pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 md:mb-10 text-center">
              {text.faqTitle}
            </h2>
            <Accordion type="multiple" className="text-left">
              {text.faq.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index + 1}`} className="border-b border-border">
                  <AccordionTrigger className="font-display text-base md:text-lg font-bold text-foreground hover:no-underline py-5 text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 font-body text-sm md:text-base text-foreground/80 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* GALLERY */}
        {photos.length > 0 && (
          <section className="section-padding pb-16 md:pb-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 md:mb-12 text-center">
                {text.galleryTitle}
              </h2>
              <div className="flex flex-col gap-3 md:gap-4">
                {Array.from({ length: Math.ceil(photos.length / 2) }).map(
                  (_, rowIdx) => {
                    const a = photos[rowIdx * 2];
                    const b = photos[rowIdx * 2 + 1];
                    // Alternate row direction: row 0 [V,H], row 1 [H,V], row 2 [V,H]
                    const verticalFirst = rowIdx % 2 === 0;
                    return (
                      <div
                        key={rowIdx}
                        className="grid gap-3 md:gap-4 h-[180px] sm:h-[260px] md:h-[360px]"
                         style={{
                           gridTemplateColumns: verticalFirst
                             ? "1fr 2fr"
                             : "2fr 1fr",
                         }}
                      >
                        {verticalFirst ? (
                          <>
                            <div className="h-full rounded-lg md:rounded-2xl overflow-hidden bg-muted">
                              <img
                                src={a}
                                alt={`${hike.title} — ${rowIdx * 2 + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                            <div className="h-full rounded-lg md:rounded-2xl overflow-hidden bg-muted">
                              <img
                                src={b}
                                alt={`${hike.title} — ${rowIdx * 2 + 2}`}
                                loading="lazy"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="h-full rounded-lg md:rounded-2xl overflow-hidden bg-muted">
                              <img
                                src={a}
                                alt={`${hike.title} — ${rowIdx * 2 + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                            <div className="h-full rounded-lg md:rounded-2xl overflow-hidden bg-muted">
                              <img
                                src={b}
                                alt={`${hike.title} — ${rowIdx * 2 + 2}`}
                                loading="lazy"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </section>
        )}

        {/* PRICING */}
        <section className="section-padding pt-0 pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              {text.priceTitle}
            </h2>
            <div className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8">
              {price} ₾
            </div>
            <a
              href="https://t.me/shpaksn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-ember text-ember-foreground hover:bg-ember/90 transition-colors px-12 py-4 rounded-full font-display text-sm uppercase tracking-wider mb-10 md:mb-14"
            >
              {text.book}
            </a>

            <Accordion type="multiple" className="text-left">
              <AccordionItem
                value="included"
                className="border-b border-border"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl font-bold text-foreground hover:no-underline py-5">
                  {text.includedTitle}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul className="space-y-3">
                    {features.map((f, i) => (
                      <li
                        key={i}
                        className="flex gap-3 font-body text-sm md:text-base text-foreground/80"
                      >
                        <Check className="h-5 w-5 text-ember shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="packing" className="border-b border-border">
                <AccordionTrigger className="font-display text-lg md:text-xl font-bold text-foreground hover:no-underline py-5">
                  {text.packingTitle}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="space-y-6">
                    {packingList.map((group, gi) => (
                      <div key={gi}>
                        <h4 className="font-display text-base md:text-lg font-bold text-foreground mb-3">
                          {group.title}
                        </h4>
                        <ul className="space-y-2">
                          {group.items.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-3 font-body text-sm md:text-base text-foreground/80"
                            >
                              <Check className="h-5 w-5 text-ember shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
