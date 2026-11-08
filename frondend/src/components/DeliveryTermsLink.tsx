import { useLanguage } from "@/lib/i18n";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
const deliveryText = {
  RU: {
    title: "Условия доставки",
    batumi: "По Батуми — 10 лари. Бесплатно при заказе от 300 лари.",
    georgia: "По Грузии — от 20 лари. Бесплатно при заказе от 500 лари.",
    rental: "Для арендных товаров доступен только самовывоз.",
    close: "Закрыть",
  },
  EN: {
    title: "Delivery terms",
    batumi: "In Batumi — 10 GEL. Free for orders of 300 GEL or more.",
    georgia: "Across Georgia — from 20 GEL. Free for orders of 500 GEL or more.",
    rental: "Rental equipment is available for pickup only.",
    close: "Close",
  },
  GE: {
    title: "მიწოდების პირობები",
    batumi: "ბათუმში — 10 ლარი. უფასო 300 ლარიდან შეკვეთებზე.",
    georgia: "საქართველოს მასშტაბით — 20 ლარიდან. უფასო 500 ლარიდან შეკვეთებზე.",
    rental: "გასაქირავებელი აღჭურვილობის მიღება შესაძლებელია მხოლოდ ადგილზე.",
    close: "დახურვა",
  },
};


export function DeliveryTermsLink({className="text-sm text-ember underline underline-offset-4"}:{className?:string}) {
 const {lang}=useLanguage();const delivery=deliveryText[lang];
 return <Dialog><DialogTrigger asChild><button type="button" className={className}>{delivery.title}</button></DialogTrigger><DialogContent className="w-[calc(100%_-_2rem)] rounded-lg text-foreground" closeLabel={delivery.close}><DialogTitle className="pr-6">{delivery.title}</DialogTitle><DialogDescription asChild><div className="space-y-4 text-sm leading-relaxed"><p>{delivery.batumi}</p><p>{delivery.georgia}</p><p>{delivery.rental}</p></div></DialogDescription></DialogContent></Dialog>;
}
