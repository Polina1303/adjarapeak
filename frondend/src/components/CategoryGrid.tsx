import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import hikingTour from "@/assets/hiking-tour.jpg";
import kayaking from "@/assets/kayaking.jpg";
import summit from "@/assets/summit.jpg";
import camping from "@/assets/camping.jpg";
import equipment from "@/assets/equipment.jpg";
import trail from "@/assets/trail.jpg";

const destinations = [
  { image: hikingTour, title: "Hiking", count: "24 tours", to: "/rockClimbing" as const, span: "col-span-2 row-span-2" },
  { image: kayaking, title: "Kayaking", count: "8 tours", to: "/rockClimbing" as const, span: "col-span-1" },
  { image: summit, title: "Summit", count: "12 tours", to: "/rockClimbing" as const, span: "col-span-1" },
  { image: camping, title: "Camping", count: "15 tours", to: "/rockClimbing" as const, span: "col-span-1" },
  { image: equipment, title: "Gear Rental", count: "50+ items", to: "/rent" as const, span: "col-span-1" },
  { image: trail, title: "Trail Running", count: "10 routes", to: "/rockClimbing" as const, span: "col-span-2" },
];

export function CategoryGrid() {
  return (
    <section className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-body font-medium mb-3">
              Explore by Activity
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Find Your
              <br />
              Adventure
            </h2>
          </div>
          <Link
            to="/rockClimbing"
            className="text-sm font-body font-medium text-foreground flex items-center gap-1 hover:gap-2 transition-all border-b border-foreground/30 pb-0.5"
          >
            View all activities <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${dest.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <Link to={dest.to} className="absolute inset-0">
                <img
                  src={dest.image}
                  alt={dest.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="image-card-overlay absolute inset-0" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display font-bold text-primary-foreground text-lg">
                    {dest.title}
                  </h3>
                  <p className="text-primary-foreground/60 text-xs font-body mt-1">
                    {dest.count}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
