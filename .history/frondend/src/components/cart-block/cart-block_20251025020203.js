import { useCallback, useEffect, useState, useMemo } from "react";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from "../utils";
import "./cart-block.css";

const CART_KEY = "productInCart";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

  const totalPrice = calcTotalPrice(items);
  const totalCount = items
    ? items.reduce((acc, item) => acc + item.count, 0)
    : 0;

  const hasItem = totalCount > 0;

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [items]);

  const localCartData = useMemo(() => {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  }, []);

  useEffect(() => {
    if (items.length === 0 && localCartData.length > 0) {
      localStorage.setItem(CART_KEY, JSON.stringify([]));
    }
  }, [items, localCartData]);

  return (
    <div className={`${hasItem ? "cart-block" : ""}`}>
      <ItemsInCart quantity={totalCount} />
      <Button>
        <BsCart3
          size={"25"}
          className="cart-icon"
          onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
        />
      </Button>
      {totalPrice > 0 ? (
        <div className="cart-price">{totalPrice}.00₾</div>
      ) : (
        <div className="cart-price"></div>
      )}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
