import Link from "next/link";
import { useState } from "react";
import { CATEGORY_PRODUCT } from "../product-range/categoryProduct";
import { CATEGORY_RENT } from "../product-range/categoryRent";
import { RENT } from "../product-range/rent";
import { RENT_SKY } from "../product-range/rent-sky";
import { useTranslation } from "react-i18next";
import styles from "./navigation.module.css";

export const isRentProduct = (product) =>
  RENT.some((p) => p.id === product.id) ||
  RENT_SKY.some((p) => p.id === product.id);

const DEFAULT_PATHS = {
  rent: "/rent/skiRental",
  sale: "/sale/alpinesking",
};

export const getBreadcrumbsByProduct = (product, isRentClick = false, t) => {
  const isRent = product ? isRentProduct(product) : isRentClick;
  const basePath = isRent ? "/rent" : "/sale";
  const rootTitle = isRent
    ? t("rent", { ns: "common" })
    : t("sale", { ns: "common" });

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

      const ns = isRent ? "rent" : "common";

      const items = [
        { title: rootTitle, href: DEFAULT_PATHS[isRent ? "rent" : "sale"] },
        {
          title: t(section.title, { ns }),
          href: `${basePath}/${section.path}`,
        },
        {
          title: t(type.title, { ns }),
          href: `${basePath}/${section.path}/${type.category}`,
        },
      ];

      if (type.subcategories && product.subcategory) {
        const sub = type.subcategories.find(
          (s) => s.subcategory === product.subcategory
        );
        if (sub) {
          items.push({
            title: t(sub.title, { ns }),
            href: `${basePath}/${section.path}/${type.category}/${sub.subcategory}`,
          });
        }
      }

      return items;
    }
  }

  return [{ title: rootTitle, href: DEFAULT_PATHS[isRent ? "rent" : "sale"] }];
};

export const Navigation = ({ product, title, items: itemsProp }) => {
  const { t, ready } = useTranslation(["common", "rent"]);

  const [open, setOpen] = useState(false);

  if (!ready) return null;

  const items = itemsProp || getBreadcrumbsByProduct(product, false, t);

  if (!items?.length) return null;

  const last = items[items.length - 1];

  const toggle = (e) => {
    e.stopPropagation();
    setOpen((v) => !v);
  };

  return (
    <nav className={`${styles.breadcrumbs} ${open ? styles.open : ""}`}>
      <span className={styles.mobile}>
        <Link href={last.href}>{last.title}</Link>

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
