/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ImageUploadField } from "./ImageUploadField";
import { GalleryField } from "./GalleryField";
import { StringListField } from "./StringListField";
import { ReasonsField } from "./ReasonsField";
import { PackingListField } from "./PackingListField";
import { ColorImageListField } from "./ColorImageListField";
import type { AdminTableConfig, AdminTableKey, FieldConfig } from "@/lib/admin-tables";
import { loadAdminSortRefs, sortAdminRows } from "@/lib/admin-sort";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Props = {
  config: AdminTableConfig;
  record: Record<string, any> | null;
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
};

type FkOption = {
  id: string;
  title: string;
  parent?: string | null;
  subtitle?: string;
  searchText: string;
};

const BALANCE_BOARD_CATEGORY_SLUGS = new Set(["balance_board", "balance-board", "balanceboards"]);
const BOARDS_GROUP_LABEL = "Баланс и доски";

function isOptionalManualSaleField(key: string) {
  return key === "sale_price" || key === "sale_price_per_day";
}

function isMoneyField(key: string) {
  return key === "price" || key === "sale_price" || key === "price_per_day" || key === "sale_price_per_day";
}

function isInactiveFeaturedField(
  config: AdminTableConfig,
  key: string,
  value: unknown,
) {
  if (config.table !== "shop_products") return false;
  if (!["featured", "featured_priority", "featured_until", "featured_label", "featured_tags"].includes(key)) {
    return false;
  }
  if (key === "featured") return value === false || value === null || value === undefined || value === "";
  if (Array.isArray(value)) return value.length === 0;
  return value === null || value === undefined || value === "";
}

function readErrorField(error: unknown, key: "message" | "details" | "hint") {
  if (!error || typeof error !== "object" || !(key in error)) return "";
  const value = (error as Record<string, unknown>)[key];
  return typeof value === "string" ? value : "";
}

function getErrorMessage(error: unknown) {
  const message =
    error instanceof Error ? error.message : readErrorField(error, "message") || "Не удалось сохранить";
  const details = readErrorField(error, "details");
  const hint = readErrorField(error, "hint");
  const fullMessage = [message, details, hint].filter(Boolean).join(" ");
  const missingField = getMissingSchemaField(error);

  if (
    /sale_price|sale_price_per_day/i.test(fullMessage) &&
    /column|schema cache|does not exist|could not find/i.test(fullMessage)
  ) {
    return "В базе ещё нет поля для цены со скидкой. Примените миграцию Supabase и попробуйте снова.";
  }

  if (missingField) {
    return `В базе ещё нет поля «${missingField}». Примените миграцию Supabase и попробуйте снова.`;
  }

  return message;
}

function getMissingSchemaField(error: unknown) {
  const message =
    error instanceof Error ? error.message : readErrorField(error, "message");
  const details = readErrorField(error, "details");
  const hint = readErrorField(error, "hint");
  const fullMessage = [message, details, hint].filter(Boolean).join(" ");

  const schemaCacheMatch = fullMessage.match(/'([^']+)'\s+column/i);
  if (schemaCacheMatch) return schemaCacheMatch[1];

  const columnMissingMatch = fullMessage.match(/column\s+\w+\.([A-Za-z0-9_]+)\s+does not exist/i);
  if (columnMissingMatch) return columnMissingMatch[1];

  return null;
}

function validateManualSalePrice(
  basePrice: unknown,
  salePrice: unknown,
  saleLabel: string,
  baseLabel: string,
) {
  if (salePrice === null || salePrice === undefined || salePrice === "") return null;
  const base = Number(basePrice);
  const sale = Number(salePrice);

  if (!Number.isFinite(base) || base <= 0) {
    return `Сначала укажите поле «${baseLabel}»`;
  }
  if (!Number.isFinite(sale) || sale <= 0) {
    return `Поле «${saleLabel}» должно быть больше 0`;
  }
  if (sale >= base) {
    return `Поле «${saleLabel}» должно быть меньше обычной цены`;
  }

  return null;
}

function validatePayload(config: AdminTableConfig, payload: Record<string, any>) {
  if (config.table === "shop_products") {
    return validateManualSalePrice(payload.price, payload.sale_price, "Цена со скидкой", "Цена");
  }
  if (config.table === "rental_items") {
    return validateManualSalePrice(
      payload.price_per_day,
      payload.sale_price_per_day,
      "Цена / день со скидкой",
      "Цена / день",
    );
  }
  return null;
}

function getGroupLabel(table: AdminTableKey, group: { title?: string | null; slug?: string | null } | undefined) {
  if (group?.title) return group.title;
  if (group?.slug) return group.slug;
  return table.startsWith("shop_") ? "Магазин" : "Аренда";
}

function getCategoryGroupLabel(
  table: AdminTableKey,
  row: Record<string, any>,
  group: { title?: string | null; slug?: string | null } | undefined,
) {
  if (table === "shop_categories" && BALANCE_BOARD_CATEGORY_SLUGS.has(String(row.slug ?? ""))) {
    return BOARDS_GROUP_LABEL;
  }
  return getGroupLabel(table, group);
}

async function loadFkOptions(table: AdminTableKey): Promise<FkOption[]> {
  const [{ data }, refs] = await Promise.all([
    (supabase as any).from(table).select("*").order("title", { ascending: true }),
    loadAdminSortRefs(table, supabase),
  ]);
  const rows = sortAdminRows(table, (data as any[]) ?? [], refs);

  if (table === "shop_categories" || table === "rental_categories") {
    const groups = table === "shop_categories" ? refs.shopGroups : refs.rentalGroups;
    const groupById = new Map((groups ?? []).map((group) => [group.id, group]));

    return rows.map((row) => {
      const groupLabel = getCategoryGroupLabel(table, row, groupById.get(row.group_id));
      return {
        id: row.id,
        title: row.title,
        parent: null,
        subtitle: groupLabel,
        searchText: [groupLabel, row.title, row.slug].filter(Boolean).join(" "),
      };
    });
  }

  if (table === "shop_subcategories" || table === "rental_subcategories") {
    const categories = table === "shop_subcategories" ? refs.shopCategories : refs.rentalCategories;
    const groups = table === "shop_subcategories" ? refs.shopGroups : refs.rentalGroups;
    const categoryById = new Map((categories ?? []).map((category) => [category.id, category]));
    const groupById = new Map((groups ?? []).map((group) => [group.id, group]));

    return rows.map((row) => {
      const category = categoryById.get(row.category_id);
      const groupLabel = category?.group_id ? getGroupLabel(table, groupById.get(category.group_id)) : "";
      const categoryLabel = category?.title ?? "";
      const subtitle = [groupLabel, categoryLabel].filter(Boolean).join(" / ");
      return {
        id: row.id,
        title: row.title,
        parent: row.category_id,
        subtitle,
        searchText: [groupLabel, categoryLabel, category?.slug, row.title, row.slug].filter(Boolean).join(" "),
      };
    });
  }

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    parent: null,
    searchText: [row.title, row.slug].filter(Boolean).join(" "),
  }));
}

function FkCombobox({
  value,
  options,
  placeholder,
  emptyText,
  clearLabel,
  required,
  disabled,
  onChange,
}: {
  value: string | null | undefined;
  options: FkOption[];
  placeholder: string;
  emptyText: string;
  clearLabel: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (value: string | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.id === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className="min-h-9 w-full justify-between px-3 text-left font-normal"
        >
          <span className="min-w-0">
            <span className={cn("block truncate", !selected && "text-muted-foreground")}>
              {selected?.title ?? placeholder}
            </span>
            {selected?.subtitle && (
              <span className="block truncate text-xs text-muted-foreground">
                {selected.subtitle}
              </span>
            )}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[var(--radix-popover-trigger-width)] p-0"
        onWheelCapture={(event) => event.stopPropagation()}
      >
        <Command>
          <CommandInput placeholder="Поиск по названию, слагу или группе…" />
          <CommandList className="max-h-[min(360px,45vh)] overflow-y-auto overscroll-contain">
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {!required && (
                <CommandItem
                  value={clearLabel}
                  onSelect={() => {
                    onChange(null);
                    setOpen(false);
                  }}
                >
                  <Check className={cn("h-4 w-4", !value ? "opacity-100" : "opacity-0")} />
                  <span className="text-muted-foreground">{clearLabel}</span>
                </CommandItem>
              )}
              {options.map((option) => (
                <CommandItem
                  key={option.id}
                  value={`${option.searchText} ${option.id}`}
                  onSelect={() => {
                    onChange(option.id);
                    setOpen(false);
                  }}
                >
                  <Check className={cn("h-4 w-4", value === option.id ? "opacity-100" : "opacity-0")} />
                  <span className="min-w-0">
                    <span className="block truncate">{option.title}</span>
                    {option.subtitle && (
                      <span className="block truncate text-xs text-muted-foreground">
                        {option.subtitle}
                      </span>
                    )}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function RecordForm({ config, record, open, onClose, onSaved }: Props) {
  const [form, setForm] = useState<Record<string, any>>({});
  const [fkOptions, setFkOptions] = useState<Record<string, FkOption[]>>({});
  const [missingDbFields, setMissingDbFields] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const activeFields = useMemo(
    () => config.fields.filter((f) => !missingDbFields.includes(f.key)),
    [config.fields, missingDbFields],
  );

  useEffect(() => {
    if (!open) return;
    const initial: Record<string, any> = {};
    for (const f of config.fields) {
      if (record) {
        initial[f.key] = record[f.key] ?? (f.type === "boolean" ? false : "");
        if (["gallery", "string_list", "reasons", "packing_list", "color_image_list"].includes(f.type)) {
          initial[f.key] = Array.isArray(record[f.key]) ? record[f.key] : [];
        }
        if (f.type === "json") {
          initial[f.key] = JSON.stringify(record[f.key] ?? [], null, 2);
        }
      } else {
        initial[f.key] =
          f.type === "boolean"
            ? false
            : f.type === "number" && f.required
              ? 0
              : f.type === "json"
                ? "[]"
                : ["gallery", "string_list", "reasons", "packing_list", "color_image_list"].includes(f.type)
                  ? []
                  : "";
      }
    }
    setForm(initial);
  }, [open, record, config]);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;

    const checkSchemaFields = async () => {
      const missing = new Set<string>();
      const configuredKeys = config.fields.map((f) => f.key);

      for (let i = 0; i < configuredKeys.length; i += 1) {
        const keysToProbe = configuredKeys.filter((key) => !missing.has(key));
        const { error } = await (supabase as any)
          .from(config.table)
          .select(["id", ...keysToProbe].join(","))
          .limit(1);
        const missingField = getMissingSchemaField(error);
        if (!missingField || !configuredKeys.includes(missingField)) break;
        missing.add(missingField);
      }

      if (!cancelled) setMissingDbFields([...missing]);
    };

    setMissingDbFields([]);
    checkSchemaFields();

    return () => {
      cancelled = true;
    };
  }, [open, config]);

  useEffect(() => {
    if (!open) return;
    const loadFk = async () => {
      const opts: Record<string, FkOption[]> = {};
      for (const f of activeFields) {
        if (f.type === "fk" && f.fkTable) {
          opts[f.key] = await loadFkOptions(f.fkTable);
        }
      }
      setFkOptions(opts);
    };
    loadFk();
  }, [open, config, activeFields]);

  useEffect(() => {
    if (!open) return;
    setForm((current) => {
      let changed = false;
      const next = { ...current };

      for (const f of activeFields) {
        if (f.type !== "fk" || !f.fkParentField || !f.fkParentSource) continue;
        const value = next[f.key];
        if (!value) continue;

        const parentId = next[f.fkParentSource];
        const option = (fkOptions[f.key] ?? []).find((item) => item.id === value);
        if (parentId && option && option.parent !== parentId) {
          next[f.key] = null;
          changed = true;
        }
      }

      return changed ? next : current;
    });
  }, [open, activeFields, fkOptions, form.category_id]);

  const setVal = (k: string, v: any) => setForm((p) => ({ ...p, [k]: v }));

  const submit = async () => {
    setSaving(true);
    try {
      const payload: Record<string, any> = {};
      for (const f of activeFields) {
        let v = form[f.key];
        if (f.type === "number") {
          if (v === "" || v === null || v === undefined) {
            v = null;
          } else {
            const numericValue = Number(String(v).trim().replace(",", "."));
            if (!Number.isFinite(numericValue)) {
              toast.error(`Поле «${f.label}» должно быть числом`);
              setSaving(false);
              return;
            }
            v = numericValue;
          }
        }
        if (f.type === "json") {
          try {
            v = v ? JSON.parse(v) : [];
          } catch {
            toast.error(`Неверный JSON в поле «${f.label}»`);
            setSaving(false);
            return;
          }
        }
        if (["gallery", "reasons", "packing_list", "color_image_list"].includes(f.type)) {
          v = Array.isArray(v) ? v : [];
        }
        if (f.type === "string_list") {
          v = Array.isArray(v)
            ? v.map((item) => String(item).trim()).filter(Boolean)
            : [];
        }
        if (f.type === "color_image_list") {
          v = Array.isArray(v)
            ? v
                .map((item) => {
                  if (typeof item === "string") return { color: item.trim(), image: null };
                  const color = typeof item?.color === "string" ? item.color.trim() : "";
                  const image =
                    typeof item?.image === "string" && item.image.trim().length > 0
                      ? item.image.trim()
                      : null;
                  return { color, image };
                })
                .filter((item) => item.color.length > 0)
            : [];
        }
        if ((f.type === "date" || f.type === "time") && (!v || v === "")) v = null;
        if (f.type === "fk" && (!v || v === "")) v = null;
        if (f.type === "fk" && v && f.fkParentField && f.fkParentSource) {
          const parentId = form[f.fkParentSource];
          const option = (fkOptions[f.key] ?? []).find((item) => item.id === v);
          if (parentId && option && option.parent !== parentId) {
            toast.error(`Поле «${f.label}» не относится к выбранной категории`);
            setSaving(false);
            return;
          }
        }
        if (f.type === "text" || f.type === "textarea") {
          if (v === "") v = null;
        }
        if (f.required && (v === null || v === undefined || v === "")) {
          toast.error(`Поле «${f.label}» обязательно`);
          setSaving(false);
          return;
        }
        if (isOptionalManualSaleField(f.key) && v === null && record?.[f.key] == null) {
          continue;
        }
        if (isInactiveFeaturedField(config, f.key, v) && record?.[f.key] == null) {
          continue;
        }
        payload[f.key] = v;
      }

      const validationError = validatePayload(config, payload);
      if (validationError) {
        toast.error(validationError);
        setSaving(false);
        return;
      }

      let error;
      // Resolve sort_order conflicts: shift existing rows with >= new value by +1
      if (config.hasSortOrder && payload.sort_order !== null && payload.sort_order !== undefined) {
        const newOrder = Number(payload.sort_order);
        const prevOrder = record?.sort_order ?? null;
        if (prevOrder !== newOrder) {
          let q = (supabase as any)
            .from(config.table)
            .select("id, sort_order")
            .gte("sort_order", newOrder)
            .order("sort_order", { ascending: false });
          if (config.sortScopeField && payload[config.sortScopeField]) {
            q = q.eq(config.sortScopeField, payload[config.sortScopeField]);
          }
          if (record?.id) q = q.neq("id", record.id);
          const { data: conflicts, error: cErr } = await q;
          if (cErr) throw cErr;
          const hasConflict = (conflicts ?? []).some(
            (r: any) => Number(r.sort_order) === newOrder
          );
          if (hasConflict) {
            // shift all >= newOrder by +1, descending to avoid intermediate collisions
            for (const r of conflicts as any[]) {
              const { error: uErr } = await (supabase as any)
                .from(config.table)
                .update({ sort_order: Number(r.sort_order) + 1 })
                .eq("id", r.id);
              if (uErr) throw uErr;
            }
          }
        }
      }

      if (record?.id) {
        ({ error } = await (supabase as any).from(config.table).update(payload).eq("id", record.id));
      } else {
        ({ error } = await (supabase as any).from(config.table).insert(payload));
      }
      if (error) throw error;
      toast.success(record ? "Обновлено" : "Создано");
      onSaved();
      onClose();
    } catch (e) {
      toast.error(getErrorMessage(e));
    } finally {
      setSaving(false);
    }
  };

  const renderField = (f: FieldConfig) => {
    const v = form[f.key];
    switch (f.type) {
      case "text":
        return <Input value={v ?? ""} onChange={(e) => setVal(f.key, e.target.value)} />;
      case "textarea":
        return (
          <Textarea
            value={v ?? ""}
            onChange={(e) => setVal(f.key, e.target.value)}
            rows={4}
          />
        );
      case "number":
        return (
          <Input
            type={isMoneyField(f.key) ? "text" : "number"}
            inputMode={isMoneyField(f.key) ? "decimal" : undefined}
            step={isMoneyField(f.key) ? undefined : "any"}
            value={v ?? ""}
            onChange={(e) => setVal(f.key, e.target.value)}
          />
        );
      case "boolean":
        return (
          <div className="flex items-center gap-2">
            <Checkbox
              checked={!!v}
              onCheckedChange={(c) => setVal(f.key, !!c)}
            />
            <span className="text-sm text-muted-foreground">{f.label}</span>
          </div>
        );
      case "image":
        return <ImageUploadField value={v || null} onChange={(nv) => setVal(f.key, nv)} />;
      case "json":
        return (
          <Textarea
            value={v ?? ""}
            onChange={(e) => setVal(f.key, e.target.value)}
            rows={6}
            className="font-mono text-xs"
          />
        );
      case "date":
        return <Input type="date" value={v ?? ""} onChange={(e) => setVal(f.key, e.target.value)} />;
      case "time":
        return <Input type="time" value={v ?? ""} onChange={(e) => setVal(f.key, e.target.value)} />;
      case "gallery":
        return <GalleryField value={Array.isArray(v) ? v : []} onChange={(nv) => setVal(f.key, nv)} />;
      case "string_list":
        return <StringListField value={Array.isArray(v) ? v : []} onChange={(nv) => setVal(f.key, nv)} />;
      case "reasons":
        return <ReasonsField value={Array.isArray(v) ? v : []} onChange={(nv) => setVal(f.key, nv)} />;
      case "packing_list":
        return <PackingListField value={Array.isArray(v) ? v : []} onChange={(nv) => setVal(f.key, nv)} />;
      case "color_image_list":
        return <ColorImageListField value={Array.isArray(v) ? v : []} onChange={(nv) => setVal(f.key, nv)} />;
      case "fk": {
        const all = fkOptions[f.key] ?? [];
        const parentId = f.fkParentSource ? form[f.fkParentSource] : null;
        const filtered = f.fkParentField && parentId ? all.filter((o) => o.parent === parentId) : all;
        const needsParent = !!f.fkParentField && !!f.fkParentSource && !parentId;
        return (
          <FkCombobox
            value={v || null}
            options={filtered}
            placeholder={needsParent ? "Сначала выберите категорию" : "Выберите…"}
            emptyText={needsParent ? "Сначала выберите категорию" : "Ничего не найдено"}
            clearLabel="— Не выбрано —"
            required={f.required}
            disabled={needsParent}
            onChange={(val) => setVal(f.key, val)}
          />
        );
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{record ? "Редактирование" : "Создание"} · {config.label}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          {missingDbFields.length > 0 && (
            <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
              В базе нет колонок: {missingDbFields.join(", ")}. Эти поля временно скрыты из формы.
            </div>
          )}
          {activeFields.map((f) => (
            <div key={f.key} className="space-y-1.5">
              {f.type !== "boolean" && (
                <Label>
                  {f.label} {f.required && <span className="text-destructive">*</span>}
                </Label>
              )}
              {renderField(f)}
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={saving}>
            Отмена
          </Button>
          <Button onClick={submit} disabled={saving}>
            {saving ? "Сохранение…" : "Сохранить"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
