import type { Hike } from "@/lib/hikes.functions";
import type { Lang } from "@/lib/i18n";

type HikeTranslation = Partial<
  Pick<
    Hike,
    | "title"
    | "shortly"
    | "description"
    | "difficulty"
    | "duration"
    | "group_size"
    | "location"
    | "features"
    | "reasons"
    | "packing_list"
  >
>;

type HikeWithTranslationColumns = Hike & {
  title_en?: string | null;
  title_ka?: string | null;
  shortly_en?: string | null;
  shortly_ka?: string | null;
  description_en?: string | null;
  description_ka?: string | null;
  difficulty_en?: string | null;
  difficulty_ka?: string | null;
  duration_en?: string | null;
  duration_ka?: string | null;
  group_size_en?: string | null;
  group_size_ka?: string | null;
  location_en?: string | null;
  location_ka?: string | null;
  features_en?: unknown;
  features_ka?: unknown;
  reasons_en?: unknown;
  reasons_ka?: unknown;
  packing_list_en?: unknown;
  packing_list_ka?: unknown;
};

const CURRENT_HIKE_TRANSLATIONS: Record<string, Partial<Record<Lang, HikeTranslation>>> = {
  SAMEGRELO: {
    EN: {
      title: "HIKE TO MYSTERIOUS SAMEGRELO",
      shortly:
        "A new signature route that we have not seen anywhere online yet. Samegrelo is a land of ancient princes, forgotten fortresses and legends. The Dadiani family ruled here for centuries, leaving towers, ruins and plenty of mysteries behind. On the first Saturday of summer, we set out to explore one of the region's most interesting corners.",
      description:
        "Intsira Waterfalls\nA short but very rich route through forest and canyon.\nOn the trail we will have:\n- creek crossings over stones;\n- descents by ladders;\n- boulder sections and small adventures;\n- several scenic waterfalls;\n- a chance to swim in crystal-clear water;\n- a cave above one of the waterfalls for the bravest participants.\n\nChakvindzhi Fortress\nAfter the hike, we will visit one of Samegrelo's largest and least-known fortresses. Its exact founding date is still unknown. The fortress is well preserved, and its walls open beautiful views over the surrounding valleys.",
      difficulty: "Medium",
      features: ["Experienced guide", "Transfer with waiting time"],
      packing_list: [
        {
          title: "Comfortable trekking clothes and shoes",
          items: [
            "Pants or leggings, as there are thorns and nettles",
            "Headwear",
            "Sunscreen",
            "Tick repellent",
            "Trekking poles, optional",
            "Swimsuit and towel",
            "Flashlight for visiting the cave",
            "Crocs or shoes you do not mind getting wet for the cave",
          ],
        },
      ],
    },
    GE: {
      title: "ლაშქრობა იდუმალ სამეგრელოში",
      shortly:
        "ახალი, ავტორული მიმართულება, რომელიც ინტერნეტში ჯერ არ შეგვხვედრია. სამეგრელო არის ძველი მთავრების, მივიწყებული ციხეებისა და ლეგენდების მხარე. აქ საუკუნეების განმავლობაში დადიანების გვარი მმართველობდა და უკან კოშკები, ნანგრევები და უამრავი საიდუმლო დატოვა. ზაფხულის პირველ შაბათს რეგიონის ერთ-ერთ ყველაზე საინტერესო კუთხეს ვიკვლევთ.",
      description:
        "ინცირას ჩანჩქერები\nმოკლე, მაგრამ ძალიან მრავალფეროვანი მარშრუტი ტყესა და ხეობაში.\nბილიკზე გველოდება:\n- ნაკადულების ქვებზე გადაკვეთა;\n- კიბეებით დაშვებები;\n- ლოდებიანი მონაკვეთები და პატარა თავგადასავლები;\n- რამდენიმე თვალწარმტაცი ჩანჩქერი;\n- კრისტალურად სუფთა წყალში ბანაობის შესაძლებლობა;\n- გამოქვაბული ერთ-ერთი ჩანჩქერის ზემოთ ყველაზე გაბედული მონაწილეებისთვის.\n\nჭაქვინჯის ციხე\nლაშქრობის შემდეგ სამეგრელოს ერთ-ერთ უდიდეს და ნაკლებად ცნობილ ციხეს ვესტუმრებით. მისი დაარსების ზუსტი თარიღი დღემდე უცნობია. ციხე კარგად არის შემონახული, ხოლო კედლებიდან მიმდებარე ხეობებზე შესანიშნავი ხედები იშლება.",
      difficulty: "საშუალო",
      features: ["გამოცდილი გიდი", "ტრანსფერი ლოდინით"],
      packing_list: [
        {
          title: "კომფორტული ტანსაცმელი და ფეხსაცმელი ტრეკინგისთვის",
          items: [
            "შარვალი ან ლეგინსი, რადგან არის ეკლები და ჭინჭარი",
            "თავსაბურავი",
            "მზისგან დამცავი კრემი",
            "ტკიპების საწინააღმდეგო საშუალება",
            "ტრეკინგის ჯოხები სურვილისამებრ",
            "საცურაო კოსტიუმი და პირსახოცი",
            "ფანარი გამოქვაბულის მოსანახულებლად",
            "კროქსები ან ფეხსაცმელი, რომლის დასველებაც არ დაგენანებათ",
          ],
        },
      ],
    },
  },
  "gomis-mta": {
    EN: {
      title: "GOMIS MTA — hiking to Mount Didi Vake and a sunset above a sea of clouds",
      shortly:
        "One of Guria's most magical locations: misty ridges, abandoned summer houses and sunsets above the clouds at more than 2000 meters.",
      description:
        "We will climb to the summit of Didi Vake, enjoy signature aromatic tea with sweets, and take in panoramic views from 2333 meters.\nTo finish, we will watch the sunset over a sea of clouds from the viewpoint, weather permitting. We leave at 9:00 so you can sleep before a full hiking day.\nAfter arrival, we will rest a little and start the hike to Mount Didi Vake: a 10 km out-and-back route with 350 meters of ascent and descent.",
      difficulty: "Medium",
      features: ["Experienced guide", "Round-trip transfer"],
      packing_list: [
        {
          title: "Water (1-1.5 l), snacks or food for the day",
          items: [
            "Warm sweater or windbreaker, as it can be cool at sunset or during the hike",
            "Blanket or sit pad",
            "Charged phone or camera — the views will be worth it",
            "Trekking poles, optional. Rent them online and we will bring them for you",
          ],
        },
      ],
    },
    GE: {
      title: "გომის მთა — ლაშქრობა დიდი ვაკეს მთაზე და ღრუბლების ზღვაში ჩასვლა",
      shortly:
        "გურიის ერთ-ერთი ყველაზე ჯადოსნური ადგილი: ნისლიანი ქედები, მიტოვებული საზაფხულო სახლები და ღრუბლების ზემოთ ჩასვლები 2000 მეტრზე მეტ სიმაღლეზე.",
      description:
        "ავდივართ დიდი ვაკეს მწვერვალზე, ვსვამთ არომატულ ავტორულ ჩაის ტკბილეულთან ერთად და 2333 მეტრიდან პანორამულ ხედებს ვტკბებით.\nდასასრულს კი, თუ ამინდი გაგვიმართლებს, ღრუბლების ზღვის ზემოთ ჩასვლას ვნახავთ. გავდივართ 9:00-ზე, რომ აქტიური სალაშქრო დღის წინ გამოძინება მოასწროთ.\nჩასვლის შემდეგ ცოტას დავისვენებთ და დიდი ვაკეს მთისკენ გავემართებით: რადიალური 10 კმ მარშრუტი 350 მეტრი ასვლითა და დაშვებით.",
      difficulty: "საშუალო",
      features: ["გამოცდილი გიდი", "ტრანსფერი ორივე მიმართულებით"],
      packing_list: [
        {
          title: "წყალი (1-1.5 ლ), წასახემსებელი ან დღის საკვები",
          items: [
            "თბილი ზედა ან ქარსაცავი, რადგან ჩასვლისას ან ლაშქრობის დროს შეიძლება გრილოდეს",
            "პლედი ან დასაჯდომი",
            "დამუხტული ტელეფონი ან კამერა — ხედები ნამდვილად იქნება",
            "ტრეკინგის ჯოხები სურვილისამებრ. იქირავეთ ონლაინ და ჩვენ წამოგიღებთ",
          ],
        },
      ],
    },
  },
  anaklia: {
    EN: {
      title: "Anaklia | Information is being prepared.",
    },
    GE: {
      title: "ანაკლია | ინფორმაცია მზადდება.",
    },
  },
  bakhmaro: {
    EN: {
      title: "BAKHMARO and Mount Gadrekili",
      shortly:
        "A hike to Mount Gadrekili (2508 m), with sweeping views over the Meskheti Range.",
      description:
        "On the way to Bakhmaro, we will make a short stop at the Nabeghlavi plant to stretch before the serpentine road and fill your bottle with mineral water.\n\nAfter arriving in Bakhmaro, we will take a short break and then start toward the summit.\nThe route begins along scenic paths and continues with a climb along the alpine ridge.",
      difficulty: "Medium",
      features: [
        "Transfer with waiting time: Batumi — Bakhmaro — Batumi",
        "Guide support",
        "Stop at the Nabeghlavi plant with mineral water",
      ],
      packing_list: [
        {
          title: "Water (1.5-2 l), snacks or food for the day",
          items: [
            "Mat or sit pad",
            "Wind and/or rain jacket, just in case",
            "Trekking poles are recommended. Rent them from us and we will bring them along",
          ],
        },
      ],
    },
    GE: {
      title: "ბახმარო და გადრეკილის მწვერვალი",
      shortly:
        "ლაშქრობა გადრეკილის მწვერვალზე (2508 მ), საიდანაც მესხეთის ქედზე შთამბეჭდავი ხედი იშლება.",
      description:
        "ბახმაროს გზაზე მოკლე გაჩერებას გავაკეთებთ ნაბეღლავის ქარხანასთან, რომ სერპანტინამდე გავივარჯიშოთ და ბოთლი მინერალური წყლით შევავსოთ.\n\nბახმაროში ჩასვლის შემდეგ მოკლედ დავისვენებთ და მწვერვალისკენ გავემართებით.\nმარშრუტი იწყება თვალწარმტაცი ბილიკებით, შემდეგ კი ალპურ ქედზე ასვლით გაგრძელდება.",
      difficulty: "საშუალო",
      features: [
        "ტრანსფერი ლოდინით: ბათუმი — ბახმარო — ბათუმი",
        "გიდის თანხლება",
        "გაჩერება ნაბეღლავის ქარხანასთან მინერალური წყლით",
      ],
      packing_list: [
        {
          title: "წყალი (1.5-2 ლ), წასახემსებელი ან დღის საკვები",
          items: [
            "ხალიჩა ან დასაჯდომი",
            "ქარისგან ან წვიმისგან დამცავი ქურთუკი, ყოველი შემთხვევისთვის",
            "ტრეკინგის ჯოხები სასურველია. იქირავეთ ჩვენთან და წამოგიღებთ",
          ],
        },
      ],
    },
  },
};

const STRING_FIELDS = [
  "title",
  "shortly",
  "description",
  "difficulty",
  "duration",
  "group_size",
  "location",
] as const;

const ARRAY_FIELDS = ["features", "reasons", "packing_list"] as const;

function suffixFor(lang: Lang) {
  return lang === "EN" ? "en" : "ka";
}

function hasContent(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function translatedColumn(
  hike: HikeWithTranslationColumns,
  field: (typeof STRING_FIELDS)[number],
  lang: Lang,
) {
  const value = hike[`${field}_${suffixFor(lang)}` as keyof HikeWithTranslationColumns];
  return hasContent(value) ? (value as string) : null;
}

function translatedArrayColumn(
  hike: HikeWithTranslationColumns,
  field: (typeof ARRAY_FIELDS)[number],
  lang: Lang,
) {
  const value = hike[`${field}_${suffixFor(lang)}` as keyof HikeWithTranslationColumns];
  return Array.isArray(value) && value.length > 0 ? value : null;
}

export function localizeHike(hike: Hike, lang: Lang): Hike {
  if (lang === "RU") return hike;

  const withColumns = hike as HikeWithTranslationColumns;
  const fromStatic = CURRENT_HIKE_TRANSLATIONS[hike.slug]?.[lang] ?? {};
  const next: Hike = { ...hike };

  for (const field of STRING_FIELDS) {
    const value = translatedColumn(withColumns, field, lang) ?? fromStatic[field] ?? hike[field];
    next[field] = value as never;
  }

  for (const field of ARRAY_FIELDS) {
    const value = translatedArrayColumn(withColumns, field, lang) ?? fromStatic[field] ?? hike[field];
    next[field] = value as never;
  }

  return next;
}
