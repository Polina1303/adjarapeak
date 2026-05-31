import { createFileRoute, Outlet, useChildMatches } from "@tanstack/react-router";
import { listShopGroups } from "@/lib/catalog.functions";
import { TilePicker } from "@/components/TilePicker";
import { useCatalogTranslations } from "@/lib/catalog-translations";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/sale")({
  staleTime: 5 * 60 * 1000,
  loader: async () => await listShopGroups(),
  head: () => ({
    meta: [
      { title: "Магазин — Adjara Peak" },
      { name: "description", content: "Снаряжение, одежда и экипировка для приключений." },
    ],
  }),
  component: ShopIndex,
});

function ShopIndex() {
  const childMatches = useChildMatches();
  const groups = Route.useLoaderData();
  const { lang } = useLanguage();
  const catalogTranslations = useCatalogTranslations(lang);
  if (childMatches.length > 0) return <Outlet />;
  return (
    <TilePicker
      title="Магазин"
      items={groups.map((g) => ({
        id: g.id,
        slug: g.slug,
        title: catalogTranslations.group("shop", g.slug, g.title),
        image: g.image,
      }))}
      buildHref={(slug) => ({ to: "/sale/$group", params: { group: slug } })}
      emptyText="Категории пока недоступны."
    />
  );
}
