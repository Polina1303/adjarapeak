import React from "react";
// import "../hihani-page/hihani-page.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
// import photo1 from "./img/photo1.webp";
import photo2 from "./img/photo2.webp";
import photo3 from "./img/photo3.webp";
import photo4 from "./img/photo4.webp";
import photo5 from "./img/photo5.webp";
import photo6 from "./img/photo6.webp";
import photo7 from "./img/photo7.webp";
import photo8 from "./img/photo8.webp";
import photo9 from "./img/photo9.webp";
import { Navigation, Pagination } from "swiper/modules";

const photos = [
  //   photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
];

export const SvanetiTripPage = () => {
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
      <h1 className="trip-title">
        СВАНЕТИ — Местия и Мазери за одни выходные!{" "}
      </h1>
      <p className="trip-subtitle">
        Двухдневный выезд в высокогорный регион на северо-западе Сакартвело,
        который известен своими живописными пейзажами, средневековыми башнями и
        богатой культурой и историей.
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
      <section className="trip-section">
        <h2>Программа:</h2>
        <p>
          День 1 <br />- Выезжаем рано утром, по пути делаем несколько
          технических остановок, и остановок для фото. Проезжаем Зугдиди,
          Игнурскую ГЭС, по пути уже любуемся горами! К 14:00 добираемся в
          Мазери и заселяемся в хорошие, чистые номера с видом на Ушбу.
          Собираемся и выходим на хайк к одному из самых, а возможно и самым,
          красивым водопадам Сакартвело! Возвращаемся с закатом, общаемся,
          ужинаем и отдыхаем. Ужин не включен в стоимость, но есть возможность
          сразу его заказать (30 лари).
        </p>
        <p>
          День 2 <br />
          Выполняем программу «максимум»: - 🧊ледник Чалаади (если вы устали, то
          можно остаться в поселке) - 😍качели Хешкили - 🏔музей Михаила Хергиани
          - 🧂местный рынок, где продают ту самую —настоящую сванскую соль -
          🚐выезд обратно
        </p>
      </section>

      <section className="trip-section">
        <h2>❓ Что включено</h2>
        <ul>
          <li>
            Трансфер Батуми - Мазери - Местия - л.Чалаади - Хешкили - Батуми
          </li>
          <li>Сопровождение гида на протяжении всего маршрута</li>
          <li>Фрукты, сладости по пути</li>
          <li>Групповая аптечка</li>
          <li>Ночевка с гестхаусе (односпальные кровати, номера 4-местные)</li>
          <li>Завтрак на 2-й день</li>
        </ul>
      </section>
      <section className="trip-section">
        <h2>❓ Что не включено в стоимость</h2>
        <ul>
          <li>Входные билеты в музей Хергиани</li>
          <li>Ужины и обеды (можно заказать за доп.плату)</li>
        </ul>
      </section>

      <section className="trip-section">
        <h2>📅 Детали</h2>
        <p>
          <strong>Место сбора:</strong> магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 320₾ лари (бронь 50% предоплата, не
          возвращается при отмене)
        </p>
      </section>

      <section className="trip-section">
        <h2>⚠️ Что взять с собой</h2>
        <ul>
          <li>Дождевик (можно купить у нас) </li>
          <li>
            Еду на день / перекусы ( у нас есть сублиматы, газ и горелки будут в
            общем доступе)
          </li>
          <li>Трекинговая обувь, одежда по погоде, головной убор</li>
          <li>
            Трекинговые палки для похода к водопадам и леднику (прокат комплекта
            всего за 4 лари)
          </li>
          <li> SPF крем (можно купить у нас, на сайте позже)</li>
          <li> Индивидуальные лекарства</li>
          <li> Плед/сидушку</li>
          <li> Воду 1,5 литра (тоже можно купить у нас 😅)</li>
        </ul>
      </section>

      <div className="trip-contact">
        🔗 Чтобы записаться или задать вопрос — пиши Юле:{" "}
        <a href="https://t.me/YulikosTailor" target="_blank" rel="noreferrer">
          @YulikosTailor
        </a>
      </div>
    </div>
  );
};
