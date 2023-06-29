import { ProductItems } from "../../components/product-items";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { PRODUCT } from "../../components/product-range/product";

export const SleepingbagPage = () => {
  const history = useNavigate();
  const sleepingbag = PRODUCT.filter((item) => item.category === "sleepingbag");
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
            СПАЛЬНЫЕ МЕШКИ
          </div>
          <div className="home-page-product">
            {sleepingbag.map((product) => (
              <ProductItems key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
