import React from "react";
import "./product-cover.css";

export const ProductCover = ({ img = "" }) => {
  console.log(img);
  return (
    <div
      className="product-cover"
      style={{
        backgroundImage: `url("https://btrace.ru/upload/iblock/704/aoos9jj19er147a501vy1b004ofcyuyc.png")`,
        width: "20px",
      }}
    />
  );
};

//  style={{ backgroundImage: `url(${img})` }}
