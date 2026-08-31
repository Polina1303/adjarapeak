import { CalendarDays } from "lucide-react";
import { useLanguage, type Lang } from "@/lib/i18n";

type OfferText = {
  title: string;
  dailyPrefix: string;
  dailyTime: string;
  weekendPrefix: string;
  weekendPeriod: string;
  pickupPrefix: string;
  pickupTime: string;
  returnPrefix: string;
  sundayReturn: string;
  or: string;
  mondayReturn: string;
  paymentPrefix: string;
  paymentTime: string;
  paymentSuffix: string;
  closing: string;
};

const OFFER_TEXT: Record<Lang, OfferText> = {
  RU: {
    title: "Больше времени для отдыха",
    dailyPrefix: "При аренде на сутки — снаряжение предоставляется на ",
    dailyTime: "24 часа",
    weekendPrefix: "При аренде ",
    weekendPeriod: "на выходные (сб–вс)",
    pickupPrefix: " — забрать его можно уже ",
    pickupTime: "в пятницу с 16:00 до 20:00",
    returnPrefix: ", а вернуть ",
    sundayReturn: "в воскресенье до 20:00",
    or: " или ",
    mondayReturn: "в понедельник с 11:00 до 13:00",
    paymentPrefix: ", с оплатой всего за ",
    paymentTime: "2 суток",
    paymentSuffix: ".",
    closing: "Всё для того, чтобы ничто не отвлекало вас от отдыха!",
  },
  EN: {
    title: "More time for your adventure",
    dailyPrefix: "For a one-day rental, the equipment is provided for ",
    dailyTime: "24 hours",
    weekendPrefix: "For a ",
    weekendPeriod: "weekend rental (Sat–Sun)",
    pickupPrefix: ", you can pick it up as early as ",
    pickupTime: "Friday from 16:00 to 20:00",
    returnPrefix: " and return it ",
    sundayReturn: "by 20:00 on Sunday",
    or: " or ",
    mondayReturn: "on Monday from 11:00 to 13:00",
    paymentPrefix: ", paying for only ",
    paymentTime: "2 rental days",
    paymentSuffix: ".",
    closing: "Everything is arranged so nothing distracts you from your adventure!",
  },
  GE: {
    title: "მეტი დრო დასვენებისთვის",
    dailyPrefix: "ერთდღიანი ქირაობის შემთხვევაში აღჭურვილობა გაიცემა ",
    dailyTime: "24 საათით",
    weekendPrefix: "აღჭურვილობის ",
    weekendPeriod: "შაბათ-კვირისთვის ქირაობისას (შაბ–კვ)",
    pickupPrefix: " მისი წაღება შეგიძლიათ უკვე ",
    pickupTime: "პარასკევს 16:00-დან 20:00-მდე",
    returnPrefix: ", ხოლო დაბრუნება — ",
    sundayReturn: "კვირას 20:00-მდე",
    or: " ან ",
    mondayReturn: "ორშაბათს 11:00-დან 13:00-მდე",
    paymentPrefix: ", მხოლოდ ",
    paymentTime: "2 დღის",
    paymentSuffix: " საფასურის გადახდით.",
    closing: "ყველაფერი იმისთვის, რომ დასვენებაში არაფერმა შეგიშალოთ ხელი!",
  },
};

export function RentalWeekendOffer() {
  const { lang } = useLanguage();
  const text = OFFER_TEXT[lang];

  return (
    <aside className="rental-weekend-offer rounded-2xl border-2 p-4 md:p-5">
      <div className="flex items-start gap-3">
        <span className="rental-weekend-offer-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-destructive">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-destructive">
            {text.title}
          </h3>
          <div className="mt-3 space-y-3 font-body text-xs leading-relaxed text-foreground/80 md:text-sm">
            <p>
              {text.dailyPrefix}
              <strong className="font-bold text-foreground">{text.dailyTime}</strong>.
            </p>
            <p>
              {text.weekendPrefix}
              <strong className="font-bold text-foreground">{text.weekendPeriod}</strong>
              {text.pickupPrefix}
              <strong className="font-bold text-foreground">{text.pickupTime}</strong>
              {text.returnPrefix}
              <strong className="font-bold text-foreground">{text.sundayReturn}</strong>
              {text.or}
              <strong className="font-bold text-foreground">{text.mondayReturn}</strong>
              {text.paymentPrefix}
              <strong className="font-bold text-foreground">{text.paymentTime}</strong>
              {text.paymentSuffix}
            </p>
            <p className="rental-weekend-offer-divider border-t pt-3 font-semibold text-foreground">
              {text.closing}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
