import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../../components/button";
import { ProductCover } from "../../components/product-cover";
import { setItemInCart } from "../../redux/cart/reducer";
import "./product-items.css";
import { setCurrentProduct } from "../../redux/product/reducer";

export const ProductItems = ({ product }) => {
  // console.log(product);
  // console.log("imgp", product.img);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(product));
  };

  const handelClickImg = () => {
    dispatch(setCurrentProduct(product));
    navigate(`/app/${product.title}`);
  };

  return (
    <div className="product-items" onClick={handelClickImg}>
      <ProductCover img={product.img} />

      <div className="product-items_details">
        <img className="product-items_img" src={product.img} />
        <span className="product-items_title">{product.title}</span>
        <p>{product.desc}</p>
        <b className="product-items_price">{product.price}₾</b>
        <div className="add-to-cart">
          <Button onClick={handelClick} type="primary">
            <MdAddShoppingCart size={"25px"} />
          </Button>
        </div>
      </div>
    </div>
  );
};
