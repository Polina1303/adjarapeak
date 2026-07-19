import type { Lang } from "@/lib/i18n";

export const SERVICE_CATEGORY_KEYS = [
  "diagnostics",
  "drivetrain",
  "wheels",
  "brakes",
  "fork",
  "general",
] as const;

export type ServiceCategoryKey = (typeof SERVICE_CATEGORY_KEYS)[number];

export const SERVICE_CATEGORY_LABELS: Record<
  Lang,
  Record<ServiceCategoryKey, string>
> = {
  RU: {
    diagnostics: "Диагностика и выезд",
    drivetrain: "Трансмиссия",
    wheels: "Колёса и покрышки",
    brakes: "Тормоза",
    fork: "Вилка",
    general: "Сборка и общие работы",
  },
  EN: {
    diagnostics: "Diagnostics and call-outs",
    drivetrain: "Drivetrain",
    wheels: "Wheels and tires",
    brakes: "Brakes",
    fork: "Fork",
    general: "Assembly and general work",
  },
  KA: {
    diagnostics: "დიაგნოსტიკა და ადგილზე მომსახურება",
    drivetrain: "ტრანსმისია",
    wheels: "ბორბლები და საბურავები",
    brakes: "მუხრუჭები",
    fork: "ჩანგალი",
    general: "აწყობა და ზოგადი სამუშაოები",
  },
};

export const SERVICE_CATEGORY_OPTIONS = SERVICE_CATEGORY_KEYS.map((value) => ({
  value,
  label: SERVICE_CATEGORY_LABELS.RU[value],
}));

export function isServiceCategoryKey(
  value: unknown
): value is ServiceCategoryKey {
  return SERVICE_CATEGORY_KEYS.includes(value as ServiceCategoryKey);
}

export function inferServiceCategory(rawTitle: string): ServiceCategoryKey {
  const title = rawTitle.trim().toLocaleLowerCase("ru-RU");

  if (
    /(диагност|выезд|эвакуац|diagnostic|call-out|pickup|დიაგნოსტ)/.test(
      title
    )
  ) {
    return "diagnostics";
  }
  if (
    /(тормоз|колод|ротор|калипер|гидравл|brake|caliper|rotor|hydraulic|მუხრუჭ)/.test(
      title
    )
  ) {
    return "brakes";
  }
  if (/(вилк|рулев.*колон|амортиз|fork|headset|ჩანგალ)/.test(title)) {
    return "fork";
  }
  if (
    /(кол[её]с|покрыш|камер|бескамер|прокол|восьм|втулк|эксцентрик|спиц|wheel|tire|tyre|tube|puncture|hub|quick-release|spoke|ბორბ|საბურავ|კამერ)/.test(
      title
    )
  ) {
    return "wheels";
  }
  if (
    /(трансмисс|цеп|кассет|трещот|переключ|карет|трос|рубаш|педал|зв[её]зд|шатун|drivetrain|chain|cassette|freewheel|derailleur|bottom bracket|cable|pedal|crank|ტრანსმის|ჯაჭვ|კასეტ)/.test(
      title
    )
  ) {
    return "drivetrain";
  }

  return "general";
}
