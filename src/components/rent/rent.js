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

  const cartItem = useSelector((state) =>
    state.cart.itemsInCart.find((item) => item.id === rent.id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  return (
    <div>
      <b className="rent-items-price">{rent.price}₾-сутки</b>
      <span className="rent-items__button">
        <Button onClick={handelClickWeekday} type="primary">
          {rent.day}
          <MdAddShoppingCart className="md" size={"25px"} />
          {addedCount > 0 && <i className="rent-items__count">{addedCount}</i>}
        </Button>
      </span>
    </div>
  );
};
