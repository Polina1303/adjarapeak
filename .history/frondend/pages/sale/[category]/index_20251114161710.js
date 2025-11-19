import { useRouter } from "next/router";
import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Skeleton,
} from "@mui/material";
import { PRODUCT } from "../../components/product-range/product";
import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";

export default function SaleCategoryPage() {
  const router = useRouter();
  const { category, subcategory } = router.query;
  const [loadedIds, setLoadedIds] = useState([]);

  const section = CATEGORY_PRODUCT.find((s) => s.path === category);

  let filteredProducts = [];

  if (subcategory) {
    filteredProducts = PRODUCT.filter((p) => p.subcategory === subcategory);
  } else if (category) {
    filteredProducts = PRODUCT.filter(
      (p) => p.category === category || p.subcategory === category
    );
  }

  if (!category && section?.types) {
    return (
      <div className="home-page-product">
        {section.types.map((type) => {
          const routePath = `/sale/${section.path}/${type.category}`;
          const isLoaded = loadedIds.includes(type.category);

          return (
            <div
              key={type.category}
              className="category-product"
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
                  {type.img && (
                    <CardMedia
                      component="img"
                      sx={{
                        objectFit: "cover",
                        display: isLoaded ? "block" : "none",
                      }}
                      image={`/img/${type.img}`}
                      alt={type.title}
                      onLoad={() =>
                        setLoadedIds((prev) => [...prev, type.category])
                      }
                    />
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
                      {type.title}
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
      <div className="home-page-product">
        {filteredProducts.map((product) => {
          const isLoaded = loadedIds.includes(product.id);
          return (
            <div className="category-product" key={product.id}>
              <Card
                sx={{
                  boxShadow: 3,
                  height: "100%",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
                onClick={() => router.push(`/product/${product.id}`)}
              >
                <CardActionArea>
                  {!isLoaded && <Skeleton variant="rectangular" height={250} />}
                  {product.img && (
                    <CardMedia
                      component="img"
                      sx={{
                        objectFit: "cover",
                        display: isLoaded ? "block" : "none",
                      }}
                      image={`/img/${product.img}`}
                      alt={product.title}
                      onLoad={() =>
                        setLoadedIds((prev) => [...prev, product.id])
                      }
                    />
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
                      {product.title}
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

  if (category || subcategory) {
    return <p style={{ textAlign: "center" }}>Товары не найдены</p>;
  }

  return <p>Выберите категорию</p>;
}
