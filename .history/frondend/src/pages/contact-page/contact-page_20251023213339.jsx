import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Typography, Container } from "@mui/material";
import "./contact-page.css";

export const ContactPage = () => {
  const navigate = useNavigate();
  const languages = useSelector((state) => state.languages.currentLanguages);

  return (
    <div className="contact-page">
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoIosArrowBack size={"25px"} />
          {languages === "RU" ? "Назад" : "Back"}
        </button>
      </div>

      <Container maxWidth="lg">
        <Typography variant="h1" className="contact-title">
          {languages === "RU" ? "Контакты" : "Contacts"}
        </Typography>

        <div className="contact-content">
          <div className="contact-info">
            <Typography variant="h3" className="contact-subtitle">
              {languages === "RU" ? "Наш магазин" : "Our Store"}
            </Typography>

            <div className="contact-details">
              <div className="contact-item">
                <strong>📍 {languages === "RU" ? "Адрес" : "Address"}:</strong>
                <p>Batumi, st. Gen. Aslan Abashidze, 19</p>
                <p className="work-hours">
                  (11:00-20:00) {languages === "RU" ? "без выходных" : "daily"}
                </p>
              </div>

              <div className="contact-item">
                <strong>
                  📞 {languages === "RU" ? "Телефоны" : "Phones"}:
                </strong>
                <p>+995 511 147 586</p>
                <p>+995 551 132 803</p>
              </div>

              <div className="contact-item">
                <strong>
                  🌐 {languages === "RU" ? "Соцсети" : "Social Media"}:
                </strong>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                </div>
              </div>
            </div>

            {/* Кнопки отзывов */}
            <div className="review-buttons">
              <Typography variant="h4" className="review-title">
                {languages === "RU" ? "Оставьте отзыв" : "Leave a Review"}
              </Typography>

              <div className="review-links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-btn google-review"
                >
                  Google {languages === "RU" ? "Отзывы" : "Reviews"}
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-btn yandex-review"
                >
                  📝 Яндекс {languages === "RU" ? "Отзывы" : "Reviews"}
                </a>
              </div>
            </div>
          </div>
          <div className="map-container">
            <Typography variant="h3" className="map-title">
              {languages === "RU" ? "Мы на карте" : "Find Us on Map"}
            </Typography>
            <div className="map-placeholder">
              <p>
                {languages === "RU" ? "Карта будет здесь" : "Map will be here"}
              </p>
              <p className="map-note">
                {languages === "RU"
                  ? "Используется та же карта, что и в футере"
                  : "Same map as in footer"}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
