import {
  BadgeCheck,
  ChevronDown,
  CreditCard,
  FileText,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage, type Lang } from "@/lib/i18n";

type RuleGroup = {
  title: string;
  items: string[];
};

type RentalRulesCopy = {
  title: string;
  allRules: string;
  chips: Array<{ label: string; icon: LucideIcon }>;
  groups: RuleGroup[];
};

const RENTAL_RULES_TEXT: Record<Lang, RentalRulesCopy> = {
  RU: {
    title: "Правила проката",
    allRules: "Все правила",
    chips: [
      { label: "Без залога · нужен документ", icon: FileText },
      { label: "Оплата при выдаче", icon: CreditCard },
      { label: "Верните сухим и чистым", icon: RotateCcw },
    ],
    groups: [
      {
        title: "Оформление",
        items: [
          "Оплата производится при выдаче снаряжения. Бронирование подтверждается предоплатой.",
          "Снаряжение выдаётся без залога, для оформления нужен документ, удостоверяющий личность.",
        ],
      },
      {
        title: "Возврат",
        items: [
          "Верните снаряжение в согласованный срок, сухим и чистым. За просрочку без предупреждения взимается двойная суточная стоимость.",
          "При досрочном возврате перерасчёт стоимости и возврат средств не производятся.",
        ],
      },
      {
        title: "Ответственность",
        items: [
          "Повреждение оплачивается по стоимости ремонта. При утере или невосстановимой порче возмещается полная рыночная стоимость.",
        ],
      },
    ],
  },
  EN: {
    title: "Rental rules",
    allRules: "All rules",
    chips: [
      { label: "No deposit · ID required", icon: FileText },
      { label: "Pay on collection", icon: CreditCard },
      { label: "Return dry and clean", icon: RotateCcw },
    ],
    groups: [
      {
        title: "Rental setup",
        items: [
          "Payment is made when the equipment is issued. A booking is confirmed by prepayment.",
          "Equipment is provided without a deposit; a valid identity document is required.",
        ],
      },
      {
        title: "Returns",
        items: [
          "Return the equipment on time, dry and clean. Late return without notice is charged at twice the daily rate.",
          "If equipment is returned before the agreed date, the rental price is not recalculated and no refund is issued.",
        ],
      },
      {
        title: "Responsibility",
        items: [
          "Damage is charged at the repair cost. Loss or irreparable damage is charged at the full market value.",
        ],
      },
    ],
  },
  GE: {
    title: "ქირაობის წესები",
    allRules: "ყველა წესი",
    chips: [
      { label: "დეპოზიტის გარეშე · საჭიროა დოკუმენტი", icon: FileText },
      { label: "გადახდა აღებისას", icon: CreditCard },
      { label: "დააბრუნეთ მშრალი და სუფთა", icon: RotateCcw },
    ],
    groups: [
      {
        title: "გაფორმება",
        items: [
          "გადახდა ხდება აღჭურვილობის გაცემისას. ჯავშანი დასტურდება წინასწარი გადახდით.",
          "აღჭურვილობა გაიცემა დეპოზიტის გარეშე; გასაფორმებლად საჭიროა პირადობის დამადასტურებელი დოკუმენტი.",
        ],
      },
      {
        title: "დაბრუნება",
        items: [
          "აღჭურვილობა დააბრუნეთ შეთანხმებულ ვადაში, მშრალი და სუფთა. გაფრთხილების გარეშე დაგვიანება ორმაგი დღიური ტარიფით იანგარიშება.",
          "აღჭურვილობის შეთანხმებულ ვადაზე ადრე დაბრუნებისას თანხა არ გადაითვლება და არ დაბრუნდება.",
        ],
      },
      {
        title: "პასუხისმგებლობა",
        items: [
          "დაზიანებისას ანაზღაურდება შეკეთების ღირებულება. დაკარგვის ან გამოუსწორებელი დაზიანებისას ანაზღაურდება სრული საბაზრო ღირებულება.",
        ],
      },
    ],
  },
};

export function RentalRulesPanel() {
  const { lang } = useLanguage();
  const text = RENTAL_RULES_TEXT[lang];

  return (
    <section
      id="rental-rules"
      aria-labelledby="rental-rules-title"
      className="mb-6 scroll-mt-24 rounded-2xl border border-ember/20 bg-ember/5 px-5 py-5 shadow-sm md:px-6"
    >
      <div className="flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 shrink-0 text-ember" aria-hidden="true" />
        <h2
          id="rental-rules-title"
          className="font-display text-lg font-bold uppercase tracking-wide text-foreground md:text-xl"
        >
          {text.title}
        </h2>
      </div>

      <div className="mt-4 grid gap-2.5 md:grid-cols-3">
        {text.chips.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex min-h-11 items-center gap-2.5 rounded-xl bg-background/80 px-3.5 py-2.5 text-foreground"
          >
            <Icon className="h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
            <span className="font-body text-sm font-light normal-case tracking-normal leading-snug md:text-[15px]">
              {label}
            </span>
          </div>
        ))}
      </div>

      <details className="group mt-3 border-t border-border/70 pt-2">
        <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-1 py-2 font-body text-sm font-bold normal-case tracking-normal text-foreground transition-colors hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
          <span>{text.allRules}</span>
          <ChevronDown
            className="h-4 w-4 shrink-0 text-ember transition-transform duration-200 group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>

        <div className="space-y-5 px-1 pb-2 pt-3">
          {text.groups.map((group) => {
            const headingId = `rental-rule-${group.title}`;
            return (
              <section key={group.title} aria-labelledby={headingId}>
                <h3
                  id={headingId}
                  className="font-body text-sm font-bold normal-case tracking-normal text-foreground md:text-base"
                >
                  {group.title}
                </h3>
                <ul className="mt-2 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-body text-[15px] font-light normal-case tracking-normal leading-6 text-foreground/90 md:text-base"
                    >
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </details>
    </section>
  );
}
