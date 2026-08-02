const DEFAULT_ORDER_API_URL =
  "https://adjarapeak-api-production.up.railway.app/api/order";

export function getOrderApiUrl() {
  const raw =
    (import.meta.env.VITE_ORDER_API_URL as string | undefined) ||
    (import.meta.env.VITE_API_URL as string | undefined);
  if (!raw) return DEFAULT_ORDER_API_URL;
  const trimmed = raw.replace(/\/$/, "");
  if (trimmed.endsWith("/api/order") || trimmed.endsWith("/send")) {
    return trimmed;
  }
  return `${trimmed}/api/order`;
}
