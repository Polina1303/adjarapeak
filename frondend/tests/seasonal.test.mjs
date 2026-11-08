import test from "node:test";
import assert from "node:assert/strict";
import {selectSkiRentalCards,diverseProducts} from "../src/lib/seasonal-data.ts";
import {homeSectionOrder,seasonalHero} from "../src/lib/seasonal-config.ts";
test("season order contains each section exactly once",()=>{for(const order of Object.values(homeSectionOrder)) assert.equal(order.length,new Set(order).size);assert.equal(seasonalHero.mode,'winter');assert.equal(homeSectionOrder.winter[1],'rental');assert.ok(homeSectionOrder.summer.indexOf('hikes')<homeSectionOrder.summer.indexOf('fitness'));});
test("rental cards use available category prices and do not invent boot/set rates",()=>{const cards=selectSkiRentalCards([{title:'Лыжи + ботинки комплект',category_id:'ski',available:true,price_per_day:50,sale_price_per_day:40},{title:'Недоступные лыжи',category_id:'ski',available:false,price_per_day:1}], [{id:'ski',slug:'sky'}]);assert.equal(cards[0].item.sale_price_per_day,40);assert.equal(cards[2].item,null);assert.equal(cards[3].item,null);});
test("product selection prioritizes featured and category diversity",()=>{const result=diverseProducts([{id:'a',category_id:'1'},{id:'b',category_id:'1',featured:true},{id:'c',category_id:'2'}],2);assert.deepEqual(result.map(p=>p.id),['b','c']);});
