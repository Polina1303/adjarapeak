"use client";
import { RENT } from "../product-range/rent";
import { CATEGORY_RENT } from "../product-range/categoryRent";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ProductItems } from "../product-items";
import { Card, CardActionArea, CardContent, Skeleton } from "@mui/material";
import styles from "../sale-page/sale-page.module.css";

export default function RentCategoryPage({ section, type }) {
  const router = useRouter();
  const [loadedIds, setLoadedIds] = useState([]);

  const sectionData = CATEGORY_RENT.find((s) => s.path === section) || {
    types: [],
  };

  let filteredProducts = [];

  if (type) {
    filteredProducts = RENT.filter(
      (p) => p.type === type || p.category === type
    );
  }
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
      <div className={styles["home-page-product"]}>
        {filteredProducts.map((product) => {
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
    );
  }

  if (type) {
    return <p style={{ textAlign: "center" }}>Товары не найдены</p>;
  }

  return null;
}
