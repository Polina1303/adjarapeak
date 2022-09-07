import React from "react";
import { useDispatch } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { deletItemFromCart } from "../../redux/cart/reducer";
import "./order-item.css";

export const OrderItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletItemFromCart(item.id));
  };

  return (
    <div className="order-item">
      <div className="order-item_cover">
        <img
          className="order-items_img"
          src={process.env.PUBLIC_URL + "/img/" + item.img}
          alt={item.title}
        />
      </div>
      <div className="order-item_title">{item.title}</div>
      <div className="order-item__price">
        <span>{item.price * item.count}₾</span>
        <TiDeleteOutline
          size={25}
          className="order-item_delete"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
