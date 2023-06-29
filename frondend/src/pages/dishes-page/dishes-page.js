import { ProductItems } from "../../components/product-items";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { PRODUCT } from "../../components/product-range/product";

export const DishesPage = () => {
  const history = useNavigate();
  const dishes = PRODUCT.filter((item) => item.category === "dishes");

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
            ПОСУДА
          </div>
          <div className="home-page-product">
            {dishes.map((product) => (
              <ProductItems key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
