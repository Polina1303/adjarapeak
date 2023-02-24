import { useSelector } from "react-redux";
import { calcTotalPrice, enumerate } from "../../components/utils";
import { OrderItem } from "../../components/order-item";
import "./order-page.css";

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Ваша корзина пуста!</h1>;
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__totalprice">
          <h4>
            {items.length}
            {enumerate(items.length, ["товар", "товара", "товаров"])} на сумму{" "}
            {calcTotalPrice(items)}₾
          </h4>
          <h3>
            Для оформления заказа свяжитесь с нами по номеру +995 511 147 586. С
            уважением Adjara Peak.
          </h3>
        </div>
      </div>
    </div>
  );
};
