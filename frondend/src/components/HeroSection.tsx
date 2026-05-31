import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-adventure.jpg";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Велоприключение в горах Кавказа"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 section-padding pb-16 md:pb-24 w-full">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 text-ember fill-ember" />
              ))}
            </div>
            <span className="text-primary-foreground/70 text-sm font-body">
              Оценка 4.9 · 2 400+ путешественников
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-primary-foreground leading-[0.9] mb-6 uppercase"
          >
            Живи
            <br />
            Дико
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-primary-foreground/70 text-base md:text-lg font-body max-w-lg mb-10 leading-relaxed"
          >
            Горные туры с гидами, прокат премиального снаряжения и незабываемые приключения в Аджарии, Грузия.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Button asChild variant="heroLight" size="lg">
              <Link to="/rockClimbing">
                Смотреть туры <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="heroBorder" size="lg" className="w-full md:w-auto">
              <Link to="/rent">Арендовать снаряжение</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
