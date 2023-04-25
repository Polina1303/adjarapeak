import rules from "./rules.png";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
export const RulesPage = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/adjarapeak");
  }, [navigate]);
  return (
    <>
      <div>
        <button className="back-button" onClick={() => handleClick()}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>

      <img src={rules} alt="Правила проката" />
    </>
  );
};
