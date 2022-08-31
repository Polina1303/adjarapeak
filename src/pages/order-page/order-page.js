import React from "react";
import { useSelector } from "react-redux";
import "./order-page.css";
import { calcTotalPrice } from "../../components/utils";
import { OrderItem } from "../../components/order-item";

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  if (items.length < 1) {
    return <h1>Ваша корзина пуста!</h1>;
  }
  return (
    <div className="order-page">
      <div className="order-page_left">
        {items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
      <div className="order-page_right">
        <div className="order-page_totalprice">
          <span>
            {items.length} товаров на сумму {calcTotalPrice(items)}₾
          </span>
        </div>
      </div>
    </div>
  );
};
