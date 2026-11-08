import { MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { contacts } from "@/lib/contacts";
import { SEASONAL_TEXT } from "@/lib/seasonal-text";
export function FloatingMessengers() {
 const {lang}=useLanguage();const t=SEASONAL_TEXT[lang];
 return <aside className="fixed bottom-20 right-3 z-40 flex flex-col gap-2 lg:bottom-5 lg:right-5" aria-label={t.message} data-no-translate>
 <a href={`${contacts.whatsapp}?text=${encodeURIComponent(t.skiMessage)}`} target="_blank" rel="noopener noreferrer" aria-label={t.whatsapp} title={t.whatsapp} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#176542] text-white shadow-lg"><MessageCircle aria-hidden className="h-6 w-6"/></a>
 <a href={`${contacts.telegram}?text=${encodeURIComponent(t.skiMessage)}`} target="_blank" rel="noopener noreferrer" aria-label={t.telegram} title={t.telegram} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#126a98] text-white shadow-lg"><Send aria-hidden className="h-5 w-5"/></a>
 </aside>;
}
