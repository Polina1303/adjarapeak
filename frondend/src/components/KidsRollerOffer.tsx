import { useId } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Gift, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { KIDS_ROLLER_CATALOG_PARAMS, KIDS_ROLLER_OFFER } from "@/lib/kids-roller-offer";
import { HomeOfferCard } from "@/components/HomeOfferCard";

export const KIDS_ROLLER_OFFER_TEXT = {
  RU: {
    badge: "Только сейчас",
    title: "Детские ролики",
    selection: "Десятки моделей",
    discount: "Скидки на отдельные модели",
    gift: "Защита в подарок",
    giftContents: "Локти, колени и запястья.",
    giftDetails: "Локти, колени и запястья — при покупке детских роликов.",
    limit: "Количество подарочных комплектов ограничено.",
    cta: "Выбрать ролики",
    consult: "Подобрать размер",
    posterAlt: "Акция: детские ролики за 120–225 лари и комплект защиты в подарок",
    all: "Все ролики",
    offer: "Модели акции · 120–225 ₾",
    message: "Здравствуйте! Интересуют детские ролики по акции с защитой в подарок. Помогите подобрать модель и размер.",
  },
  EN: {
    badge: "Limited offer",
    title: "Kids’ roller skates",
    selection: "Dozens of models",
    discount: "Discounts on selected models",
    gift: "Free protective gear",
    giftContents: "Elbow, knee and wrist guards.",
    giftDetails: "Elbow, knee and wrist guards with your purchase of kids’ roller skates.",
    limit: "Gift sets are available while stocks last.",
    cta: "Choose skates",
    consult: "Find the right size",
    posterAlt: "Offer: kids’ roller skates for ₾120–225 with free protective gear",
    all: "All skates",
    offer: "Offer models · ₾120–225",
    message: "Hello! I’m interested in kids’ skates with the free protective gear offer. Please help me choose a model and size.",
  },
  GE: {
    badge: "მხოლოდ ახლა",
    title: "საბავშვო როლიკები",
    selection: "ათობით მოდელი",
    discount: "ფასდაკლება შერჩეულ მოდელებზე",
    gift: "დამცავი ნაკრები საჩუქრად",
    giftContents: "იდაყვის, მუხლისა და მაჯის დამცავები.",
    giftDetails: "იდაყვის, მუხლისა და მაჯის დამცავები — საბავშვო როლიკების შეძენისას.",
    limit: "სასაჩუქრე ნაკრების რაოდენობა შეზღუდულია.",
    cta: "როლიკების არჩევა",
    consult: "ზომის შერჩევა",
    posterAlt: "აქცია: საბავშვო როლიკები 120–225 ლარად და დამცავი ნაკრები საჩუქრად",
    all: "ყველა როლიკი",
    offer: "აქციის მოდელები · 120–225 ₾",
    message: "გამარჯობა! მაინტერესებს საბავშვო როლიკები დამცავი ნაკრებით საჩუქრად. დამეხმარეთ მოდელისა და ზომის შერჩევაში.",
  },
} as const;

const actionClass = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-center font-body text-xs font-bold leading-snug transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

export function KidsRollerOffer({ compact = false, active = false }: { compact?: boolean; active?: boolean }) {
  const { lang } = useLanguage();
  const text = KIDS_ROLLER_OFFER_TEXT[lang];
  const headingId = useId();
  const contactUrl = `https://api.whatsapp.com/send?phone=995571208555&text=${encodeURIComponent(text.message)}`;

  if (!compact) {
    return (
      <HomeOfferCard
        headingId={headingId}
        eyebrow={text.badge}
        title={text.title}
        price="120–225 ₾"
        description={`${text.selection}. ${text.discount}.`}
        benefit={text.gift}
        details={text.giftContents}
        note={text.limit}
        icon={Gift}
        image={{ src: "/promotions/kids-rollers/poster-960.webp", alt: text.posterAlt }}
        destination="kids-skates"
        actionLabel={text.cta}
      />
    );
  }

  return (
    <section
      aria-labelledby={headingId}
      data-no-translate
      className="overflow-hidden rounded-2xl border border-[#f3d9bd] bg-[#fff7ed] p-4 text-foreground sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div>
            <span className="inline-flex items-center gap-2 font-body text-[10px] font-bold uppercase tracking-[0.16em] text-[#9c4900] sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
              {text.badge}
            </span>
            <h2 id={headingId} className="mt-2 font-display text-lg font-bold uppercase leading-tight sm:text-xl">
              {text.title}
            </h2>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="whitespace-nowrap font-display text-xl font-bold">120–225 ₾</span>
              <span className="font-body text-xs text-foreground/65 sm:text-sm">{text.selection}</span>
            </div>
            <p className="mt-1.5 font-body text-xs leading-relaxed text-foreground/65 sm:text-sm">{text.discount}</p>
          </div>

          <div className="mt-3 flex items-start gap-2.5">
            <Gift className="mt-0.5 h-5 w-5 shrink-0 text-[#a34e00]" aria-hidden="true" />
            <div className="min-w-0">
              <p className="font-display text-sm font-bold sm:text-base">{text.gift}</p>
              <p className="mt-1 font-body text-xs leading-relaxed text-foreground/75 sm:text-sm">{text.giftDetails}</p>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:max-w-52">
          {active ? (
            <a href={contactUrl} target="_blank" rel="noopener noreferrer" className={`${actionClass} bg-foreground text-background hover:bg-foreground/85`}>
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />{text.consult}
            </a>
          ) : (
            <Link to="/sale/$group/$category" params={KIDS_ROLLER_CATALOG_PARAMS} search={{ offer: KIDS_ROLLER_OFFER }} className={`${actionClass} bg-foreground text-background hover:bg-foreground/85`}>
              {text.cta}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          )}
        </div>
        <p className="font-body text-[10px] leading-relaxed text-foreground/60 sm:hidden">{text.limit}</p>
      </div>
      <p className="mt-3 hidden font-body text-[10px] leading-relaxed text-foreground/60 sm:block">{text.limit}</p>
    </section>
  );
}

export function KidsRollerGiftNote() {
  const { lang } = useLanguage();
  const text = KIDS_ROLLER_OFFER_TEXT[lang];
  return (
    <aside data-no-translate className="rounded-xl border border-[#f3d9bd] bg-[#fff7ed] p-4">
      <div className="flex items-start gap-2.5">
        <Gift className="mt-0.5 h-5 w-5 shrink-0 text-[#a34e00]" aria-hidden="true" />
        <div>
          <p className="font-display text-sm font-bold">{text.gift}</p>
          <p className="mt-1 font-body text-xs leading-relaxed text-foreground/75">{text.giftDetails}</p>
          <p className="mt-2 font-body text-[10px] leading-relaxed text-foreground/60">{text.limit}</p>
        </div>
      </div>
    </aside>
  );
}
