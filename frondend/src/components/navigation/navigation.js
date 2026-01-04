import Link from "next/link";
import { useState } from "react";
import { CATEGORY_PRODUCT } from "../product-range/categoryProduct";
import { CATEGORY_RENT } from "../product-range/categoryRent";
import { RENT } from "../product-range/rent";
import { RENT_SKY } from "../product-range/rent-sky";
import styles from "./navigation.module.css";

export const isRentProduct = (product) =>
  RENT.some((p) => p.id === product.id) ||
  RENT_SKY.some((p) => p.id === product.id);

const DEFAULT_PATHS = {
  rent: "/rent/skiRental",
  sale: "/sale/alpinesking",
};

export const getBreadcrumbsByProduct = (product, isRentClick = false) => {
  const isRent = product ? isRentProduct(product) : isRentClick;
  const basePath = isRent ? "/rent" : "/sale";
  const rootTitle = isRent ? "Аренда" : "Магазин";

  if (!product) {
    return [
      { title: rootTitle, href: DEFAULT_PATHS[isRent ? "rent" : "sale"] },
    ];
  }

  const source = isRent ? CATEGORY_RENT : CATEGORY_PRODUCT;
  const productCategory = isRent ? product.type : product.category;

  for (const section of source) {
    for (const type of section.types) {
      if (type.category !== productCategory) continue;

      const items = [
        { title: rootTitle, href: DEFAULT_PATHS[isRent ? "rent" : "sale"] },
        { title: section.title, href: `${basePath}/${section.path}` },
        {
          title: type.title,
          href: `${basePath}/${section.path}/${type.category}`,
        },
      ];

      if (type.subcategories && product.subcategory) {
        const sub = type.subcategories.find(
          (s) => s.subcategory === product.subcategory
        );
        if (sub) {
          items.push({
            title: sub.title,
            href: `${basePath}/${section.path}/${type.category}/${sub.subcategory}`,
          });
        }
      }

      return items;
    }
  }

  return [{ title: rootTitle, href: DEFAULT_PATHS[isRent ? "rent" : "sale"] }];
};

export const Navigation = ({ items, title }) => {
  const [open, setOpen] = useState(false);

  if (!items?.length) return null;

  console.log("items", items);

  const last = items[items.length - 1];

  const toggle = (e) => {
    e.stopPropagation();
    setOpen((v) => !v);
  };

  return (
    <nav className={`${styles.breadcrumbs} ${open ? styles.open : ""}`}>
      <span className={styles.mobile}>
        <span>{title}</span>

        <span className={styles.arrow} onClick={toggle} role="button">
          {open ? "▲" : "▼"}
        </span>
      </span>

      <span className={styles.full}>
        {items.map((item, i) => (
          <span key={i}>
            <Link href={item.href}>{item.title}</Link>
            {i < items.length - 1 && " — "}
          </span>
        ))}
        <span> - {title}</span>
      </span>
    </nav>
  );
};
