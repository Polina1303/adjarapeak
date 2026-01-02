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

import { useEffect } from "react";

import { useRouter } from "next/router";

import { useSearchParams, usePathname } from "next/navigation";

import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import styles from "../sale-page/sale-page.module.css";

export default function RentCategoryPage({ section, type, subcategory }) {
  const router = useRouter();
  const { isReady, query } = router;
  const [loadedIds, setLoadedIds] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    if (!isReady) return;
    setInStockOnly(query.stock === "true");
    setSortBy(query.sort || "default");
  }, [isReady, query.stock, query.sort]);

  const sectionData = CATEGORY_RENT.find((s) => s.path === section) || {
    types: [],
  };

  useEffect(() => {
    if (!isReady) return;

    const basePath = router.asPath.split("?")[0];
    const nextQuery = {
      ...(inStockOnly ? { stock: "true" } : {}),
      ...(sortBy !== "default" ? { sort: sortBy } : {}),
    };

    if (query.stock === nextQuery.stock && query.sort === nextQuery.sort)
      return;

    router.replace({ pathname: basePath, query: nextQuery }, undefined, {
      shallow: true,
      scroll: false,
    });
  }, [inStockOnly, sortBy, isReady, query, router]);

  // let filteredProducts = [];

  // if (subcategory) {
  //   filteredProducts = [...RENT, ...RENT_SKY].filter(
  //     (p) => p.subcategory === subcategory
  //   );
  // } else if (type) {
  //   filteredProducts = [...RENT, ...RENT_SKY].filter(
  //     (p) => p.category === type || p.subcategory === type
  //   );
  // } else {
  //   filteredProducts = [...RENT, ...RENT_SKY].filter((p) =>
  //     sectionData.types.some(
  //       (t) => t.category === p.category || t.category === p.subcategory
  //     )
  //   );
  // }

  // if (type) {
  //   filteredProducts = [...RENT, ...RENT_SKY].filter(
  //     (p) => p.type === type || p.category === type
  //   );
  // }
  // if (inStockOnly) {
  //   filteredProducts = filteredProducts.filter((p) => p.order === true);
  // }

  const allProducts = [...RENT, ...RENT_SKY];

  const sectionTypes = sectionData?.types ?? [];

  // decode на всякий случай (если в URL что-то кодируется)
  const typeParam = type ? decodeURIComponent(type) : undefined;
  const subcategoryParam = subcategory
    ? decodeURIComponent(subcategory)
    : undefined;

  // все subcategories из секции + запоминаем родительский type
  const allSubcats = sectionTypes.flatMap((t) =>
    (t.subcategories ?? []).map((sc) => ({
      slug: sc.subcategory, // "pants"
      parentType: t.category, // "clothes"
    }))
  );

  const isType =
    typeParam && sectionTypes.some((t) => t.category === typeParam);
  const isSubcatInTypeParam =
    typeParam && allSubcats.some((sc) => sc.slug === typeParam);

  // выбираем, что реально выбрано
  let selectedType = isType ? typeParam : undefined;
  let selectedSubcategory =
    subcategoryParam || (isSubcatInTypeParam ? typeParam : undefined);

  if (!selectedType && selectedSubcategory) {
    selectedType = allSubcats.find(
      (sc) => sc.slug === selectedSubcategory
    )?.parentType;
  }

  let filteredProducts = allProducts;

  // если выбрали type — фильтруем по p.type (у тебя это "clothes")
  if (selectedType) {
    filteredProducts = filteredProducts.filter((p) => p.type === selectedType);
  }

  // если выбрали subcategory — фильтруем по p.subcategory ("pants")
  if (selectedSubcategory) {
    filteredProducts = filteredProducts.filter(
      (p) => p.subcategory === selectedSubcategory
    );
  }

  // если вообще ничего не выбрано (ни type, ни subcategory) — показываем всё по секции
  if (!selectedType && !selectedSubcategory) {
    const allowed = new Set(sectionTypes.map((t) => t.category));
    filteredProducts = filteredProducts.filter((p) => allowed.has(p.type));
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  if (!type && !subcategory && sectionData?.types?.length > 0) {
    return (
      <div className={styles["home-page-product"]}>
        {sectionData.types.map((t) => {
          const routePath = `/rent/${section}/${t.category}`;
          const isLoaded = loadedIds.includes(t.category);

          return (
            <div
              key={t.category}
              // className={styles["category-product"]}
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
                  {!isLoaded && <Skeleton variant="rectangular" height={250} />}
                  {t.img && (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1 / 1",
                        // display: isLoaded ? "block" : "none",
                      }}
                    >
                      <Image
                        src={`/img/${t.img}`}
                        alt={t.title}
                        priority
                        width={300}
                        height={300}
                        sizes="(max-width: 600px) 100vw,
                                   (max-width: 900px) 50vw,
                                   300px"
                        style={{
                          objectFit: "cover",
                        }}
                        onLoadingComplete={() =>
                          setLoadedIds((prev) => [...prev, t.category])
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
                      {t.title}
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
              Цена
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
                value="price-desc"
                sx={{
                  color: "#d87d4a",
                  bgcolor: sortBy === "price-desc" ? "#fef3ed" : "transparent",
                  "&:hover": { bgcolor: "#fef3ed" },
                  "&.Mui-selected": { bgcolor: "#fef3ed" },
                  "&.Mui-selected:hover": { bgcolor: "#fde8db" },
                }}
              >
                По убыванию
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
                По возрастанию
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
            В наличии
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
                  onClick={() =>
                    router.push(
                      `/rent/${section}/${product.category}/app/${product.id}`
                    )
                  }
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
    return <p style={{ textAlign: "center" }}>Товары не найдены</p>;
  }

  return null;
}
