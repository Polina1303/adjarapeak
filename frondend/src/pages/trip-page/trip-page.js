import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./trip-page.css";

export const TripPage = () => {
  const history = useNavigate();

  return (
    <div className="back-button-cover">
      <button className="back-button" onClick={() => history(-1)}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>
      <h1>ГОДЕРДЗИ С ADJARA PEAK</h1>
      <div class="point">
        <h2>🎿Что включено?</h2>
        <ul>
          <li>
            Помощь в подборе снаряжения и одежды (забронируем все в чт или пт)
          </li>
          <li>Загрузка/разгрузка вашего и прокатного снаряжения</li>
          <li>
            Трансфер в две стороны
            <br />
            (едем только с опытными водителями, в которых уверены на 100% и
            которые работают с нами второй год. Авто Mitsubishi Delica, 6 и 7
            пассажирских мест)
          </li>
          <li>Вода и мандарины в дороге</li>
          <li>И конечно же, впечатляющие природные панорамы!</li>
        </ul>

        <div class="section">
          <h2>🎿Детали и тайминг</h2>
          <ul>
            <li>
              В 7:00 сбор у проката, 10:00-11:00 прибытие, прямо к подъемникам.
            </li>
            <li>Каталка до 16:00-16:30 (17:00 выезд обратно)</li>
            <li>20:00-21:00 возвращение в Батуми</li>
          </ul>
        </div>
        <div class="section">
          <h2>🎿Стоимость - 130 лари. Выезды каждую субботу! </h2>
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
