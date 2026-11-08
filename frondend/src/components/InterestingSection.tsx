import { motion } from "framer-motion";
import { Binoculars, ExternalLink } from "lucide-react";
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
      className="section-padding scroll-mt-20 py-5 md:py-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-2xl border border-border bg-card text-foreground"
        >
          <div className="flex flex-col gap-5 p-5 sm:p-6 md:flex-row md:items-center md:px-8">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-moss/10 text-moss">
              <Binoculars className="h-5 w-5" aria-hidden="true" />
            </span>

            <div className="min-w-0 flex-1">
              <p className="font-body text-[10px] uppercase tracking-[0.16em] text-ember">
                {text.eyebrow}
              </p>
              <h2 className="mt-1 font-display text-xl font-bold leading-tight md:text-2xl">
                {text.title}
              </h2>
              <p className="mt-2 max-w-3xl font-body text-xs leading-relaxed text-muted-foreground md:text-sm">
                {text.description}
              </p>
            </div>

            <Button asChild variant="outline" size="sm" className="w-full shrink-0 md:w-auto">
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
        </motion.div>
      </div>
    </section>
  );
}
