import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, TrendingUp, Users, ArrowRight } from "lucide-react";
import hikingTour from "@/assets/hiking-tour.jpg";
import trail from "@/assets/trail.jpg";
import summit from "@/assets/summit.jpg";

const tours = [
  {
    image: hikingTour,
    title: "Alpine Meadow Trek",
    duration: "2 days",
    difficulty: "Moderate",
    group: "Up to 12",
    price: "89",
    tag: "Most Popular",
  },
  {
    image: summit,
    title: "Summit Expedition",
    duration: "4 days",
    difficulty: "Challenging",
    group: "Up to 8",
    price: "249",
    tag: "Epic",
  },
  {
    image: trail,
    title: "Sunrise Peak Hike",
    duration: "1 day",
    difficulty: "Easy",
    group: "Up to 15",
    price: "45",
    tag: "Beginner Friendly",
  },
];

export function FeaturedTours() {
  return (
    <section className="section-padding section-spacing bg-secondary/60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-body font-medium mb-3">
              Featured Experiences
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Popular Tours
            </h2>
          </div>
          <Button asChild variant="outline" size="default">
            <Link to="/rockClimbing">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-card rounded-2xl overflow-hidden card-hover group"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="pill-tag bg-primary-foreground/90 text-foreground backdrop-blur-sm">
                    {tour.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {tour.title}
                  </h3>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground font-body block">from</span>
                    <span className="font-display font-bold text-foreground text-lg">₾{tour.price}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground font-body mb-5">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-3.5 w-3.5" /> {tour.difficulty}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" /> {tour.group}
                  </span>
                </div>
                <Button variant="default" size="default" className="w-full">
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
