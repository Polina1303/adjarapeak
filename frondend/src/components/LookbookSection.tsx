import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import bannerSki from "@/assets/banner-ski.jpg";
import bannerCollection from "@/assets/banner-collection.jpg";

const lookbooks = [
  { image: bannerCollection, title: "Outdoor Fashion", subtitle: "Spring–Summer 2025 Lookbook" },
  { image: bannerSki, title: "Winter Sport", subtitle: "Ski & Snowboard Collection" },
];

export function LookbookSection() {
  return (
    <section className="section-padding py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          Lookbooks
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {lookbooks.map((lb, i) => (
            <motion.div
              key={lb.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={lb.image}
                alt={lb.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/50 font-body mb-1">
                  {lb.subtitle}
                </p>
                <h3 className="font-display font-bold text-2xl text-primary-foreground">
                  {lb.title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
