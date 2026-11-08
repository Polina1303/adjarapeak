import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { RentalGrid } from "./RentalGrid";
import { ProductCard } from "./ProductCard";
import { useLanguage } from "@/lib/i18n";
import { RENTAL_TEXT } from "@/lib/rental-text";
import { contacts } from "@/lib/contacts";
import { formatPrice } from "@/lib/price";
import { getDisplayPrice } from "@/lib/discount";
import { trackEvent } from "@/lib/analytics";
import { bookingDateToday,validateRentalBooking,type RentalBooking,type RentalLandingKey } from "@/lib/rental-booking";
import type { RentalItem, ShopProduct } from "@/lib/catalog.functions";

export function RentalLanding({kind,items,related,equipment}: {kind:RentalLandingKey;items:RentalItem[];related:ShopProduct[];equipment?:string}) {
 const {lang}=useLanguage();const t=RENTAL_TEXT[lang];
 const ski=kind==='skiRental';
 return <div className="min-h-screen bg-background"><Header/><main className="section-padding mx-auto max-w-7xl pb-16 pt-28" data-no-translate>
  <Link to="/rent" className="text-sm text-ember underline">{t.all}</Link><h1 className="mb-8 mt-5 max-w-4xl font-display text-3xl font-bold md:text-5xl">{t.titles[kind]}</h1>
  <section id="prices" className="scroll-mt-24"><h2 className="mb-5 font-display text-2xl font-bold">{t.prices}</h2>
   {items.length?<RentalGrid items={items}/>:<p>{t.noRates}</p>}
  </section>
  <div className="my-10 grid gap-6 md:grid-cols-2"><section className="rounded-xl border border-border p-6"><h2 className="mb-4 font-display text-2xl font-bold">{t.included}</h2><p className="text-sm">{t.includedTodo}</p></section><section className="rounded-xl bg-muted p-6"><h2 className="mb-4 font-display text-2xl font-bold">{t.how}</h2><ol className="list-inside list-decimal space-y-3 text-sm">{t.steps.map(step=><li key={step}>{step}</li>)}</ol></section></div>
  <section className="my-10"><h2 className="mb-4 font-display text-2xl font-bold">{t.conditions}</h2><div className="space-y-3 text-sm leading-relaxed"><p>{t.depositTodo}</p><p>{t.returnText}</p><p>{t.damageText}</p></div></section>
  <RentalBookingForm ski={ski} kind={kind} equipment={equipment}/>
  <section className="my-10"><h2 className="mb-5 font-display text-2xl font-bold">{t.faq}</h2>{t.questions.map((q,i)=><details key={q} className="border-b border-border py-4"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.answers[i]}</p></details>)}</section>
  <section className="my-10"><h2 className="mb-5 font-display text-2xl font-bold">{t.related}</h2><div className="grid grid-cols-2 gap-4 md:grid-cols-4">{related.map(p=><ProductCard key={p.id} product={p} bordered/>)}</div>{!related.length&&<p className="text-sm text-muted-foreground">{t.noProducts}</p>}</section>
 </main><Footer/></div>;
}
export function RentalBookingForm({ski,kind,equipment}: {ski:boolean;kind:RentalLandingKey;equipment?:string}) {
 const {lang}=useLanguage();const t=RENTAL_TEXT[lang];
 const [form,setForm]=useState<RentalBooking>({dateFrom:'',dateTo:'',height:'',weight:'',shoeSize:'',level:'',contact:''});
 const [draft,setDraft]=useState('');const [error,setError]=useState('');
 const today=bookingDateToday();
 const update=(key:keyof RentalBooking,value:string)=>{setForm(prev=>({...prev,[key]:value}));setDraft('');setError('');};
 function prepare(event:React.FormEvent){event.preventDefault();if(validateRentalBooking(form,ski)){setError(t.invalid);return;}
  const lines=[t.titles[kind],...(equipment?[`${t.equipment}: ${equipment}`]:[]),`${t.dateFrom}: ${form.dateFrom}`,`${t.dateTo}: ${form.dateTo}`,...(ski?[`${t.height}: ${form.height}`,`${t.weight}: ${form.weight}`,`${t.shoeSize}: ${form.shoeSize}`,`${t.level}: ${t.levels[['beginner','intermediate','experienced'].indexOf(form.level)]}`]:[]),`${t.contact}: ${form.contact}`];setDraft(lines.join('\n'));setError('');
 }
 function handoff(channel:string){trackEvent('submit_rental_booking',{rental_type:kind,channel,status:'messenger_handoff'});if(ski)trackEvent('submit_ski_rental_booking',{channel,status:'messenger_handoff'});}
 const fieldClass="mt-2 w-full rounded-lg border border-border bg-background px-3 py-3 text-sm";
 return <section id="booking" className="scroll-mt-24 rounded-2xl border border-ember/30 bg-ember/5 p-5 md:p-8"><h2 className="mb-5 font-display text-2xl font-bold">{t.booking}</h2><form onSubmit={prepare} className="grid gap-5 sm:grid-cols-2">
  <label className="text-sm">{t.dateFrom}<input name="dateFrom" type="date" required min={today} value={form.dateFrom} onChange={e=>update('dateFrom',e.target.value)} className={fieldClass}/></label>
  <label className="text-sm">{t.dateTo}<input name="dateTo" type="date" required min={form.dateFrom||today} value={form.dateTo} onChange={e=>update('dateTo',e.target.value)} className={fieldClass}/></label>
  {ski&&<>{(['height','weight','shoeSize'] as const).map((key,i)=><label key={key} className="text-sm">{t[key]}<input name={key} type="number" required min={[50,10,15][i]} max={[250,300,55][i]} step={key==='shoeSize'?0.5:1} value={form[key]} onChange={e=>update(key,e.target.value)} className={fieldClass}/></label>)}<label className="text-sm">{t.level}<select name="level" required value={form.level} onChange={e=>update('level',e.target.value)} className={fieldClass}><option value="">{t.choose}</option>{t.levels.map((label,i)=><option key={label} value={['beginner','intermediate','experienced'][i]}>{label}</option>)}</select></label></>}
  <label className="text-sm">{t.contact}<input name="contact" autoComplete="tel" required maxLength={160} value={form.contact} onChange={e=>update('contact',e.target.value)} className={fieldClass}/></label>
  <div className="flex items-end"><button type="submit" className="min-h-12 w-full rounded-lg bg-ember px-5 py-3 text-sm font-bold text-ember-foreground">{t.prepare}</button></div>
  <p className="text-xs text-muted-foreground sm:col-span-2">{t.dataNotice}</p>{error&&<p role="alert" className="text-sm text-destructive sm:col-span-2">{error}</p>}
 </form>{draft&&<div role="status" className="mt-6 rounded-xl border border-border bg-background p-5"><h3 className="font-display font-bold">{t.draft}</h3><pre className="my-4 whitespace-pre-wrap font-body text-sm">{draft}</pre><p className="mb-4 text-sm">{t.check}</p><div className="flex flex-wrap gap-3"><a href={`${contacts.whatsapp}?text=${encodeURIComponent(draft)}`} target="_blank" rel="noopener noreferrer" onClick={()=>handoff('whatsapp')} className="rounded-full bg-foreground px-5 py-3 text-sm text-background">{t.whatsapp}</a><a href={`${contacts.telegram}?text=${encodeURIComponent(draft)}`} target="_blank" rel="noopener noreferrer" onClick={()=>handoff('telegram')} className="rounded-full border border-border px-5 py-3 text-sm">{t.telegram}</a></div></div>}</section>;
}
