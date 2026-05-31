/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute, Outlet, useNavigate, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { AdminAuthProvider, useAdminAuth } from "@/lib/admin-auth";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ADMIN_TABLE_LIST } from "@/lib/admin-tables";
import { toCSV, downloadBlob } from "@/lib/csv";
import { Menu } from "lucide-react";

function MobileMenuTrigger() {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden h-9 w-9 hover:bg-muted hover:text-foreground transition-colors"
      onClick={toggleSidebar}
      aria-label="Открыть меню"
    >
      <Menu className="h-5 w-5" />
    </Button>
  );
}

export const Route = createFileRoute("/_admin")({
  component: () => (
    <AdminAuthProvider>
      <AdminGate />
    </AdminAuthProvider>
  ),
});

function AdminGate() {
  const { loading, session, isAdmin, signOut, user, refresh } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !session) navigate({ to: "/admin/login" as any });
  }, [loading, session, navigate]);

  // Auto-recheck admin role once after session becomes available
  useEffect(() => {
    if (session && !isAdmin) {
      refresh();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user?.id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Загрузка…</div>;
  }
  if (!session) return null;
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 p-4 text-center">
        <h1 className="text-2xl font-semibold">Доступ запрещён</h1>
        <p className="text-muted-foreground max-w-md">
          Вы вошли как {user?.email}, но у этого аккаунта нет прав администратора.
          Попросите владельца сайта выдать роль <code>admin</code>.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => refresh()}>Обновить</Button>
          <Button variant="outline" onClick={signOut}>Выйти</Button>
        </div>
      </div>
    );
  }

  const backup = async () => {
    try {
      const dump: Record<string, any[]> = {};
      for (const t of ADMIN_TABLE_LIST) {
        const { data, error } = await (supabase as any).from(t.table).select("*");
        if (error) throw error;
        dump[t.table] = data ?? [];
      }
      downloadBlob(
        JSON.stringify(dump, null, 2),
        `catalog-backup-${new Date().toISOString().replace(/[:.]/g, "-")}.json`,
        "application/json"
      );
      toast.success("Резервная копия загружена");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Не удалось создать резервную копию");
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 border-b bg-background flex items-center gap-2 px-3">
            <SidebarTrigger className="hidden md:inline-flex hover:bg-muted hover:text-foreground transition-colors" />
            <Link to={"/admin" as any} className="font-semibold inline-flex">
              <span className="hidden md:inline">Adjara Peak · Админка</span>
              <span className="md:hidden">Админка</span>
            </Link>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-xs text-muted-foreground hidden sm:inline">{user?.email}</span>
              <Button variant="outline" size="sm" onClick={backup}>Резервная копия</Button>
              <Button variant="ghost" size="sm" onClick={signOut} className="hover:bg-ember/10 hover:text-ember transition-colors">Выйти</Button>
              <MobileMenuTrigger />
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
