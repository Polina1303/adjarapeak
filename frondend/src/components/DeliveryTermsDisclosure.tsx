import { useLanguage } from "@/lib/i18n";
import { ChevronDown, Truck } from "lucide-react";

const deliveryText = {
  RU: {
    title: "Условия доставки",
    batumi: "По Батуми — 10 лари. Бесплатно при заказе от 300 лари.",
    georgia: "По Грузии — от 20 лари. Бесплатно при заказе от 500 лари.",
    rental: "Для арендных товаров доступен только самовывоз.",
  },
  EN: {
    title: "Delivery terms",
    batumi: "In Batumi — 10 GEL. Free for orders of 300 GEL or more.",
    georgia:
      "Across Georgia — from 20 GEL. Free for orders of 500 GEL or more.",
    rental: "Rental equipment is available for pickup only.",
  },
  GE: {
    title: "მიწოდების პირობები",
    batumi: "ბათუმში — 10 ლარი. უფასო 300 ლარიდან შეკვეთებზე.",
    georgia:
      "საქართველოს მასშტაბით — 20 ლარიდან. უფასო 500 ლარიდან შეკვეთებზე.",
    rental: "გასაქირავებელი აღჭურვილობის მიღება შესაძლებელია მხოლოდ ადგილზე.",
  },
};

export function DeliveryTermsDisclosure() {
  const { lang } = useLanguage();
  const delivery = deliveryText[lang];
  return (
    <details
      className="group mt-4 rounded-xl border border-border bg-muted/30"
      data-no-translate
    >
      <summary
        className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-lg px-4 py-3 font-body text-sm font-bold normal-case tracking-normal text-foreground transition-colors hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden"
      >
        <span className="flex items-center gap-2.5">
          <Truck className="h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
          <span>{delivery.title}</span>
        </span>
        <ChevronDown
          className="h-4 w-4 shrink-0 text-ember transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="space-y-3 border-t border-border/70 px-4 pb-4 pt-4 font-body text-[15px] font-light normal-case tracking-normal leading-6 text-foreground/90 md:text-base">
        <p>{delivery.batumi}</p>
        <p>{delivery.georgia}</p>
        <p>{delivery.rental}</p>
      </div>
    </details>
  );
}
