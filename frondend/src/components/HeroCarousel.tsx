import { Link } from "@tanstack/react-router";
import heroCamping from "@/assets/hero-camping.jpg";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import { getResponsiveImageProps } from "@/lib/responsive-image";
export function HeroCarousel() {
  const { lang } = useLanguage();
  const text = getSiteText(lang).home.hero.slides[0];
  return <section className="mx-auto max-w-[1400px] p-4 md:p-6">
    <div className="relative isolate flex min-h-[440px] items-end overflow-hidden rounded-xl bg-foreground p-6 md:min-h-[560px] md:p-10">
      <img {...getResponsiveImageProps("hero/hero-camping.jpg", "100vw", 1280)} src={heroCamping} alt="" width={1280} height={720} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 to-black/10" />
      <div className="max-w-3xl text-white"><h2 className="font-display text-4xl font-bold md:text-6xl">{text.title}</h2><p className="my-5">{text.subtitle}</p><Link to="/sale" className="inline-flex rounded-full bg-ember px-6 py-3 text-ember-foreground">{text.cta}</Link></div>
    </div>
  </section>;
}
