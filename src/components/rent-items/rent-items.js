import React from "react";
import "./rent-items.css";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../button";

export const RentItems = ({ rent }) => {
  return (
    <div className="rent-items">
      <div className="rent-items_details">
        <img className="rent-items_img " src={rent.img} />
        <span lassName="rent-items_title">{rent.title}</span>
        <p>{rent.desc}</p>
        <p className="rent-items-day">{rent.day}</p>
        <b className="rent-items-price">{rent.price}₾</b>
        <b>/{rent.price2}₾</b>
        <div className="add-to-cart">
          {/* <MdAddShoppingCart size={"25px"} /> */}
          <Button />
        </div>
      </div>
    </div>
  );
};
