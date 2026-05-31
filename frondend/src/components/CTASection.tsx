import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroMountains from "@/assets/hero-mountains.jpg";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <img
        src={heroMountains}
        alt="Mountain landscape"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center section-padding max-w-3xl mx-auto"
      >
        <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60 font-body font-medium mb-4">
          Start Your Journey
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 uppercase leading-[0.95]">
          Your Next
          <br />
          Adventure Awaits
        </h2>
        <p className="text-primary-foreground/60 text-base font-body mb-10 max-w-md mx-auto">
          Book a guided tour or rent premium equipment — your mountain story starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="heroLight" size="xl">
            <Link to="/rockClimbing">
              Browse Tours <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="heroBorder" size="xl">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
