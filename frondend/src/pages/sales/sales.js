import { RecommendedCarousel } from "../../components/carousel";
import { PRODUCT } from "../../components/product-range/product";
import { useMemo } from "react";
import style from "./sales.module.css";

export const Sales = () => {
  const products = useMemo(
    () => PRODUCT.filter((item) => item.salePrice),
    [PRODUCT]
  );

  return (
    <div style={{ margin: "50px 0", textAlign: "left" }}>
      <h4 className={style["sales-title"]}>Акции</h4>
      <RecommendedCarousel products={products} />
    </div>
  );
};
