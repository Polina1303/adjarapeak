import { Button } from "../button";
import { CartItem } from "../cart-item";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__list">
        {items && items.length > 0
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

      {items && items.length > 0 ? (
        <div className="cart-menu__arranged">
          <div className="cart-menu__total-price">
            <span>Итого:</span> <span>{calcTotalPrice(items)}₾</span>
          </div>
          <Button
            type="secondary"
            size="m"
            onClick={onClick}
            style={{ color: "#f87736" }}
          >
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
