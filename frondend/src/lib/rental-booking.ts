export type RentalBooking = {dateFrom:string;dateTo:string;height:string;weight:string;shoeSize:string;level:string;contact:string};
export function bookingDateToday(now = new Date()) {
 const parts=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tbilisi",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(now);
 const part=(type:string)=>parts.find(p=>p.type===type)?.value;
 return `${part("year")}-${part("month")}-${part("day")}`;
}
export function validateRentalBooking(value:RentalBooking,ski:boolean,today=bookingDateToday()) {
 const validDate=(s:string)=>/^\d{4}-\d{2}-\d{2}$/.test(s)&&!Number.isNaN(Date.parse(s))&&new Date(`${s}T00:00:00Z`).toISOString().slice(0,10)===s;
 if(!validDate(value.dateFrom)||!validDate(value.dateTo)||value.dateFrom<today||value.dateTo<value.dateFrom) return "dates";
 if(!value.contact.trim()||value.contact.length>160) return "contact";
 if(ski && (!(Number(value.height)>=50&&Number(value.height)<=250)||!(Number(value.weight)>=10&&Number(value.weight)<=300)||!(Number(value.shoeSize)>=15&&Number(value.shoeSize)<=55)||!["beginner","intermediate","experienced"].includes(value.level))) return "measurements";
 return null;
}
export const rentalLandingKeys = ["skiRental","tents","sup","bikes"] as const;
export type RentalLandingKey = typeof rentalLandingKeys[number];
export function rentalSource(key:string) {
 const map:Record<string,{groupSlug:string;categorySlug?:string}>={tents:{groupSlug:"tourismRental",categorySlug:"rentTent"},sup:{groupSlug:"tourismRental",categorySlug:"rentSUP"},bikes:{groupSlug:"sportsRental",categorySlug:"rentBIKE"}};
 return map[key] ?? {groupSlug:key};
}
