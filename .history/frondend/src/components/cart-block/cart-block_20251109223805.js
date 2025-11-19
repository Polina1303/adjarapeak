import { useCallback, useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Button } from "../button";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from "../utils";
import { hydrateCart } from "../../redux/cart/reducer";
import { useMemo } from "react";

import styles from "./cart-block.module.css";

const CART_KEY = "productInCart";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.itemsInCart);

  const router = useRouter();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    router.push("/order");
  }, [router]);

  const totalPrice = calcTotalPrice(items);
  const totalCount = items?.reduce((acc, item) => acc + item.count, 0) || 0;

  useEffect(() => {
    setMounted(true);
    // Загружаем данные из localStorage после монтирования
    if (typeof window !== "undefined") {
      const storedItems = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      if (storedItems.length > 0) {
        dispatch(hydrateCart(storedItems));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    }
  }, [items, mounted]);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      const handleBeforeUnload = () => {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
      };

      window.addEventListener("beforeunload", handleBeforeUnload);
      return () =>
        window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }, [items, mounted]);

  const localCartData = useMemo(() => {
    if (mounted && typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    }
    return [];
  }, [mounted]);

  // useEffect(() => {
  //   if (items.length === 0 && localCartData.length > 0) {
  //     localStorage.setItem(CART_KEY, JSON.stringify([]));
  //   }
  // }, [items, localCartData]);

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
