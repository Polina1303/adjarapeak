import assert from "node:assert/strict";
import { test } from "node:test";
import { createAsyncCache } from "../src/lib/async-cache.ts";

test("concurrent searches share one load and reuse its result", async () => {
  const cache = createAsyncCache(1000);
  let calls = 0;
  const load = async () => { calls++; return ["result"]; };
  const results = await Promise.all([cache("same", load), cache("same", load)]);
  assert.equal(calls, 1);
  assert.strictEqual(results[0], results[1]);
  await cache("same", load);
  assert.equal(calls, 1);
});

test("failed loads can be retried", async () => {
  const cache = createAsyncCache(1000);
  await assert.rejects(cache("key", async () => { throw new Error("offline"); }));
  assert.equal(await cache("key", async () => "recovered"), "recovered");
});

test("expiry and entry limits prevent stale or unbounded cached results", async (context) => {
  context.mock.timers.enable({ apis: ["Date"], now: 1000 });
  const cache = createAsyncCache(100, 2);
  await cache("a", async () => 1);
  context.mock.timers.tick(101);
  assert.equal(await cache("a", async () => 2), 2);
  await cache("b", async () => 3);
  await cache("c", async () => 4);
  assert.equal(await cache("a", async () => 5), 5);
});
