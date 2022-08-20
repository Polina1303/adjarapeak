import React from "react";
import { BsCart3 } from "react-icons/bs";
import "./cart-block.css";

export const CartBlock = () => {
  return (
    <div className="cart-block">
      <BsCart3 size={"25"} className="cart-icon" />
      <span className="cart-price">2316 ₾</span>
    </div>
  );
};
