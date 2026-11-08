import { Link } from "@tanstack/react-router";
import { resolveCatalogImage } from "@/lib/catalog-image";
import { useCatalogTranslations } from "@/lib/catalog-translations";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

type Group = { id: string; slug: string; title: string; image: string | null };
export function RentalSection({ groups }: { groups: Group[] }) {
  const { lang } = useLanguage();
  const translations = useCatalogTranslations(lang);
  const text = getSiteText(lang).home;
  if (!groups.length) return null;
  return <section className="section-padding py-8 md:py-11">
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-bold md:text-3xl">{text.rentalEquipment}</h2>
        <Link to="/rent" className="text-ember">{text.actions.rental}</Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {groups.map((group) => <Link key={group.id} to="/rent/$group" params={{ group: group.slug }} className="group rounded-xl bg-secondary/40 p-3 text-center">
          <img src={resolveCatalogImage(group.image)} alt="" width={240} height={240} loading="lazy" decoding="async" className="mb-3 aspect-square w-full rounded-lg object-contain p-3" />
          <h3 className="font-display text-sm font-semibold group-hover:text-ember">{translations.group("rentals", group.slug, group.title)}</h3>
        </Link>)}
      </div>
    </div>
  </section>;
}
