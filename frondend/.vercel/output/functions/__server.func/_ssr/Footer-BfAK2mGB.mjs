import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as useLanguage, D as useCartCount, r as getSiteText } from "./router-iK0vV985.mjs";
import { S as Search, X, m as Menu, d as ChevronDown, v as ShoppingBag, I as Instagram, s as Send, q as Phone, M as MapPin } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
const logo = "/assets/logo-bcXWQTNO.png";
const mainNav = [
  { to: "/sale", labelKey: "shop" },
  { to: "/rent", labelKey: "rental" },
  { to: "/rockClimbing", labelKey: "rockClimbing" },
  { to: "/service", labelKey: "serviceCenter" },
  { to: "/contact", labelKey: "contacts" }
];
const languages$1 = [
  { code: "EN", label: "English" },
  { code: "RU", label: "Русский" },
  { code: "GE", label: "ქართული" }
];
const headerText = {
  RU: {
    shop: "Магазин",
    rental: "Прокат",
    rockClimbing: "Скалолазание",
    serviceCenter: "Сервисный центр",
    contacts: "Контакты",
    homeAria: "На главную",
    cartAria: "Перейти в корзину",
    searchProducts: "Поиск товаров",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню"
  },
  EN: {
    shop: "Shop",
    rental: "Rental",
    rockClimbing: "Rock climbing",
    serviceCenter: "Service center",
    contacts: "Contacts",
    homeAria: "Go to home page",
    cartAria: "Go to cart",
    searchProducts: "Search products",
    openMenu: "Open menu",
    closeMenu: "Close menu"
  },
  GE: {
    shop: "მაღაზია",
    rental: "ქირაობა",
    rockClimbing: "კლდეზე ცოცვა",
    serviceCenter: "სერვის-ცენტრი",
    contacts: "კონტაქტები",
    homeAria: "მთავარ გვერდზე გადასვლა",
    cartAria: "კალათაში გადასვლა",
    searchProducts: "პროდუქტის ძებნა",
    openMenu: "მენიუს გახსნა",
    closeMenu: "მენიუს დახურვა"
  }
};
function Header({ transparent = false }) {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [langOpen, setLangOpen] = reactExports.useState(false);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [hidden, setHidden] = reactExports.useState(false);
  const navigate = useNavigate();
  const { lang: currentLang, setLang, isTranslating } = useLanguage();
  const t = headerText[currentLang];
  const langRef = reactExports.useRef(null);
  const cartCount = useCartCount();
  reactExports.useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `fixed top-0 left-0 right-0 z-50 transition-transform duration-300 will-change-transform ${hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"} ${transparent ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-background backdrop-blur-xl border-b border-border"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden section-padding flex items-center gap-3 h-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", "aria-label": t.homeAria, className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Adjara Peak", className: "h-8 w-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            const q = searchQuery.trim();
            if (!q) return;
            navigate({ to: "/sale/search", search: { q } });
          },
          className: "relative flex-1 min-w-0",
          role: "search",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "search",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                placeholder: t.searchProducts,
                "aria-label": t.searchProducts,
                className: "w-full h-10 pl-10 pr-3 rounded-full bg-foreground/5 border border-border text-sm font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-ember focus:bg-background transition-colors"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": mobileOpen ? t.closeMenu : t.openMenu,
          className: "shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-ember",
          onClick: () => setMobileOpen(!mobileOpen),
          children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex section-padding items-center justify-between h-18", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Adjara Peak", className: "h-9 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden xl:inline font-display text-xl font-bold tracking-tight text-foreground", children: [
          "Adjara",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember", children: "Peak" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex items-center gap-8 ml-auto mr-6", children: mainNav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          activeProps: { className: "!text-ember" },
          className: "text-[13px] font-body font-semibold text-foreground/70 hover:text-foreground uppercase tracking-[0.08em] transition-colors whitespace-nowrap",
          children: t[item.labelKey]
        },
        item.to + item.labelKey
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: langRef, className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setLangOpen(!langOpen),
              className: "flex items-center gap-1 text-xs font-body font-medium text-foreground/60 hover:text-foreground transition-colors",
              "data-no-translate": true,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isTranslating ? "opacity-50" : "", children: currentLang }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}` })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: langOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: -4 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -4 },
              transition: { duration: 0.15 },
              className: "absolute right-0 top-full mt-2 bg-background border border-border rounded-lg shadow-xl overflow-hidden min-w-[120px]",
              "data-no-translate": true,
              children: languages$1.map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    setLang(lang.code);
                    setLangOpen(false);
                  },
                  className: `w-full text-left px-4 py-2 text-xs font-body transition-colors ${currentLang === lang.code ? "text-ember bg-foreground/5" : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"}`,
                  children: lang.label
                },
                lang.code
              ))
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/checkout",
            "aria-label": t.cartAria,
            className: "w-9 h-9 rounded-lg flex items-center justify-center text-foreground/60 hover:text-ember transition-colors relative",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4.5 w-4.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-ember text-[9px] text-ember-foreground flex items-center justify-center font-body font-bold", children: cartCount })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "lg:hidden border-t border-border max-h-[70vh] overflow-y-auto",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "section-padding py-6 flex flex-col gap-3", children: [
          mainNav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              activeProps: { className: "!text-ember" },
              className: "text-sm font-display font-medium text-foreground/70 hover:text-foreground text-left uppercase tracking-[0.06em] py-1",
              onClick: () => setMobileOpen(false),
              children: t[item.labelKey]
            },
            item.to + item.labelKey
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-4 mt-2 flex gap-3", "data-no-translate": true, children: languages$1.map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setLang(lang.code);
              },
              className: `text-xs font-body px-3 py-1.5 rounded-full border transition-colors ${currentLang === lang.code ? "border-ember text-ember" : "border-border text-foreground/50 hover:text-foreground"}`,
              children: lang.code
            },
            lang.code
          )) })
        ] })
      }
    ) })
  ] });
}
const languages = [
  { code: "EN", label: "EN" },
  { code: "RU", label: "RU" },
  { code: "GE", label: "GE" }
];
const WhatsAppIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) });
const navLinks = [
  { to: "/sale", key: "shop" },
  { to: "/rent", key: "rental" },
  { to: "/rockClimbing", key: "climbing" },
  { to: "/service", key: "service" },
  { to: "/contact", key: "contacts" }
];
const socials = [
  { Icon: Instagram, href: "https://instagram.com/adjarapeak/", label: "Instagram" },
  { Icon: Send, href: "https://t.me/adjarapeak", label: "Telegram" },
  { Icon: WhatsAppIcon, href: "https://api.whatsapp.com/send/?phone=995511147586&text&type=phone_number&app_absent=0", label: "WhatsApp" }
];
function Footer() {
  const { lang: currentLang, setLang } = useLanguage();
  const text = getSiteText(currentLang).footer;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-foreground text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-padding py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl font-bold tracking-tight", children: [
          "Adjara",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember", children: "Peak" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/30 text-xs font-body leading-relaxed mt-3 max-w-xs", children: text.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-5", children: socials.map(({ Icon, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": label,
            className: "w-8 h-8 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-primary-foreground/50" })
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-[0.15em] font-body font-medium text-primary-foreground/40 mb-4", children: text.navigation }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-2", children: navLinks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.to,
            className: "text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors font-body",
            children: text.nav[item.key]
          },
          item.to
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-[0.15em] font-body font-medium text-primary-foreground/40 mb-4", children: text.contacts }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 text-xs text-primary-foreground/40 font-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+995571208555", className: "flex items-center gap-2 hover:text-primary-foreground/70 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+995-571-208-555 (GEO, ENG, RU)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.google.com/maps?cid=6512661380146566532",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-start gap-2 hover:text-primary-foreground/70 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text.address })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", "data-no-translate": true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-[0.15em] font-body font-medium text-primary-foreground/40 mb-3", children: text.language }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: languages.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setLang(l.code),
              className: `text-[11px] font-body px-3 py-1.5 rounded-full border transition-colors ${currentLang === l.code ? "border-ember text-ember" : "border-primary-foreground/15 text-primary-foreground/50 hover:text-primary-foreground/80"}`,
              children: l.label
            },
            l.code
          )) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-primary-foreground/6 section-padding py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary-foreground/20 font-body", children: text.rights }) }) })
  ] });
}
export {
  Footer as F,
  Header as H
};
