import { Link } from "react-router-dom";
export const RentalPage = () => {
  return (
    <div>
      <Link to="/rent_sky">ПРОКАТ ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ</Link>
      <Link to="/rent">ПРОКАТ ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ</Link>
    </div>
  );
};
