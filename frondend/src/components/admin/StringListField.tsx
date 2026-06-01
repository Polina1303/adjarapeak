import { X, Plus, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  value: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
};

export function StringListField({ value, onChange, placeholder }: Props) {
  const items = Array.isArray(value) ? value : [];
  const update = (i: number, v: string) => {
    const next = [...items];
    next[i] = v;
    onChange(next);
  };
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, ""]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="space-y-2">
      {items.map((s, i) => (
        <div key={i} className="flex gap-1.5">
          <Input
            value={s}
            placeholder={placeholder}
            onChange={(e) => update(i, e.target.value)}
          />
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
      ))}
      <Button type="button" variant="outline" size="sm" onClick={add}>
        <Plus className="h-3.5 w-3.5 mr-1" /> Добавить пункт
      </Button>
    </div>
  );
}