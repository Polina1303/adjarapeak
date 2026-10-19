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
    fit?: "contain" | "cover";
    position?: string;
  };
  destination: "kids-skates" | "sports-rental";
  actionLabel: string;
};

const actionClass = "inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-foreground px-5 py-3 text-center font-body text-sm font-bold leading-snug text-background transition-colors hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

export function HomeOfferCard({ headingId, eyebrow, title, price, description, benefit, details, note, icon: Icon, image, destination, actionLabel }: Props) {
  const action = <>{actionLabel}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></>;

  return (
    <article aria-labelledby={headingId} data-no-translate className="flex h-full min-w-0 flex-col rounded-2xl border border-border bg-[#faf9f6] p-4 text-foreground sm:p-6">
      <div className="grid min-w-0 grid-cols-[104px_minmax(0,1fr)] gap-x-4 sm:grid-cols-[200px_minmax(0,1fr)] sm:grid-rows-[auto_1fr] sm:gap-x-6">
        <div className="aspect-[4/5] self-start overflow-hidden rounded-xl bg-[#eee9e1] sm:row-span-2">
          <img src={image.src} srcSet={image.srcSet} sizes={image.sizes} width={800} height={1000} alt={image.alt} loading="lazy" decoding="async" className={`h-full w-full ${image.fit === "cover" ? "object-cover" : "object-contain"}`} style={{ objectPosition: image.position }} />
        </div>
        <div className="min-w-0">
          <p className="font-body text-xs font-bold uppercase tracking-[0.1em] text-[#9c4900]">{eyebrow}</p>
          <h3 id={headingId} className="mt-2 font-display text-xl font-bold uppercase leading-tight sm:text-2xl">{title}</h3>
          <p className="mt-2 font-display text-2xl font-bold leading-tight sm:text-[28px]">{price}</p>
          <p className="mt-3 min-h-12 font-body text-sm leading-relaxed text-foreground/70">{description}</p>
        </div>
        <div className="col-span-2 mt-4 flex min-w-0 items-start gap-2.5 sm:col-span-1 sm:col-start-2">
          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#9c4900]" aria-hidden="true" />
          <div className="min-w-0">
            <p className="font-display text-base font-bold leading-snug sm:text-lg">{benefit}</p>
            <p className="mt-1 font-body text-sm leading-relaxed text-foreground/70">{details}</p>
          </div>
        </div>
      </div>
      <div className="mt-auto pt-5">
        <div className="border-t border-border pt-4">
          <p className="min-h-9 font-body text-xs leading-relaxed text-foreground/60">{note}</p>
          <div className="mt-3">
            {destination === "kids-skates" ? (
              <Link to="/sale/$group/$category" params={KIDS_ROLLER_CATALOG_PARAMS} search={{ offer: KIDS_ROLLER_OFFER }} className={actionClass}>{action}</Link>
            ) : (
              <Link to="/rent/$group" params={{ group: "sportsRental" }} className={actionClass}>{action}</Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
