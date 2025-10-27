import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const DeliveryTerms = () => {
  const navigate = useNavigate();
  const languages = useSelector((state) => state.languages.currentLanguages);

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={"25px"} />
          {languages === "RU" ? "Назад" : "Back"}
        </button>
      </div>
    </>
  );
};
