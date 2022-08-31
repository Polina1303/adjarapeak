import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deletItemFromCart } from "../../redux/cart/reducer";
import "./cart-item.css";

export const CartItem = ({ img, title, price, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletItemFromCart(id));
  };
  return (
    <div className="cart-item">
      {/* <span>{img}</span> */}
      {/* <img src={img} /> */}
      <div className="cart-item_title">
        <span>{title}</span>
      </div>
      <div className="cart-item_price">
        <span>{price}₾</span>
        <div className="order-item__price">
          <TiDeleteOutline
            size={25}
            className="cart-item_delete"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
