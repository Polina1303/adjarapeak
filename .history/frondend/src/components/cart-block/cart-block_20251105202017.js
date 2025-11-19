import { useCallback, useEffect, useState, useMemo } from "react";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Button } from "../button";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from "../utils";
import styles from "./cart-block.module.css";

const CART_KEY = "productInCart";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  const items = useSelector((state) => state.cart.itemsInCart);

  const router = useRouter();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    router.push("/order");
  }, [router]);

  const totalPrice = calcTotalPrice(items);
  const totalCount = items?.reduce((acc, item) => acc + item.count, 0) || 0;

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [items]);

  const localCartData = useMemo(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    }
    return [];
  }, []);

  // useEffect(() => {
  //   if (items.length === 0 && localCartData.length > 0) {
  //     localStorage.setItem(CART_KEY, JSON.stringify([]));
  //   }
  // }, [items, localCartData]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    }
  }, [items]);

  return (
    <div className="cart-block">
      <Button
        className="cart-btn"
        variant="ghost"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      >
        <BsCart3 size={22} className="cart-icon" />
        {totalCount > 0 && <ItemsInCart quantity={totalCount} />}
        {totalPrice > 0 && <span className="cart-price">{totalPrice}₾</span>}
      </Button>

      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
