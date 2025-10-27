import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Typography, Container } from "@mui/material";
import "./contact-page.css";

export const ContactPage = () => {
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

      <Container maxWidth="lg">
        <Typography variant="h2" className="contact-title">
          {languages === "RU" ? "Контакты" : "Contacts"}
        </Typography>

        <div className="contact-info">
          <Typography variant="h4" className="contact-title">
            {languages === "RU" ? "Телефоны" : "Phones"}
          </Typography>
          <p>+995 511 147 586</p>
          <p>+995 551 132 803</p>
        </div>
      </Container>
    </>
  );
};
