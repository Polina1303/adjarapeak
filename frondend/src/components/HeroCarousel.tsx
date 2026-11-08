import { SALES_TEXT } from "@/lib/sales-text";
import bannerSki from "@/assets/banner-ski.jpg";
import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Carousel,CarouselContent,CarouselItem,type CarouselApi } from "@/components/ui/carousel";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import { getResponsiveImageProps } from "@/lib/responsive-image";
import heroCamping from "@/assets/hero-camping.jpg";
import bannerBike from "@/assets/banner-bike.jpg";
import climbingPromo from "@/assets/climbing-promo.jpeg";
import bikeService from "@/assets/nikita-bike-service-1.jpg";
import heroHikes from "@/assets/hero-hikes.jpg";
const images=[heroCamping,bannerSki,climbingPromo,bikeService,heroHikes];
const keys=["hero-camping.jpg","banner-ski.jpg","climbing-promo.jpeg","nikita-bike-service-1.jpg","hero-hikes.jpg"];
const paths=["/sale","/rent","/rockClimbing","/service","/hikes"] as const;
export function HeroCarousel(){
 const {lang}=useLanguage();const text=getSiteText(lang).home.hero;const sales=SALES_TEXT[lang];
 const slides=text.slides.map((slide,i)=>i===0?{...slide,title:sales.title,subtitle:sales.subtitle,cta:sales.shop}:i===1?{...slide,title:sales.winterTitle,subtitle:sales.skiSubtitle,cta:sales.skiShop}:slide);
 const [api,setApi]=useState<CarouselApi>();const [active,setActive]=useState(0);const [paused,setPaused]=useState(false);
 useEffect(()=>{if(!api)return;const select=()=>setActive(api.selectedScrollSnap());select();api.on("select",select);return ()=>{api.off("select",select);};},[api]);
 useEffect(()=>{if(!api||paused||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const timer=window.setTimeout(()=>api.scrollNext(),8000);return ()=>window.clearTimeout(timer);},[api,active,paused]);
 const select=useCallback((i:number)=>api?.scrollTo(i),[api]);
 return <section className="w-full bg-background py-4 md:py-6"><div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8"><Carousel opts={{loop:true}} setApi={setApi} className="overflow-hidden rounded-xl bg-foreground" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)}>
  <CarouselContent className="ml-0">{slides.map((slide,i)=>{const responsive=getResponsiveImageProps(`hero/${keys[i]}`,"(min-width: 1400px) 1336px, calc(100vw - 32px)",1280);return <CarouselItem key={paths[i]} className="pl-0"><div className="relative flex h-[480px] flex-col justify-end overflow-hidden p-5 pb-14 sm:h-[520px] md:p-10 md:pb-14 lg:h-[560px]">
   <img {...responsive} src={responsive.src??images[i]} alt={i===1?sales.winterAlt:slide.title.replace(/\n/g,' ')} width={responsive.width??1600} height={responsive.height??900} loading={i===0?'eager':'lazy'} fetchPriority={i===0?'high':'low'} decoding="async" className="absolute inset-0 h-full w-full object-cover"/>
   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
   <div className="relative z-10" data-no-translate>{i===0?<h1 className="mb-4 max-w-5xl whitespace-pre-line font-display text-3xl font-bold uppercase leading-tight text-primary-foreground drop-shadow-lg sm:text-5xl lg:text-6xl">{slide.title}</h1>:<h2 className="mb-4 max-w-5xl whitespace-pre-line font-display text-3xl font-bold uppercase leading-tight text-primary-foreground drop-shadow-lg sm:text-5xl lg:text-6xl">{slide.title}</h2>}<p className="mb-6 max-w-2xl font-body text-sm leading-relaxed text-primary-foreground/90 md:text-base">{slide.subtitle}</p><div className="flex flex-wrap gap-2">{(i===0?[{to:"/sale" as const,label:sales.shop},{to:"/rent" as const,label:sales.rental}]:i===1?[{to:"/sale/$group" as const,params:{group:"alpinesking"},label:sales.skiShop},{to:"/rent/$group" as const,params:{group:"skiRental"},label:sales.skiRent},{to:"/service" as const,label:sales.service}]:[{to:paths[i],label:slide.cta}]).map(action=><Link key={action.to} to={action.to} params={"params" in action?action.params:undefined} data-ski-banner={i===1?true:undefined} className="inline-flex min-h-11 items-center justify-center rounded-full bg-ember px-5 py-3 text-center font-display text-xs text-primary-foreground hover:bg-ember/90 sm:text-sm">{action.label}</Link>)}</div></div>
  </div></CarouselItem>})}</CarouselContent><div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2">{paths.map((path,i)=><button key={path} type="button" onClick={()=>select(i)} aria-label={text.goToSlide(i+1)} aria-pressed={active===i} className="flex h-10 w-10 items-center justify-center"><span className={`h-2 rounded-full ${active===i?'w-6 bg-ember':'w-2 bg-white/60'}`}/></button>)}</div>
 </Carousel></div></section>;
}
