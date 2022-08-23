import React from "react";
import "./rent-items.css";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../button";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";

export const RentItems = ({ rent }) => {
  const dispatch = useDispatch();
  // const items = useSelector((state) => state.cart.itemsInCart);
  // const isItemInCart = items.some((item) => item.id === rent.id);

  const handelClickWeekday = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(rent));
  };

  return (
    <div className="rent-items">
      <div className="rent-items_details">
        <img className="rent-items_img " src={rent.img} />
        <span className="rent-items_title">{rent.title}</span>
        <p>{rent.desc}</p>
        {/* <p className="rent-items-day">{rent.day}</p> */}
        <b className="rent-items-price">{rent.price}₾-сутки</b>
        <span className="rent-items_button">
          <Button onClick={handelClickWeekday} type="primary">
            {rent.day}
            <MdAddShoppingCart className="md" size={"25px"} />
          </Button>
        </span>
      </div>
    </div>
  );
};
