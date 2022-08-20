import React from "react";
import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/">
          <img src={"./img/adjara.jpg"} alt="adjara peak" width={"130px"} />
        </Link>
      </div>
      <div className="cart">
        <CartBlock />
      </div>
    </div>
  );
};
