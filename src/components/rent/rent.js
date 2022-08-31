import React from "react";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../button";
import "./rent.css";

export const Rent = ({ rent }) => {
  console.log("day", rent.day);
  const dispatch = useDispatch();

  const handelClickWeekday = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(rent));
  };
  return (
    <div>
      <b className="rent-items-price">{rent.price}₾-сутки</b>
      <span className="rent-items_button">
        <Button onClick={handelClickWeekday} type="primary">
          {rent.day}
          <MdAddShoppingCart className="md" size={"25px"} />
        </Button>
      </span>
    </div>
  );
};
