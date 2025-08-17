import React from "react";
// import "./hihani-page.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import tea1 from "./img/tea1.webp";
import tea2 from "./img/tea2.webp";
import tea3 from "./img/tea3.webp";
import tea4 from "./img/tea4.webp";
import tea5 from "./img/tea5.webp";
import { Navigation, Pagination } from "swiper/modules";

const teas = [tea1, tea2, tea3, tea4, tea5];

export const TeaTripPage = () => {
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
      <h1 className="trip-title">ДЕНЬ ЧАЯ В ГОРАХ ГУРИИ </h1>
      <p className="trip-subtitle">
        🇬🇪Приглашаем вас в самое сердце чайных плантаций Грузии — туда, где горы
        пахнут солнцем, а чай рождается под чистым небом.
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
          {teas.map((tea, index) => (
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
                  src={tea}
                  alt={`tea ${index + 1}`}
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
        <h2>🚐 Что нас ждёт</h2>
        <p>Утренний старт из Батуми.</p>
        <p>
          Погружение в тайны сбора и производства настоящего грузинского чая
        </p>
        <p>Мастер-класс по изготовлению чая</p>
        <p>
          Восстановление сил на обеденном перерыве из лучших блюд гурийской
          кухни (включен в стоимость)
        </p>
        <p>Большая дегустация редких сортов премиального чая</p>
        <p>Возможность увезти домой частичку этого волшебства</p>
        <p>Возвращение обратно в Батуми</p>
      </section>

      <section className="trip-section">
        <h2>🎒 Что взять с собой</h2>
        <p>
          Одежду и обувь стоит подбирать в зависимости от времени года и
          погодных условий. Не волнуйтесь — перед поездкой мы обязательно
          свяжемся с вами и сообщим всю необходимую информацию, чтобы вы
          чувствовали себя комфортно и были готовы ко всем погодным сюрпризам!
        </p>
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
