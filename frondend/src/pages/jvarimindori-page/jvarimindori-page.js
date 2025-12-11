import React from "react";
// import "./jvarimindori-page.css";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import photo1 from "./imagegoHikhani/1.webp";
import photo2 from "./imagegoHikhani/2.webp";
import photo3 from "./imagegoHikhani/3.webp";
import photo4 from "./imagegoHikhani/4.webp";
import photo5 from "./imagegoHikhani/5.webp";
import photo6 from "./imagegoHikhani/6.webp";
import { Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/router";

const photos = [photo5, photo3, photo2, photo4, photo1, photo6];

export const JvarimindoriTripPage = () => {
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div className="trip-container">
      <button className="back-button" onClick={() => router.back()}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>
      <h1 className="trip-title"> ДЖВАРИМИНДОРИ </h1>
      <p className="trip-subtitle">
        Оборудованный кемпинг на высоте более 2 тысяч метров 🏔
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
          🚐 Доезжаем до Джвариминдори, наслаждаемся местными панорамными
          видами, отдыхаем, неспешно собираемся и отправляемся в путь к горе
          Тагинаури.
        </p>
        <p>
          🥾 Наш маршрут проходит по грунтовой дороге до самого подножья горы.
          Затем начинается подъём — местами крутой, но идти будем в спокойном,
          лёгком темпе.
        </p>
        <p>
          Наверху, на горе Тагинаури, устроим привал с пикником, а потом тем же
          маршрутом спустимся обратно в Джвариминдори.
        </p>
      </section>

      <section className="trip-section">
        <h2>❓ Что включено</h2>
        <ul>
          <li>Трансфер с ожиданием: Батуми — Джвариминдори — Батуми</li>
          <li>
            Сопровождение двух гидов в хайке до горы Тагинаури (~7 км, ~500 м
            набора/сброса)
          </li>
          <li>
            Общий пикник у кемпинга: сэндвичи, чай, кофе, фрукты, сладости
          </li>
          <li> Фотографии на память от профессионального фотографа 📸</li>
          <li>Фото/видео с дрона</li>
        </ul>
      </section>

      <section className="trip-section">
        <h2>📅 Детали</h2>
        <p>
          <strong>Место сбора:</strong> магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 110₾ (бронь 50% предоплата, не
          возвращается при отмене)
        </p>
      </section>

      <section className="trip-section">
        <h2>⚠️ Что взять с собой</h2>
        <ul>
          <li>Воду (1,5-2 л), еду на день</li>
          <li>
            Удобную обувь, головной убор, спф крем, ветровку (на всякий случай)
          </li>
          <li>По желанию: треккинговые палки, сидушку</li>
          <li>Лишнее можно оставить в машине</li>
        </ul>
      </section>

      <div className="trip-contact">
        🔗 Чтобы записаться или задать вопрос — пиши Лео:{" "}
        <a href="https://t.me/molmeena" target="_blank" rel="noreferrer">
          @molmeena
        </a>
      </div>
    </div>
  );
};
