import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageUploadField } from "./ImageUploadField";

export type ColorImageEntry = { color: string; image: string | null };

type Props = {
  value: ColorImageEntry[];
  onChange: (v: ColorImageEntry[]) => void;
};

function normalize(v: unknown): ColorImageEntry[] {
  if (!Array.isArray(v)) return [];
  return v
    .map((item) => {
      if (typeof item === "string") return { color: item, image: null };
      if (item && typeof item === "object") {
        const entry = item as { color?: unknown; image?: unknown };
        const color = typeof entry.color === "string" ? entry.color : "";
        const image = typeof entry.image === "string" && entry.image ? entry.image : null;
        return { color, image };
      }
      return { color: "", image: null };
    })
    .filter((x) => typeof x.color === "string");
}

export function ColorImageListField({ value, onChange }: Props) {
  const items = normalize(value);

  const update = (i: number, patch: Partial<ColorImageEntry>) => {
    const next = items.slice();
    next[i] = { ...next[i], ...patch };
    onChange(next);
  };

  const remove = (i: number) => {
    onChange(items.filter((_, idx) => idx !== i));
  };

  const add = () => onChange([...items, { color: "#000000", image: null }]);

  return (
    <div className="space-y-3">
      {items.length === 0 && (
        <p className="text-xs text-muted-foreground">Цвета не добавлены</p>
      )}
      {items.map((it, i) => (
        <div key={i} className="border border-border rounded-md p-3 space-y-2 bg-muted/30">
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={/^#[0-9a-fA-F]{6}$/.test(it.color) ? it.color : "#000000"}
              onChange={(e) => update(i, { color: e.target.value })}
              className="h-9 w-12 rounded cursor-pointer border border-border bg-transparent"
              aria-label="Выбрать цвет"
            />
            <Input
              value={it.color}
              onChange={(e) => update(i, { color: e.target.value })}
              placeholder="#1e3a8a"
              className="font-mono"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => remove(i)}
              aria-label="Удалить цвет"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">
              Изображение для этого цвета (необязательно)
            </p>
            <ImageUploadField
              value={it.image}
              onChange={(nv) => update(i, { image: nv })}
            />
          </div>
        </div>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={add}>
        <Plus className="h-4 w-4 mr-1" /> Добавить цвет
      </Button>
    </div>
  );
}