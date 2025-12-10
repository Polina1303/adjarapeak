import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({ onClick, type, children, size = "s" }) => {
  const btnClass = classNames(styles.btn, {
    [styles["btn-secondary"]]: type === "secondary",
    [styles["btn-primary"]]: type === "primary",
    [styles["btn-small"]]: size === "s",
    [styles["btn-medium"]]: size === "m",
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
