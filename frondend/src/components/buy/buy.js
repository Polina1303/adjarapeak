import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { useTranslation } from "next-i18next";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../button";
import styles from "./buy.module.css";

export const Buy = ({ product, page, discount }) => {
  const cartItem = useSelector(
    (state) =>
      state.cart.itemsInCart &&
      state.cart.itemsInCart.find((item) => item.id === product.id)
  );
  const addedCount = cartItem ? cartItem.count : 0;

  const { t } = useTranslation("sale");

  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(product));
  };

  const [itemsInCart, setItemsInCart] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setMounted(true);
    if (typeof window !== "undefined") {
      const storedItemsInCart = JSON.parse(
        localStorage.getItem("productInCart") || "null"
      );
      if (storedItemsInCart) {
        setItemsInCart(storedItemsInCart);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      localStorage.setItem("productInCart", JSON.stringify(itemsInCart));
    }
  }, [itemsInCart, mounted]);

  const getTranslation = (key) => {
    const fallbacks = {
      "add-to-cart": "В корзину",
      "coming-soon": "скоро в наличии",
    };

    if (!isClient) {
      return fallbacks[key] || key;
    }

    const translation = t(key);
    return translation === key ? fallbacks[key] || key : translation;
  };

  return (
    <div
      className={page ? "" : "container-items-price"}
      onClick={handleAddToCart}
    >
      <div
        style={
          page
            ? {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }
            : {
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                justifyContent: "center",
              }
        }
      >
        {product.order && product.salePrice && (
          <>
            <b
              className={
                discount
                  ? `${styles["product-items__price"]} ${styles["discounted-price"]}`
                  : styles["product-items__price"]
              }
            >
              {product.salePrice}.00₾
            </b>
            <s className={styles["product-items__old-price"]}>
              {product.price}.00₾
            </s>
          </>
        )}

        {product.order && !product.salePrice && (
          <b
            className={
              page
                ? styles["product-items__price_page"]
                : styles["product-items__price"]
            }
          >
            {product.price}.00₾
          </b>
        )}

        {!product.order && (
          <p className={page ? styles.pageStyle : styles.noPageStyle}>
            {getTranslation("coming-soon")}
          </p>
        )}
      </div>

      <div className={styles["add-to-cart-cover"]}>
        {page ? (
          <div className={styles["add-to-cart-page"]}>
            <Button type="primary">
              <div className={styles["add-to-cart-title"]}>
                {getTranslation("add-to-cart")}
              </div>
              <div className={styles["add-to-cart-icon"]}>
                <MdAddShoppingCart className={styles["shopping-cart-icon"]} />
              </div>

              {addedCount && addedCount > 0 ? (
                <i className={styles["product-items__count"]}>{addedCount}</i>
              ) : null}
            </Button>
          </div>
        ) : (
          <div
            className={`${styles["add-to-cart"]} ${
              discount ? styles["discounted"] : ""
            }`}
          >
            <Button type="primary">
              <div
                className={`${styles["add-to-cart-title"]} ${
                  discount ? styles["discounted"] : ""
                }`}
              >
                {getTranslation("add-to-cart")}
              </div>

              <div className={styles["add-to-cart-icon"]}>
                <MdAddShoppingCart
                  className={`${styles["shopping-cart-icon"]} ${
                    discount ? styles["discounted"] : ""
                  }`}
                />
              </div>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
