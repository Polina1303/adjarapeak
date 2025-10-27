import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const RentalPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <div className="nav">
        <Link to="/rent_sky">
          <p>ПРОКАТ ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ</p>
        </Link>
        <Link to="/rent">
          <p>ПРОКАТ ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ</p>
        </Link>
      </div>
    </>
  );
};
