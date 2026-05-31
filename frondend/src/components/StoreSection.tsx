import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

export function StoreSection() {
  const { lang } = useLanguage();
  const text = getSiteText(lang).contact;
  return (
    <section className="section-padding py-12 md:py-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 font-body text-sm"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">{text.title}</h2>
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 text-ember shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold uppercase tracking-wider mb-1">{text.addressTitle}</h3>
                <a
                  href="https://www.google.com/maps?cid=6512661380146566532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 uppercase hover:text-ember transition-colors"
                >
                  {text.address}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="h-5 w-5 text-ember shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold uppercase tracking-wider mb-1">{text.hoursTitle}</h3>
            <p className="text-foreground/70 uppercase">{text.hours}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="h-5 w-5 text-ember shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold uppercase tracking-wider mb-1">{text.phonesTitle}</h3>
                <p className="text-foreground/70">
                  <a href="tel:+995571208555" className="hover:text-foreground transition-colors">+995-571-208-555</a> (GEO, ENG, RU)
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Star className="h-5 w-5 text-ember shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold uppercase tracking-wider mb-1">{text.reviewsTitle}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <a
                    href="https://www.google.com/maps?cid=6512661380146566532"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ember hover:underline uppercase"
                  >
                    {text.googleReview}
                  </a>
                  <a
                    href="https://yandex.com.ge/maps/org/adzhara_pik/33060720484/reviews/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ember hover:underline uppercase"
                  >
                    {text.yandexReview}
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              title={text.mapTitle}
              src={`https://maps.google.com/maps?cid=6512661380146566532&output=embed&hl=${text.mapLang}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80 border-0 rounded-2xl"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
