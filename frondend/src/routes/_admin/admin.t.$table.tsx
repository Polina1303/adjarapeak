/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute, useParams, Navigate } from "@tanstack/react-router";
import { DataTable } from "@/components/admin/DataTable";
import { ADMIN_TABLES, type AdminTableKey } from "@/lib/admin-tables";

export const Route = createFileRoute("/_admin/admin/t/$table")({
  component: TablePage,
  head: () => ({ meta: [{ title: "Админка · Таблица" }, { name: "robots", content: "noindex" }] }),
});

function TablePage() {
  const { table } = useParams({ strict: false }) as { table: string };
  const config = ADMIN_TABLES[table as AdminTableKey];
  if (!config) return <Navigate to={"/admin" as any} />;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{config.label}</h1>
      <DataTable config={config} />
    </div>
  );
}
