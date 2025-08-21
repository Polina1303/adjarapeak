import React from "react";
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

export const GomismtaChinchaoPage = () => {
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
      <h1 className="trip-title"> ГОМИС МТА - ОЗЕРО ЧИНЧАО </h1>
      <h1 className="trip-title"> Уровень сложности: средний / средний+ </h1>
      <p className="trip-subtitle">
        Если вы устали от типичных закатов в Гомисмта, то это для вас — пеший
        маршрут от деревни ГомисМта до озера Чинчао, которое находится на высоте
        2500 метров над уровнем море.
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
        <p>Дистанция маршрута: 20 км</p>
      </section>
      <section className="trip-section">
        <p>Набор и спуск: 710 метров .</p>
        <p>
          Кто не захочет идти по маршруту – может остаться на смотровой
          площадке.
        </p>
      </section>

      <section className="trip-section">
        <h2>➕ Что включено</h2>
        <ul>
          <li>
            Трансфер Батуми — Гомис МТА — Батуми (с ожиданием заката, что
            важно!)
          </li>
          <li>Сопровождение опытного гида</li>
          <li> Пикник с чаем/кофепитием + фрукты + сладости на озере )</li>
          <li>Газ/горелки вскипятить воду</li>
          <li>Одноразовые стаканы</li>

          <li>Групповая аптечка</li>
        </ul>
      </section>

      <section className="trip-section">
        <h2>📅 Детали</h2>
        <p>
          <strong>Место сбора:</strong>в 08:00, магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 110₾ (бронь 50% предоплата, не
          возвращается при отмене)
        </p>
      </section>

      <section className="trip-section">
        <h2>⚠️ Что взять с собой</h2>
        <ul>
          <li>Воду 2 литра на подьем/спуск/чай/кофе </li>
          <li> Еду и перекусы на день ❗️</li>
          <li>Трекинговая обувь, одежда, головной убор (штаны, носки)</li>
          <li>SPF крем</li>
          <li>Трекинговые палки (есть в нашем магазине и прокате)</li>
          <li>Плед/сидушку (есть в нашем магазине и прокате) </li>
        </ul>
      </section>

      <div className="trip-contact">
        🔗 Чтобы записаться или задать вопрос — пиши Юле:
        <a href="https://t.me/YulikosTailor" target="_blank" rel="noreferrer">
          @YulikosTailor
        </a>
      </div>
    </div>
  );
};
