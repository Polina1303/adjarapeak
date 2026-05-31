/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Pencil,
  Trash2,
  Plus,
  Download,
  Eye,
  EyeOff,
  GripVertical,
} from "lucide-react";
import type { AdminTableConfig } from "@/lib/admin-tables";
import { ADMIN_TABLES } from "@/lib/admin-tables";
import { loadAdminSortRefs, sortAdminRows } from "@/lib/admin-sort";
import { RecordForm } from "./RecordForm";
import { toCSV, downloadBlob } from "@/lib/csv";
import { resolveCatalogImage } from "@/lib/catalog-image";
import { toast } from "sonner";

type Row = Record<string, any>;
const FETCH_PAGE_SIZE = 1000;

const COLUMN_LABELS: Record<string, string> = {
  sort_order: "Порядок",
  title: "Название",
  slug: "Слаг",
  price: "Цена",
  sale_price: "Цена со скидкой",
  price_per_day: "Цена / день",
  sale_price_per_day: "Цена / день со скидкой",
  in_stock: "В наличии",
  available: "Доступно",
  hidden: "Скрыто",
  image: "Изображение",
  description: "Описание",
};

function normalizeSearchValue(value: unknown) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ё/g, "е")
    .replace(/Ё/g, "е")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function getSearchableValue(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return value.map(getSearchableValue).join(" ");
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function matchesSearch(row: Row, tokens: string[]) {
  const haystack = normalizeSearchValue(
    Object.values(row).map(getSearchableValue).join(" "),
  );
  return tokens.every((token) => haystack.includes(token));
}

async function fetchAllAdminRows(table: string, orderCol: string) {
  const all: Row[] = [];
  for (let from = 0; ; from += FETCH_PAGE_SIZE) {
    const to = from + FETCH_PAGE_SIZE - 1;
    let query = (supabase as any)
      .from(table)
      .select("*")
      .order(orderCol, { ascending: true });

    if (orderCol !== "id") {
      query = query.order("id", { ascending: true });
    }

    const { data, error } = await query.range(from, to);
    if (error) throw error;
    const chunk = (data as Row[]) ?? [];
    all.push(...chunk);
    if (chunk.length < FETCH_PAGE_SIZE) break;
  }
  return all;
}

export function DataTable({ config }: { config: AdminTableConfig }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [editing, setEditing] = useState<Row | null>(null);
  const [creating, setCreating] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Row | null>(null);
  const [fkLabels, setFkLabels] = useState<Record<string, Record<string, string>>>({});
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  const PAGE_SIZE = 50;

  const load = async () => {
    setLoading(true);
    const orderCol = config.hasSortOrder ? "sort_order" : "title";
    try {
      const [loadedRows, refs] = await Promise.all([
        fetchAllAdminRows(config.table, orderCol),
        loadAdminSortRefs(config.table, supabase),
      ]);
      setRows(sortAdminRows(config.table, loadedRows, refs));
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Не удалось загрузить записи");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    setPage(0);
    setSearch("");
  }, [config.table]);

  // load FK label maps for list display
  useEffect(() => {
    const fkFields = config.fields.filter((f) => f.type === "fk" && f.fkTable);
    if (!fkFields.length) {
      setFkLabels({});
      return;
    }
    (async () => {
      const map: Record<string, Record<string, string>> = {};
      for (const f of fkFields) {
        const refConfig = f.fkTable ? ADMIN_TABLES[f.fkTable] : null;
        if (!refConfig) continue;
        const { data } = await (supabase as any).from(refConfig.table).select("id,title");
        const m: Record<string, string> = {};
        ((data as any[]) ?? []).forEach((r) => (m[r.id] = r.title));
        map[f.key] = m;
      }
      setFkLabels(map);
    })();
  }, [config.table]);

  const filtered = useMemo(() => {
    const tokens = normalizeSearchValue(search).split(/\s+/).filter(Boolean);
    if (!tokens.length) return rows;
    return rows.filter((r) => matchesSearch(r, tokens));
  }, [rows, search]);

  const pageRows = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  const deleteRow = async (r: Row) => {
    const { error } = await (supabase as any).from(config.table).delete().eq("id", r.id);
    if (error) toast.error(error.message);
    else {
      toast.success("Удалено");
      load();
    }
    setDeleteTarget(null);
  };

  const toggleHidden = async (r: Row) => {
    const { error } = await (supabase as any)
      .from(config.table)
      .update({ hidden: !r.hidden })
      .eq("id", r.id);
    if (error) toast.error(error.message);
    else load();
  };

  const reorder = async (from: number, to: number) => {
    if (from === to || from < 0 || to < 0 || from >= rows.length || to >= rows.length) return;
    const scopeField = config.sortScopeField;
    if (scopeField && rows[from]?.[scopeField] !== rows[to]?.[scopeField]) {
      toast.error("Сортировка доступна только внутри одной группы/категории");
      return;
    }
    const next = [...rows];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    // optimistic UI
    setRows(next);
    const orderedScopeRows = scopeField
      ? next.filter((row) => row[scopeField] === moved[scopeField])
      : next;
    const updates = [];
    for (let k = 0; k < orderedScopeRows.length; k++) {
      const newOrder = k + 1;
      if ((orderedScopeRows[k].sort_order ?? null) !== newOrder) {
        updates.push(
          (supabase as any)
            .from(config.table)
            .update({ sort_order: newOrder })
            .eq("id", orderedScopeRows[k].id)
        );
      }
    }
    const results = await Promise.all(updates);
    const err = results.find((r: any) => r.error);
    if (err) {
      toast.error(err.error.message);
      load();
    } else {
      load();
    }
  };

  const exportCSV = () => {
    downloadBlob(toCSV(rows), `${config.table}-${new Date().toISOString().slice(0, 10)}.csv`);
  };

  const renderCell = (r: Row, col: string) => {
    const v = r[col];
    if (col === "image" && v) {
      return <img src={resolveCatalogImage(v)} alt="" className="h-10 w-10 object-cover rounded" />;
    }
    if (typeof v === "boolean") {
      return (
        <span className={v ? "text-emerald-600" : "text-muted-foreground"}>
          {v ? "Да" : "Нет"}
        </span>
      );
    }
    if (col.endsWith("_id") && fkLabels[col]?.[v]) {
      return <span className="text-xs">{fkLabels[col][v]}</span>;
    }
    if (typeof v === "object" && v !== null) {
      return <span className="text-xs text-muted-foreground">[obj]</span>;
    }
    return <span className="text-sm">{v === null || v === undefined ? "—" : String(v)}</span>;
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Input
          placeholder="Поиск по названию / слагу / описанию…"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
          className="max-w-sm"
        />
        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm" onClick={exportCSV}>
            <Download className="h-4 w-4 mr-1" /> CSV
          </Button>
          <Button size="sm" onClick={() => setCreating(true)}>
            <Plus className="h-4 w-4 mr-1" /> Добавить
          </Button>
        </div>
      </div>

      <div className="rounded border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              {config.hasSortOrder && <TableHead className="w-20">Сорт.</TableHead>}
              {config.listColumns.map((c) => (
                <TableHead key={c}>{COLUMN_LABELS[c] ?? c}</TableHead>
              ))}
              <TableHead className="w-32 text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={config.listColumns.length + 2}>Загрузка…</TableCell>
              </TableRow>
            ) : pageRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={config.listColumns.length + 2} className="text-muted-foreground">
                  Нет записей
                </TableCell>
              </TableRow>
            ) : (
              pageRows.map((r, i) => {
                const globalIdx = page * PAGE_SIZE + i;
                const rowsIdx = rows.findIndex((x) => x.id === r.id);
                const draggable = config.hasSortOrder && !search.trim();
                return (
                  <TableRow
                    key={r.id}
                    onDragOver={(e) => {
                      if (dragIndex === null) return;
                      e.preventDefault();
                      if (overIndex !== rowsIdx) setOverIndex(rowsIdx);
                    }}
                    onDrop={(e) => {
                      if (dragIndex === null) return;
                      e.preventDefault();
                      const from = dragIndex;
                      const to = rowsIdx;
                      setDragIndex(null);
                      setOverIndex(null);
                      reorder(from, to);
                    }}
                    onDragLeave={() => {
                      if (overIndex === rowsIdx) setOverIndex(null);
                    }}
                    className={
                      [
                        dragIndex === rowsIdx ? "opacity-40 bg-muted" : "",
                        overIndex === rowsIdx && dragIndex !== null && dragIndex !== rowsIdx
                          ? "bg-ember/5 border-t-2 border-ember"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    {config.hasSortOrder && (
                      <TableCell>
                        <button
                          type="button"
                          draggable={draggable}
                          onDragStart={(e) => {
                            if (!draggable) return;
                            setDragIndex(rowsIdx);
                            e.dataTransfer.effectAllowed = "move";
                          }}
                          onDragEnd={() => {
                            setDragIndex(null);
                            setOverIndex(null);
                          }}
                          title={draggable ? "Перетащите для изменения порядка" : "Отключите поиск для сортировки"}
                          className="flex items-center justify-center text-muted-foreground hover:text-ember cursor-grab active:cursor-grabbing disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          disabled={!draggable}
                        >
                          <GripVertical className="h-4 w-4" />
                        </button>
                      </TableCell>
                    )}
                    {config.listColumns.map((c) => (
                      <TableCell key={c}>{renderCell(r, c)}</TableCell>
                    ))}
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        {config.hasHidden && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleHidden(r)}
                            title={r.hidden ? "Показать" : "Скрыть"}
                          >
                            {r.hidden ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" onClick={() => setEditing(r)} className="hover:bg-muted hover:text-foreground transition-colors">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setDeleteTarget(r)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Записей: {filtered.length}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 0}
            onClick={() => {
              setPage((p) => p - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Назад
          </Button>
          <span>
            {page + 1} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={page + 1 >= totalPages}
            onClick={() => {
              setPage((p) => p + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Вперёд
          </Button>
        </div>
      </div>

      <RecordForm
        config={config}
        record={editing}
        open={!!editing}
        onClose={() => setEditing(null)}
        onSaved={load}
      />
      <RecordForm
        config={config}
        record={null}
        open={creating}
        onClose={() => setCreating(false)}
        onSaved={load}
      />

      <AlertDialog open={!!deleteTarget} onOpenChange={(o) => !o && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Удалить запись?</AlertDialogTitle>
            <AlertDialogDescription>
              Запись «{deleteTarget?.title}» будет удалена безвозвратно. Это действие нельзя отменить.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteTarget && deleteRow(deleteTarget)}
              className="bg-destructive text-destructive-foreground"
            >
              Удалить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
