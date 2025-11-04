import { useLocation } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Skeleton,
} from "@mui/material";
import { useState } from "react";
import { PRODUCT } from "../../components/product-range/product";

export const SaleCategoryPage = ({ category }) => {
  const location = useLocation();
  const [loadedIds, setLoadedIds] = useState([]);

  const currentSubcategory = location.pathname.split("/")[3];

  const filteredProducts = PRODUCT.filter(
    (p) => p.category === currentSubcategory
  );

  if (filteredProducts.length) {
    return (
      <div className="home-page-product">
        {filteredProducts.map((product) => (
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
            >
              <CardActionArea>
                {product.img && (
                  <>
                    {!loadedIds.includes(product.id) && (
                      <Skeleton variant="rectangular" />
                    )}
                    <CardMedia
                      component="img"
                      sx={{
                        objectFit: "cover",
                        display: loadedIds.includes(product.id)
                          ? "block"
                          : "none",
                      }}
                      image={process.env.PUBLIC_URL + "/img/" + product.img}
                      alt={product.title}
                      loading="lazy"
                      onLoad={() =>
                        setLoadedIds((prev) => [...prev, product.id])
                      }
                    />
                  </>
                )}
                <CardContent
                  sx={{
                    textAlign: "center",
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 1.5,
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
        ))}
      </div>
    );
  }

  return <p>Товары не найдены</p>;
};
