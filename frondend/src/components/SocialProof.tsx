import { motion } from "framer-motion";
import { MapPin, Shield, Users, Award } from "lucide-react";

const features = [
  { icon: MapPin, title: "85+ Routes", desc: "Curated trails across Adjara" },
  { icon: Shield, title: "Certified Guides", desc: "Professional & experienced" },
  { icon: Users, title: "Small Groups", desc: "Max 12 people per tour" },
  { icon: Award, title: "12 Years", desc: "Operating since 2013" },
];

export function SocialProof() {
  return (
    <section className="section-padding py-16 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <f.icon className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">{f.title}</p>
                <p className="text-xs text-muted-foreground font-body mt-0.5">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
