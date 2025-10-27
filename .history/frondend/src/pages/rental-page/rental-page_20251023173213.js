import { Link } from "react-router-dom";
export const RentalPage = () => {
  return (
    <div>
      <Link to="/rent_sky">
        <p style={{ color: "black" }}>ПРОКАТ ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ</p>
      </Link>
      <Link to="/rent">ПРОКАТ ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ</Link>
    </div>
  );
};
