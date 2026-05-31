import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    text: "An unforgettable experience. The guides were incredible and the views took my breath away. Already planning our next trip!",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "David Kim",
    location: "Seoul, Korea",
    text: "Best outdoor tour company in Georgia. Professional equipment, knowledgeable staff, and stunning routes nobody else knows about.",
    rating: 5,
    avatar: "DK",
  },
  {
    name: "Elena Rossi",
    location: "Milan, Italy",
    text: "We rented all our gear here — top quality, fair prices, and the team went above and beyond to make our trip perfect.",
    rating: 5,
    avatar: "ER",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-body font-medium mb-3">
            What People Say
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Trusted by Adventurers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border/80 relative"
            >
              <Quote className="h-8 w-8 text-border mb-4" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-ember fill-ember" />
                ))}
              </div>
              <p className="text-foreground font-body text-sm leading-relaxed mb-8">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                  <span className="text-xs font-display font-bold text-primary-foreground">
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-display font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
