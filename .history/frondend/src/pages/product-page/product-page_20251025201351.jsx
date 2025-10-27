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

import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Stack,
  IconButton,
  Container,
} from "@mui/material";
import { MdAddShoppingCart, MdArrowBack } from "react-icons/md";

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

      <div className="product-container">
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid container spacing={4}>
            {/* Изображение товара */}
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image={process.env.PUBLIC_URL + "/img/" + product.img}
                  alt={product.title}
                  sx={{
                    height: 400,
                    objectFit: "contain",
                    p: 2,
                    backgroundColor: "#f8f9fa",
                  }}
                />
              </Card>
            </Grid>

            {/* Информация о товаре */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{ p: 3, borderRadius: 2, boxShadow: 3, height: "100%" }}
              >
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                  {/* Заголовок */}
                  <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: "text.primary",
                      mb: 3,
                    }}
                  >
                    {product.title}
                  </Typography>

                  {/* Цена и статус */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 3 }}
                  >
                    {product.newPrice ? (
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            color: "error.main",
                          }}
                        >
                          {product.newPrice}.00 ₾
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "text.secondary",
                            textDecoration: "line-through",
                          }}
                        >
                          {product.price}.00 ₾
                        </Typography>
                      </Stack>
                    ) : (
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: "text.primary",
                        }}
                      >
                        {product.price}.00 ₾
                      </Typography>
                    )}

                    {!product.order && (
                      <Chip
                        label="Скоро в наличии"
                        color="warning"
                        variant="outlined"
                        size="small"
                      />
                    )}
                  </Stack>

                  {/* Кнопка добавления в корзину */}
                  <Box sx={{ mb: 3 }}>
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      onClick={handleAddToCart}
                      disabled={!product.order}
                      startIcon={<MdAddShoppingCart size={20} />}
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        textTransform: "none",
                        boxShadow: 2,
                        "&:hover": {
                          boxShadow: 4,
                          transform: "translateY(-1px)",
                          transition: "all 0.2s ease",
                        },
                      }}
                    >
                      В корзину
                      {addedCount > 0 && (
                        <Chip
                          label={addedCount}
                          size="small"
                          sx={{
                            ml: 1,
                            color: "white",
                            backgroundColor: "rgba(255,255,255,0.2)",
                            minWidth: 24,
                            height: 24,
                          }}
                        />
                      )}
                    </Button>
                  </Box>

                  {/* Дополнительная информация */}
                  <Stack spacing={2}>
                    {product.desc && (
                      <Typography variant="body1" color="text.secondary">
                        {product.desc}
                      </Typography>
                    )}

                    {product.shortly && (
                      <Typography variant="body2" color="text.secondary">
                        {product.shortly}
                      </Typography>
                    )}

                    {product.day && (
                      <Typography variant="h6" color="primary" fontWeight={600}>
                        {product.day}
                      </Typography>
                    )}
                  </Stack>

                  {/* Характеристики */}
                  {product.column && product.column.length > 0 && (
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="h6" gutterBottom fontWeight={600}>
                        Характеристики:
                      </Typography>
                      <Stack component="ul" spacing={1} sx={{ pl: 2, m: 0 }}>
                        {product.column.map((item, index) => (
                          <Typography
                            component="li"
                            variant="body2"
                            key={index}
                            color="text.secondary"
                          >
                            {item}
                          </Typography>
                        ))}
                      </Stack>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
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
