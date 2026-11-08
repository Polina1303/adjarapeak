import test from "node:test";
import assert from "node:assert/strict";
import {validateRentalBooking,bookingDateToday,rentalSource} from "../src/lib/rental-booking.ts";
const valid={dateFrom:'2026-12-01',dateTo:'2026-12-02',height:'175',weight:'70',shoeSize:'42',level:'beginner',contact:'test'};
test('ski booking rejects missing measurements, malformed and reversed dates',()=>{assert.equal(validateRentalBooking(valid,true,'2026-11-08'),null);for(const field of Object.keys(valid))assert.ok(validateRentalBooking({...valid,[field]:''},true,'2026-11-08'));assert.equal(validateRentalBooking({...valid,dateTo:'2026-11-30'},true,'2026-11-08'),'dates');assert.equal(validateRentalBooking({...valid,dateFrom:'2026-02-31'},true,'2026-01-01'),'dates');assert.equal(validateRentalBooking({...valid,level:'other'},true,'2026-11-08'),'measurements');});
test('rental aliases keep original category sources and use Tbilisi date',()=>{assert.deepEqual(rentalSource('tents'),{groupSlug:'tourismRental',categorySlug:'rentTent'});assert.equal(bookingDateToday(new Date('2026-11-08T21:00:00Z')),'2026-11-09');});
