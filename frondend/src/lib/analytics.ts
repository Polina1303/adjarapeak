export type AnalyticsEvent = "click_phone" | "click_whatsapp" | "click_telegram" | "click_telegram_climbing" | "click_ski_rental" | "add_to_cart" | "add_to_cart_ski" | "begin_checkout" | "purchase" | "submit_rental_booking" | "submit_ski_rental_booking" | "submit_hike_signup" | "submit_service_booking";
export function trackEvent(event: AnalyticsEvent, properties: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const target = window as Window & { dataLayer?: Record<string, unknown>[] };
  (target.dataLayer ??= []).push({ ...properties, event });
}
