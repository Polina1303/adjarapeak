import { useCallback, useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from "../utils";
import "./cart-block.css";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

  const totalPrice = calcTotalPrice(items);
  const totalCount = items.reduce((acc, item) => acc + item.count, 0);

  useEffect(() => {
    localStorage.setItem("productInCart", JSON.stringify(items));
  });

  return (
    <div className="cart-block">
      <ItemsInCart quantity={totalCount} />
      <Button>
        <BsCart3
          size={"25"}
          className="cart-icon"
          onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
        />
      </Button>
      {totalPrice > 0 ? (
        <div className="cart-price">{totalPrice}₾</div>
      ) : (
        <div className="cart-price"></div>
      )}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
