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

export const ProductPage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

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

  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    const storedItemsInCart = JSON.parse(localStorage.getItem("productInCart"));
    if (storedItemsInCart) {
      setItemsInCart(storedItemsInCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productInCart", JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  useEffect(() => {
    const parsedProduct = PRODUCT.filter(
      (item) => item.id === Number(params.id)
    );
    const parsedSportProduct = SPORT_PRODUCT.filter(
      (item) => item.id === Number(params.id)
    );
    const parsedRent = RENT.filter((item) => item.id === Number(params.id));
    const parsedRentSky = RENT_SKY.filter(
      (item) => item.id === Number(params.id)
    );
    const parsedSea = SEA_PRODUCT.filter(
      (item) => item.id === Number(params.id)
    );
    const parsedFood = FOOD.filter((item) => item.id === Number(params.id));
    const parsedClothes = CLOTHES.filter(
      (item) => item.id === Number(params.id)
    );

    if (parsedProduct.length > 0) {
      dispatch(setCurrentProduct(parsedProduct[0]));
    } else if (parsedRent.length > 0) {
      dispatch(setCurrentProduct(parsedRent[0]));
    } else if (parsedRentSky.length > 0) {
      dispatch(setCurrentProduct(parsedRentSky[0]));
    } else if (parsedSportProduct.length > 0) {
      dispatch(setCurrentProduct(parsedSportProduct[0]));
    } else if (parsedSea.length > 0) {
      dispatch(setCurrentProduct(parsedSea[0]));
    } else if (parsedFood.length > 0) {
      dispatch(setCurrentProduct(parsedFood[0]));
    } else if (parsedClothes.length > 0) {
      dispatch(setCurrentProduct(parsedClothes[0]));
    } else {
      history("/error");
    }
  }, [dispatch, params, history]);

  if (!product || !product.column) return null;
  const column = product.column;

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => history(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>

      <div className="product-container">
        <div className="product-page__wrapper">
          <div className="image-container">
            <img
              className="product-page__img"
              src={process.env.PUBLIC_URL + "/img/" + product.img}
              alt={product.title}
            ></img>
          </div>

          <div className="product-info-container">
            <h1 className="product-page__title">
              {product.title.toUpperCase()}
            </h1>

            {product.newPrice && (
              <>
                <b className={`product-items_price`}>{product.newPrice}.00 ₾</b>
                <s className="product-items__old-price">{product.price}.00 ₾</s>
              </>
            )}
            {!product.newPrice && (
              <b className="product-items_price">{product.price}.00 ₾</b>
            )}

            {!product.order && (
              <p
                style={{
                  margin: "0 0 0 20px",
                  color: "#9f9d9df5",
                  lineHeight: "1",
                  position: "relative",
                  top: "-2px",
                }}
              >
                скоро в наличии
              </p>
            )}

            <div className="add-to-cart-cover" onClick={handleAddToCart}>
              <div className="add-to-cart-page">
                <Button type="primary">
                  <div className="add-to-cart-title"> В корзину</div>
                  <div className="add-to-cart-icon">
                    <MdAddShoppingCart className="shopping-cart-icon" />
                  </div>
                  {addedCount && addedCount > 0 ? (
                    <i className="product-items__count">{addedCount}</i>
                  ) : null}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
