import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bike,
  CircleDot,
  Clock3,
  Cog,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import nikitaBikeService from "@/assets/nikita-bike-service-1.jpg";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

const serviceIcons = [Cog, ShieldCheck, CircleDot, Bike];

export function BikeServicePromo() {
  const { lang } = useLanguage();
  const text = getSiteText(lang).home.bikeService;

  return (
    <section className="section-padding py-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-3xl bg-foreground text-background shadow-xl lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[340px] overflow-hidden lg:min-h-[520px]"
          >
            <img
              src={nikitaBikeService}
              alt={text.imageAlt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                {text.mechanicName}
              </p>
              <p className="mt-1 font-body text-sm text-white/75">
                {text.mechanicRole}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col justify-center p-7 sm:p-9 lg:p-10"
          >
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ember">
              {text.eyebrow}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-bold leading-[1.02]">
              {text.title}
            </h2>
            <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-background/70">
              {text.description}
            </p>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {text.services.map((service, index) => {
                const Icon = serviceIcons[index] ?? Cog;
                return (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-xl border border-background/15 bg-background/[0.06] px-3.5 py-2.5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember/15 text-ember">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-body text-sm font-medium leading-snug text-background/90">
                      {service}
                    </span>
                  </div>
                );
              })}
            </div>

            <Link
              to="/service"
              hash="bike-lessons"
              className="group mt-4 flex items-center gap-3 rounded-xl border border-ember/35 bg-ember/10 p-3 transition-colors hover:border-ember hover:bg-ember/15"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ember text-ember-foreground">
                <Bike className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-sm font-bold uppercase tracking-wider text-background">
                  {text.course.title}
                </span>
                <span className="mt-1 block font-body text-xs leading-relaxed text-background/65">
                  {text.course.meta}
                </span>
              </span>
              <span className="shrink-0 font-display text-lg font-bold text-ember">
                {text.course.price}
              </span>
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-ember transition-transform group-hover:translate-x-1 sm:block" aria-hidden="true" />
            </Link>

            <div className="mt-5 flex flex-col gap-2.5 border-t border-background/15 pt-4 font-body text-xs text-background/70 sm:flex-row sm:flex-wrap sm:gap-x-5">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-ember" aria-hidden="true" />
                {text.guarantee}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-ember" aria-hidden="true" />
                {text.hours}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ember" aria-hidden="true" />
                {text.location}
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/service"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-ember px-6 font-display text-xs font-bold uppercase tracking-wider text-ember-foreground transition-colors hover:bg-ember/90"
              >
                {text.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:+995571208555"
                className="inline-flex h-11 items-center justify-center rounded-full border border-background/25 px-6 font-display text-xs font-bold uppercase tracking-wider text-background transition-colors hover:border-ember hover:text-ember"
              >
                {text.call}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
