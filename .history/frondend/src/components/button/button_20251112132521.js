import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({ onClick, type, children, size = "s" }) => {
  const btnClass = classNames({
    btn: true,
    "btn-secondary": type === "secondary",
    "btn-primary": type === "primary",
    "btn-small": type === "s",
    "btn-medium": type === "m",
  });
  return (
    <button className={styles.btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
