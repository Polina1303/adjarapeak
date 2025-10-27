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
        <div className="image-container">
          <img
            className="product-page__img"
            src={process.env.PUBLIC_URL + "/img/" + product.img}
            alt={product.title}
          ></img>
        </div>

        <div className="product-info-container">
          <h1 className="product-page__title">{product.title.toUpperCase()}</h1>

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
