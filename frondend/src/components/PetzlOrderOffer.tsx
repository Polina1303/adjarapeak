import { ArrowUpRight, Clock3 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const TEXT = {
  RU: {
    badge: "Под заказ",
    title: "Снаряжение Petzl",
    description: "Привозим оборудование Petzl под заказ. Напишите нам, чтобы уточнить стоимость и оформить заказ.",
    delivery: "Доставка 7–10 дней",
    cta: "Заказать в Telegram",
  },
  EN: {
    badge: "On request",
    title: "Petzl equipment",
    description: "We bring in Petzl equipment to order. Message us for pricing and to place your order.",
    delivery: "Delivery in 7–10 days",
    cta: "Order via Telegram",
  },
  GE: {
    badge: "შეკვეთით",
    title: "Petzl-ის აღჭურვილობა",
    description: "ჩამოგვაქვს Petzl-ის აღჭურვილობა შეკვეთით. ფასის გასაგებად და შეკვეთის გასაფორმებლად მოგვწერეთ.",
    delivery: "მიწოდება 7–10 დღეში",
    cta: "შეკვეთა Telegram-ში",
  },
} as const;

export function PetzlOrderOffer() {
  const { lang } = useLanguage();
  const text = TEXT[lang];

  return (
    <section className="overflow-hidden rounded-2xl border border-ember/30 bg-foreground p-5 text-background sm:p-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <span className="font-body text-[10px] font-medium uppercase tracking-[0.15em] text-ember">
            {text.badge}
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide md:text-3xl">
            {text.title}
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-background/75">
            {text.description}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 font-body text-sm text-background">
            <Clock3 className="h-4 w-4 text-ember" aria-hidden="true" />
            {text.delivery}
          </span>
          <a
            href="https://t.me/adjarapeak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-ember-foreground transition-colors hover:bg-ember/90 sm:w-auto"
          >
            {text.cta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
