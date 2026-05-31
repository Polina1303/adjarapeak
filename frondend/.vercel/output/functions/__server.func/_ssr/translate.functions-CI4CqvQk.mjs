import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createServerFn } from "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, e as enumType, a as arrayType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const inputSchema = objectType({
  texts: arrayType(stringType().min(1).max(2e3)).min(1).max(80),
  target: enumType(["EN", "RU", "GE"])
});
const translateTexts_createServerFn_handler = createServerRpc({
  id: "0cb960d6346718d16b4d10f0b1bf2d013e6f3d2a266d4cf073e82291b5c65b38",
  name: "translateTexts",
  filename: "src/lib/translate.functions.ts"
}, (opts) => translateTexts.__executeServer(opts));
const translateTexts = createServerFn({
  method: "POST"
}).inputValidator((d) => inputSchema.parse(d)).handler(translateTexts_createServerFn_handler, async ({
  data
}) => {
  const apiKey = process.env.LOVABLE_API_KEY;
  if (!apiKey) throw new Error("Missing LOVABLE_API_KEY");
  const langName = data.target === "RU" ? "Russian" : data.target === "EN" ? "English" : "Georgian (ქართული)";
  const system = `You are a professional UI translator for an outdoor gear store called "Adjara Peak" based in Batumi, Georgia. Translate each Russian, English, or Georgian string to ${langName}.
Rules:
- Preserve currency symbols (₾, $, €), numbers, and product codes exactly.
- Keep the brand name "Adjara Peak" untranslated.
- Match capitalization style (ALL CAPS stays ALL CAPS).
- Keep translations concise — UI labels, not prose.
- Return STRICT JSON: {"translations": string[]} with the SAME length and order as input.`;
  const user = JSON.stringify({
    items: data.texts
  });
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [{
        role: "system",
        content: system
      }, {
        role: "user",
        content: user
      }],
      response_format: {
        type: "json_object"
      }
    })
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`AI gateway ${res.status}: ${text.slice(0, 200)}`);
  }
  const json = await res.json();
  const content = json.choices?.[0]?.message?.content ?? "{}";
  let translations = [];
  try {
    const parsed = JSON.parse(content);
    if (Array.isArray(parsed.translations)) translations = parsed.translations;
  } catch {
    translations = [];
  }
  const out = data.texts.map((src, i) => typeof translations[i] === "string" && translations[i].length > 0 ? translations[i] : src);
  return {
    translations: out
  };
});
export {
  translateTexts_createServerFn_handler
};
