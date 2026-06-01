import { X, Plus, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploadField } from "./ImageUploadField";

export type Reason = { image: string | null; text: string };

type Props = {
  value: Reason[];
  onChange: (v: Reason[]) => void;
};

export function ReasonsField({ value, onChange }: Props) {
  const items: Reason[] = Array.isArray(value) ? value : [];
  const update = (i: number, patch: Partial<Reason>) => {
    const next = [...items];
    next[i] = { ...next[i], ...patch };
    onChange(next);
  };
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, { image: null, text: "" }]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="space-y-3">
      {items.map((r, i) => (
        <div key={i} className="border rounded p-3 space-y-2 bg-muted/30">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-muted-foreground">
              Причина #{i + 1}
            </span>
            <div className="flex gap-1">
              <Button type="button" variant="outline" size="icon" onClick={() => move(i, -1)}>
                <ArrowUp className="h-3.5 w-3.5" />
              </Button>
              <Button type="button" variant="outline" size="icon" onClick={() => move(i, 1)}>
                <ArrowDown className="h-3.5 w-3.5" />
              </Button>
              <Button type="button" variant="outline" size="icon" onClick={() => remove(i)}>
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
          <ImageUploadField
            value={r.image ?? null}
            onChange={(v) => update(i, { image: v })}
          />
          <Textarea
            placeholder="Текст причины"
            value={r.text ?? ""}
            onChange={(e) => update(i, { text: e.target.value })}
            rows={2}
          />
        </div>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={add}>
        <Plus className="h-3.5 w-3.5 mr-1" /> Добавить причину
      </Button>
    </div>
  );
}