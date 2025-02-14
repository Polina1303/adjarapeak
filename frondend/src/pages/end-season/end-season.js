import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./end-season.css";
import {
  FaHotel,
  FaSkiing,
  FaUsers,
  FaMedal,
  FaMountain,
  FaBeer,
  FaUtensils,
} from "react-icons/fa";
import { Button } from "antd";

import { Navigation, Pagination } from "swiper/modules";
import photo1 from "./imageEndSeason/DVV_1355.jpg";
import photo2 from "./imageEndSeason/DVV_1314.jpg";
import photo3 from "./imageEndSeason/DVV_1298.jpg";
import photo4 from "./imageEndSeason/DVV_1129.jpg";
import photo5 from "./imageEndSeason/DVV_1121.jpg";
import photo6 from "./imageEndSeason/DVV_0947.jpg";
import photo7 from "./imageEndSeason/DVV_0927.jpg";

import { useInView } from "react-intersection-observer";

const photos = [photo4, photo1, photo6, photo3, photo7, photo2, photo5];
export const EndSeason = () => {
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

      <div className="event-container">
        <h1 className="fade-in">Фестиваль закрытия горнолыжного сезона</h1>
        <p className="event-description slide-in">
          Масштабное событие на закрытие сезона, с кучей активностей и толпой
          вдохновлённых ребят
        </p>
        <Button className="button-end">
          <a href="https://t.me/shpaksn" target="_blank" rel="noreferrer">
            Записаться
          </a>
        </Button>
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
        <section className="event-section zoom-in">
          <h2>
            <FaHotel /> ПРОЖИВАНИЕ
          </h2>
          <p>
            Живём в 100 м от подъёмника в уютном отеле. Размещение 2-3 местное в
            уютных комнатах с видом на горы и собственным душем.
          </p>
          <p>
            Вечерами устраиваем бодрый движ в залах отеля: лекции, кинопросмотр,
            настолки, посиделки с гитарами и многое другое.
          </p>
        </section>

        <section className="event-section zoom-in">
          <h2>
            <FaUtensils /> ПИТАНИЕ
          </h2>
          <p>Завтраки и ужины включены</p>
        </section>

        <section className="event-section zoom-in">
          <h2>
            <FaSkiing /> Горные АКТИВНОСТИ
          </h2>
          <p>
            Совместное катание, спуски в купальниках и костюмах со съёмкой на
            дрон, хайкинг.
          </p>
        </section>

        <section className="event-section zoom-in">
          <h2>
            <FaUsers /> ОТЛИЧНАЯ КАТАЛКА
          </h2>
          <p>Для любого уровня катания.</p>
        </section>

        <section className="event-section zoom-in">
          <h2>
            <FaMedal /> СОРЕВНОВАНИЯ
          </h2>
          <p>
            Состязания лыжников и сноубордистов - как спортивные, так и
            развлекательные.
          </p>
        </section>

        <section className="event-section zoom-in">
          <h2>
            <FaMountain /> БОЖЕСТВЕННЫЙ ФРИРАЙД
          </h2>
          <p>С подъёмом на ратраке, сопровождение на маршрутах.</p>
        </section>

        <section className="event-section zoom-in">
          <h2>
            <FaBeer /> ВЕЧЕРНИЙ ДВИЖ
          </h2>
          <p>
            Лекции, кино на проекторе, гитарные посиделки, бир-понг и многое
            другое.
          </p>
        </section>

        <section className="event-section">
          <h2>Программа фестиваля</h2>
          <div className="day-plan fade-in">
            <h3>Первый день</h3>
            <ul>
              <li>6:00 - сбор в Батуми</li>
              <li>10:00 - приезд в Годердзи, заселение в отель</li>
              <li>11:00-16:00 - свободное катание, активности</li>
              <li>18:00 - ужин</li>
              <li>19:00 - лекция “Безопасность на склоне”</li>
              <li>20:00 - кинопросмотр</li>
              <li>20:00 - соревнования по бир-понгу</li>
              <li>22:00 - гитара, вино, рассказы о путешествиях</li>
            </ul>
          </div>
          <div className="day-plan fade-in">
            <h3>Второй день</h3>
            <ul>
              <li>9:00 - завтрак (шведский стол)</li>
              <li>10:00-17:00 - фрирайд, хайкинг</li>
              <li>17:00-20:00 - ужин, свободное время</li>
              <li>20:00 - настолки: манчкин, дженга, alias</li>
              <li>20:00 - соревнования по бильярду и пинг-понгу</li>
              <li>21:30 - посиделки с гитарой, обсуждение планов</li>
            </ul>
          </div>
          <div className="day-plan fade-in">
            <h3>Третий день</h3>
            <ul>
              <li>9:00 - завтрак (шведский стол)</li>
              <li>10:00-17:00 - активный день: массовый спуск в костюмах</li>
              <li>16:00 - закрытие фестиваля, награждение</li>
              <li>17:00-18:30 - сдача снаряжения, сборы</li>
              <li>18:30 - выезд в Батуми</li>
              <li>22:00-23:00 - приезд в Батуми</li>
            </ul>
          </div>
        </section>

        <div className="video-container">
          <h3>Как это было год назад</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-k-8vNEQQ2w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
