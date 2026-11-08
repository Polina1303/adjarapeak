import { useLanguage } from "@/lib/i18n";
import { SALES_TEXT } from "@/lib/sales-text";
import { DeliveryTermsLink } from "./DeliveryTermsLink";
export function ProductAvailability({available}:{available:boolean}){const {lang}=useLanguage();const t=SALES_TEXT[lang];return <div className="mb-5 flex flex-wrap items-center gap-4 font-body text-sm" data-no-translate><span className={available?'text-moss':'text-muted-foreground'}>{available?t.available:t.unavailable}</span><DeliveryTermsLink/></div>;}
