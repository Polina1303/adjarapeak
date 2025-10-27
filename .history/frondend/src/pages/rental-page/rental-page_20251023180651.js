import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "/rental-page.css";
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
        <Link to="/rent_sky">ПРОКАТ ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ</Link>
        <Link to="/rent">ПРОКАТ ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ</Link>
      </div>
    </>
  );
};
