import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../button";
import "./buy.css";

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

  useEffect(() => {
    const storedItemsInCart = JSON.parse(localStorage.getItem("productInCart"));
    if (storedItemsInCart) {
      setItemsInCart(storedItemsInCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productInCart", JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  // {
  //   `container-items-price ${discount ? "discounted" : ""}`;
  // }

  return (
    <div className="container-items-price" onClick={handleAddToCart}>
      {/* <div>
        {product.oldPrice ? (
          <b
            className={`product-items__oldPrice ${
              discount ? "discounted" : ""
            }`}
          >
            {product.oldPrice}₾
          </b>
        ) : ( */}
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <b className="product-items__price">{product.price}₾</b>
          {product.order&& <p style={{fontSize:'13px', marginLeft:'20px',  color:' #9f9d9df5'}}>под заказ</p>}
          </div>
        {/* )}{" "}
        {product.newPrice && (
          <b className={`product-items__price ${discount ? "discounted" : ""}`}>
            {product.newPrice}₾
          </b>
        )} */}
      {/* </div> */}
      {/* <b className="product-items__price">{product.price}₾</b> */}
      <div className="add-to-cart-cover">
        {page ? (
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

              {addedCount && addedCount > 0 ? (
                <i className="product-items__count">{addedCount}</i>
              ) : null}
            </Button>
          </div>
        )}

        {/* )} */}
      </div>
    </div>
  );
};
