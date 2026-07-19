import { ChevronDown, Mountain } from "lucide-react";
import {
  formatDifficulty,
  getDifficultyFactors,
  getDifficultyLevel,
  HIKE_DIFFICULTY_FACTORS,
  HIKE_DIFFICULTY_LEVELS,
} from "@/lib/hike-difficulty";
import type { Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const COPY = {
  RU: {
    title: "Шкала сложности походов",
    routeTitle: "Сложность маршрута",
    lead: "От лёгких маршрутов до хардовых — заранее оцените примерную нагрузку и выберите подходящий темп.",
    disclaimer:
      "Шкала сложности субъективна: погода, состояние тропы и личная подготовка могут заметно изменить ощущения.",
    factorsTitle: "Дополнительные факторы",
    example: "Пример: «🟡 Средний ⬆️💧» — маршрут средней сложности с крутым подъёмом и ограниченным доступом к воде.",
    openScale: "Посмотреть всю шкалу и обозначения",
    expandScale: "Развернуть шкалу",
    collapseScale: "Свернуть шкалу",
    pending: "Уровень уточняется",
  },
  EN: {
    title: "Hike difficulty scale",
    routeTitle: "Route difficulty",
    lead: "From easy walks to hardcore routes — estimate the expected effort before choosing your hike.",
    disclaimer:
      "The scale is subjective: weather, trail conditions and personal fitness can significantly change the experience.",
    factorsTitle: "Additional factors",
    example: "Example: “🟡 Medium ⬆️💧” means a medium route with a steep ascent and limited access to water.",
    openScale: "View the full scale and symbols",
    expandScale: "Expand scale",
    collapseScale: "Collapse scale",
    pending: "Difficulty to be confirmed",
  },
  GE: {
    title: "ლაშქრობების სირთულის სკალა",
    routeTitle: "მარშრუტის სირთულე",
    lead: "მარტივიდან ჰარდკორ მარშრუტებამდე — წინასწარ შეაფასეთ დატვირთვა და აირჩიეთ შესაბამისი ტემპი.",
    disclaimer:
      "სირთულის სკალა სუბიექტურია: ამინდმა, ბილიკის მდგომარეობამ და პირადმა მომზადებამ გამოცდილება მნიშვნელოვნად შეიძლება შეცვალოს.",
    factorsTitle: "დამატებითი ფაქტორები",
    example: "მაგალითი: „🟡 საშუალო ⬆️💧“ ნიშნავს საშუალო სირთულის მარშრუტს ციცაბო აღმართითა და წყლის შეზღუდული ხელმისაწვდომობით.",
    openScale: "სრული სკალისა და ნიშნების ნახვა",
    expandScale: "სკალის გაშლა",
    collapseScale: "სკალის შეკეცვა",
    pending: "სირთულე ზუსტდება",
  },
} satisfies Record<Lang, Record<string, string>>;

function LevelCards({
  lang,
  selected,
}: {
  lang: Lang;
  selected?: string | null;
}) {
  const selectedLevel = getDifficultyLevel(selected);

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {HIKE_DIFFICULTY_LEVELS.map((level) => (
        <div
          key={level.key}
          className={cn(
            "rounded-2xl border p-4 transition-shadow",
            level.className,
            selectedLevel?.key === level.key &&
              "ring-2 ring-ember ring-offset-2 ring-offset-background shadow-lg",
          )}
        >
          <div className="font-display text-sm font-bold leading-tight">
            <span className="mr-2" aria-hidden>
              {level.emoji}
            </span>
            {level.title[lang]}
          </div>
          <p className="mt-2 font-body text-xs leading-relaxed opacity-75">
            {level.description[lang]}
          </p>
        </div>
      ))}
    </div>
  );
}

function FactorList({ lang }: { lang: Lang }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
      {HIKE_DIFFICULTY_FACTORS.map((factor) => (
        <div
          key={factor.emoji}
          className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-3"
        >
          <span className="text-xl" aria-hidden>
            {factor.emoji}
          </span>
          <span className="font-body text-xs leading-snug text-foreground/75">
            {factor.label[lang]}
          </span>
        </div>
      ))}
    </div>
  );
}

export function HikeDifficultyBadge({
  difficulty,
  lang,
  className,
}: {
  difficulty: string | null | undefined;
  lang: Lang;
  className?: string;
}) {
  const level = getDifficultyLevel(difficulty);
  const label = formatDifficulty(difficulty, lang) ?? COPY[lang].pending;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1.5 font-body text-xs font-semibold backdrop-blur-sm",
        level?.className ?? "border-border bg-background/90 text-foreground",
        className,
      )}
    >
      {label}
    </span>
  );
}

export function HikeDifficultyScale({
  lang,
  difficulty,
  variant = "full",
}: {
  lang: Lang;
  difficulty?: string | null;
  variant?: "full" | "detail";
}) {
  const copy = COPY[lang];
  const level = getDifficultyLevel(difficulty);
  const factors = getDifficultyFactors(difficulty);

  if (variant === "detail") {
    return (
      <section className="section-padding pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-card p-5 md:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-ember">
                <Mountain className="h-5 w-5" />
                <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">
                  {copy.routeTitle}
                </h2>
              </div>
              <HikeDifficultyBadge
                difficulty={difficulty}
                lang={lang}
                className="mt-2 text-sm"
              />
              {level && (
                <p className="mt-3 font-body text-sm text-muted-foreground">
                  {level.description[lang]}
                </p>
              )}
              {factors.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {factors.map((factor) => (
                    <span
                      key={factor.emoji}
                      className="rounded-full bg-muted px-3 py-1.5 font-body text-xs text-foreground/75"
                    >
                      {factor.emoji} {factor.label[lang]}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <details className="group mt-6 border-t border-border pt-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-bold text-foreground">
              {copy.openScale}
              <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-5 space-y-5">
              <LevelCards lang={lang} selected={difficulty} />
              <p className="rounded-xl bg-muted px-4 py-3 font-body text-xs leading-relaxed text-foreground/75">
                <strong>{copy.disclaimer}</strong>
              </p>
              <div>
                <h3 className="mb-3 font-display text-sm font-bold text-foreground">
                  {copy.factorsTitle}
                </h3>
                <FactorList lang={lang} />
              </div>
            </div>
          </details>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding pb-8 md:pb-10">
      <details className="group mx-auto max-w-7xl rounded-3xl border border-border bg-card p-5 shadow-sm md:p-6">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-ember">
              <Mountain className="h-5 w-5 shrink-0 md:h-6 md:w-6" />
              <h2 className="font-display text-lg font-bold text-foreground md:text-2xl">
                {copy.title}
              </h2>
            </div>
            <p className="mt-2 max-w-3xl font-body text-xs leading-relaxed text-muted-foreground md:text-sm">
              {copy.lead}
            </p>
          </div>

          <span className="flex shrink-0 items-center gap-2 rounded-full bg-muted px-3 py-2 font-display text-xs font-bold text-foreground transition-colors group-hover:bg-muted/70 md:px-4">
            <span className="hidden sm:inline group-open:hidden">
              {copy.expandScale}
            </span>
            <span className="hidden sm:group-open:inline">
              {copy.collapseScale}
            </span>
            <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
          </span>
        </summary>

        <div className="mt-6 border-t border-border pt-6">
          <LevelCards lang={lang} />

          <p className="my-6 rounded-2xl bg-muted px-4 py-4 font-body text-xs leading-relaxed text-foreground/80 md:text-sm">
            <strong>{copy.disclaimer}</strong>
          </p>

          <h3 className="mb-3 font-display text-base font-bold text-foreground">
            {copy.factorsTitle}
          </h3>
          <FactorList lang={lang} />

          <p className="mt-5 font-body text-xs leading-relaxed text-muted-foreground">
            {copy.example}
          </p>
        </div>
      </details>
    </section>
  );
}
