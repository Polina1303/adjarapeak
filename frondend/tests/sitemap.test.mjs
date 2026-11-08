import test from 'node:test';
import assert from 'node:assert/strict';
import {buildSitemap} from '../src/lib/sitemap.ts';
test('sitemap deduplicates real routes, escapes XML and excludes private/search pages',()=>{const xml=buildSitemap(['/','/','/sale/fitness','/app/a&b','/checkout','/admin/login','/sale/search','//external.test']);assert.equal((xml.match(/<url>/g)||[]).length,3);assert.ok(xml.includes('/app/a&amp;b'));assert.ok(!xml.includes('checkout'));assert.ok(!xml.includes('hreflang'));});
