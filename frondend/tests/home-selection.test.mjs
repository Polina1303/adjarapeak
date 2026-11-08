import test from 'node:test';
import assert from 'node:assert/strict';
import {selectHomeProducts,sortHomeGroups} from '../src/lib/home-selection.ts';
const p=(id,extra={})=>({id,slug:id,category_id:id,image:'photo.jpg',price:100,in_stock:true,...extra});
test('home selection uses active featured before new products and rejects invalid stock, photos or prices',()=>{const selected=selectHomeProducts([p('new',{created_at:'2026-11-08'}),p('featured',{featured:true,featured_until:'2026-12-01'}),p('expired',{featured:true,featured_until:'2025-01-01'}),p('missing',{image:null}),p('sold',{in_stock:false}),p('zero',{price:0})],2,'2026-11-08');assert.deepEqual(selected.map(x=>x.id),['featured','new']);});
test('home group order is stable for remaining groups and puts sale last',()=>{assert.deepEqual(sortHomeGroups(['sale','otherA','fitness','alpinesking','otherB','winterSports'].map(slug=>({slug}))).map(x=>x.slug),['alpinesking','winterSports','fitness','otherA','otherB','sale']);});
