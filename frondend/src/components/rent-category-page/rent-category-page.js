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

import { useRouter } from "next/navigation";

import { useSearchParams, usePathname } from "next/navigation";

import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import styles from "../sale-page/sale-page.module.css";

export default function RentCategoryPage({ section, type }) {
  const router = useRouter();
  const [loadedIds, setLoadedIds] = useState([]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [inStockOnly, setInStockOnly] = useState(
    searchParams.get("stock") === "true" || false
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "default");

  const sectionData = CATEGORY_RENT.find((s) => s.path === section) || {
    types: [],
  };

  useEffect(() => {
    const params = new URLSearchParams();

    if (inStockOnly) params.set("stock", "true");
    if (sortBy && sortBy !== "default") params.set("sort", sortBy);

    const query = params.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    router.replace(url, { scroll: false });
  }, [inStockOnly, sortBy, pathname, router]);

  let filteredProducts = [];

  if (type) {
    filteredProducts = [...RENT, ...RENT_SKY].filter(
      (p) => p.type === type || p.category === type
    );
  }
  if (inStockOnly) {
    filteredProducts = filteredProducts.filter((p) => p.order === true);
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  if (!type && sectionData?.types?.length > 0) {
    return (
      <div className={styles["home-page-product"]}>
        {sectionData.types.map((t) => {
          const routePath = `/rent/${section}/${t.category}`;
          const isLoaded = loadedIds.includes(t.category);

          return (
            <div
              key={t.category}
              className={styles["category-product"]}
              onClick={() => router.push(routePath)}
              style={{ cursor: "pointer" }}
            >
              <Card
                sx={{
                  boxShadow: 3,
                  height: "100%",
                  overflow: "hidden",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <CardActionArea>
                  {!isLoaded && <Skeleton variant="rectangular" height={250} />}
                  {t.img && (
                    <div
                      style={{
                        position: "relative",
                        height: 300,
                        display: isLoaded ? "block" : "none",
                      }}
                    >
                      <Image
                        src={`/img/${t.img}`}
                        alt={t.title}
                        priority
                        width={300}
                        height={300}
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
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
                    transition: "transform 0.2s ease",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                  onClick={() => router.push(`/app/${product.id}`)}
                >
                  <CardActionArea>
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

  if (type) {
    return <p style={{ textAlign: "center" }}>Товары не найдены</p>;
  }

  return null;
}
