"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { PRODUCT } from "../product-range/product";
import { CATEGORY_PRODUCT } from "../product-range/categoryProduct";
import { ProductItems } from "../product-items";
import {
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
  ToggleButton,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import styles from "../sale-page/sale-page.module.css";
import Link from "next/link";

export default function SaleCategoryPage({ section, type, subcategory }) {
  const router = useRouter();
  const { isReady, query } = router;

  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [loadedIds, setLoadedIds] = useState([]);

  useEffect(() => {
    if (!isReady) return;
    setInStockOnly(query.stock === "true");
    setSortBy(query.sort || "default");
  }, [isReady, query.stock, query.sort]);

  const sectionData = CATEGORY_PRODUCT.find((s) => s.path === section) || {
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

  const filteredProducts = useMemo(() => {
    if (!sectionData) return [];

    let products = PRODUCT.filter((p) => {
      if (subcategory) return p.subcategory === subcategory;
      if (type) return p.category === type || p.subcategory === type;
      return sectionData.types.some(
        (t) => t.category === p.category || t.category === p.subcategory
      );
    });

    if (inStockOnly) products = products.filter((p) => p.order === true);

    if (sortBy === "price-asc") products.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") products.sort((a, b) => b.price - a.price);

    return products;
  }, [sectionData, type, subcategory, inStockOnly, sortBy]);

  if (!type && !subcategory && sectionData?.types?.length > 0) {
    return (
      <div className={styles["home-page-product"]}>
        {sectionData.types.map((t) => (
          <Link
            key={t.category}
            href={`/sale/${section}/${t.category}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card sx={{ boxShadow: 3, height: "100%", overflow: "hidden" }}>
              <CardActionArea disableRipple disableTouchRipple>
                {!loadedIds.includes(t.category) && (
                  <Skeleton variant="rectangular" height={300} />
                )}
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
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 300px"
                      style={{ objectFit: "cover" }}
                      onLoadingComplete={() =>
                        setLoadedIds((prev) => [...prev, t.category])
                      }
                      priority
                    />
                  </div>
                )}

                <CardContent sx={{ textAlign: "center", p: 1.5 }}>
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
          </Link>
        ))}
      </div>
    );
  }

  if (filteredProducts.length > 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", gap: "4px" }}>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ minWidth: 100, bgcolor: "white" }}
          >
            <InputLabel
              sx={{
                color: "#d87d4a",
                fontWeight: 200,
                "&.Mui-focused": { color: "#d87d4a !important" },
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
            onChange={() => setInStockOnly((prev) => !prev)}
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
          {filteredProducts.map((product) => (
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
                    `/sale/${section}/${product.category}/app/${product.id}`
                  )
                }
              >
                <CardActionArea disableRipple disableTouchRipple>
                  <ProductItems product={product} />
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type || subcategory) {
    return <p style={{ textAlign: "center" }}>Товары не найдены</p>;
  }

  return null;
}
