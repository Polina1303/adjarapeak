import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Wrench, Snowflake, Droplets, ShieldCheck, Clock, MapPin, Phone } from "lucide-react";
import bannerSki from "@/assets/banner-ski.jpg";
import s0 from "@/assets/service-0.jpg";
import s1 from "@/assets/service-1.jpg";
import s2 from "@/assets/service-2.jpg";
import s3 from "@/assets/service-3.jpg";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

export const Route = createFileRoute("/service")({
  head: () => ({
    meta: [
      { title: "Сервисный центр — Adjara Peak" },
      { name: "description", content: "Заточка кантов, парафин, ремонт скользящей поверхности лыж и сноубордов в Батуми. Профессиональный сервис Adjara Peak." },
      { property: "og:title", content: "Сервисный центр — Adjara Peak" },
      { property: "og:description", content: "Профессиональный сервис лыж и сноубордов в Батуми: заточка кантов, парафин, ремонт." },
      { property: "og:image", content: bannerSki },
    ],
  }),
  component: ServicePage,
});

const featureIcons = [Wrench, Snowflake, Droplets, ShieldCheck];
const gallery = [s0, s1, s2, s3];

function ServicePage() {
  const { lang } = useLanguage();
  const text = getSiteText(lang).service;
  const features = text.features.map((feature, index) => ({
    ...feature,
    icon: featureIcons[index] ?? Wrench,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${bannerSki})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" aria-hidden />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="font-display text-4xl md:text-7xl font-bold text-foreground leading-[1.05] md:leading-[0.95] mb-6">
                {text.heroTitle}
              </h1>
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                {text.heroText}
              </p>
              <div className="flex flex-wrap gap-3 w-full">
                <a
                  href="#prices"
                  className="flex-1 inline-flex justify-center items-center gap-2 bg-ember text-ember-foreground hover:bg-ember/90 transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider"
                >
                  {text.priceList}
                </a>
                <a
                  href="#contact"
                  className="flex-1 inline-flex justify-center items-center gap-2 border border-border hover:border-ember hover:text-ember transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider text-foreground"
                >
                  {text.book}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding pb-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-border bg-card hover:border-ember/60 transition-colors"
            >
              <f.icon className="h-6 w-6 text-ember mb-4" />
              <h3 className="font-display text-sm uppercase tracking-wider text-foreground mb-2">
                {f.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="section-padding pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                {text.sectionTitle}
              </h2>
            </div>
            <p className="font-body text-sm text-muted-foreground max-w-sm">
              {text.sectionText}
            </p>
          </div>

          <div className="rounded-3xl border border-border overflow-hidden bg-card">
            <div className="hidden sm:grid grid-cols-[1fr_140px] px-6 py-4 border-b border-border bg-muted/40">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">{text.serviceColumn}</span>
              <span className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground text-right">{text.priceColumn}</span>
            </div>
            <ul>
              {text.services.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className={`grid sm:grid-cols-[1fr_140px] gap-2 px-6 py-5 border-b border-border last:border-b-0 ${
                    s.highlight ? "bg-ember/5" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-display text-sm uppercase tracking-wider text-foreground mb-1">
                      {s.title}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-2xl">
                      {s.desc}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <span className={`font-display text-lg font-bold ${s.highlight ? "text-ember" : "text-foreground"}`}>
                      {s.price}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-padding pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            {text.galleryTitle}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {gallery.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted"
              >
                <img src={src} alt={text.galleryAlt(i + 1)} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="section-padding pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl bg-foreground text-background p-10 md:p-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
              {text.ctaTitle}
            </h2>
            <p className="font-body text-sm text-background/70 leading-relaxed max-w-md">
              {text.ctaText}
            </p>
          </div>
          <div className="space-y-5 md:border-l md:border-background/15 md:pl-10">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-ember mt-0.5 shrink-0" />
              <div>
                <div className="font-display text-xs uppercase tracking-wider text-background/60 mb-1">{text.addressLabel}</div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Batumi%2C+Chavchavadze+St+81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm hover:text-ember transition-colors"
                >
                  {text.address}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-ember mt-0.5 shrink-0" />
              <div>
                <div className="font-display text-xs uppercase tracking-wider text-background/60 mb-1">{text.hoursLabel}</div>
                <div className="font-body text-sm">{text.hours}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-ember mt-0.5 shrink-0" />
              <div>
                <div className="font-display text-xs uppercase tracking-wider text-background/60 mb-1">{text.phoneLabel}</div>
                <a href="tel:+995555000000" className="font-body text-sm hover:text-ember transition-colors">
                  +995 555 000 000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
