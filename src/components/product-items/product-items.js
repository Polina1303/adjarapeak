import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentProduct } from "../../redux/product/reducer";
import { Buy } from "../buy/buy";
import "./product-items.css";

export const ProductItems = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelClickImg = () => {
    dispatch(setCurrentProduct(product));
    navigate(`/app/${product.title}`);
  };
  return (
    <div className="product-items" >
      <div className="product-items_details">
        <img onClick={handelClickImg}
          className="product-items_img"
          src={process.env.PUBLIC_URL + "/img/" + product.img}
          alt={product.title}
        />
        <span className="product-items_title">{product.title}</span>
        <p>{product.desc}</p>
        <Buy product={product} />
      </div>
    </div>
  );
};
