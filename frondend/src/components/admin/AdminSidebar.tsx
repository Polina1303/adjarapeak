/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { ADMIN_TABLE_LIST } from "@/lib/admin-tables";

export function AdminSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const shop = ADMIN_TABLE_LIST.filter((t) => t.section === "shop");
  const rental = ADMIN_TABLE_LIST.filter((t) => t.section === "rental");

  const isActive = (url: string) => pathname === url;

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Обзор</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/admin")} className="hover:bg-ember hover:text-ember-foreground">
                  <Link to={"/admin" as any}>
                    <span>Панель</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Магазин</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {shop.map((t) => {
                const url = `/admin/t/${t.key}`;
                return (
                  <SidebarMenuItem key={t.key}>
                    <SidebarMenuButton asChild isActive={isActive(url)} className="hover:bg-ember hover:text-ember-foreground">
                      <Link to={"/admin/t/$table" as any} params={{ table: t.key } as any}>
                        <span>{t.label.replace("Магазин · ", "")}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px]">Аренда</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {rental.map((t) => {
                const url = `/admin/t/${t.key}`;
                return (
                  <SidebarMenuItem key={t.key}>
                    <SidebarMenuButton asChild isActive={isActive(url)} className="hover:bg-ember hover:text-ember-foreground">
                      <Link to={"/admin/t/$table" as any} params={{ table: t.key } as any}>
                        <span>{t.label.replace("Аренда · ", "")}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
