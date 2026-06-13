import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  MapPin,
  Shield,
  Users,
  Mountain,
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import climbingHero from "@/assets/climbing-hero.avif";
import cl0 from "@/assets/cl-0.avif";
import cl1 from "@/assets/cl-1.avif";
import cl2 from "@/assets/cl-2.avif";
import cl3 from "@/assets/cl-3.avif";
import cl4 from "@/assets/cl-4.avif";
import cl5 from "@/assets/cl-5.avif";
import team0 from "@/assets/team0.png";
// import team1 from "@/assets/team-1.avif";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

export const Route = createFileRoute("/rockClimbing")({
  head: () => ({
    meta: [
      { title: "Скалолазание — Adjara Peak" },
      {
        name: "description",
        content:
          "Тренировки по скалолазанию в Гонио-Квариати: снаряжение, инструкторы, расписание и запись.",
      },
      { property: "og:title", content: "Скалолазание — Adjara Peak" },
      {
        property: "og:description",
        content:
          "Скалолазание с инструкторами Adjara Peak в районе Гонио-Квариати.",
      },
      { property: "og:image", content: climbingHero },
    ],
  }),
  component: ClimbingPage,
});

const carousel = [cl0, cl1, cl2, cl3, cl4, cl5];
const teamImages = [team0];

function useHorizontalCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const update = () => {
      setCanLeft(el.scrollLeft > 4);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: -1 | 1) => {
    scroller.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return { scroller, canLeft, canRight, progress, scroll };
}

function ClimbingPage() {
  const photoCarousel = useHorizontalCarousel();
  const teamCarousel = useHorizontalCarousel();
  const { lang } = useLanguage();
  const text = getSiteText(lang).climbing;
  const team = text.team.map((member, index) => ({
    ...member,
    img: teamImages[index] ?? team0,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${climbingHero})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 backdrop-blur-md bg-background/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"
          aria-hidden
        />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[1.05] md:leading-[0.95] mb-6 break-words">
                {text.heroTitle}
              </h1>
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                {text.heroText}
              </p>
              <div className="flex flex-wrap gap-3 w-full">
                <a
                  href="https://t.me/shpaksn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 bg-ember text-ember-foreground hover:bg-ember/90 transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider"
                >
                  {text.book}
                </a>
                <a
                  href="#location"
                  className="flex-1 inline-flex justify-center items-center gap-2 border border-border hover:border-ember hover:text-ember transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider text-foreground"
                >
                  {text.directions}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="section-padding pb-16">
        <div className="max-w-6xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-6 items-start">
          <div className="w-12 h-12 rounded-full bg-ember/10 flex items-center justify-center shrink-0">
            <MapPin className="h-5 w-5 text-ember" />
          </div>
          <div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
              {text.locationTitle}
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {text.locationText}
            </p>
            <a
              href="https://www.google.com/maps?cid=6512661380146566532"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-xs uppercase tracking-wider font-display text-ember hover:underline"
            >
              {text.reviewLink} <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* SAFETY — GEAR */}
      <section className="section-padding pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="hidden md:block h-6 w-6 text-ember" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {text.safetyTitle}
            </h2>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-ember mb-3">
              {text.gearPoint}
            </h3>
            <p className="font-body text-sm text-foreground/80 leading-relaxed mb-2">
              {text.gearIntro}
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-6">
              {text.gear.map((g) => (
                <div key={g.title} className="border-l-2 border-ember/40 pl-4">
                  <div className="font-display text-xs uppercase tracking-wider text-foreground mb-1">
                    {g.title}
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY */}
      <section className="section-padding pb-16">
        <div className="max-w-6xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Users className="hidden md:block h-6 w-6 text-ember" />
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-ember">
              {text.accessibilityPoint}
            </h3>
          </div>
          <p className="font-body text-sm text-foreground/80 leading-relaxed max-w-3xl mb-8">
            {text.accessibilityText}
          </p>

          {/* Carousel (all sizes) */}
          <div className="relative">
            {photoCarousel.canLeft && (
              <button
                onClick={() => photoCarousel.scroll(-1)}
                className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background text-foreground border border-border items-center justify-center shadow-lg hover:bg-background/90 transition-colors"
                aria-label={text.back}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            {photoCarousel.canRight && (
              <button
                onClick={() => photoCarousel.scroll(1)}
                className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background text-foreground border border-border items-center justify-center shadow-lg hover:bg-background/90 transition-colors"
                aria-label={text.forward}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
            <div
              ref={photoCarousel.scroller}
              className="flex gap-3 overflow-x-scroll snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{
                touchAction: "pan-x pan-y",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {carousel.map((src, i) => (
                <div
                  key={i}
                  className="snap-start shrink-0 w-[260px] lg:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden bg-muted"
                >
                  <img
                    src={src}
                    alt={text.photoAlt(i + 1)}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 h-[3px] max-w-xs mx-auto rounded-full bg-border/70 overflow-hidden">
            <div
              className="h-full rounded-full bg-ember transition-[margin] duration-200 ease-out"
              style={{
                width: `${Math.max(100 / carousel.length, 8)}%`,
                marginLeft: `${photoCarousel.progress * (100 - Math.max(100 / carousel.length, 8))}%`,
              }}
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-padding pb-16">
        <div className="max-w-6xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="hidden md:block h-6 w-6 text-ember" />
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-ember">
              {text.experiencePoint}
            </h3>
          </div>
          <p className="font-body text-sm text-foreground/80 leading-relaxed max-w-3xl mb-8">
            {text.experienceText}
          </p>
          {/* Mobile/tablet: carousel */}
          <div
            ref={teamCarousel.scroller}
            className="lg:hidden flex gap-3 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pb-3 [scrollbar-width:thin] [scrollbar-color:var(--ember)_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-ember"
            style={{ touchAction: "pan-x", WebkitOverflowScrolling: "touch" }}
          >
            {team.map((t) => (
              <div
                key={t.name}
                className="snap-start shrink-0 w-[260px] aspect-[3/4] rounded-2xl overflow-hidden bg-muted relative"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="font-display text-base uppercase tracking-wider text-white">
                    {t.name}
                  </div>
                  <div className="font-body text-xs text-white/70">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop: static grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 max-w-2xl">
            {team.map((t) => (
              <div
                key={t.name}
                className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted relative"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="font-display text-base uppercase tracking-wider text-white">
                    {t.name}
                  </div>
                  <div className="font-body text-xs text-white/70">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:hidden mt-5 h-[3px] max-w-xs mx-auto rounded-full bg-border/70 overflow-hidden">
            <div
              className="h-full rounded-full bg-ember transition-[margin] duration-200 ease-out"
              style={{
                width: `${Math.max(100 / team.length, 8)}%`,
                marginLeft: `${teamCarousel.progress * (100 - Math.max(100 / team.length, 8))}%`,
              }}
            />
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="section-padding pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="hidden md:block h-6 w-6 text-ember" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {text.scheduleTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {text.schedule.map((day) => (
              <div
                key={day.day}
                className="rounded-3xl border border-border bg-card p-6 md:p-8"
              >
                <div className="mb-5">
                  <h3 className="font-display text-2xl font-bold text-ember">
                    {day.day}
                  </h3>
                  <span className="font-body text-sm text-muted-foreground">
                    {text.trainingPrice}{" "}
                    <span className="font-display text-foreground font-bold">
                      {day.price}
                    </span>
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {day.slots.map((s) => (
                    <li
                      key={s}
                      className="px-5 py-3 rounded-xl bg-ember/5 font-display text-sm uppercase tracking-wider text-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://t.me/shpaksn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center items-center gap-2 bg-ember text-ember-foreground hover:bg-ember/90 transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider"
                >
                  {text.book}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
