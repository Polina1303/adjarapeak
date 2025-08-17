import React from "react";
import "./greenlake-page.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import photo1 from "./img/1.webp";
import photo2 from "./img/2.webp";
import photo3 from "./img/3.webp";
import photo4 from "./img/4.webp";
import photo5 from "./img/5.webp";
import photo6 from "./img/6.webp";

import { Navigation, Pagination } from "swiper/modules";

const photos = [photo1, photo3, photo5, photo6, photo4, photo2];

export const GreenlakePage = () => {
  const history = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div className="trip-container">
      <button className="back-button" onClick={() => history(-1)}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>
      <h1 className="trip-title"> ГОДЕРДЗИ — ЗЕЛЁНОЕ ОЗЕРО + ПИКНИК </h1>
      <p className="trip-subtitle">
        Зелёное озеро и Сабанела на высоте свыше 2000 метров.
      </p>
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
                  height: "350px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#f0f0f0",
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
      <section className="trip-section">
        <p>
          Доезжаем до зелёного озера — с бирюзовой прозрачной водой, окружённой
          густым хвойным лесом. Далее — хайкинг до озера Сабанела. На обратном
          пути поднимемся на смотровую площадку с панорамой на Зелёное озеро. А
          в завершение устроим уютный мясной пикник у зелёного озера с плаванием
          на сапах в бирюзовой воде!
        </p>
      </section>
      <section className="trip-section">
        <p>Ориентировочное время на маршруте с привалами 3-5 часов.</p>
      </section>

      <section className="trip-section">
        <h2>➕ Что включено</h2>
        <ul>
          <li> Трансфер с ожиданием Батуми — Зелёное озеро — Батуми</li>
          <li>
            Прогулка с сопровождением по живописному маршруту до озера Сабанела
            и смотровой над зелёным озером (3 км, ~350 м набора/спуска)
            Ориентировочное время на маршруте с привалами 3-5 часов.
          </li>
          <li>3 остановки в пути (пирожки, хуло, перевал)</li>
          <li>
            {" "}
            Катание на сап бордах (возьмём 2-3 сап борда, надеемся что и в этот
            раз нам не помешают поплавать)
          </li>
          <li>
            {" "}
            Общий пикник: шашлык, сосиски, овощи, сендвичи, авторский чай,
            закуски, сладости
          </li>
          <li>Купание в прохладном озере</li>

          <li>Качественные фото на память от фотографа</li>
          <li>Групповая аптечка</li>
        </ul>
      </section>

      <section className="trip-section">
        <h2>📅 Детали</h2>
        <p>
          <strong>Место сбора:</strong>в 08:00, магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 130₾ (бронь 50% предоплата, не
          возвращается при отмене)
        </p>
      </section>

      <section className="trip-section">
        <h2>⚠️ Что взять с собой</h2>
        <ul>
          <li>Воду 2 литра</li>
          <li> Накидку от ветра или дождя (на всякий случай)</li>
          <li>Трекинговая обувь, одежда, головной убор (штаны, носки)</li>
          <li>SPF крем</li>
          <li>Трекинговые палки (есть в нашем магазине и прокате)</li>
          <li>Плед/сидушку (есть в нашем магазине и прокате) </li>
        </ul>
      </section>

      <div className="trip-contact">
        🔗 Чтобы записаться или задать вопрос — пиши Лео:
        <a href="https://t.me/molmeenar" target="_blank" rel="noreferrer">
          @molmeena
        </a>
      </div>
    </div>
  );
};
