import { Clock3, MoonStar } from "lucide-react";
import { useLanguage, type Lang } from "@/lib/i18n";

type EveningOfferText = {
  badge: string;
  title: string;
  schedule: string;
  benefit: string;
  priceLabel: string;
  price: string;
  deposit: string;
};

const EVENING_OFFER_TEXT: Record<Lang, EveningOfferText> = {
  RU: {
    badge: "Специальный тариф",
    title: "Вечернее катание 🌙",
    schedule:
      "Заберите велосипед, ролики или лонгборд с 18:00 до 19:30 и верните на следующий день с 11:00 до 11:30. Оплата — всего за 3 часа аренды.",
    benefit:
      "Катайтесь вечером, когда жара уже спала, и продолжайте прогулку после закрытия магазина.",
    priceLabel: "Стоимость",
    price: "20–30 ₾",
    deposit: "Без залога",
  },
  EN: {
    badge: "Special rate",
    title: "Evening ride 🌙",
    schedule:
      "Pick up a bicycle, skates, or longboard from 18:00 to 19:30 and return it the next day from 11:00 to 11:30. Pay for only 3 rental hours.",
    benefit:
      "Ride after the heat has eased and keep enjoying your evening after the store closes.",
    priceLabel: "Price",
    price: "₾20–30",
    deposit: "No deposit",
  },
  GE: {
    badge: "სპეციალური ტარიფი",
    title: "საღამოს გასეირნება 🌙",
    schedule:
      "აიღეთ ველოსიპედი, როლიკები ან ლონგბორდი 18:00-დან 19:30-მდე და დააბრუნეთ მეორე დღეს 11:00-დან 11:30-მდე. გადაიხადეთ მხოლოდ 3 საათის ქირის საფასური.",
    benefit:
      "ისეირნეთ საღამოს, როცა სიცხე იკლებს, და გააგრძელეთ გასეირნება მაღაზიის დახურვის შემდეგაც.",
    priceLabel: "ღირებულება",
    price: "20–30 ₾",
    deposit: "გირაო არ არის საჭირო",
  },
};

export const EVENING_RENTAL_CATEGORY_SLUGS = new Set([
  "rentBIKE",
  "rentROLLER",
  "rentBOARD",
]);

export function RentalEveningOffer({ compact = false }: { compact?: boolean }) {
  const { lang } = useLanguage();
  const text = EVENING_OFFER_TEXT[lang];

  return (
    <aside
      className={`relative overflow-hidden border border-ember/40 bg-gradient-to-br from-foreground via-foreground to-foreground/90 text-background shadow-lg ${
        compact ? "rounded-xl p-4" : "rounded-2xl p-5 md:p-6"
      }`}
    >
      <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-ember/25 blur-2xl" />
      <div className="relative flex items-start gap-3 md:gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember text-primary-foreground shadow-md">
          <MoonStar className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <span className="inline-flex rounded-full border border-background/20 bg-background/10 px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-[0.16em] text-background/80">
            {text.badge}
          </span>
          <h2
            className={`mt-2 font-display font-bold uppercase tracking-wide text-background ${
              compact ? "text-base" : "text-xl md:text-2xl"
            }`}
          >
            {text.title}
          </h2>
          <p className="mt-2 font-body text-xs leading-relaxed text-background/85 md:text-sm">
            {text.schedule}
          </p>
          {!compact && (
            <p className="mt-2 font-body text-xs leading-relaxed text-background/65 md:text-sm">
              {text.benefit}
            </p>
          )}
          <div className="mt-4 flex flex-wrap items-center gap-2 font-body text-xs font-bold md:text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ember px-3 py-1.5 text-primary-foreground">
              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
              {text.priceLabel}: {text.price}
            </span>
            <span className="rounded-full border border-background/20 bg-background/10 px-3 py-1.5 text-background">
              {text.deposit}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
