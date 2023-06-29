import { ProductItems } from "../../components/product-items";
import { PRODUCT } from "../../components/product-range/product";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./sale-page.css";

export const SalePage = () => {
  const history = useNavigate();
  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => history(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <div className="home-page__container-product">
        <div>
          <div className="title" id="home-page-buy">
            ПРОДАЖА СНАРЯЖЕНИЯ
          </div>
          <div className="home-page-product">
            {PRODUCT.map((product) => (
              <ProductItems key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
