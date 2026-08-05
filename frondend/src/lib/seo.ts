export const SITE_ORIGIN = "https://www.adjarapeak.ge";

export const absoluteSiteUrl = (path = "/") =>
  `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;

export const canonicalLink = (path = "/") => ({
  rel: "canonical",
  href: absoluteSiteUrl(path),
});

export const ADJARA_PEAK_LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportingGoodsStore",
      "@id": `${SITE_ORIGIN}/#store`,
      name: "Adjara Peak",
      alternateName: ["Adjarapeak", "Аджара Пик"],
      url: `${SITE_ORIGIN}/`,
      image: `${SITE_ORIGIN}/og-adjarapeak.png`,
      description:
        "Спортивный магазин и прокат туристического снаряжения в Батуми. Товары для спорта, туризма, кемпинга, велоспорта, фитнеса, плавания и зимних видов спорта.",
      telephone: "+995571208555",
      currenciesAccepted: "GEL",
      address: {
        "@type": "PostalAddress",
        streetAddress: "19 General Aslan Abashidze Street",
        addressLocality: "Batumi",
        addressRegion: "Adjara",
        addressCountry: "GE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.63342,
        longitude: 41.615363,
      },
      hasMap: "https://www.google.com/maps?cid=6512661380146566532",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "11:00",
          closes: "20:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Batumi" },
        { "@type": "AdministrativeArea", name: "Adjara" },
      ],
      knowsLanguage: ["ru", "en", "ka"],
      sameAs: [
        "https://www.google.com/maps?cid=6512661380146566532",
        "https://yandex.com.ge/maps/org/adzhara_pik/33060720484/",
        "https://instagram.com/adjarapeak/",
        "https://t.me/adjarapeak",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: "Adjara Peak",
      alternateName: "Adjarapeak",
      inLanguage: ["ru", "en", "ka"],
      publisher: { "@id": `${SITE_ORIGIN}/#store` },
    },
  ],
};
