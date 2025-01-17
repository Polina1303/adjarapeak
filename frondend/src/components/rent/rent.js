import { useDispatch, useSelector } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../button";
import "./rent.css";

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
    <div className="add-to-cart__rent" onClick={handelClickWeekday}>
      <b className="product-items__price">{rent.price}.00₾-сутки</b>

      <div className="add-to-cart-cover">
        <div className="add-to-cart">
          <Button type="primary">
            <div className={`add-to-cart-title`}>В корзину</div>
            <div className="add-to-cart-icon">
              <MdAddShoppingCart className="shopping-cart-icon" />
              {addedCount > 0 && (
                <i className="product-items__count">{addedCount}</i>
              )}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
