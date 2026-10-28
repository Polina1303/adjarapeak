import { AlertCircle, ShieldCheck } from "lucide-react";
import { useLanguage, type Lang } from "@/lib/i18n";

const RENTAL_RULES_TEXT: Record<
  Lang,
  { title: string; intro: string; items: string[] }
> = {
  RU: {
    title: "Правила проката",
    intro: "Пожалуйста, ознакомьтесь с правилами до получения снаряжения.",
    items: [
      "Оплата производится при выдаче снаряжения. Бронирование подтверждается предоплатой.",
      "Снаряжение выдаётся без залога; для оформления необходим документ, удостоверяющий личность.",
      "Снаряжение необходимо вернуть в согласованный срок, сухим и чистым. За просрочку без предупреждения взимается двойная суточная стоимость.",
      "При возврате снаряжения раньше согласованного срока перерасчёт стоимости и возврат средств не производятся.",
      "Повреждение оплачивается по стоимости ремонта; при утере или невосстановимой порче возмещается полная рыночная стоимость.",
    ],
  },
  EN: {
    title: "Rental rules",
    intro: "Please read the rules before collecting the equipment.",
    items: [
      "Payment is made when the equipment is issued. A booking is confirmed by prepayment.",
      "Equipment is provided without a deposit; a valid identity document is required.",
      "Equipment must be returned on time, dry and clean. Late return without notice is charged at twice the daily rate.",
      "If equipment is returned before the agreed date, the rental price is not recalculated and no refund is issued.",
      "Damage is charged at the repair cost; loss or irreparable damage is charged at the full market value.",
    ],
  },
  GE: {
    title: "ქირაობის წესები",
    intro: "გთხოვთ, აღჭურვილობის მიღებამდე გაეცნოთ წესებს.",
    items: [
      "გადახდა ხდება აღჭურვილობის გაცემისას. ჯავშანი დასტურდება წინასწარი გადახდით.",
      "აღჭურვილობა გაიცემა დეპოზიტის გარეშე; გასაფორმებლად საჭიროა პირადობის დამადასტურებელი დოკუმენტი.",
      "აღჭურვილობა უნდა დაბრუნდეს შეთანხმებულ ვადაში, მშრალი და სუფთა. გაფრთხილების გარეშე დაგვიანება ორმაგი დღიური ტარიფით იანგარიშება.",
      "აღჭურვილობის შეთანხმებულ ვადაზე ადრე დაბრუნებისას თანხა არ გადაითვლება და არ დაბრუნდება.",
      "დაზიანებისას ანაზღაურდება შეკეთების ღირებულება; დაკარგვის ან გამოუსწორებელი დაზიანებისას — სრული საბაზრო ღირებულება.",
    ],
  },
};

export function RentalRulesPanel() {
  const { lang } = useLanguage();
  const text = RENTAL_RULES_TEXT[lang];

  return (
    <section
      aria-labelledby="rental-rules-title"
      className="relative mb-10 overflow-hidden rounded-2xl border-2 border-ember bg-ember/5 px-5 py-6 shadow-sm md:px-8 md:py-7"
    >
      <div className="absolute inset-y-0 left-0 w-1.5 bg-ember" aria-hidden="true" />
      <div className="flex items-start gap-4">
        <div className="hidden shrink-0 rounded-full bg-ember p-3 text-white sm:block">
          <ShieldCheck className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 sm:block">
            <AlertCircle className="h-5 w-5 shrink-0 text-ember sm:hidden" aria-hidden="true" />
            <h2
              id="rental-rules-title"
              className="font-display text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl"
            >
              {text.title}
            </h2>
          </div>
          <p className="mt-2 font-body text-sm text-muted-foreground md:text-base">
            {text.intro}
          </p>
          <ol className="mt-5 grid gap-3 lg:grid-cols-2">
            {text.items.map((item, index) => (
              <li key={item} className="flex items-start gap-3 font-body text-sm leading-relaxed text-foreground md:text-base">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember font-display text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
