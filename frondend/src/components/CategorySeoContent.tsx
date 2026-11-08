import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { getCategorySeo } from "@/lib/category-seo";
import { SALES_TEXT } from "@/lib/sales-text";
import { LocalizedSeo } from "./LocalizedSeo";
export function CategorySeoContent({ group }: { group: string }) {
  const { lang } = useLanguage();
  const copy = getCategorySeo(group, lang);
  const t = SALES_TEXT[lang];
  if (!copy) return null;
  const ski = group === "alpinesking",
    fitness = group === "fitness";
  return (
    <section
      className="mt-5 border-t border-border pt-6 font-body text-sm leading-relaxed text-muted-foreground"
      data-no-translate
    >
      <LocalizedSeo title={copy.title} description={copy.description} />
      {(ski || fitness) && (
        <Link
          to="/sale/$group"
          params={{ group: ski ? "fitness" : "alpinesking" }}
          data-fitness-banner={ski ? true : undefined}
          data-ski-banner={fitness ? true : undefined}
          className="mb-6 block rounded-xl border border-ember/25 bg-ember/5 p-5 font-display text-base font-bold text-foreground"
        >
          {ski ? t.crossFitness : t.crossSki} →
        </Link>
      )}
      <div className="space-y-4">
        {copy.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
        <Link to="/rent" className="text-ember underline underline-offset-4">
          {t.rental}
        </Link>
        <Link to="/service" className="text-ember underline underline-offset-4">
          {t.service}
        </Link>
        <Link
          to="/sale/$group"
          params={{ group: fitness ? "alpinesking" : "fitness" }}
          className="text-ember underline underline-offset-4"
        >
          {fitness ? t.skiShop : t.fitnessTitle}
        </Link>
        {fitness && (
          <Link
            to="/sale/$group"
            params={{ group: "boards" }}
            className="text-ember underline underline-offset-4"
          >
            {t.balance}
          </Link>
        )}
      </nav>
    </section>
  );
}
