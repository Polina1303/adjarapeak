// "use client";
// import { useCallback, useEffect, useState } from "react";
// import { BsCart3 } from "react-icons/bs";
// import { useSelector, useDispatch } from "react-redux";
// import { useRouter } from "next/router";
// import { Button } from "../button";
// import { CartMenu } from "../cart-menu";
// import { ItemsInCart } from "../items-in-cart";
// import { calcTotalPrice } from "../utils";
// import { hydrateCart } from "../../redux/cart/reducer";

// import styles from "./cart-block.module.css";

// const CART_KEY = "productInCart";

// export const CartBlock = () => {
//   const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const items = useSelector((state) => state.cart.itemsInCart);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setMounted(true);
//       const storedItems = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
//       if (storedItems.length > 0) {
//         dispatch(hydrateCart(storedItems));
//       }
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (mounted && typeof window !== "undefined") {
//       localStorage.setItem(CART_KEY, JSON.stringify(items));
//     }
//   }, [items, mounted]);

//   const handleClick = useCallback(() => {
//     setIsCartMenuVisible(false);
//     router.push("/order");
//   }, [router]);

//   const totalPrice = calcTotalPrice(items);
//   const totalCount = items?.reduce((acc, item) => acc + item.count, 0) || 0;

//   if (!mounted) return null;

//   return (
//     <div className={styles.cartBlock}>
//       <Button
//         className={styles.cartBtn}
//         onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
//       >
//         <BsCart3 size={22} className={styles.cartIcon} />
//         {totalCount > 0 && <ItemsInCart quantity={totalCount} />}
//         {totalPrice > 0 && (
//           <span className={styles.cartPrice}>{totalPrice}₾</span>
//         )}
//       </Button>

//       {/* {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />} */}
//     </div>
//   );
// };

"use client";
import { useCallback, useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from "../utils";
import { hydrateCart } from "../../redux/cart/reducer";
import { Button } from "../button";
import { IconButton, Drawer, Box, Toolbar, Typography } from "@mui/material";

import styles from "./cart-block.module.css";

const CART_KEY = "productInCart";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const items = useSelector((state) => state.cart.itemsInCart);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);
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

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    router.push("/order");
  }, [router]);

  const totalPrice = calcTotalPrice(items);
  const totalCount = items?.reduce((acc, item) => acc + item.count, 0) || 0;

  if (!mounted) return null;

  return (
    <>
      <div className={styles.cartBlock}>
        <Button
          className={styles.cartBtn}
          onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
        >
          <BsCart3 size={22} className={styles.cartIcon} />
          {totalCount > 0 && <ItemsInCart quantity={totalCount} />}
          {totalPrice > 0 && (
            <span className={styles.cartPrice}>{totalPrice}₾</span>
          )}
        </Button>
      </div>

      <Drawer
        anchor="right"
        open={isCartMenuVisible}
        onClose={() => setIsCartMenuVisible(false)}
        PaperProps={{
          sx: {
            width: {
              xs: "100%",
              sm: "100%",
              md: "50%",
            },
            maxWidth: { xs: "100%", md: "600px" },
            padding: 2,
            height: { xs: "60%", sm: "90%", md: "57%" },
            boxSizing: "border-box",
          },
        }}
        ModalProps={{
          BackdropProps: { style: { backgroundColor: "rgba(0,0,0,0.5)" } },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              color: " #de682d",
              fontWeight: "bold",
              letterSpacing: 1,
              textAlign: "center",
              flexGrow: 1,
              fontFamily: "RoadRadio-Thin, sans-serif",
            }}
          >
            КОРЗИНА
          </Typography>
          <IconButton onClick={() => setIsCartMenuVisible(false)}>✕</IconButton>
        </Toolbar>

        <CartMenu
          items={items}
          onClick={handleClick}
          closeMenu={() => setIsCartMenuVisible(false)}
        />
      </Drawer>
    </>
  );
};
/**{
          sx: { width: "50%", maxWidth: "50%", padding: 2, height: "70%" },
        } */
