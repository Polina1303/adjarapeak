import React from "react";
import "./cart-item.css";

export const CartItem = ({ img, title, price, id }) => {
  return (
    <div className="cart-item">
      {/* <span>{img}</span> */}
      {/* <img src={img} /> */}
      <div className="cart-item_title">
        <span>{title}</span>
      </div>
      <div className="cart-item_price">
        <span>{price}₾</span>
      </div>
    </div>
  );
};
