import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./rental-page.module.css";
export const RentalPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles["back-button-cover"]}>
        <button className={styles["back-button"]} onClick={() => router.back()}>
          <IoIosArrowBack size={25} /> Назад
        </button>
      </div>
      <div className={styles["nav"]}>
        <Link href="/rent_sky">ПРОКАТ ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ</Link>
        <Link href="/rent">ПРОКАТ ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ</Link>
      </div>
    </>
  );
};
