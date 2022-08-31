import React from "react";
import { useDispatch } from "react-redux";
import { ProductCover } from "../product-cover";
import { TiDeleteOutline } from "react-icons/ti";
import "./order-item.css";
import { deletItemFromCart } from "../../redux/cart/reducer";

export const OrderItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletItemFromCart(item.id));
  };

  return (
    <div className="order-item">
      <div className="order-item_cover">
        {/* <ProductCover img={product.img}/><RentCover/> картинки */}
        pppp
      </div>
      <div className="order-item_title">{item.title}</div>
      <div className="order-item__price">
        <span>{item.price}₾</span>
        <TiDeleteOutline
          size={25}
          className="cart-item_delete"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
