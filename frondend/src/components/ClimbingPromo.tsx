import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import climbing from "@/assets/climbing-promo.avif";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

export function ClimbingPromo() {
  const { lang } = useLanguage();
  const text = getSiteText(lang).home.climbingPromo;
  return (
    <section className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto">
        <div className="relative grid md:grid-cols-2 rounded-3xl overflow-hidden bg-foreground text-background min-h-[420px]">
          {/* image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-72 md:h-auto"
          >
            <img src={climbing} alt={text.imageAlt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-foreground/30" />
          </motion.div>

          {/* content */}
          <div className="relative p-8 md:p-12 lg:p-14 flex flex-col justify-center gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
                {text.title}
              </h2>
            </div>

            <p className="font-body text-sm md:text-base text-background/75 leading-relaxed max-w-md">
              {text.subtitle}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-body text-background/70">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-ember" /> {text.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-ember" /> {text.schedule}
              </span>
              <span className="inline-flex items-center font-display text-base md:text-lg font-bold text-background">
                49 ₾ <span className="ml-1.5 text-xs font-body font-normal text-background/70">{text.priceNote}</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
              <a
                href="https://t.me/shpaksn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-ember text-ember-foreground hover:bg-ember/90 transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider w-full sm:w-auto"
              >
                {text.book}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://t.me/shpaksn"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xs uppercase tracking-wider text-ember hover:text-background/80 transition-colors"
              >
                {text.learnMore}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
