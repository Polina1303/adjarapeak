import { ProductItems } from "../../components/product-items";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { PRODUCT } from "../../components/product-range/product";

export const KnifePage = () => {
  const history = useNavigate();
  const knife = PRODUCT.filter((item) => item.category === "knife");

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => history(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <div className="home-page__container">
        <div>
          <div className="title" id="home-page-buy">
            НОЖИ И ИНСТРУМЕНТ
          </div>
          <div className="home-page-product">
            {knife.map((product) => (
              <ProductItems key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
