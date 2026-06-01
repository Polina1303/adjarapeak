import { X, Plus, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StringListField } from "./StringListField";

export type PackingSection = { title: string; items: string[] };

type Props = {
  value: PackingSection[];
  onChange: (v: PackingSection[]) => void;
};

export function PackingListField({ value, onChange }: Props) {
  const sections: PackingSection[] = Array.isArray(value) ? value : [];
  const update = (i: number, patch: Partial<PackingSection>) => {
    const next = [...sections];
    next[i] = { ...next[i], ...patch };
    onChange(next);
  };
  const remove = (i: number) => onChange(sections.filter((_, idx) => idx !== i));
  const add = () => onChange([...sections, { title: "", items: [] }]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= sections.length) return;
    const next = [...sections];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="space-y-3">
      {sections.map((s, i) => (
        <div key={i} className="border rounded p-3 space-y-2 bg-muted/30">
          <div className="flex justify-between items-center gap-2">
            <Input
              placeholder="Название раздела"
              value={s.title ?? ""}
              onChange={(e) => update(i, { title: e.target.value })}
            />
            <div className="flex gap-1 shrink-0">
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
          <StringListField
            value={Array.isArray(s.items) ? s.items : []}
            onChange={(items) => update(i, { items })}
            placeholder="Пункт списка"
          />
        </div>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={add}>
        <Plus className="h-3.5 w-3.5 mr-1" /> Добавить раздел
      </Button>
    </div>
  );
}