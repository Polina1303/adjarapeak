import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import React from "react";
import style from "./yoga-gomismta-page.module.css";
// import photo1 from "./img/1.webp";
// import photo2 from "./img/2.webp";
// import photo3 from "./img/3.webp";
// import photo4 from "./img/4.webp";
// import photo5 from "./img/5.webp";
// import photo6 from "./img/6.webp";
// import { Navigation, Pagination } from "swiper/modules";

// const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

export const YogaGomismtaPage = () => {
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
      <h1 className="trip-title">ЙОГА-ВЫЕЗД В ГОМИСМТА </h1>

      {/* <div
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
      </div> */}
      <p className="trip-title">
        Совместили путешествие в горы и глубокую практику хатха-йоги.
      </p>

      <div className="trip-section">
        <h2>Подходит и новичкам, и опытным — для всех, кто хочет:</h2>
        <ul>
          <li>отдохнуть с пользой</li>
          <li>укрепить тело и внимание</li>
          <li>насладиться природой и тишиной</li>
          <li>
            Йогу ведет — Ольга — сертифицированный преподаватель с 12+ лет
            практики. Она знает, как работать с телом бережно и эффективно.
          </li>
        </ul>
      </div>

      <div className="trip-section">
        <h2>В программе: :</h2>
        <ul>
          <li>трансфер Батуми ⇄ Гомис Мта</li>
          <li>практика йоги в горах</li>
          <li>заботливый гид</li>
          <li>групповой полезный вег-пикник</li>
          <li>чай / кофе / снеки</li>
          <li>отдых, ожидание заката и возвращение в город к 23–00:00</li>
          <li>коврик для йоги в подарок!</li>
        </ul>
      </div>

      <section className="trip-section">
        <h2>🎒Что взять с собой:</h2>
        <ul>
          <li>Воду (1,5-2 л), перекусы</li>
          <li>
            плед для шавасаны (часть практики, где вы будете лежать и
            расслабляться)
          </li>
          <li>Птеплую одежду (вечером прохладно)</li>
          <li>личные лекарства</li>
          <li>SPF и головной убор</li>
        </ul>
      </section>

      <p className="trip-title">
        💡 Не обязательно заниматься йогой — можно просто насладиться природой и
        компанией 🌿
      </p>

      <section className="trip-section">
        <h2>📅 Детали</h2>
        <p>
          <strong>Место сбора:</strong> магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 130₾ (бронь 50% предоплата, не
          возвращается при отмене)
        </p>
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
