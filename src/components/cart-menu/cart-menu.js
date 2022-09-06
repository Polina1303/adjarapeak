import React from "react";
import { Button } from "../button";
import { CartItem } from "../cart-item";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu_list">
        {items.length > 0
          ? items.map((item) => (
              <CartItem
                key={item.id}
                img={item.img}
                price={item.price}
                title={item.title}
                id={item.id}
                count={item.count}
              />
            ))
          : "Карзина пуста"}
      </div>

      {items.length > 0 ? (
        <div className="cart-menu_arranged">
          <div className="cart-menu_total-price">
            <span>Итого:</span> <span>{calcTotalPrice(items)}₾</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
