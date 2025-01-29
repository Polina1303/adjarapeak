import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import "./trip-page-one-day.css";

import { Navigation, Pagination } from "swiper/modules";

import { useInView } from "react-intersection-observer";

export const Transfer = () => {
  const history = useNavigate();

  return (
    <div className="back-button-cover">
      <button className="back-button" onClick={() => history(-1)}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>
      <h1>Трансфер</h1>

      <div class="point">
        <ul>
          <li>
            Если вы предпочитаете путешествовать самостоятельно, без
            сопровождения и в удобное для вас время, мы с радостью предоставим
            услугу трансфера!
          </li>
          <li>
            Комфортабельные Mitsubishi Delica на 7 мест с опытным водителем –
            идеальный выбор для поездок. Все автомобили оснащены багажником на
            крыше, а водители, хорошо знакомые с маршрутом, гарантируют
            надежность и безопасность в пути.
          </li>
        </ul>

        <div class="section">
          <h2>🎿Стоимость расчитываеться индивидуально</h2>

          <a
            href="https://t.me/shpaksn"
            target="_blank"
            rel="noreferrer"
            class="register-button"
          >
            Записаться
          </a>
        </div>
      </div>
    </div>
  );
};
