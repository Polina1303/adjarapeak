import React from "react";
import "./rent-items.css";
import { Rent } from "../rent/rent";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentProduct } from "../../redux/product/reducer";

export const RentItems = ({ rent }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelClickImg = () => {
    dispatch(setCurrentProduct(rent));
    navigate(`/app/${rent.title}`);
  };
  return (
    <div className="rent-items" onClick={handelClickImg}>
      <div className="rent-items_details">
        <img className="rent-items_img " src={rent.img} />
        <span className="rent-items_title">{rent.title}</span>
        <p>{rent.desc}</p>
        <Rent rent={rent} />
      </div>
    </div>
  );
};
