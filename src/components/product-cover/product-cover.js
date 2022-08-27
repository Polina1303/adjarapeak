import React from "react";
import "./product-cover.css";

export const ProductCover = ({ img = "" }) => {
  console.log(img);
  return (
    <div className="product-cover" style={{ backgroundImage: `url(${img})` }} />
  );
};

//  style={{ backgroundImage: `url(${img})` }}
