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

export const MagaPage = () => {
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
        {" "}
        МАГАЛМТА — заброска и хайкинг на вершину | 2505 м{" "}
      </h1>
      <p className="trip-subtitle">
        Добираемся на внедорожниках до подножия горы Магалмта, где сделаем
        короткий перерыв перед началом маршрута. Первые участки пути — плавный
        подъём по живописным тропам. Подойдя к подножию вершины, неспешно начнём
        финальный подъём на Магалмту. Наверху проведём около полутора часов:
        устроим пикник с авторским чаем, закусками, сладостями и панорамным
        видом.
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
        <h2>📅 Детали</h2>
        <p>
          <strong>Место сбора:</strong>в 09:00, магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 150₾ (бронь 50% предоплата, не
          возвращается при отмене)
        </p>
      </section>

      <section className="trip-section">
        <h2>⚠️ Что взять с собой</h2>
        <ul>
          <li>Трансфер с ожиданием: Батуми — деревня под Магалмтой — Батуми</li>
          <li>Сопровождение гида (2 гида при группе 10+ участников)</li>
          <li>
            Хайкинг до вершины Магалмты и обратно (~6 км, ~350 м набора и
            сброса)
          </li>
          <li>Общий пикник на вершине: чай, сладости, фрукты, бутерброды</li>
          <li>Газ, горелки, посуда — всё с собой</li>
          <li>
            Фото на память от профессионального фотографа 📸 (при наборе от 10
            человек)
          </li>
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
