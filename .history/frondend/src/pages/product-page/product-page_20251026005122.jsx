import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
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
            <Typography variant="h4" component="h1" className="product-title">
              {product.title}
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
          >
            Описание
          </Typography>

          <Box className="product-desc-text">
            {column && column.length > 0 && (
              <ul className="product-list">
                {column.map((item, index) => (
                  <li key={index}>
                    <DoneIcon sx={{ color: "" }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Box>
        </Box>

        <Box className="product-related">
          <Typography variant="h5" component="h3">
            С этим товаром покупают
          </Typography>
        </Box>
      </Card>
    </>
  );
};
