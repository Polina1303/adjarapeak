import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCurrentProduct } from "../../redux/product/reducer";
import { useNavigate, useParams } from "react-router-dom";
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
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../../components/button";
import { setItemInCart } from "../../redux/cart/reducer";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export const ProductPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.currentProduct);

  const cartItem = useSelector(
    (state) =>
      state.cart.itemsInCart &&
      state.cart.itemsInCart.find((item) => item.id === product.id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(product));
  };

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
      navigate("/error");
    }
  }, [dispatch, params, navigate]);

  if (!product || !product.column) return null;
  const column = product.column;

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>

      <Card sx={{ display: "flex", p: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
          }}
        >
          {/* Картинка */}
          <CardContent
            sx={{
              flex: "0 0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <img
              className="product-page__img"
              src={process.env.PUBLIC_URL + "/img/" + product.img}
              alt={product.title}
              style={{
                maxWidth: "300px",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </CardContent>

          {/* Информация о товаре */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              pl: { md: 3 },
              pt: { xs: 2, md: 0 },
            }}
          >
            {/* Заголовок */}
            <h1
              className="product-page__title"
              style={{ margin: "0 0 16px 0" }}
            >
              {product.title.toUpperCase()}
            </h1>

            {/* Цена */}
            <Box sx={{ mb: 2 }}>
              {product.newPrice ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  <b
                    className="product-items_price"
                    style={{ fontSize: "1.5rem", color: "#d32f2f" }}
                  >
                    {product.newPrice}.00 ₾
                  </b>
                  <s
                    className="product-items__old-price"
                    style={{ color: "#9e9e9e", fontSize: "1.1rem" }}
                  >
                    {product.price}.00 ₾
                  </s>
                </Box>
              ) : (
                <b
                  className="product-items_price"
                  style={{ fontSize: "1.5rem" }}
                >
                  {product.price}.00 ₾
                </b>
              )}
            </Box>

            {/* Статус наличия */}
            {!product.order && (
              <p
                style={{
                  margin: "0 0 20px 0",
                  color: "#9f9d9df5",
                  lineHeight: "1.2",
                  fontSize: "0.9rem",
                }}
              >
                скоро в наличии
              </p>
            )}

            {/* Кнопка добавления в корзину */}
            <Box className="product-info-container" sx={{ mt: "auto" }}>
              <div className="add-to-cart-cover" onClick={handleAddToCart}>
                <div className="add-to-cart-page">
                  <Button
                    type="primary"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      padding: "10px 20px",
                      fontSize: "1rem",
                    }}
                  >
                    <div className="add-to-cart-title">В корзину</div>
                    <div className="add-to-cart-icon">
                      <MdAddShoppingCart className="shopping-cart-icon" />
                    </div>
                    {addedCount && addedCount > 0 ? (
                      <i
                        className="product-items__count"
                        style={{
                          background: "#ff4444",
                          color: "white",
                          borderRadius: "50%",
                          width: "20px",
                          height: "20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.8rem",
                        }}
                      >
                        {addedCount}
                      </i>
                    ) : null}
                  </Button>
                </div>
              </div>
            </Box>
          </Box>
        </Box>
      </Card>

      <div className="product-container">
        <div className="image-container"></div>
      </div>
      <p className="product-text">{product.desc}</p>
      <p className="product-text">{product.shortly}</p>
      <b className="product-page__day">{product.day}</b>
      <ul className="column">
        {column.map((item) => (
          <li className="column__list" key={item}>
            <span> {item}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
