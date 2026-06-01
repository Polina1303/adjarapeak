import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, Send } from "lucide-react";
import { useLanguage, type Lang } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

const languages: { code: Lang; label: string }[] = [
  { code: "EN", label: "EN" },
  { code: "RU", label: "RU" },
  { code: "GE", label: "GE" },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.994c-.003 5.45-4.437 9.884-9.887 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { to: "/sale" as const, key: "shop" },
  { to: "/rent" as const, key: "rental" },
  { to: "/hikes" as const, key: "hikes" },
  { to: "/rockClimbing" as const, key: "climbing" },
  { to: "/service" as const, key: "service" },
  { to: "/contact" as const, key: "contacts" },
] as const;

const socials = [
  { Icon: Instagram, href: "https://instagram.com/adjarapeak/", label: "Instagram" },
  { Icon: Send, href: "https://t.me/adjarapeak", label: "Telegram" },
  { Icon: WhatsAppIcon, href: "https://api.whatsapp.com/send/?phone=995511147586&text&type=phone_number&app_absent=0", label: "WhatsApp" },
];

export function Footer() {
  const { lang: currentLang, setLang } = useLanguage();
  const text = getSiteText(currentLang).footer;
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
            {/* Brand */}
            <div className="md:col-span-5">
              <span className="font-display text-xl font-bold tracking-tight">
                Adjara<span className="text-ember">Peak</span>
              </span>
              <p className="text-primary-foreground/30 text-xs font-body leading-relaxed mt-3 max-w-xs">
                {text.description}
              </p>
              <div className="flex gap-2 mt-5">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary-foreground/50" />
                  </a>
                ))}
              </div>
            </div>

            {/* Навигация */}
            <div className="md:col-span-3">
              <h4 className="text-[10px] uppercase tracking-[0.15em] font-body font-medium text-primary-foreground/40 mb-4">{text.navigation}</h4>
              <nav className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors font-body"
                  >
                    {text.nav[item.key]}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Контакты */}
            <div className="md:col-span-4">
              <h4 className="text-[10px] uppercase tracking-[0.15em] font-body font-medium text-primary-foreground/40 mb-4">{text.contacts}</h4>
              <div className="flex flex-col gap-3 text-xs text-primary-foreground/40 font-body">
                <a href="tel:+995571208555" className="flex items-center gap-2 hover:text-primary-foreground/70 transition-colors">
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  <span>+995-571-208-555 (GEO, ENG, RU)</span>
                </a>
                <a
                  href="https://www.google.com/maps?cid=6512661380146566532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-primary-foreground/70 transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                  <span>{text.address}</span>
                </a>
              </div>

              <div className="mt-6" data-no-translate>
                <h4 className="text-[10px] uppercase tracking-[0.15em] font-body font-medium text-primary-foreground/40 mb-3">{text.language}</h4>
                <div className="flex gap-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={`text-[11px] font-body px-3 py-1.5 rounded-full border transition-colors ${
                        currentLang === l.code
                          ? "border-ember text-ember"
                          : "border-primary-foreground/15 text-primary-foreground/50 hover:text-primary-foreground/80"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/6 section-padding py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] text-primary-foreground/20 font-body">
            {text.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
