import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../trip-page-one-day/trip-page-one-day.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import photo1 from "./imagegoderdi/IMG_8510.JPG";
import photo2 from "./imagegoderdi/IMG_8513.JPG";
import photo3 from "./imagegoderdi/IMG_8521.JPG";
import photo4 from "./imagegoderdi/IMG_8523.JPG";
import photo5 from "./imagegoderdi/IMG_8524.JPG";
import photo6 from "./imagegoderdi/IMG_8527.JPG";
import photo7 from "./imagegoderdi/IMG_8528.JPG";
import photo8 from "./imagehotel/IMG_7781.JPG";
import photo9 from "./imagehotel/IMG_7874.JPG";
import photo10 from "./imagehotel/IMG_7877.JPG";
import photo11 from "./imagehotel/IMG_7878.JPG";
import photo12 from "./imagehotel/IMG_8243.JPG";
import photo13 from "./imagehotel/IMG_8244.JPG";
import photo14 from "./imagehotel/IMG_8469.JPG";

import { useInView } from "react-intersection-observer";

const photos = [photo1, photo4, photo2, photo5, photo6, photo3, photo7];
const photosHotel = [
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
];
export const TripPageTwoDay = () => {
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
      <h2>Двухдневный выезд ~ 1 ночь</h2>

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
        <h2>🏡 Размещение</h2>
        <ul>
          <li>
            Просторные 2-местные номера с собственным душем, туалетом, балконом
            и кухней. В новом уютном отеле Forest Villa! Всего 150 метров до
            подъёмников.
          </li>
          <li>
            Включён завтрак в формате шведского стола, чтобы обеспечить вас
            энергией на весь день.
          </li>
          <li>Сауна — лучший способ расслабиться после катания.</li>
        </ul>
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
          {photosHotel.map((photo, index) => (
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
        <h2>🎿Что включено ещё?</h2>
        <ul>
          <li>
            Если вы не катаетесь на лыжах или сноуборде, мы всё равно найдём для
            вас развлечения! 🆓Бесплатный тюбинг/ватрушка в нашем прокате.
          </li>
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
          <li>
            Много снега, длинные трассы и доступный фрирайд, Годердзи самый
            снежный курорт Грузии!
          </li>
        </ul>

        <div className="section">
          <h2>🎿Детали и тайминг</h2>
          <ul>
            <li>
              В 6:50 сбор у проката, 10:00-11:00 прибытие, прямо к подъемникам.
            </li>
            <li>17:00 выезд обратно в воскресенье</li>
            <li>20:00-21:00 возвращение в Батуми</li>
            <li>
              Скидки для компаний и семей от 3 человек — соберите друзей или
              близких и путешествуйте выгодно!
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>🎿Стоимость - 350 лари. Выезды каждую субботу-воскресенье! </h2>
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
