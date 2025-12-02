import { useDispatch } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { deletItemFromCart } from "../../redux/cart/reducer";
import { Button } from "../button";
import styles from "./order-item.module.css";

export const OrderItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletItemFromCart(item.id));
  };

  return (
    <div className={styles["order-item"]}>
      <div className={styles["order-item__cover"]}>
        <img
          className={styles["order-items__img"]}
          src={"/img/" + item.img}
          alt={item.title}
        />
      </div>
      <div className={styles["order-item__title"]}>{item.title}</div>
      <div className={styles["order-item__title"]}>{item.count}</div>
      <div className={styles["order-item__price"]}>
        <span>{item.price * item.count}.00₾</span>
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
