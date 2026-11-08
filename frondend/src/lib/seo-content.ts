export function socialMetadata(title: string, description: string) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}
export function productMetadata(
  title: string,
  description: string | null | undefined,
  category: string,
  lang: "RU" | "EN" | "GE" = "RU",
) {
  const clean = description
    ?.replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const templates = {
    RU: {
      title: `${title} — купить в Батуми | Adjara Peak`,
      description: `${title}${category ? ` — ${category}` : ""}. Купить в Батуми в магазине Adjara Peak.`,
    },
    EN: {
      title: `${title} — buy in Batumi | Adjara Peak`,
      description: `${title}${category ? ` — ${category}` : ""}. Shop at Adjara Peak in Batumi.`,
    },
    GE: {
      title: `${title} — შეძენა ბათუმში | Adjara Peak`,
      description: `${title}${category ? ` — ${category}` : ""}. შეიძინეთ Adjara Peak-ში, ბათუმში.`,
    },
  };
  return {
    title: templates[lang].title,
    description: Array.from(clean || templates[lang].description)
      .slice(0, 150)
      .join(""),
  };
}
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
export function jsonLd(schema: unknown) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
