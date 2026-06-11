/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useRef, useState } from "react";
import { Images, Loader2, Sparkles, Upload, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type Category = {
  id: string;
  title: string;
  slug: string;
  shop_groups?: { title?: string; slug?: string } | null;
};

type Subcategory = {
  id: string;
  title: string;
  slug: string;
  category_id: string;
};

type ColorDraft = {
  name: string;
  hex: string;
  file: File | null;
};

type ParsedDraft = {
  title: string;
  price: string;
  colors: string[];
  categoryHint: string;
  description: string;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved: () => void;
};

const EMPTY_RAW = `Название товара
72
цвет: синий, красный, черный
категория: Пляж`;

const COLOR_PRESETS: Array<[RegExp, string]> = [
  [/черн|black/i, "#111111"],
  [/бел|white/i, "#ffffff"],
  [/син|blue|navy/i, "#1e3a8a"],
  [/крас|red/i, "#b91c1c"],
  [/фиолет|purple|violet/i, "#7c3aed"],
  [/зелен|green/i, "#16a34a"],
  [/роз|pink/i, "#ec4899"],
  [/желт|yellow/i, "#facc15"],
  [/оранж|orange/i, "#f97316"],
  [/сер|gray|grey/i, "#6b7280"],
  [/корич|brown/i, "#92400e"],
  [/беж|beige/i, "#d6b58a"],
];

function colorNameToHex(name: string) {
  return COLOR_PRESETS.find(([pattern]) => pattern.test(name))?.[1] ?? "#111111";
}

function normalizeText(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ё/g, "е")
    .replace(/Ё/g, "е")
    .toLowerCase()
    .trim();
}

function slugify(value: string) {
  const map: Record<string, string> = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  const transliterated = normalizeText(value)
    .split("")
    .map((char) => map[char] ?? char)
    .join("");

  return (
    transliterated
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 72) || `product-${Date.now()}`
  );
}

function parseDraft(raw: string): ParsedDraft {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const colorLine = lines.find((line) => /^цвет/i.test(line));
  const categoryLine = lines.find((line) => /^категор/i.test(line));
  const priceLine = lines.find((line) => /^\d+(?:[.,]\d+)?$/.test(line.replace(/\s/g, "")));
  const title =
    lines.find((line) => line !== colorLine && line !== categoryLine && line !== priceLine) ?? "";
  const description =
    lines
      .filter((line) => ![title, priceLine, colorLine, categoryLine].includes(line))
      .join(" ")
      .trim() || title;

  return {
    title,
    price: priceLine?.replace(/\s/g, "").replace(",", ".") ?? "",
    colors: colorLine
      ? colorLine
          .replace(/^цвет(?:а)?\s*:?\s*/i, "")
          .split(/[,;]+/)
          .map((color) => color.trim())
          .filter(Boolean)
      : [],
    categoryHint: categoryLine?.replace(/^категор(?:ия)?\s*:?\s*/i, "").trim() ?? "",
    description,
  };
}

function findCategoryId(categories: Category[], hint: string) {
  const normalizedHint = normalizeText(hint);
  if (!normalizedHint) return "";
  return (
    categories.find((category) => normalizeText(category.title) === normalizedHint)?.id ??
    categories.find((category) => normalizeText(category.slug) === normalizedHint)?.id ??
    categories.find((category) => normalizeText(category.title).includes(normalizedHint))?.id ??
    ""
  );
}

async function makeUniqueSlug(baseSlug: string) {
  for (let i = 0; ; i += 1) {
    const candidate = i === 0 ? baseSlug : `${baseSlug}-${i + 1}`;
    const { data, error } = await supabase
      .from("shop_products")
      .select("id")
      .eq("slug", candidate)
      .maybeSingle();
    if (error) throw error;
    if (!data) return candidate;
  }
}

async function uploadCatalogImage(file: File, slug: string, suffix: string) {
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const safeSuffix = slugify(suffix).slice(0, 24) || "image";
  const path = `shop-products/${slug}-${safeSuffix}-${Date.now()}.${ext}`;
  const { error } = await supabase.storage
    .from("catalog-images")
    .upload(path, file, { cacheControl: "3600", upsert: false });
  if (error) throw error;
  const { data } = supabase.storage.from("catalog-images").getPublicUrl(path);
  return data.publicUrl;
}

export function QuickProductForm({ open, onOpenChange, onSaved }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [raw, setRaw] = useState(EMPTY_RAW);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("none");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [colors, setColors] = useState<ColorDraft[]>([]);
  const [saving, setSaving] = useState(false);

  const parsed = useMemo(() => parseDraft(raw), [raw]);

  useEffect(() => {
    if (!open) return;
    (async () => {
      const [{ data: categoryRows, error: categoryError }, { data: subcategoryRows, error: subcategoryError }] =
        await Promise.all([
          supabase
            .from("shop_categories")
            .select("id,title,slug,shop_groups(title,slug)")
            .order("title", { ascending: true }),
          supabase
            .from("shop_subcategories")
            .select("id,title,slug,category_id")
            .order("title", { ascending: true }),
        ]);
      if (categoryError) {
        toast.error(categoryError.message);
        return;
      }
      if (subcategoryError) {
        toast.error(subcategoryError.message);
        return;
      }
      setCategories((categoryRows as Category[]) ?? []);
      setSubcategories((subcategoryRows as Subcategory[]) ?? []);
    })();
  }, [open]);

  useEffect(() => {
    setSlug(slugify(parsed.title));
    setDescription(parsed.description);
    setColors((prev) =>
      parsed.colors.map((name, index) => ({
        name,
        hex: prev[index]?.hex ?? colorNameToHex(name),
        file: prev[index]?.file ?? null,
      })),
    );
  }, [parsed.title, parsed.description, parsed.colors.join("|")]);

  useEffect(() => {
    const nextCategory = findCategoryId(categories, parsed.categoryHint);
    if (nextCategory) setCategoryId(nextCategory);
  }, [categories, parsed.categoryHint]);

  useEffect(() => {
    setSubcategoryId("none");
  }, [categoryId]);

  const matchingSubcategories = subcategories.filter(
    (subcategory) => subcategory.category_id === categoryId,
  );

  const assignFiles = (files: FileList | null) => {
    if (!files?.length) return;
    const nextFiles = Array.from(files);
    setColors((prev) =>
      prev.map((color, index) => ({
        ...color,
        file: nextFiles[index] ?? color.file,
      })),
    );
  };

  const updateColor = (index: number, patch: Partial<ColorDraft>) => {
    setColors((prev) =>
      prev.map((color, colorIndex) =>
        colorIndex === index ? { ...color, ...patch } : color,
      ),
    );
  };

  const save = async () => {
    if (!parsed.title.trim()) {
      toast.error("Не найдено название товара");
      return;
    }
    if (!Number(parsed.price)) {
      toast.error("Не найдена цена");
      return;
    }
    if (!categoryId) {
      toast.error("Выберите категорию");
      return;
    }

    setSaving(true);
    try {
      const uniqueSlug = await makeUniqueSlug(slugify(slug || parsed.title));
      const uploadedColors = [];
      for (const color of colors) {
        const image = color.file
          ? await uploadCatalogImage(color.file, uniqueSlug, color.name)
          : null;
        uploadedColors.push({ color: color.hex, image });
      }

      const image =
        uploadedColors.find((color) => color.image)?.image ??
        uploadedColors[0]?.image ??
        null;

      const { error } = await supabase.from("shop_products").insert({
        title: parsed.title.trim(),
        slug: uniqueSlug,
        price: Number(parsed.price),
        description: description.trim() || null,
        category_id: categoryId,
        subcategory_id: subcategoryId === "none" ? null : subcategoryId,
        image,
        colors: uploadedColors,
        features: [],
        sizes: [],
        in_stock: true,
        hidden: false,
      });

      if (error) throw error;

      toast.success("Товар добавлен");
      onSaved();
      onOpenChange(false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Не удалось добавить товар");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Быстро добавить товар</DialogTitle>
          <DialogDescription>
            Вставьте текст из заявки, выберите категорию и загрузите фото в порядке цветов.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-3">
            <div className="space-y-1.5">
              <p className="text-sm font-medium">Текст заявки</p>
              <Textarea
                value={raw}
                onChange={(event) => setRaw(event.target.value)}
                className="min-h-40"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <p className="text-sm font-medium">Категория</p>
                <Select value={categoryId} onValueChange={setCategoryId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.shop_groups?.title
                          ? `${category.shop_groups.title} / ${category.title}`
                          : category.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <p className="text-sm font-medium">Подкатегория</p>
                <Select
                  value={subcategoryId}
                  onValueChange={setSubcategoryId}
                  disabled={!matchingSubcategories.length}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Без подкатегории" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Без подкатегории</SelectItem>
                    {matchingSubcategories.map((subcategory) => (
                      <SelectItem key={subcategory.id} value={subcategory.id}>
                        {subcategory.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <p className="text-sm font-medium">Слаг</p>
              <Input value={slug} onChange={(event) => setSlug(event.target.value)} />
            </div>

            <div className="space-y-1.5">
              <p className="text-sm font-medium">Описание</p>
              <Textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="min-h-24"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-md border bg-muted/30 p-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-muted-foreground">Название</span>
                <span className="font-medium">{parsed.title || "—"}</span>
                <span className="text-muted-foreground">Цена</span>
                <span className="font-medium">{parsed.price || "—"}</span>
                <span className="text-muted-foreground">Цвета</span>
                <span className="font-medium">
                  {colors.map((color) => color.name).join(", ") || "—"}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="w-full"
              >
                <Images className="mr-2 h-4 w-4" />
                Фото по порядку цветов
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(event) => {
                  assignFiles(event.target.files);
                  event.target.value = "";
                }}
              />
            </div>

            <div className="space-y-2">
              {colors.length === 0 ? (
                <p className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">
                  Добавьте строку `цвет: синий, красный, черный` в текст заявки.
                </p>
              ) : (
                colors.map((color, index) => (
                  <div
                    key={`${color.name}-${index}`}
                    className="rounded-md border bg-card p-3"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={/^#[0-9a-fA-F]{6}$/.test(color.hex) ? color.hex : "#111111"}
                        onChange={(event) => updateColor(index, { hex: event.target.value })}
                        className="h-9 w-12 rounded border bg-transparent"
                        aria-label={`Цвет ${color.name}`}
                      />
                      <Input
                        value={color.name}
                        onChange={(event) => updateColor(index, { name: event.target.value })}
                        className="min-w-0"
                      />
                      <Input
                        value={color.hex}
                        onChange={(event) => updateColor(index, { hex: event.target.value })}
                        className="w-28 font-mono"
                      />
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(event) =>
                          updateColor(index, { file: event.target.files?.[0] ?? null })
                        }
                      />
                      {color.file && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => updateColor(index, { file: null })}
                          title="Убрать фото"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    {color.file && (
                      <p className="mt-1 truncate text-xs text-muted-foreground">
                        <Upload className="mr-1 inline h-3 w-3" />
                        {color.file.name}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            Отмена
          </Button>
          <Button type="button" onClick={save} disabled={saving}>
            {saving ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Создать товар
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
