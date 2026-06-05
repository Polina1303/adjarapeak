import { Link, useNavigate } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { useState, useRef, useEffect } from "react";
import { ShoppingBag, Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartCount } from "@/lib/cart";
import { useLanguage, type Lang } from "@/lib/i18n";

type MainNavItem = {
  to: "/sale" | "/rent" | "/hikes" | "/rockClimbing" | "/service" | "/contact";
  labelKey: "shop" | "rental" | "hikes" | "rockClimbing" | "serviceCenter" | "contacts";
};

const mainNav: MainNavItem[] = [
  { to: "/sale", labelKey: "shop" },
  { to: "/rent", labelKey: "rental" },
  { to: "/hikes", labelKey: "hikes" },
  { to: "/rockClimbing", labelKey: "rockClimbing" },
  { to: "/service", labelKey: "serviceCenter" },
  { to: "/contact", labelKey: "contacts" },
];

const languages = [
  { code: "EN", label: "English" },
  { code: "RU", label: "Русский" },
  { code: "GE", label: "ქართული" },
];

const headerText: Record<
  Lang,
  {
    shop: string;
    rental: string;
    hikes: string;
    rockClimbing: string;
    serviceCenter: string;
    contacts: string;
    homeAria: string;
    cartAria: string;
    searchProducts: string;
    openMenu: string;
    closeMenu: string;
  }
> = {
  RU: {
    shop: "Магазин",
    rental: "Прокат",
    hikes: "Походы",
    rockClimbing: "Скалолазание",
    serviceCenter: "Сервисный центр",
    contacts: "Контакты",
    homeAria: "На главную",
    cartAria: "Перейти в корзину",
    searchProducts: "Поиск товаров и аренды",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
  },
  EN: {
    shop: "Shop",
    rental: "Rental",
    hikes: "Hikes",
    rockClimbing: "Rock climbing",
    serviceCenter: "Service center",
    contacts: "Contacts",
    homeAria: "Go to home page",
    cartAria: "Go to cart",
    searchProducts: "Search shop and rentals",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  GE: {
    shop: "მაღაზია",
    rental: "ქირაობა",
    hikes: "ლაშქრობები",
    rockClimbing: "კლდეზე ცოცვა",
    serviceCenter: "სერვის-ცენტრი",
    contacts: "კონტაქტები",
    homeAria: "მთავარ გვერდზე გადასვლა",
    cartAria: "კალათაში გადასვლა",
    searchProducts: "მაღაზიისა და ქირაობის ძებნა",
    openMenu: "მენიუს გახსნა",
    closeMenu: "მენიუს დახურვა",
  },
};

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  const { lang: currentLang, setLang, isTranslating } = useLanguage();
  const t = headerText[currentLang];
  const langRef = useRef<HTMLDivElement>(null);
  const cartCount = useCartCount();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;
        if (y < 80) {
          setHidden(false);
        } else if (delta > 6) {
          setHidden(true);
        } else if (delta < -6) {
          setHidden(false);
        }
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 will-change-transform ${
      hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
    } ${
      transparent
        ? "bg-background/90 backdrop-blur-xl border-b border-border"
        : "bg-background backdrop-blur-xl border-b border-border"
    }`}>
      {/* Mobile top bar: logo + search + burger */}
      <div className="lg:hidden section-padding flex items-center gap-3 h-16">
        <Link to="/" aria-label={t.homeAria} className="shrink-0">
          <img src={logo} alt="Adjara Peak" className="h-8 w-auto" />
        </Link>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const q = searchQuery.trim();
            if (!q) return;
            navigate({ to: "/search", search: { q } });
          }}
          className="relative flex-1 min-w-0"
          role="search"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchProducts}
            aria-label={t.searchProducts}
            className="w-full h-10 pl-10 pr-3 rounded-full bg-foreground/5 border border-border text-sm font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-ember focus:bg-background transition-colors"
          />
        </form>
        <button
          aria-label={mobileOpen ? t.closeMenu : t.openMenu}
          className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-ember"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop top bar */}
      <div className="hidden lg:flex section-padding items-center justify-between h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Adjara Peak" className="h-9 w-auto" />
          <span className="hidden xl:inline font-display text-xl font-bold tracking-tight text-foreground">
            Adjara<span className="text-ember">Peak</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="flex items-center gap-8 ml-auto mr-6">
          {mainNav.map((item) => (
            <Link
              key={item.to + item.labelKey}
              to={item.to}
              activeProps={{ className: "!text-ember" }}
              className="text-[13px] font-body font-semibold text-foreground/70 hover:text-foreground uppercase tracking-[0.08em] transition-colors whitespace-nowrap"
            >
              {t[item.labelKey]}
            </Link>
          ))}
        </nav>

        {/* Right side: lang switcher + cart */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-xs font-body font-medium text-foreground/60 hover:text-foreground transition-colors"
              data-no-translate
            >
              <span className={isTranslating ? "opacity-50" : ""}>{currentLang}</span>
              <ChevronDown className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 bg-background border border-border rounded-lg shadow-xl overflow-hidden min-w-[120px]"
                  data-no-translate
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLang(lang.code as Lang); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-xs font-body transition-colors ${
                        currentLang === lang.code
                          ? "text-ember bg-foreground/5"
                          : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart */}
          <Link
            to="/checkout"
            aria-label={t.cartAria}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-foreground/60 hover:text-ember transition-colors relative"
          >
            <ShoppingBag className="h-4.5 w-4.5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-ember text-[9px] text-ember-foreground flex items-center justify-center font-body font-bold">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border max-h-[70vh] overflow-y-auto"
          >
            <nav className="section-padding py-6 flex flex-col gap-3">
              {mainNav.map((item) => (
                <Link
                  key={item.to + item.labelKey}
                  to={item.to}
                  activeProps={{ className: "!text-ember" }}
                  className="text-sm font-display font-medium text-foreground/70 hover:text-foreground text-left uppercase tracking-[0.06em] py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {t[item.labelKey]}
                </Link>
              ))}
              <div className="border-t border-border pt-4 mt-2 flex gap-3" data-no-translate>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLang(lang.code as Lang); }}
                    className={`text-xs font-body px-3 py-1.5 rounded-full border transition-colors ${
                      currentLang === lang.code
                        ? "border-ember text-ember"
                        : "border-border text-foreground/50 hover:text-foreground"
                    }`}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
