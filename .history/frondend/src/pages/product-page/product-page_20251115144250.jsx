import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import Link from "next/link";
import { setCurrentProduct } from "../../redux/product/reducer";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import { Buy } from "../../components/buy/buy";
import { PRODUCT } from "../../components/product-range/product";
import { SPORT_PRODUCT } from "../../components/product-range/sportProduct";
import { RENT } from "../../components/product-range/rent";
import { RENT_SKY } from "../../components/product-range/rent-sky";
import { SEA_PRODUCT } from "../../components/product-range/sea-product";
import { FOOD } from "../../components/product-range/food";
import { CLOTHES } from "../../components/product-range/clothes";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import { RecommendedCarousel } from "../../components/carousel";
import styles from "./product-page.module.css";

export const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.currentProduct);

  const redirectToError = useCallback(() => {
    router.push("/error");
  }, [router]);

  const getRecommendedProducts = useCallback(() => {
    if (!product || !product.category) return [];

    const allProducts = [
      ...PRODUCT,
      ...SPORT_PRODUCT,
      ...RENT,
      ...RENT_SKY,
      ...SEA_PRODUCT,
      ...FOOD,
      ...CLOTHES,
    ].filter((item) => item.id !== product.id);

    const sameCategoryProducts = allProducts
      .filter((item) => item.category === product.category)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const remainingCount = 10 - sameCategoryProducts.length;
    const otherProducts = allProducts
      .filter((item) => item.category !== product.category)
      .sort(() => Math.random() - 0.5)
      .slice(0, remainingCount);

    return [...sameCategoryProducts, ...otherProducts];
  }, [product]);

  const recommendedProducts = getRecommendedProducts();

  useEffect(() => {
    const productId = Number(id);

    const allCategories = [
      ...PRODUCT,
      ...SPORT_PRODUCT,
      ...RENT,
      ...RENT_SKY,
      ...SEA_PRODUCT,
      ...FOOD,
      ...CLOTHES,
    ];

    const foundProduct = allCategories.find((item) => item.id === productId);

    if (foundProduct) {
      dispatch(setCurrentProduct(foundProduct));
    } else {
      redirectToError();
    }
  }, [dispatch, id, redirectToError]);

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
              src={process.env.PUBLIC_URL + "/img/" + product.img}
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
                fontSize: {
                  xs: "26px",
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

        <Box className="product-description">
          <Typography
            variant="h5"
            component="h3"
            className="product-desc-title"
            sx={{ fontFamily: "RoadRadio-Bold, sans-serif" }}
          >
            Описание
          </Typography>

          {product.desc && (
            <Typography className="product-info-additional">
              {product.desc}
            </Typography>
          )}
          {product.shortly && (
            <Typography className="product-info-additional">
              {product.shortly}
            </Typography>
          )}

          {product.day && (
            <Typography variant="h6" className="product-info-additional">
              {product.day}
            </Typography>
          )}

          <Box className="product-list">
            {column && column.length > 0 && (
              <ul className="product-list">
                {column.map((item, index) => (
                  <li key={index} className="product-list-item">
                    <DoneIcon sx={{ color: "#de682d" }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Box>
        </Box>

        <Box className="product-related">
          <Typography
            variant="h5"
            component="h3"
            className="product-related-title"
            sx={{
              fontFamily: "RoadRadio-Bold, sans-serif",
            }}
          >
            С этим товаром покупают
          </Typography>
        </Box>
        <Box>
          <RecommendedCarousel products={recommendedProducts} />
        </Box>
      </Card>
    </>
  );
};
