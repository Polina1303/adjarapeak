import React from "react";
import "./martvili-page.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import photo1 from "./img/1.webp";
import photo2 from "./img/2.webp";
import photo3 from "./img/3.webp";
import photo4 from "./img/4.webp";
import photo5 from "./img/5.webp";

import { Navigation, Pagination } from "swiper/modules";

const photos = [photo1, photo2, photo3, photo4, photo5];

export const MartviliTripPage = () => {
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
      <h1 className="trip-title"> ПОХОД ПО КАНЬОНУ </h1>
      <p className="trip-subtitle">
        К водопадам Тоба и Ониоре, на границе трех регионов — Самегрело, Рача и
        Имерети. Потрясающая природа, захватывающий вид на Кавказский хребет,
        скалы и пещеры по пути.
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
          🏔Водопад Ониоре - 67 метров в высоту, находится в ущелье Тоба и имеет
          подземную часть. Водопад Тоба - самый высокий каскадный водопад в
          Грузии, высота 234 метра, вытекает из пещеры Арсена.
        </p>
      </section>
      <section className="trip-section">
        <p>Дистанция маршрута: 14 км</p>
        <p>Набор и спуск: 700 метров</p>
        <p>Расстояние в пути: из Батуми до деревни Пивели Балда 154 км</p>
      </section>

      <section className="trip-section">
        <h2>➕ Что включено</h2>
        <ul>
          <li>Трансфер </li>
          <li>Сопровождение гидов на протяжении маршрута</li>
          <li>Пикник с чае/кофепитием + фрукты + сладости</li>
          <li>Газ/горелки для чая/кофе</li>
          <li> Одноразовые стаканы</li>
          <li>Фото и видео с дрона</li>

          <li>Групповая аптечка</li>
        </ul>
      </section>

      <section className="trip-section">
        <h2>📅 Детали</h2>
        <p>
          <strong>Место сбора:</strong>в 07:00, магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 120₾ (бронь 50% предоплата, не
          возвращается при отмене)
        </p>
      </section>

      <section className="trip-section">
        <h2>⚠️ Что взять с собой</h2>
        <ul>
          <li> Воду 2 литра</li>
          <li>Приемы пищи на день</li>
          <li>Реппеленты от клещей (есть в нашем магазине)</li>
          <li>Трекинговая обувь, одежда, головной убор (штаны, носки)</li>
          <li>SPF крем</li>
          <li>Трекинговые палки (есть в нашем магазине и прокате)</li>
          <li>Плед/сидушку (есть в нашем магазине и прокате) </li>
        </ul>
      </section>

      <div className="trip-contact">
        🔗 Чтобы записаться или задать вопрос — пиши Юля:
        <a href="https://t.me/YulikosTailor" target="_blank" rel="noreferrer">
          @YulikosTailor
        </a>
      </div>
    </div>
  );
};
