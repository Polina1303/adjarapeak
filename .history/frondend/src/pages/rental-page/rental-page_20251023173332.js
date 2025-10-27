import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const RentalPage = () => {
  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <div>
        <Link to="/rent_sky">ПРОКАТ ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ</Link>
        <Link to="/rent">ПРОКАТ ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ</Link>
      </div>
    </>
  );
};
