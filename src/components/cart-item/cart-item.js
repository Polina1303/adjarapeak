import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deletItemFromCart } from "../../redux/cart/reducer";
import "./cart-item.css";

export const CartItem = ({ img, title, price, id }) => {
  console.log("img", img);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletItemFromCart(id));
  };
  return (
    <div className="cart-item">
      <img
        className="cart-item_img"
        src={process.env.PUBLIC_URL + "/img/" + img}
        alt={title}
      ></img>
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
