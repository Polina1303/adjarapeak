import { IdCard, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

export function RentalRequirements() {
  const { lang } = useLanguage();
  const text = getSiteText(lang).common;

  return (
    <div className="mt-1 space-y-2 border-t border-border/70 pt-3 font-body">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-moss/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-moss sm:text-[11px]">
        <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {text.rentalNoDeposit}
      </span>
      <p className="flex items-start gap-1.5 text-[10px] leading-snug text-muted-foreground sm:text-[11px]">
        <IdCard className="mt-px h-3.5 w-3.5 shrink-0 text-ember" aria-hidden="true" />
        <span className="sm:hidden">{text.rentalPassportShort}</span>
        <span className="hidden sm:inline">{text.rentalPassportRequired}</span>
      </p>
    </div>
  );
}
