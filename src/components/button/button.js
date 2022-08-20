import classNames from "classnames";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import "./button.css";

export const Button = ({ onClick, type, children, size = "s" }) => {
  const btnClass = classNames({
    btn: true,
    "btn-secondary": type === "secondary",
    "btn-primary": type === "primary",
    "btn-small": type === "s",
    "btn-medium": type === "m",
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
