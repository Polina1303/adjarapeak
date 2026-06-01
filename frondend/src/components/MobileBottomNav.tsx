import { Link, useLocation } from "@tanstack/react-router";
import { Home, Store, ShoppingBag, Tent, Mountain } from "lucide-react";
import { useCartCount } from "@/lib/cart";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

const items = [
  { to: "/" as const, key: "home", icon: Home, exact: true },
  { to: "/sale" as const, key: "shop", icon: Store, exact: false },
  { to: "/rent" as const, key: "rental", icon: Tent, exact: false },
  { to: "/hikes" as const, key: "hikes", icon: Mountain, exact: false },
] as const;

export function MobileBottomNav() {
  const { pathname } = useLocation();
  const cartCount = useCartCount();
  const { lang } = useLanguage();
  const text = getSiteText(lang).mobileNav;

  return (
    <nav
      aria-label={text.aria}
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background border-t border-border pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="grid grid-cols-5">
        {items.map(({ to, key, icon: Icon, exact }) => {
          const active = exact ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);
          return (
            <li key={to}>
              <Link
                to={to}
                className={`flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-body transition-colors ${
                  active ? "text-ember" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{text[key]}</span>
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            to="/checkout"
            className="w-full flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 min-w-[16px] h-[16px] px-1 rounded-full bg-ember text-ember-foreground text-[10px] font-display flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </span>
            <span>{text.cart}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
