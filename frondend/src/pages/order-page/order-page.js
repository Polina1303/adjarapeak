import { useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calcTotalPrice, enumerate } from "../../components/utils";
import { IoIosArrowBack } from "react-icons/io";
import { OrderItem } from "../../components/order-item";
import { OrderInput } from "../../components/order-input/order-input";
import "./order-page.css";

export const OrderPage = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/adjarapeak");
  }, [navigate]);
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Ваша корзина пуста!</h1>;
  }

  return (
    <div className="order-page">
      <button className="back-button" onClick={() => handleClick()}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>

      <div className="order-page__left">
        {items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__totalprice">
          <h4>
            {items.length}
            {enumerate(items.length, [
              " " + "товар",
              " " + "товара",
              " " + "товаров",
            ])}{" "}
            на сумму {calcTotalPrice(items)}₾
          </h4>
          {/* <h3>
            Для оформления заказа свяжитесь с нами по номеру +995 511 147 586. С
            уважением Adjara Peak.
          </h3> */}
          <OrderInput items={items} />
        </div>
      </div>
    </div>
  );
};