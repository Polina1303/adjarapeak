import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./trip-page-one-day.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import photo1 from "./imagegoderdi/IMG_4170.jpg";
import photo2 from "./imagegoderdi/IMG_4187.jpg";
import photo3 from "./imagegoderdi/IMG_4198.jpg";
import photo4 from "./imagegoderdi/IMG_6602.jpg";
import photo5 from "./imagegoderdi/IMG_6990.jpg";
import photo6 from "./imagegoderdi/IMG_7019.jpg";
import photo7 from "./imagegoderdi/IMG_7021.jpg";
import photo8 from "./imagegoderdi/IMG_7054.jpg";
import photo9 from "./imagegoderdi/IMG_7064.JPG";
import photo10 from "./imagegoderdi/IMG_8528.JPG";
import { useInView } from "react-intersection-observer";

const photos = [
  photo5,
  photo4,
  photo6,
  photo3,
  photo9,
  photo8,
  photo7,
  photo1,
  photo2,
  photo10,
];
export const TripPageOneDay = () => {
  const history = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div className="back-button-cover">
      <button className="back-button" onClick={() => history(-1)}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>
      <h1>ГОДЕРДЗИ С ADJARA PEAK</h1>
      <h2>Однодневный выезд</h2>

      <div className="point">
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={3} // По умолчанию показываем 3 фото
            breakpoints={{
              // Адаптивные настройки
              0: {
                // Для маленьких экранов
                slidesPerView: 1,
              },
              768: {
                // Для планшетов
                slidesPerView: 2,
              },
              1024: {
                // Для больших экранов
                slidesPerView: 3,
              },
            }}
            style={{ width: "100%" }}
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    width: "100%",
                    height: "350px", // Устанавливаем фиксированную высоту для слайдов
                    overflow: "hidden",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f0f0f0", // Фон для пустого пространства
                  }}
                >
                  <img
                    ref={ref}
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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

        <div className="section">
          <h2>🎿Детали и тайминг</h2>
          <ul>
            <li>
              В 7:00 сбор у проката, 10:00-11:00 прибытие, прямо к подъемникам.
            </li>
            <li>Каталка до 16:00-16:30 (17:00 выезд обратно)</li>
            <li>20:00-21:00 возвращение в Батуми</li>
          </ul>
        </div>
        <div className="section">
          <h2>🎿Стоимость - 130 лари. Выезды каждую субботу! </h2>
          <p>
            Для новичков, готовых начать обучение вместе с нами:
            профессиональный инструктор для занятий на сноуборде (суббота,
            индивидуальное занятие — 100 лари за 1 час).
          </p>
          <a
            href="https://t.me/shpaksn"
            target="_blank"
            rel="noreferrer"
            className="register-button"
          >
            Записаться
          </a>
        </div>
      </div>
    </div>
  );
};
