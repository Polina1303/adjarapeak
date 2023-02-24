import { useSelector } from "react-redux";
import { Buy } from "../../components/buy/buy";
import "./product-page.css";

export const ProductPage = () => {
  const product = useSelector((state) => state.products.currentProduct);
  const column = useSelector((state) => state.products.currentProduct.column);

  if (!product) return null;

  return (
    <div className="product-page">
      <h1 className="product-page__title">{product.title}</h1>
      <div className="product-page__content">
        <div className="product-page__left">
          <p>{product.desc}</p>
          <p>{product.shortly}</p>
          <img
            className="product-page__img"
            src={process.env.PUBLIC_URL + "/img/" + product.img}
            alt={product.title}
          ></img>
        </div>

        <div className="product-page__right">
          <ul className="column">
            {column.map((item) => (
              <li className="column__list" key={item}>
                {item}
              </li>
            ))}
          </ul>

          <div className="product-page__price__buy">
            <div className="product-page__day">{product.day}</div>
            <div>
              <Buy product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
