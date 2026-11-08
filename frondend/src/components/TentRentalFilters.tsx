import { RotateCcw } from "lucide-react";
import { useLanguage, type Lang } from "@/lib/i18n";
import type { TentCapacityFilter, TentLayerFilter } from "@/lib/tent-filters";

const TEXT: Record<
  Lang,
  {
    title: string;
    layer: string;
    capacity: string;
    reset: string;
    layers: Record<TentLayerFilter, string>;
    capacities: Record<TentCapacityFilter, string>;
  }
> = {
  RU: {
    title: "Подбор палатки",
    layer: "Слойность",
    capacity: "Количество мест",
    reset: "Сбросить фильтры",
    layers: {
      single: "Однослойная / пляжная",
      double: "Двухслойная / горная",
    },
    capacities: {
      1: "Одноместная",
      2: "Двухместная",
      3: "Трёхместная",
    },
  },
  EN: {
    title: "Choose a tent",
    layer: "Layers",
    capacity: "Capacity",
    reset: "Reset filters",
    layers: {
      single: "Single-wall / beach",
      double: "Double-wall / mountain",
    },
    capacities: {
      1: "1 person",
      2: "2 people",
      3: "3 people",
    },
  },
  GE: {
    title: "კარვის შერჩევა",
    layer: "ფენები",
    capacity: "ტევადობა",
    reset: "ფილტრების გასუფთავება",
    layers: {
      single: "ერთფენიანი / პლაჟის",
      double: "ორფენიანი / მთის",
    },
    capacities: {
      1: "1 ადგილი",
      2: "2 ადგილი",
      3: "3 ადგილი",
    },
  },
};

type Props = {
  layer: TentLayerFilter | null;
  capacity: TentCapacityFilter | null;
  onLayerChange: (value: TentLayerFilter | null) => void;
  onCapacityChange: (value: TentCapacityFilter | null) => void;
};

const LAYERS: TentLayerFilter[] = ["single", "double"];
const CAPACITIES: TentCapacityFilter[] = [1, 2, 3];

function chipClass(active: boolean) {
  return `min-h-10 rounded-full border px-4 py-2 font-body text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
    active
      ? "border-ember bg-ember text-ember-foreground"
      : "border-border bg-background text-foreground hover:border-ember/70"
  }`;
}

export function TentRentalFilters({
  layer,
  capacity,
  onLayerChange,
  onCapacityChange,
}: Props) {
  const { lang } = useLanguage();
  const text = TEXT[lang];
  const hasSelection = layer !== null || capacity !== null;

  return (
    <section
      aria-label={text.title}
      className="mb-6 rounded-2xl border border-border bg-secondary/25 p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
          {text.title}
        </h2>
        {hasSelection && (
          <button
            type="button"
            onClick={() => {
              onLayerChange(null);
              onCapacityChange(null);
            }}
            className="inline-flex min-h-10 items-center gap-2 rounded-full px-3 font-body text-xs text-muted-foreground transition-colors hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            {text.reset}
          </button>
        )}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <fieldset>
          <legend className="mb-2 font-body text-xs font-semibold text-foreground">
            {text.layer}
          </legend>
          <div className="flex flex-wrap gap-2">
            {LAYERS.map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={layer === value}
                onClick={() => onLayerChange(layer === value ? null : value)}
                className={chipClass(layer === value)}
              >
                {text.layers[value]}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 font-body text-xs font-semibold text-foreground">
            {text.capacity}
          </legend>
          <div className="flex flex-wrap gap-2">
            {CAPACITIES.map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={capacity === value}
                onClick={() => onCapacityChange(capacity === value ? null : value)}
                className={chipClass(capacity === value)}
              >
                {text.capacities[value]}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
    </section>
  );
}
