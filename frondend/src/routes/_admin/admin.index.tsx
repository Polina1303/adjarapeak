/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ADMIN_TABLE_LIST } from "@/lib/admin-tables";

export const Route = createFileRoute("/_admin/admin/")({
  component: AdminDashboard,
  head: () => ({ meta: [{ title: "Админка · Панель" }, { name: "robots", content: "noindex" }] }),
});

function AdminDashboard() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    (async () => {
      const out: Record<string, number> = {};
      for (const t of ADMIN_TABLE_LIST) {
        const { count } = await (supabase as any)
          .from(t.table)
          .select("*", { count: "exact", head: true });
        out[t.key] = count ?? 0;
      }
      setCounts(out);
    })();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Панель управления</h1>
        <p className="text-sm text-muted-foreground">
          Управление каталогом магазина и аренды. Создайте резервную копию перед массовыми изменениями.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {ADMIN_TABLE_LIST.map((t) => (
          <Link
            key={t.key}
            to={"/admin/t/$table" as any}
            params={{ table: t.key } as any}
            className="h-full block"
          >
            <Card className="hover:border-primary transition-colors h-full flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="text-[10px] uppercase text-muted-foreground">
                  {t.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="text-2xl font-bold">{counts[t.key] ?? "…"}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
