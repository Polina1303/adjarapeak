import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deletItemFromCart,
  minusItem,
  plusItem,
} from "../../redux/cart/reducer";
import "./cart-item.css";
import { Button } from "../button";

export const CartItem = ({ img, title, price, id, count }) => {
  // const { count } = useSelector((state) =>
  //   state.cart.itemsInCart.find((item) => item.id === id)
  // );
  const items = useSelector((state) => state.cart.itemsInCart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletItemFromCart(id));
  };

  const handleClickPlus = () => {
    dispatch(plusItem({ id }));
  };
  const handleClickMinus = () => {
    dispatch(minusItem({ id }));
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
      <div className="cart-item_count_but">
        <Button onClick={handleClickMinus}>
          <AiOutlineMinusCircle className="cart-item_count" size={20} />
        </Button>
        {count}
        <Button onClick={handleClickPlus}>
          <AiOutlinePlusCircle className="cart-item_count" size={20} />
        </Button>
      </div>
      <div className="cart-item_price">
        <span>{price * count}₾</span>
      </div>
      <div>
        <TiDeleteOutline
          size={25}
          className="cart-item_delete"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
