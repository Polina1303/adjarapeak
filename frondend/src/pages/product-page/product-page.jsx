import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import Link from "next/link";
import { setCurrentProduct } from "../../redux/product/reducer";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import { Buy } from "../../components/buy/buy";
import { PRODUCT } from "../../components/product-range/product";
import { RENT } from "../../components/product-range/rent";
import { RENT_SKY } from "../../components/product-range/rent-sky";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import { RecommendedCarousel } from "../../components/carousel";
import { getProductById } from "../../../lib/cache";
import styles from "./product-page.module.css";

export const ProductPage = () => {
  const product = useSelector((state) => state.products.currentProduct);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const isRentProduct =
    RENT.some((p) => p.id === product.id) ||
    RENT_SKY.some((p) => p.id === product.id);
  const relatedTitle = isRentProduct
    ? "С этим товаром арендуют"
    : "С этим товаром покупают";

  const redirectToError = useCallback(() => {
    router.push("/error");
  }, [router]);

  const getRecommendedProducts = useCallback(() => {
    if (!product || !product.category) return [];

    const allProducts = [...PRODUCT, ...RENT, ...RENT_SKY].filter(
      (item) => item.id !== product.id
    );

    const sameCategoryProducts = allProducts
      .filter((item) => item.category === product.category)
      .sort(() => Math.random() - 0.5);

    if (sameCategoryProducts.length >= 10) {
      return sameCategoryProducts.slice(0, 10);
    }

    return sameCategoryProducts;
  }, [product]);

  const recommendedProducts = getRecommendedProducts();

  // useEffect(() => {
  //   const productId = Number(id);

  //   const allCategories = [...PRODUCT, ...RENT, ...RENT_SKY];

  //   const foundProduct = allCategories.find((item) => item.id === productId);

  //   if (foundProduct) {
  //     dispatch(setCurrentProduct(foundProduct));
  //   } else {
  //     redirectToError();
  //   }
  // }, [dispatch, id, redirectToError]);

  useEffect(() => {
    if (!id) return;
    if (product && (product.id === Number(id) || product.id === id)) return;

    const foundProduct = getProductById(id);

    if (foundProduct) {
      dispatch(setCurrentProduct(foundProduct));
    } else {
      redirectToError();
    }
  }, [id, product, dispatch, redirectToError]);

  if (!product || !product.column) return null;
  const column = product.column;

  return (
    <>
      <div className={styles["back-button-cover"]}>
        <button className="back-button" onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>

      <Card className={styles["product-card"]}>
        <Box className={styles["product-top"]}>
          <Box className={styles["product-image-box"]}>
            <img
              src={"/img/" + product.img}
              alt={product.title}
              className={styles["product-image"]}
            />
          </Box>

          <Box className={styles["product-info"]}>
            <Typography
              component="h1"
              className={styles["product-title"]}
              sx={{
                fontFamily: "RoadRadio-Bold, sans-serif",
                minWidth: 0,
                whiteSpace: "normal",
                overflowWrap: "anywhere",
                fontSize: {
                  xs: "18px",
                  sm: "28px",
                  md: "30px",
                  lg: "32px",
                },
              }}
            >
              {product.title}
            </Typography>

            <Box className={styles["product-buy"]}>
              <Buy product={product} page={true} />
            </Box>

            <Box>
              <Link className={styles["product-link"]} href="delivery_terms">
                Условия доставки
              </Link>
            </Box>
          </Box>
        </Box>

        <Box className={styles["product-description"]}>
          <Typography
            variant="h5"
            component="h3"
            className="product-desc-title"
            sx={{ fontFamily: "RoadRadio-Bold, sans-serif" }}
          >
            Описание
          </Typography>

          {product.desc && (
            <Typography className={styles["product-info-additional"]}>
              {product.desc}
            </Typography>
          )}
          {product.shortly && (
            <Typography className={styles["product-info-additional"]}>
              {product.shortly}
            </Typography>
          )}

          {product.day && (
            <Typography
              variant="h6"
              className={styles["product-info-additional"]}
            >
              {product.day}
            </Typography>
          )}

          <Box className={styles["product-list"]}>
            {column && column.length > 0 && (
              <ul className={styles["product-list"]}>
                {column.map((item, index) => (
                  <li key={index} className={styles["product-list-item"]}>
                    <DoneIcon sx={{ color: "#de682d" }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Box>
        </Box>

        <Box className={styles["product-related"]}>
          <Typography
            variant="h5"
            component="h3"
            className={styles["product-related-title"]}
            sx={{
              fontFamily: "RoadRadio-Bold, sans-serif",
            }}
          >
            {relatedTitle}
          </Typography>
        </Box>
        <Box>
          <RecommendedCarousel products={recommendedProducts} />
        </Box>
      </Card>
    </>
  );
};
