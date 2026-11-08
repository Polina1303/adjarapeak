import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { SEASONAL_TEXT } from "@/lib/seasonal-text";
import { seasonalHero } from "@/lib/seasonal-config";
export function SeasonalHero() {
 const {lang} = useLanguage(); const t = SEASONAL_TEXT[lang]; const winter=seasonalHero.mode === "winter";
 const actions = winter ? [["/rent/skiRental",t.rentalAction],["/sale/alpinesking",t.shopAction],["/service",t.serviceAction]] : [["/rent/tents",t.summerCards[0]],["/rent/sup",t.summerCards[1]],["/rent/bikes",t.summerCards[2]]];
 return <section data-no-translate className="mx-auto max-w-[1400px] px-4 py-4 md:px-6 md:py-6 lg:px-8">
  <div className="relative isolate overflow-hidden rounded-2xl bg-[#0b2632] px-5 py-10 text-white md:px-12 md:py-16">
   <img src={seasonalHero[seasonalHero.mode].image} alt="" width={1600} height={900} fetchPriority="high" loading="eager" className="absolute inset-0 -z-20 h-full w-full object-cover" />
   <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061b24]/95 via-[#061b24]/80 to-transparent" />
   <p className="mb-5 font-body text-xs uppercase tracking-[0.2em] text-white/80">Adjara Peak / {winter?t.season:"Batumi"}</p>
   <h1 className="max-w-4xl font-display text-[clamp(1.8rem,4.5vw,3.8rem)] font-bold leading-[1.12]">{winter?t.winterTitle:t.summerTitle}</h1>
   <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-white/85 md:text-lg">{winter?t.winterSubtitle:t.summerSubtitle}</p>
   <div className="mt-8 grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-3">{actions.map(([href,label])=><Link key={href} to={href} className="flex min-h-14 items-center justify-center rounded-xl bg-ember px-4 py-3 text-center font-body text-sm font-bold text-ember-foreground hover:bg-ember/90">{label}</Link>)}</div>
   <form action="/search" method="get" className="mt-7 flex max-w-3xl items-center gap-2 rounded-xl border border-white/30 bg-white p-2 text-foreground">
    <Search className="ml-2 h-5 w-5 shrink-0" aria-hidden /><label htmlFor="home-search" className="sr-only">{t.search}</label><input id="home-search" name="q" type="search" required placeholder={t.search} className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none"/><button type="submit" className="rounded-lg bg-foreground px-4 py-3 text-sm text-background">{t.searchButton}</button>
   </form>
   {winter&&<p className="mt-5 font-body text-[10px] text-white/65">{t.imageTodo}</p>}
  </div>
 </section>;
}
