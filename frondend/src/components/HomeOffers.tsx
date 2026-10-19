import { useId } from "react";
import { KidsRollerOffer } from "@/components/KidsRollerOffer";
import { RentalEveningTeaser } from "@/components/RentalEveningOffer";
import { useLanguage } from "@/lib/i18n";

const TITLES = {
  RU: "Специальные предложения",
  EN: "Special offers",
  GE: "სპეციალური შეთავაზებები",
} as const;

export function HomeOffers() {
  const { lang } = useLanguage();
  const headingId = useId();

  return (
    <section id="kids-roller-offer" aria-labelledby={headingId} className="mx-auto max-w-[1400px] scroll-mt-20 px-4 py-6 md:px-6 lg:px-8">
      <h2 id={headingId} data-no-translate className="mb-5 font-display text-2xl font-bold leading-tight md:text-3xl">{TITLES[lang]}</h2>
      <div className="grid items-stretch gap-5 xl:grid-cols-2">
        <KidsRollerOffer />
        <RentalEveningTeaser />
      </div>
    </section>
  );
}
