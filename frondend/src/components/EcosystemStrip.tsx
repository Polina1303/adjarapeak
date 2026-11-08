import { Link } from "@tanstack/react-router";
import { Store, Tent, Wrench, Mountain, Route } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { SALES_TEXT } from "@/lib/sales-text";
const entries = [
  { to: "/sale", Icon: Store },
  { to: "/rent", Icon: Tent },
  { to: "/service", Icon: Wrench },
  { to: "/hikes", Icon: Route },
  { to: "/rockClimbing", Icon: Mountain },
] as const;
export function EcosystemStrip() {
  const { lang } = useLanguage();
  const t = SALES_TEXT[lang];
  return (
    <section className="section-padding py-6" data-no-translate>
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-5 font-display text-2xl font-bold md:text-3xl">
          {t.ecosystem}
        </h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {entries.map(({ to, Icon }, i) => (
            <Link
              key={to}
              to={to}
              className="flex gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-ember/50"
            >
              <Icon className="mt-1 h-5 w-5 shrink-0 text-ember" aria-hidden />
              <div>
                <h3 className="font-display text-sm font-bold">
                  {t.ecosystemNames[i]}
                </h3>
                <p className="mt-1 font-body text-xs leading-relaxed text-muted-foreground">
                  {t.ecosystemDescriptions[i]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
