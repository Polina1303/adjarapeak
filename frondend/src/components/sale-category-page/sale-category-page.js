"use client";
import { useEffect } from "react";
import { PRODUCT } from "../product-range/product";
import { CATEGORY_PRODUCT } from "../product-range/categoryProduct";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSearchParams, usePathname } from "next/navigation";
import { ProductItems } from "../product-items";
import {
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
  ToggleButton,
} from "@mui/material";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import styles from "../sale-page/sale-page.module.css";
import Link from "next/link";

export default function SaleCategoryPage({ section, type, subcategory }) {
  const router = useRouter();
  const [loadedIds, setLoadedIds] = useState([]);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [inStockOnly, setInStockOnly] = useState(
    searchParams.get("stock") === "true" || false
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "default");

  const sectionData = CATEGORY_PRODUCT.find((s) => s.path === section) || {
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

  let filteredProducts = [];

  if (subcategory) {
    filteredProducts = PRODUCT.filter((p) => p.subcategory === subcategory);
  } else if (type) {
    filteredProducts = PRODUCT.filter(
      (p) => p.category === type || p.subcategory === type
    );
  } else {
    filteredProducts = PRODUCT.filter((p) =>
      sectionData.types.some(
        (t) => t.category === p.category || t.category === p.subcategory
      )
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

  if (!type && !subcategory && sectionData?.types?.length > 0) {
    return (
      <div className={styles["home-page-product"]}>
        {sectionData.types.map((t) => {
          const routePath = `/sale/${section}/${t.category}`;
          const isLoaded = loadedIds.includes(t.category);

          return (
            <Link
              key={t.category}
              href={`/sale/${section}/${t.category}`}
              style={{ textDecoration: "none", color: "inherit" }}
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
            </Link>
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
                    minWidth: 0,
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
    return <p style={{ textAlign: "center" }}>Товары не найдены</p>;
  }

  return null;
}
