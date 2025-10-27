import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Typography } from "@mui/material";

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
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        fontWeight="bold"
        textAlign="left"
        fontFamily="RoadRadio"
      >
        {languages === "RU" ? "Условия доставки" : "Delivery terms"}
      </Typography>
    </>
  );
};
