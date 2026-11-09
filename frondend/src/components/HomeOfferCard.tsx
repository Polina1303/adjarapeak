import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { KIDS_ROLLER_CATALOG_PARAMS, KIDS_ROLLER_OFFER } from "@/lib/kids-roller-offer";

type Props = {
  headingId: string;
  eyebrow: string;
  title: string;
  price: string;
  description: string;
  benefit: string;
  details: string;
  note: string;
  icon: LucideIcon;
  image: {
    src: string;
    srcSet?: string;
    sizes?: string;
    alt: string;
    position?: string;
  };
  destination: "kids-skates" | "sports-rental";
  actionLabel: string;
};

const actionClass = "home-offer-action inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-5 text-center font-body text-sm font-bold uppercase leading-snug text-background transition-colors hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

export function HomeOfferCard({ headingId, eyebrow, title, price, description, benefit, details, note, icon: Icon, image, destination, actionLabel }: Props) {
  const action = <>{actionLabel}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></>;

  return (
    <article aria-labelledby={headingId} data-no-translate className="home-offer-card min-w-0 rounded-2xl border border-border bg-background text-foreground">
      <div className="home-offer-image overflow-hidden rounded-xl bg-background">
        <img src={image.src} srcSet={image.srcSet} sizes={image.sizes} width={800} height={1000} alt={image.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" style={{ objectPosition: image.position }} />
      </div>
      <div className="home-offer-content min-w-0">
        <div className="home-offer-header">
          <p className="home-offer-copy home-offer-eyebrow font-bold tracking-[0.05em] text-[#9c4900]">{eyebrow}</p>
          <h3 id={headingId} className="home-offer-title font-display font-bold uppercase leading-tight">{title}</h3>
          <div className="home-offer-price-row">
            <p className="home-offer-price whitespace-nowrap font-display font-bold leading-tight">{price}</p>
            <span className="home-offer-copy home-offer-badge rounded-full border border-[#f3d9bd] bg-[#fff7ed] text-[#9c4900]">{note}</span>
          </div>
        </div>
        <p className="home-offer-copy home-offer-description text-foreground/70">{description}</p>
        <p className="home-offer-copy home-offer-benefit text-foreground/70">
          <Icon className="home-offer-icon shrink-0 text-[#9c4900]" aria-hidden="true" />
          <span><strong className="font-semibold text-foreground">{benefit}:</strong>{" "}{details.charAt(0).toLocaleLowerCase() + details.slice(1)}</span>
        </p>
        <div className="home-offer-action-row">
          {destination === "kids-skates" ? (
            <Link to="/sale/$group/$category" params={KIDS_ROLLER_CATALOG_PARAMS} search={{ offer: KIDS_ROLLER_OFFER }} className={actionClass}>{action}</Link>
          ) : (
            <Link to="/rent/$group" params={{ group: "sportsRental" }} className={actionClass}>{action}</Link>
          )}
        </div>
      </div>
    </article>
  );
}
