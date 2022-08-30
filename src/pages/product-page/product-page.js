import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Youtube from "react-youtube";

import { Button } from "../../components/button";
import { ProductCover } from "../../components/product-cover";
import { MdAddShoppingCart } from "react-icons/md";

import "./product-page.css";
import { setItemInCart } from "../../redux/cart/reducer";
import { Buy } from "../../components/buy/buy";

export const ProductPage = () => {
  const product = useSelector((state) => state.products.currentProduct);
  console.log("pppp", product);
  const column = useSelector((state) => state.products.currentProduct.column);
  console.log(column);
  if (!product) return null;

  return (
    <div className="product-page">
      <h1 className="product-page_title">{product.title}</h1>
      <div className="product-page_content">{product.desc}</div>
      <div className="product-page_left">{/* <img/> */}</div>
      <div className="product-page_right">
        <ProductCover />
        {/* надо проверку и сделать RentCover */}
        <p>{product.shortly}</p>
        <ul className="column">
          {column.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="product-page_price_buy"></div>
      <Buy product={product} />
    </div>
  );
};
