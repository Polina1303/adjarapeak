export type AnalyticsEvent="click_phone"|"click_whatsapp"|"click_telegram"|"click_telegram_climbing"|"click_category_tile"|"click_ski_banner"|"click_fitness_banner"|"add_to_cart";
export function trackEvent(event:AnalyticsEvent,properties:Record<string,unknown>={}){
 if(typeof window==='undefined')return;
 const target=window as Window&{dataLayer?:Record<string,unknown>[]};
 (target.dataLayer??=[]).push({...properties,event});
}
export function contactEvents(href:string,pathname:string):AnalyticsEvent[]{
 if(href.startsWith('tel:'))return ['click_phone'];
 let url:URL;try{url=new URL(href);}catch{return [];}
 if(['wa.me','api.whatsapp.com','web.whatsapp.com'].includes(url.hostname))return ['click_whatsapp'];
 if(url.hostname==='t.me'||url.hostname==='telegram.me')return url.pathname==='/shpaksn'&&!pathname.startsWith('/hikes')?['click_telegram','click_telegram_climbing']:['click_telegram'];
 return [];
}
