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
import photo7 from "./img/7.webp";
import photo8 from "./img/8.webp";

import { Navigation, Pagination } from "swiper/modules";

const photos = [photo1, photo3, photo5, photo6, photo4, photo2, photo7, photo8];

export const GuriaTeaPage = () => {
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
      <h1 className="trip-title"> Погружение в чайные традиции </h1>
      <p className="trip-subtitle">
        Представьте: вы в тишине среди гор и зелёных плантаций, в руках плетёная
        корзинка, а вокруг аромат свежих чайных листьев. Именно здесь, в сердце
        Гурии, рождается лучший грузинский чай, так же как в Кахетии рождается
        вино.
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
        <h2>Что в программе ❓ </h2>
        <ul>
          <li>Медитативный сбор чайных листьев в плетёные корзинки</li>
          <li>
            Экскурсия по фабрике и знакомство с тайнами чайного производства
          </li>
          <li>
            Дегустация чая от самого производителя — ароматного, живого,
            настоящего
          </li>
          <li>
            Эко-магазин с редкими гурийскими деликатесами: чайный коньяк,
            шоколад и мыло из чая, уникальное вино и конфеты, которых не найти
            больше нигде
          </li>
        </ul>
      </section>

      <section className="trip-section">
        <h2>📅 Детали</h2>
        <p>
          <strong>Место сбора:</strong>в 10:00, магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 120₾ (бронь 50% предоплата, не
          возвращается при отмене)
        </p>
        <p>
          📸 Локация создана для эстетичных фото и неспешного отдыха -
          уединённое место, где время течёт медленнее.
        </p>
      </section>

      <section className="trip-section">
        <h2>⚠️ Что взять с собой</h2>
        <ul>
          <li>Тёплые вещи на возвращение, носки</li>
          <li>Воду (1,5л) и перекусы в дорогу</li>
          <li>Заряженный телефон/камеру + повербанк</li>
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
