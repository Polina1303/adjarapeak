import { useDispatch } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { deletItemFromCart } from "../../redux/cart/reducer";
import "./order-item.css";
import { Button } from "../button";

export const OrderItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletItemFromCart(item.id));
  };

  return (
    <div className="order-item">
      <div className="order-item__cover">
        <img
          className="order-items__img"
          src={process.env.PUBLIC_URL + "/img/" + item.img}
          alt={item.title}
        />
      </div>
      <div className="order-item__title">{item.title}</div>
      <div className="order-item__price">
        <span>{item.price * item.count}₾</span>
        <Button>
          <TiDeleteOutline
            size={35}
            className="order-item__delete"
            onClick={handleClick}
          />
        </Button>
      </div>
    </div>
  );
};
