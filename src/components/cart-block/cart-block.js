import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from "../utils";
import "./cart-block.css";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);

  const totalPrice = calcTotalPrice(items);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BsCart3
        size={"25"}
        className="cart-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? <div className="cart-price">{totalPrice}₾</div> : null}
      {isCartMenuVisible && <CartMenu items={items} />}
    </div>
  );
};