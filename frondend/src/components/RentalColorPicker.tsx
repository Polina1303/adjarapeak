type Color = { color: string; image: string | null };

export function rentalColorLabel(color: string) {
  const labels: Record<string, string> = {
    "#f3c2cb": "Розовый",
    "#9ecfe2": "Голубой",
    "#f5f5f5": "Белый",
    "#ffffff": "Белый",
    "#111111": "Чёрный",
    "#000000": "Чёрный",
  };
  return labels[color.toLowerCase()] ?? color;
}

export function RentalColorPicker({ colors, selected, onChange }: {
  colors: Color[];
  selected: string | null;
  onChange: (color: string) => void;
}) {
  if (!colors.length) return null;
  return (
    <div className="mb-4">
      <div className="text-xs font-body uppercase tracking-[0.12em] text-muted-foreground mb-2">Цвет</div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Цвет">
        {colors.map((entry) => (
          <button
            key={entry.color}
            type="button"
            title={rentalColorLabel(entry.color)}
            aria-label={rentalColorLabel(entry.color)}
            aria-pressed={selected === entry.color}
            onClick={() => onChange(entry.color)}
            className={`w-8 h-8 rounded-md border shadow-sm transition-all ${selected === entry.color
              ? "border-ember ring-2 ring-ember"
              : "border-border hover:ring-2 hover:ring-ember/60"}`}
            style={{ backgroundColor: entry.color }}
          />
        ))}
      </div>
    </div>
  );
}
