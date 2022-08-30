import React from "react";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../../components/button";

export const Buy = ({ product }) => {
  const dispatch = useDispatch();
  const handelClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(product));
  };
  return (
    <div>
      <b className="product-items_price">{product.price}₾</b>
      <div className="add-to-cart">
        <Button onClick={handelClick} type="primary">
          <MdAddShoppingCart size={"25px"} />
        </Button>
      </div>
    </div>
  );
};
