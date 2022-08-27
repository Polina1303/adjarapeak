import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../../components/button";
import { ProductCover } from "../../components/product-cover";
import { MdAddShoppingCart } from "react-icons/md";

import "./product-page.css";
import { setItemInCart } from "../../redux/cart/reducer";

export const ProductPage = () => {
  const product = useSelector((state) => state.products.currentProduct);
  console.log("pppp", product);

  if (product) return null;

  //   const dispatch = useDispatch();

  //   const handelClick = (e) => {
  //     e.stopPropagation();
  //     dispatch(setItemInCart(product));
  //   };

  return (
    <div className="product-page">
      <h1 className="product-page_title">{product.title}</h1>
      <div className="product-page_content">{product.desc}</div>
      <div className="product-page_left">
        <iframe
          width="90%"
          height="400px"
          src={product.video}
          title="Youtube Video Player"
        ></iframe>
        {/* если не будет видео ????? */}
      </div>
      <div className="product-page_right">
        <ProductCover />
        {/* <p>{product.all}</p>  надо добавить */}
      </div>
      {/* надо проверку и сделать RentCover */}
      <div className="product-page_price_buy"></div>
      <p>{product.price}</p>
      {/* <Button onClick={handelClick} type="primary">
        <MdAddShoppingCart size={"25px"} />
      </Button> */}
    </div>
  );
};
