import React from "react";
import "./product-items.css";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../../components/button";

export const ProductItems = ({ product }) => {
  return (
    <div className="product-items">
      <div className="product-items_details">
        <img className="product-items_img" src={product.img} />
        <span lassName="product-items_title">{product.title}</span>
        <p>{product.desc}</p>

        <b className="product-items_price">{product.price}₾</b>
        <div className="add-to-cart">
          <Button onClick={() => null} type="primary">
            <MdAddShoppingCart size={"25px"} />
          </Button>
        </div>
      </div>
    </div>
  );
};
