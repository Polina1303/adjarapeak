import { ProductItems } from "../../components/product-items";
import { RentItems } from "../../components/rent-items";
import { PRODUCT } from "../../components/product-range/product";
import { RENT } from "../../components/product-range/rent";
import "./home-page.css";

export const HomePage = () => {
  return (
    <div className="home-page__container">
      <div className="home-page"></div>
      <div className="title">ПРОДАЖА</div>
      <div className="home-page-product">
        {PRODUCT.map((product) => (
          <ProductItems key={product.id} product={product} />
        ))}
      </div>
      <div className="title">АРЕНДА</div>
      <div className="home-page-product">
        {RENT.map((rent) => (
          <RentItems key={rent.id} rent={rent} />
        ))}
      </div>
    </div>
  );
};
