import React from "react";
import "./trip-page.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import photo1 from "./IMG_8516.JPG";
import photo2 from "./IMG_8526.JPG";
import photo3 from "./IMG_8178.jpg";

export const TripPage = () => {
  const history = useNavigate();
  const navigate = useNavigate();

  const handleClickOneDayTrip = () => {
    navigate("/one_day_trip");
  };
  const handleClickTwoDayTrip = () => {
    navigate("/two_day_trip");
  };
  const handleClickTransfer = () => {
    navigate("/transfer");
  };
  return (
    <div className="back-button-cover">
      <button className="back-button" onClick={() => history(-1)}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>
      <div className="container">
        {/* Первый блок */}
        <div className="tour-option">
          <img
            onClick={handleClickOneDayTrip}
            src={photo1}
            alt="Однодневный выезд"
            className="tour-image-vertical"
          />
          <p className="tour-text">
            Однодневный выезд в Гадердзи (каждую субботу)
          </p>
          <p
            onClick={handleClickOneDayTrip}
            style={{ marginTop: 10 }}
            className="routes-item-page"
          >
            Узнать подробнее
          </p>
        </div>

        {/* Второй блок */}
        <div className="tour-option">
          <img
            onClick={handleClickTwoDayTrip}
            src={photo2}
            alt="Двудневный выезд"
            className="tour-image-vertical"
          />
          <p className="tour-text">
            Двудневный выезд в Гадердзи (каждую субботу-воскресенье)
          </p>
          <p
            onClick={handleClickTwoDayTrip}
            style={{ marginTop: 10 }}
            className="routes-item-page"
          >
            Узнать подробнее
          </p>
        </div>
        <div className="tour-option">
          <img
            onClick={handleClickTransfer}
            src={photo3}
            alt="Двудневный выезд"
            className="tour-image-vertical"
          />
          <p className="tour-text">
            Предоставляем трансфер для поездок в удобное время!
          </p>

          <p
            style={{ marginTop: 10 }}
            onClick={handleClickTransfer}
            className="routes-item-page"
          >
            Узнать подробнее
          </p>
        </div>
      </div>
    </div>
  );
};
