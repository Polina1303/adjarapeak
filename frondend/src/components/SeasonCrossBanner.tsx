import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { SEASONAL_TEXT } from "@/lib/seasonal-text";
export function SeasonCrossBanner({group}:{group:string}) {
 const {lang}=useLanguage();const t=SEASONAL_TEXT[lang];
 if(group!=="alpinesking"&&group!=="fitness") return null;
 return <div className="mx-auto max-w-7xl px-4 py-6" data-no-translate><Link to="/sale/$group" params={{group:group==="fitness"?"alpinesking":"fitness"}} className="block rounded-xl border border-ember/30 bg-ember/10 p-5 font-display text-lg font-bold">{group==="fitness"?t.skiBanner:t.fitnessBanner} →</Link></div>;
}
