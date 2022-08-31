// import React from "react";
// import { useSelector } from "react-redux";
// import "./rent-page.css";
// import { Rent } from "../../components/rent/rent";

// export const RentPage = ({ rent }) => {
//   const product = useSelector((state) => state.products.currentProduct);
//   const column = useSelector((state) => state.products.currentProduct.column);
//   if (!product) return null;

//   return (
//     <div className="product-page">
//       <h1 className="product-page_title">{product.title}</h1>
//       <div className="product-page_content">{product.desc}</div>
//       <div className="product-page_left">
//         {/* RentCover это для карттинок */}
//         <p>{product.shortly}</p>
//       </div>
//       <div className="product-page_right">
//         <ul className="column">
//           {column.map((item) => (
//             <li key={item}>{item}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="product-page_price_buy"></div>
//       <Rent product={product} />
//       {product.day}
//     </div>
//   );
// };
