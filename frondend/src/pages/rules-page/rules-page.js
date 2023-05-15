import rules from "./rules.png";
import { useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
export const RulesPage = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <div>
        <button className="back-button" onClick={() => handleClick()}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      {inView ? (
        <img src={rules} ref={ref} alt="Правила проката" loading="lazy" />
      ) : (
        <div></div>
      )}
    </>
  );
};
