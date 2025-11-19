import { useDispatch, useSelector } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../button";
import styles from "./rent.module.css";

export const Rent = ({ rent }) => {
  const dispatch = useDispatch();

  const handelClickWeekday = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(rent));
  };

  const cartItem = useSelector(
    (state) =>
      state.cart.itemsInCart &&
      state.cart.itemsInCart.find((item) => item.id === rent.id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  return (
    <div className={styles["add-to-cart__rent"]} onClick={handelClickWeekday}>
      <b className={styles["product-items__price"]}>{rent.price}.00₾</b>
      {/* !!!!!!добавить обязательно */}
      <div className={styles["add-to-cart-cover"]}>
        <div className={styles["add-to-cart"]}>
          <Button type="primary">
            <div className={styles["add-to-cart-title"]}>В корзину</div>
            <div className={styles["add-to-cart-icon"]}>
              <MdAddShoppingCart className={styles["shopping-cart-icon"]} />
              {addedCount > 0 && (
                <i className={styles["product-items__count"]}>{addedCount}</i>
              )}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
