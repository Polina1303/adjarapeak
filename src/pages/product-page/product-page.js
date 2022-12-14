import React from "react";
import { useSelector } from "react-redux";
import { Buy } from "../../components/buy/buy";
import "./product-page.css";

export const ProductPage = () => {
  const product = useSelector((state) => state.products.currentProduct);
  const column = useSelector((state) => state.products.currentProduct.column);

  if (!product) return null;

  return (
    <div className="product-page">
      <h1 className="product-page_title">{product.title}</h1>
      <div className="product-page_content">
        <div className="product-page_left">
          <p>{product.desc}</p>
          <p>{product.shortly}</p>
          <img
            className="product-page_img"
            src={process.env.PUBLIC_URL + "/img/" + product.img}
            alt={product.title}
          ></img>
        </div>

        <div className="product-page_right">
          <ul className="column">
            {column.map((item) => (
              <li className="column_list" key={item}>
                {item}
              </li>
            ))}
          </ul>

          <div className="product-page_price_buy">
            <div className="product-page_day">{product.day}</div>
            <div>
              <Buy product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
