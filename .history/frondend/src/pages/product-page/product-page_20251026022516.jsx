import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { setCurrentProduct } from "../../redux/product/reducer";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Buy } from "../../components/buy/buy";
import { PRODUCT } from "../../components/product-range/product";
import { SPORT_PRODUCT } from "../../components/product-range/sportProduct";
import "./product-page.css";
import { RENT } from "../../components/product-range/rent";
import { RENT_SKY } from "../../components/product-range/rent-sky";
import { SEA_PRODUCT } from "../../components/product-range/sea-product";
import { FOOD } from "../../components/product-range/food";
import { CLOTHES } from "../../components/product-range/clothes";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import "./product-page.css";
import { Carousel } from "antd";

export const ProductPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.currentProduct);

  const redirectToError = useCallback(() => {
    navigate("/error");
  }, [navigate]);

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

    if (product.category === "rent_sky" || product.category === "rent") {
      if (!product.type) return allProducts.slice(0, 10);
      return allProducts
        .filter((item) => item.type === product.type)
        .slice(0, 10);
    }
  }, []);
  const recommendedProducts = getRecommendedProducts();

  useEffect(() => {
    const productId = Number(params.id);

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
  }, [dispatch, params.id, redirectToError]);

  if (!product || !product.column) return null;
  const column = product.column;

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <Card className="product-card">
        <Box className="product-top">
          <Box className="product-image-box">
            <img
              src={process.env.PUBLIC_URL + "/img/" + product.img}
              alt={product.title}
              className="product-image"
            />
          </Box>

          <Box className="product-info">
            <Typography
              variant="h4"
              component="h1"
              className="product-title"
              sx={{ fontFamily: "RoadRadio-Bold, sans-serif" }}
            >
              {product.title}
            </Typography>

            <Box className="product-buy">
              <Buy product={product} page={true} />
            </Box>

            <Box>
              <NavLink className="product-link">Условия доставки</NavLink>
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

          <Box>
            {column && column.length > 0 && (
              <ul className="product-list">
                {column.map((item, index) => (
                  <li key={index}>
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
            sx={{ fontFamily: "RoadRadio-Bold, sans-serif" }}
          >
            С этим товаром покупают
          </Typography>
        </Box>
        <Box>
          {recommendedProducts.length > 0 && (
            <Carousel arrows infinite={false} dots={true}>
              {recommendedProducts.map((item) => (
                <div key={item.id} className="carousel-item">
                  <Card style={{ padding: "16px", margin: "0 8px" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/img/" + item.img}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "contain",
                      }}
                    />
                    <Typography style={{ margin: "8px 0", fontSize: "14px" }}>
                      {item.title}
                    </Typography>
                    <Typography
                      style={{ color: "#de682d", fontWeight: "bold" }}
                    >
                      {item.price} ₽
                    </Typography>
                    <Buy product={item} page={false} />
                  </Card>
                </div>
              ))}
            </Carousel>
          )}
        </Box>
      </Card>
    </>
  );
};
