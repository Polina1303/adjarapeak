import { RentItems } from "../../components/rent-items";
import { useNavigate } from "react-router-dom";
import { RENT } from "../../components/product-range/rent";
import { IoIosArrowBack } from "react-icons/io";

export const RentPage = () => {
  const history = useNavigate();
  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => history(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <div className="home-page__container">
        <div>
          <div className="title" id="home-page-rent">
            ПРОКАТ СНАРЯЖЕНИЯ
          </div>
          <div className="home-page-product">
            {RENT.map((rent) => (
              <RentItems key={rent.id} rent={rent} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
