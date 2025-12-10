import React from "react";
import "./bakhmaro-page.css";
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
import photo7 from "./img/7.webp";
import photo8 from "./img/8.webp";
import photo9 from "./img/9.webp";

import { Navigation, Pagination } from "swiper/modules";

const photos = [
  photo1,

  photo3,

  photo5,
  photo6,
  photo4,
  photo8,
  photo2,
  photo7,
  photo9,
];

export const BakhmaroPage = () => {
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
      <h1 className="trip-title"> БАХМАРО и вершина ГАДРЕКИЛИ </h1>
      <p className="trip-subtitle">
        Хайкинг на вершину Гадрекили (2508 м), откуда открывается захватывающий
        обзор на месхетский хребет.
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
          По пути в Бахмаро сделаем короткую остановку у завода Набеглави —
          размяться перед серпантином, набрать минеральной воды в свою бутылку.
        </p>
      </section>
      <section className="trip-section">
        <p>
          По прибытии в Бахмаро сделаем короткий перерыв, после чего отправимся
          в путь к вершине. Маршрут начнётся по живописным тропинкам, а затем
          продолжится подъёмом по альпийскому хребту. Наверху — горячий чай,
          сладости и заслуженный отдых с видом на горы. .
        </p>
      </section>

      <section className="trip-section">
        <h2>➕ Что включено</h2>
        <ul>
          <li>Трансфер с ожиданием: Батуми — Бахмаро — Батуми</li>
          <li>Сопровождение гида (2 гида при группе 10+ участников)</li>
          <li>Круговой хайкинг до вершины Гадрекили: 6 км, ~550 м набора</li>
          <li>
            Общий пикник на вершине: сендвичи и авторский чай со сладостями
          </li>
          <li>Газ, горелки, посуда — всё с собой</li>
          <li>Фото на память от фотографа 📸</li>

          <li>Видео и фото с дрона</li>
          <li>Групповая аптечка</li>
          <li>Остановка у завода Набеглави с минеральной водой</li>
        </ul>
      </section>

      <section className="trip-section">
        <h2>📅 Детали</h2>
        <p>
          <strong>Место сбора:</strong>в 10:00, магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 130₾ (бронь 50% предоплата, не
          возвращается при отмене)
        </p>
        <p>3 точки по Батуми + возможны остановки в Чакви и Кобулети</p>
      </section>

      <section className="trip-section">
        <h2>⚠️ Что взять с собой</h2>
        <ul>
          <li>Воду (1,5-2 л), перекус/еду на день</li>
          <li>Накидку от ветра или дождя (на всякий случай)</li>
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
