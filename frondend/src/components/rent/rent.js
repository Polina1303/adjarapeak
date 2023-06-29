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
      <span className="rent-day"> {rent.day}</span>
      <div className="add-to-cart-cover">
        <div className="add-to-cart">
          <b className="rent-items-price">{rent.price}₾-сутки</b>
          <span className="rent-items__button">
            <Button type="primary">
              <MdAddShoppingCart className="shopping-cart-icon" />
              {addedCount > 0 && (
                <i className="product-items__count">{addedCount}</i>
              )}
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};
