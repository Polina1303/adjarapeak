import { Typography } from "@mui/material";
import { RecommendedCarousel } from "../../components/carousel";
import { PRODUCT } from "../../components/product-range/product";
import { useMemo } from "react";

export const Sales = () => {
  const products = useMemo(
    () => PRODUCT.filter((item) => item.salePrice),
    [PRODUCT]
  );

  return (
    <div style={{ margin: "50px 0", textAlign: "center" }}>
      <Typography
        variant="h4"
        component="h2"
        style={{
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#de682d",
          fontFamily: "RoadRadio-Thin, sans-serif",
          margin: "10px 0px",
        }}
      >
        Акции
      </Typography>
      <RecommendedCarousel products={products} />
    </div>
  );
};
