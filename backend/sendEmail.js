import * as dotenv from "dotenv";

dotenv.config();

const DEFAULT_SITE_URL = "https://adjarapeak.ge";

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatMoney(value) {
  return `${Number(value || 0).toFixed(2)} ₾`;
}

function getSiteUrl() {
  const configuredUrl = process.env.SITE_URL || process.env.CLIENT_URL;
  try {
    return new URL(configuredUrl || DEFAULT_SITE_URL).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

function getProductUrl(item) {
  const slug = typeof item?.slug === "string" ? item.slug.trim() : "";
  if (!slug || slug.startsWith("service-")) return null;
  return `${getSiteUrl()}/app/${encodeURIComponent(slug)}`;
}

function renderItemTitle(item) {
  const title = escapeHtml(item.title || item.slug || "Товар");
  const productUrl = getProductUrl(item);

  if (!productUrl) return `<strong>${title}</strong>`;

  return `<a href="${escapeHtml(productUrl)}" style="color:#e8750a;text-decoration:underline;font-weight:700">${title}</a>`;
}

function renderItems(items) {
  return items
    .map((item, index) => {
      const description = item.description
        ? `<div style="margin-top:4px;color:#666;font-size:12px">${escapeHtml(item.description)}</div>`
        : "";
      const slug = item.slug
        ? `<div style="margin-top:4px;color:#888;font-size:11px">${escapeHtml(item.slug)}</div>`
        : "";
      const productUrl = getProductUrl(item);
      const openLink = productUrl
        ? `<div style="margin-top:6px"><a href="${escapeHtml(productUrl)}" style="color:#e8750a;font-size:12px;text-decoration:underline">Открыть товар на сайте →</a></div>`
        : "";

      return `
        <tr>
          <td style="padding:14px 8px;border-bottom:1px solid #e7e7e7;vertical-align:top">${index + 1}</td>
          <td style="padding:14px 8px;border-bottom:1px solid #e7e7e7;vertical-align:top">
            ${renderItemTitle(item)}
            ${slug}
            ${description}
            ${openLink}
          </td>
          <td style="padding:14px 8px;border-bottom:1px solid #e7e7e7;vertical-align:top;white-space:nowrap">${item.kind === "rental" ? "Аренда" : "Покупка"}</td>
          <td style="padding:14px 8px;border-bottom:1px solid #e7e7e7;vertical-align:top;text-align:center">${escapeHtml(item.quantity || 1)}</td>
          <td style="padding:14px 8px;border-bottom:1px solid #e7e7e7;vertical-align:top;text-align:right;white-space:nowrap">${formatMoney(item.price)}</td>
          <td style="padding:14px 8px;border-bottom:1px solid #e7e7e7;vertical-align:top;text-align:right;white-space:nowrap;font-weight:700">${formatMoney(item.total)}</td>
        </tr>`;
    })
    .join("");
}

export function buildOrderEmail(order) {
  const customer = order.customer || {};
  const rental = order.rental || {};
  const items = Array.isArray(order.items) ? order.items : [];
  const totalItems = Number(order.summary?.totalItems || 0);
  const total = Number(order.summary?.total || 0);
  const rentalDates =
    rental.dateStart || rental.dateEnd
      ? `<p style="margin:8px 0"><span style="display:inline-block;width:170px;color:#666">Даты аренды</span><strong>${escapeHtml(rental.dateStart || "—")} — ${escapeHtml(rental.dateEnd || "—")}</strong></p>`
      : "";

  return `<!doctype html>
  <html lang="ru">
    <body style="margin:0;padding:24px;background:#f5f5f5;color:#1f1f1f;font-family:Arial,sans-serif">
      <div style="max-width:760px;margin:0 auto;padding:28px;background:#fff;border-radius:16px">
        <h1 style="margin:0 0 24px;font-size:28px;line-height:1.2">Новый заказ с сайта Adjara Peak</h1>
        <p style="margin:8px 0"><span style="display:inline-block;width:170px;color:#666">Имя</span><strong>${escapeHtml(customer.name || "—")}</strong></p>
        <p style="margin:8px 0"><span style="display:inline-block;width:170px;color:#666">Телефон</span><strong>${escapeHtml(customer.phone || "—")}</strong></p>
        <p style="margin:8px 0"><span style="display:inline-block;width:170px;color:#666">Telegram</span><strong>${escapeHtml(customer.telegram || "—")}</strong></p>
        ${rentalDates}
        <p style="margin:8px 0"><span style="display:inline-block;width:170px;color:#666">Комментарий</span>${escapeHtml(order.comments || "—")}</p>

        <h2 style="margin:32px 0 12px;font-size:22px">Корзина</h2>
        <div style="overflow-x:auto">
          <table role="presentation" style="width:100%;border-collapse:collapse;font-size:14px">
            <thead>
              <tr style="background:#fafafa;color:#666;text-align:left">
                <th style="padding:10px 8px">№</th>
                <th style="padding:10px 8px">Товар</th>
                <th style="padding:10px 8px">Тип</th>
                <th style="padding:10px 8px;text-align:center">Кол-во</th>
                <th style="padding:10px 8px;text-align:right">Цена</th>
                <th style="padding:10px 8px;text-align:right">Сумма</th>
              </tr>
            </thead>
            <tbody>${renderItems(items)}</tbody>
            <tfoot>
              <tr>
                <td colspan="3" style="padding:16px 8px;text-align:right;font-weight:700">Итого</td>
                <td style="padding:16px 8px;text-align:center;font-weight:700">${totalItems}</td>
                <td colspan="2" style="padding:16px 8px;text-align:right;font-weight:700">${formatMoney(total)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </body>
  </html>`;
}

async function sendWithResend(options) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Resend error ${response.status}: ${message}`);
  }

  return response.json();
}

export async function EmailSender(order) {
  const recipient = process.env.RECIPIENT_EMAIL || process.env.SEND_TO;
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");
  if (!recipient) throw new Error("RECIPIENT_EMAIL is not configured");

  return sendWithResend({
    from: process.env.SENDER_EMAIL || "Adjara Peak <onboarding@resend.dev>",
    to: [recipient],
    subject: "Новый заказ с сайта Adjara Peak",
    html: buildOrderEmail(order),
  });
}
