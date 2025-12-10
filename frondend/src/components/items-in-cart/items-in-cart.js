import styles from "./items-in-cart.module.css";

export const ItemsInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? (
    <div className={styles["items-in-cart"]}>{quantity}</div>
  ) : null;
};
