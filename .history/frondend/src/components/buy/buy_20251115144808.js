import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../button";
import styles from "./buy.module.module.css";

export const Buy = ({ product, page, discount }) => {
  const cartItem = useSelector(
    (state) =>
      state.cart.itemsInCart &&
      state.cart.itemsInCart.find((item) => item.id === product.id)
  );
  const addedCount = cartItem ? cartItem.count : 0;

  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(product));
  };

  const [itemsInCart, setItemsInCart] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
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

  // {
  //   `container-items-price ${discount ? "discounted" : ""}`;
  // }

  // const yes =product.newPrice?

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
                // justifyContent: "center",
              }
            : {
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                justifyContent: "center",
              }
        }
      >
        {/* {product.newPrice && (
          <>
            <b
              className={`product-items__price ${
                discount ? "discounted-price" : ""
              }`}
            >
              {product.newPrice}.00₾
            </b>
            <s className="product-items__old-price"> {product.price}.00₾</s>
          </>
        )}
        {!product.newPrice && (
          <b
            className={
              page ? "product-items__price_page" : "product-items__price"
            }
          >
            {product.price}.00₾
          </b>
        )} */}
        {product.order && product.newPrice && (
          <>
            <b
              className={`product-items__price ${
                discount ? "discounted-price" : ""
              }`}
            >
              {product.newPrice}.00₾
            </b>
            <s className="product-items__old-price"> {product.price}.00₾</s>
          </>
        )}

        {product.order && !product.newPrice && (
          <b
            className={
              page ? "product-items__price_page" : "product-items__price"
            }
          >
            {product.price}.00₾
          </b>
        )}

        {!product.order && (
          <p
            style={
              page
                ? {
                    color: "#9f9d9df5",
                    lineHeight: "1",
                    position: "relative",
                    margin: 0,
                    fontFamily: "RoadRadio-Thin",
                    fontSize: "14px",
                  }
                : {
                    margin: "0 0 0 20px",
                    color: "#9f9d9df5",
                    lineHeight: "1",
                    position: "relative",
                    top: "-2px",
                    fontFamily: "RoadRadio-Thin",
                    fontSize: "14px",
                  }
            }
          >
            (скоро в наличии)
          </p>
        )}
      </div>

      <div className={styles["add-to-cart-cover"]}>
        {page ? (
          <div className={styles["add-to-cart-page"]}>
            <Button type="primary">
              <div className={styles["add-to-cart-title"]}> В корзину</div>
              <div className="add-to-cart-icon">
                <MdAddShoppingCart className="shopping-cart-icon" />
              </div>

              {addedCount && addedCount > 0 ? (
                <i className="product-items__count">{addedCount}</i>
              ) : null}
            </Button>
          </div>
        ) : (
          <div className={`add-to-cart ${discount ? "discounted" : ""}`}>
            <Button type="primary">
              <div
                className={`add-to-cart-title ${discount ? "discounted" : ""}`}
              >
                В корзину
              </div>
              <div className="add-to-cart-icon">
                <MdAddShoppingCart
                  className={`shopping-cart-icon ${
                    discount ? "discounted" : ""
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
