import React from "react";
import "./goderdzi_mounting-page.css";
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

export const GoderdziMountingTripPage = () => {
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
      <h1 className="trip-title"> ГОДЕРДЗИ — ГОРА МУХЕЛТА (2340 МЕТРОВ) </h1>
      <p className="trip-subtitle">
        Живописный обзорный маршрут с панорамными видами — от крепости Хихани до
        хребтов Бахмаро.
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
          Добираемся до высокогорного курорта Годердзи и делаем короткий перерыв
          возле работающего местного кафе.
        </p>
        <p>
          Затем отправляемся в хайкинг к горе Мухелта по живописному маршруту
          через местную деревню. В начале подъём плавный, но постепенно
          становится более крутым. На вершине устроим пикник с полноценным
          отдыхом и красивыми видами.
        </p>
        <p>Маршрут — средней сложности, ближе к лёгкому.</p>
      </section>

      <section className="trip-section">
        <h2>➕ Что включено</h2>
        <ul>
          <li>Трансфер с ожиданием Батуми — Годердзи — Батуми</li>
          <li>
            Прогулка с сопровождением по живописному маршруту до горы Мухелта
            (11 км, ~400 м набора/спуска)
          </li>
          <li>Ориентировочное время на маршруте 5-6 часов.</li>
          <li>3 остановки в пути (пирожки, хуло, перевал) е</li>
          <li> Общий пикник: чай, закуски, сладости</li>
          <li>Качественные фото на память от фотографа</li>
          <li>Фото и видео с дрона</li>
        </ul>
      </section>

      <section className="trip-section">
        <h2>📅 Детали</h2>
        <p>
          <strong>Место сбора:</strong>в 08:00, магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 100₾ (бронь 50% предоплата, не
          возвращается при отмене)
        </p>
      </section>

      <section className="trip-section">
        <h2>⚠️ Что взять с собой</h2>
        <ul>
          <li>Воду 2 литра</li>
          <li>Приемы пищи на день</li>
          <li>Трекинговая обувь, одежда, головной убор (штаны, носки)</li>
          <li>SPF крем</li>
          <li>Трекинговые палки (есть в нашем магазине и прокате)</li>
          <li>Плед/сидушку (есть в нашем магазине и прокате) </li>
        </ul>
      </section>

      <div className="trip-contact">
        🔗 Чтобы записаться или задать вопрос — пиши Лео:
        <a href="https://t.me/molmeena" target="_blank" rel="noreferrer">
          @molmeena
        </a>
      </div>
    </div>
  );
};
