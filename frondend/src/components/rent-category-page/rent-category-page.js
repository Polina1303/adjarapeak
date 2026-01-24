"use client";
import { RENT } from "../product-range/rent";
import { CATEGORY_RENT } from "../product-range/categoryRent";
import { RENT_SKY } from "../product-range/rent-sky";
import { useState } from "react";
import Image from "next/image";
import { ProductItems } from "../product-items";
import {
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
  ToggleButton,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useSearchParams, usePathname } from "next/navigation";

import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import styles from "../sale-page/sale-page.module.css";

export default function RentCategoryPage({ section, type, subcategory }) {
  const router = useRouter();
  const [loadedIds, setLoadedIds] = useState([]);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [inStockOnly, setInStockOnly] = useState(
    searchParams.get("stock") === "true" || false
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") ?? "default");

  const { t } = useTranslation("rent", "sale");

  const sectionData = CATEGORY_RENT.find((s) => s.path === section) || {
    types: [],
  };

  useEffect(() => {
    if (!pathname) return;

    const params = new URLSearchParams();

    if (inStockOnly) params.set("stock", "true");
    if (sortBy && sortBy !== "default") params.set("sort", sortBy);

    const queryObj = Object.fromEntries(params.entries());

    router.replace(
      {
        pathname: pathname,
        query: queryObj,
      },
      undefined,
      { scroll: false }
    );
  }, [inStockOnly, sortBy, pathname, router]);

  const allProducts = [...RENT, ...RENT_SKY];

  const sectionTypes = sectionData?.types ?? [];

  const typeParam = type ? decodeURIComponent(type) : undefined;
  const subcategoryParam = subcategory
    ? decodeURIComponent(subcategory)
    : undefined;

  const allSubcats = sectionTypes.flatMap((t) =>
    (t.subcategories ?? []).map((sc) => ({
      slug: sc.subcategory,
      parentType: t.category,
    }))
  );

  const isType =
    typeParam && sectionTypes.some((t) => t.category === typeParam);
  const isSubcatInTypeParam =
    typeParam && allSubcats.some((sc) => sc.slug === typeParam);

  let selectedType = isType ? typeParam : undefined;
  let selectedSubcategory =
    subcategoryParam || (isSubcatInTypeParam ? typeParam : undefined);

  if (!selectedType && selectedSubcategory) {
    selectedType = allSubcats.find(
      (sc) => sc.slug === selectedSubcategory
    )?.parentType;
  }

  let filteredProducts = allProducts;

  if (selectedType) {
    filteredProducts = filteredProducts.filter((p) => p.type === selectedType);
  }

  if (selectedSubcategory) {
    filteredProducts = filteredProducts.filter(
      (p) => p.subcategory === selectedSubcategory
    );
  }

  if (!selectedType && !selectedSubcategory) {
    const allowed = new Set(sectionTypes.map((t) => t.category));
    filteredProducts = filteredProducts.filter((p) => allowed.has(p.type));
  }
  const getActualPrice = (product) => {
    return product.salePrice || product.price;
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return getActualPrice(a) - getActualPrice(b);
    if (sortBy === "price-desc") return getActualPrice(b) - getActualPrice(a);
    return 0;
  });

  if (!type && !subcategory && sectionData?.types?.length > 0) {
    return (
      <div className={styles["home-page-product"]}>
        {sectionData.types.map((item) => {
          const routePath = `/rent/${section}/${item.category}`;
          const isLoaded = loadedIds.includes(item.category);

          return (
            <div
              key={item.category}
              className={styles["category-product"]}
              onClick={() => router.push(routePath)}
              style={{ cursor: "pointer" }}
            >
              <Card
                sx={{
                  boxShadow: 3,
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <CardActionArea disableRipple disableTouchRipple>
                  {!isLoaded && <Skeleton variant="rectangular" height={300} />}
                  {item.img && (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1 / 1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={`/img/${item.img}`}
                        alt={item.title}
                        priority
                        width={300}
                        height={300}
                        sizes="(max-width: 600px) 100vw,
                                   (max-width: 900px) 50vw,
                                   300px"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        onLoad={() =>
                          setLoadedIds((prev) => [...prev, item.category])
                        }
                      />
                    </div>
                  )}
                  <CardContent
                    sx={{
                      textAlign: "center",
                      p: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "RoadRadio-Thin, sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      {t(item.title)}
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }

  if (filteredProducts.length > 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
          }}
        >
          <FormControl
            variant="outlined"
            size="small"
            sx={{ minWidth: 100, bgcolor: "white" }}
          >
            <InputLabel
              sx={{
                color: "#d87d4a",
                fontWeight: 200,
                "&.Mui-focused": {
                  color: "#d87d4a !important",
                },
              }}
            >
              {t("price", { ns: "sale" })}
            </InputLabel>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Цена" }}
              label="Цена"
              sx={{
                bgcolor: sortBy ? "#fef3ed" : "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: sortBy ? "#d87d4a" : "#f0b89a",
                  borderWidth: sortBy ? 2 : 1.5,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#d87d4a",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#d87d4a",
                  boxShadow: "0 0 0 3px rgba(216, 125, 74, 0.2)",
                },
                px: 2,
              }}
            >
              <MenuItem
                value="default"
                sx={{
                  color: "#d87d4a",
                  "&:hover": { bgcolor: "#fef3ed" },
                }}
              >
                {t("default", { ns: "sale" })}
              </MenuItem>
              <MenuItem
                value="price-desc"
                sx={{
                  color: "#d87d4a",
                  bgcolor: sortBy === "price-desc" ? "#fef3ed" : "transparent",
                  "&:hover": { bgcolor: "#fef3ed" },
                  "&.Mui-selected": { bgcolor: "#fef3ed" },
                  "&.Mui-selected:hover": { bgcolor: "#fde8db" },
                }}
              >
                {t("price-desc", { ns: "sale" })}
              </MenuItem>
              <MenuItem
                value="price-asc"
                sx={{
                  color: "#d87d4a",
                  bgcolor: sortBy === "price-asc" ? "#fef3ed" : "transparent",
                  "&:hover": { bgcolor: "#fef3ed" },
                  "&.Mui-selected": { bgcolor: "#fef3ed" },
                  "&.Mui-selected:hover": { bgcolor: "#fde8db" },
                }}
              >
                {t("price-asc", { ns: "sale" })}
              </MenuItem>
            </Select>
          </FormControl>

          <ToggleButton
            value="check"
            selected={inStockOnly}
            onChange={() => setInStockOnly(!inStockOnly)}
            size="small"
            sx={{
              border: "1px solid #f0b89a",
              color: inStockOnly ? "white" : "#d87d4a",
              bgcolor: inStockOnly ? "#d87d4a" : "white",
              fontWeight: 200,
              px: 2,
              textTransform: "none",
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: inStockOnly ? "#c96a3a" : "#fef3ed",
                borderColor: "#d87d4a",
              },
              "&.Mui-selected": {
                bgcolor: "#d87d4a",
                color: "white",
                "&:hover": {
                  bgcolor: "#c96a3a",
                },
              },
            }}
          >
            {t("in-stock", { ns: "sale" })}
          </ToggleButton>
        </div>
        <div className={styles["home-page-product"]}>
          {sortedProducts.map((product) => {
            const isLoaded = loadedIds.includes(product.id);

            return (
              <div key={product.id} className={styles["category-product"]}>
                <Card
                  sx={{
                    boxShadow: 3,
                    height: "95%",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={() => router.push(`/app/${product.id}`)}
                >
                  <CardActionArea disableRipple disableTouchRipple>
                    {!!isLoaded ? (
                      <Skeleton variant="rectangular" height={450} />
                    ) : (
                      <ProductItems product={product} />
                    )}
                  </CardActionArea>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (type || subcategory) {
    return (
      <p style={{ textAlign: "center" }}>
        {t("no-products-found", { ns: "sale" })}
      </p>
    );
  }

  return null;
}
