import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { setCurrentProduct } from "../../redux/product/reducer";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../../components/button";
import { setItemInCart } from "../../redux/cart/reducer";
import { PRODUCT } from "../../components/product-range/product";
import { SPORT_PRODUCT } from "../../components/product-range/sportProduct";
import "./product-page.css";
import { RENT } from "../../components/product-range/rent";
import { RENT_SKY } from "../../components/product-range/rent-sky";
import { SEA_PRODUCT } from "../../components/product-range/sea-product";
import { FOOD } from "../../components/product-range/food";
import { CLOTHES } from "../../components/product-range/clothes";
import "./product-page.css";

// Все категории продуктов в одном массиве для удобства поиска
const PRODUCT_CATEGORIES = [
  PRODUCT,
  SPORT_PRODUCT,
  RENT,
  RENT_SKY,
  SEA_PRODUCT,
  FOOD,
  CLOTHES,
];

export const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.products.currentProduct);
  const cartItem = useSelector((state) =>
    state.cart.itemsInCart?.find((item) => item.id === product?.id)
  );

  const addedCount = cartItem?.count || 0;

  useEffect(() => {
    if (!id) {
      navigate("/error");
      return;
    }

    const productId = Number(id);
    let foundProduct = null;

    for (const category of PRODUCT_CATEGORIES) {
      foundProduct = category.find((item) => item.id === productId);
      if (foundProduct) break;
    }

    if (foundProduct) {
      dispatch(setCurrentProduct(foundProduct));
    } else {
      navigate("/error");
    }
  }, [dispatch, id, navigate]);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (product) {
      dispatch(setItemInCart(product));
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!product) {
    return (
      <div className="product-loading">
        <div className="back-button-cover">
          <button className="back-button" onClick={handleGoBack}>
            <IoIosArrowBack size={25} /> Назад
          </button>
        </div>
        <div className="loading-message">Загрузка товара...</div>
      </div>
    );
  }

  const hasDiscount = !!product.newPrice;
  const isOutOfStock = !product.order;

  return (
    <div className="product-page">
      {/* Кнопка назад */}
      <div className="back-button-cover">
        <button className="back-button" onClick={handleGoBack}>
          <IoIosArrowBack size={25} /> Назад
        </button>
      </div>

      {/* Основная информация о товаре */}
      <div className="product-container">
        <div className="product-page__wrapper">
          {/* Изображение товара */}
          <div className="image-container">
            <img
              className="product-page__img"
              src={`${process.env.PUBLIC_URL}/img/${product.img}`}
              alt={product.title}
            />
          </div>

          {/* Информация о товаре */}
          <div className="product-info-container">
            <h1 className="product-page__title">
              {product.title.toUpperCase()}
            </h1>

            {/* Блок цены */}
            <div className="price-container">
              {hasDiscount ? (
                <div className="discount-price">
                  <b className="product-items_price">{product.newPrice}.00 ₾</b>
                  <s className="product-items__old-price">
                    {product.price}.00 ₾
                  </s>
                </div>
              ) : (
                <b className="product-items_price">{product.price}.00 ₾</b>
              )}

              {isOutOfStock && (
                <p className="out-of-stock-label">скоро в наличии</p>
              )}
            </div>

            {/* Кнопка добавления в корзину */}
            <div className="add-to-cart-cover" onClick={handleAddToCart}>
              <div className="add-to-cart-page">
                <Button type="primary" disabled={isOutOfStock}>
                  <div className="add-to-cart-title">
                    {isOutOfStock ? "Нет в наличии" : "В корзину"}
                  </div>
                  <div className="add-to-cart-icon">
                    <MdAddShoppingCart className="shopping-cart-icon" />
                  </div>
                  {addedCount > 0 && (
                    <i className="product-items__count">{addedCount}</i>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Дополнительная информация о товаре */}
      <div className="product-details">
        {product.desc && <p className="product-text">{product.desc}</p>}
        {product.shortly && <p className="product-text">{product.shortly}</p>}
        {product.day && <b className="product-page__day">{product.day}</b>}

        {product.column && product.column.length > 0 && (
          <ul className="column">
            {product.column.map((item, index) => (
              <li className="column__list" key={index}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
