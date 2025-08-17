import React from "react";
import "../hihani-page/hihani-page.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import photo1 from "./img/1.webp";
import photo2 from "./img/2.webp";
import photo3 from "./img/3.webp";
import photo4 from "./img/4.webp";
import photo5 from "./img/5.webp";
import photo6 from "./img/6.webp";
import { Navigation, Pagination } from "swiper/modules";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

export const KazbegPage = () => {
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
      <h1 className="trip-title">Восхождение на Казбег 6–14 сентября</h1>

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
      <p className="trip-title">Маленькая группа — максимум 6 человек</p>
      <p className="trip-subtitle">💶 Стоимость — 700 €</p>

      <div className="trip-section">
        <h2>В стоимость входит всё необходимое:</h2>
        <ul>
          <li>Проживание в гостевом доме (первый и последний день)</li>
          <li>Место в палатке (2–3 человека)</li>
          <li>Полноценное трёхразовое питание + перекусы</li>
          <li>Заброска на маршрут и трансфер по окончании</li>
          <li>Работа гида</li>
          <li>
            Медаль и сертификат о восхождении — только тем, кто действительно
            был на вершине
          </li>
        </ul>
      </div>

      <div className="trip-section">
        <h2>❌ Не включено:</h2>
        <ul>
          <li>Дорога до Степанцминды</li>
          <li>
            Личное снаряжение (у нас действует скидка 20% в Adjara Peak — на
            всё, кроме обуви и одежды)
          </li>
          <li>Праздничный ужин после возвращения — по желанию, 40 лари</li>
        </ul>
      </div>

      <div className="trip-section">
        <h2>💪🏻 О гиде:</h2>
        <p>
          С вами пойдёт Александр — сертифицированный инструктор, член Федерации
          альпинизма.
          <br />
          За плечами — десятки маршрутов по Кавказу, в том числе Казбек,
          Эльбрус, Тетнульди, Оштен, Фишт.
          <br />
          Образование, альпинистские разряды, курсы первой помощи, а главное —
          умение работать с людьми: Саша организовывает и ведёт занятия по
          скалолазанию с нами уже второй год. Он умеет держать маршрут и
          команду, поддерживать и направлять там, где это нужно.
        </p>
      </div>

      <div className="trip-contact">
        🔗 Чтобы записаться или задать вопрос — пиши Лео:
        <a href="https://t.me/molmeena" target="_blank" rel="noreferrer">
          @molmeena
        </a>
      </div>
    </div>
  );
};
