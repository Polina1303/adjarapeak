import { PRODUCT } from "../src/components/product-range/product";
import { RENT } from "../src/components/product-range/rent";
import { RENT_SKY } from "../src/components/product-range/rent-sky";

const allProducts = [...PRODUCT, ...RENT, ...RENT_SKY];

export const initProductCache = () => {
  if (typeof window === "undefined") return;

  const cached = localStorage.getItem("cachedProductsV1");

  const next = JSON.stringify(allProducts);

  if (cached !== next) {
    localStorage.setItem("cachedProductsV1", next);
  }
};

export const getProductById = (id) => {
  if (typeof window === "undefined") return null;

  const cached = localStorage.getItem("cachedProductsV1");
  if (!cached) return null;

  const list = JSON.parse(cached);
  return (
    list.find(
      (p) => p.id === id || p.id === Number(id) || p.id === String(id)
    ) || null
  );
};
