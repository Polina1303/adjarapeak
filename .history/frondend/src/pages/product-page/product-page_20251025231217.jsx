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
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const ProductPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.currentProduct);

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

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <Card
        sx={{
          p: 3,
          mb: 3,
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          gap: 4,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            flex: "1 1 50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/img/" + product.img}
            alt={product.title}
            style={{
              maxWidth: "100%",
              height: "auto",
              maxHeight: "500px",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: "1 1 50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 600,
              textTransform: "uppercase",
              wordWrap: "break-word",
              overflowWrap: "break-word",
                font-family: "RoadRadio-Bold";
  font-size: 36px;
  font-weight: 900;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2)
            }}
          >
            {product.title}
          </Typography>

          <Box sx={{ maxWidth: "100%" }}>
            <Buy product={product} page={true} />
          </Box>
        </Box>
      </Card>
    </>
    /*
      <Card sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
          Описание
        </Typography>

        <Box sx={{ pl: 2 }}>
          {product.desc && (
            <Typography sx={{ mb: 2 }}>{product.desc}</Typography>
          )}

          {product.shortly && (
            <Typography sx={{ mb: 2 }}>{product.shortly}</Typography>
          )}

          {product.day && (
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: "primary.main",
              }}
            >
              {product.day}
            </Typography>
          )}

          {column && column.length > 0 && (
            <Box component="ul" sx={{ pl: 2, mb: 0 }}>
              {column.map((item, index) => (
                <Typography component="li" key={index} sx={{ mb: 1 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      </Card>
      <Card sx={{ p: 3 }}>
        <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
          С этим товаром покупают
        </Typography>
       
      </Card> 
      */
  );
};
