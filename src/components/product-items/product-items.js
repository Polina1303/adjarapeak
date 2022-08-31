import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductCover } from "../../components/product-cover";
import "./product-items.css";
import { setCurrentProduct } from "../../redux/product/reducer";
import { Buy } from "../buy/buy";

export const ProductItems = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelClickImg = () => {
    dispatch(setCurrentProduct(product));
    navigate(`/app/${product.title}`);
  };

  return (
    <div className="product-items" onClick={handelClickImg}>
      <ProductCover img={product.img} />
      <div className="product-items_details">
        {/* <img className="product-items_img" src={product.img} /> */}
        <span className="product-items_title">{product.title}</span>
        <p>{product.desc}</p>
        <Buy product={product} />
      </div>
    </div>
  );
};
