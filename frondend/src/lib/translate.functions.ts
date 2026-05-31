import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  texts: z.array(z.string().min(1).max(2000)).min(1).max(80),
  target: z.enum(["EN", "RU", "GE"]),
});

export const translateTexts = createServerFn({ method: "POST" })
  .inputValidator((d) => inputSchema.parse(d))
  .handler(async ({ data }) => {
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

    const user = JSON.stringify({ items: data.texts });

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`AI gateway ${res.status}: ${text.slice(0, 200)}`);
    }
    const json = await res.json();
    const content: string = json.choices?.[0]?.message?.content ?? "{}";
    let translations: string[] = [];
    try {
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed.translations)) translations = parsed.translations;
    } catch {
      translations = [];
    }
    // Ensure same length, fall back to original if missing
    const out = data.texts.map((src, i) =>
      typeof translations[i] === "string" && translations[i].length > 0 ? translations[i] : src,
    );
    return { translations: out };
  });
