import { motion } from "framer-motion";
import { Binoculars, ExternalLink, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

const INATURALIST_URL = "https://www.inaturalist.org";

export function InterestingSection() {
  const { lang } = useLanguage();
  const text = getSiteText(lang).home.interesting;

  return (
    <section
      id="interesting"
      className="section-padding scroll-mt-20 py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl bg-foreground text-background"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-moss/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-ember/15 blur-3xl"
          />

          <div className="relative grid items-center gap-10 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:p-14">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-background/15 px-3 py-1.5">
                <Leaf className="h-3.5 w-3.5 text-ember" />
                <span className="font-body text-[10px] uppercase tracking-[0.16em] text-background/60">
                  {text.eyebrow}
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                {text.title}
              </h2>

              <p className="mt-5 max-w-xl font-body text-sm leading-relaxed text-background/70 md:text-base">
                {text.description}
              </p>

              <Button
                asChild
                variant="ember"
                size="lg"
                className="mt-7 w-full sm:w-auto"
              >
                <a
                  href={INATURALIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text.cta}
                  <ExternalLink />
                </a>
              </Button>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-48 w-48 items-center justify-center rounded-full border border-background/10 bg-background/5 lg:flex"
            >
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-moss/20">
                <Binoculars className="h-14 w-14 text-ember" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
