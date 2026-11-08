import test from 'node:test';
import assert from 'node:assert/strict';
import {CATEGORY_SEO} from '../src/lib/category-seo.ts';
test('all five category descriptions have three complete localized versions and 80–150 words',()=>{assert.equal(Object.keys(CATEGORY_SEO).length,5);for(const [slug,locales] of Object.entries(CATEGORY_SEO)){for(const lang of ['RU','EN','GE']){const copy=locales[lang];const words=copy.paragraphs.join(' ').trim().split(/\s+/).length;assert.ok(words>=80&&words<=150,`${slug}/${lang}: ${words}`);assert.ok(copy.h1&&copy.title&&copy.description);}}});
