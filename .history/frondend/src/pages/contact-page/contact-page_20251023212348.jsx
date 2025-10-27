import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Typography } from "@mui/material";

export const ContactPage = () => {
  const navigate = useNavigate();
  const languages = useSelector((state) => state.languages.currentLanguage);
  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
        <Typography></Typography>
      </div>
    </>
  );
};
