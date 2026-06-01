/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImageUploadField } from "./ImageUploadField";
import { GalleryField } from "./GalleryField";
import { StringListField } from "./StringListField";
import { ReasonsField } from "./ReasonsField";
import { PackingListField } from "./PackingListField";
import type { AdminTableConfig, FieldConfig } from "@/lib/admin-tables";
import { loadAdminSortRefs, sortAdminRows } from "@/lib/admin-sort";
import { toast } from "sonner";

type Props = {
  config: AdminTableConfig;
  record: Record<string, any> | null;
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
};

type FkOption = { id: string; title: string; parent?: string | null };

function isOptionalManualSaleField(key: string) {
  return key === "sale_price" || key === "sale_price_per_day";
}

function isMoneyField(key: string) {
  return key === "price" || key === "sale_price" || key === "price_per_day" || key === "sale_price_per_day";
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

  if (
    /sale_price|sale_price_per_day/i.test(fullMessage) &&
    /column|schema cache|does not exist|could not find/i.test(fullMessage)
  ) {
    return "В базе ещё нет поля для цены со скидкой. Примените миграцию Supabase и попробуйте снова.";
  }

  return message;
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

export function RecordForm({ config, record, open, onClose, onSaved }: Props) {
  const [form, setForm] = useState<Record<string, any>>({});
  const [fkOptions, setFkOptions] = useState<Record<string, FkOption[]>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open) return;
    const initial: Record<string, any> = {};
    for (const f of config.fields) {
      if (record) {
        initial[f.key] = record[f.key] ?? (f.type === "boolean" ? false : "");
        if (["gallery", "string_list", "reasons", "packing_list"].includes(f.type)) {
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
                : ["gallery", "string_list", "reasons", "packing_list"].includes(f.type)
                  ? []
                  : "";
      }
    }
    setForm(initial);
  }, [open, record, config]);

  useEffect(() => {
    if (!open) return;
    const loadFk = async () => {
      const opts: Record<string, FkOption[]> = {};
      for (const f of config.fields) {
        if (f.type === "fk" && f.fkTable) {
          const [{ data }, refs] = await Promise.all([
            (supabase as any).from(f.fkTable).select("*").order("title", { ascending: true }),
            loadAdminSortRefs(f.fkTable, supabase),
          ]);
          const rows = sortAdminRows(f.fkTable, (data as any[]) ?? [], refs);
          opts[f.key] = rows.map((r) => ({
            id: r.id,
            title: r.title,
            parent: f.fkParentField ? r[f.fkParentField] : null,
          }));
        }
      }
      setFkOptions(opts);
    };
    loadFk();
  }, [open, config]);

  const setVal = (k: string, v: any) => setForm((p) => ({ ...p, [k]: v }));

  const submit = async () => {
    setSaving(true);
    try {
      const payload: Record<string, any> = {};
      for (const f of config.fields) {
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
        if (["gallery", "reasons", "packing_list"].includes(f.type)) {
          v = Array.isArray(v) ? v : [];
        }
        if (f.type === "string_list") {
          v = Array.isArray(v)
            ? v.map((item) => String(item).trim()).filter(Boolean)
            : [];
        }
        if ((f.type === "date" || f.type === "time") && (!v || v === "")) v = null;
        if (f.type === "fk" && (!v || v === "")) v = null;
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
      case "fk": {
        const all = fkOptions[f.key] ?? [];
        const parentId = f.fkParentSource ? form[f.fkParentSource] : null;
        const filtered = f.fkParentField && parentId ? all.filter((o) => o.parent === parentId) : all;
        return (
          <Select
            value={v || ""}
            onValueChange={(val) => setVal(f.key, val === "__none__" ? null : val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите…" />
            </SelectTrigger>
            <SelectContent>
              {!f.required && <SelectItem value="__none__">— Не выбрано —</SelectItem>}
              {filtered.map((o) => (
                <SelectItem key={o.id} value={o.id}>
                  {o.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
          {config.fields.map((f) => (
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
