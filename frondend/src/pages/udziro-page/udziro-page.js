import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import photo1 from "./img/1.webp";
import photo2 from "./img/2.webp";
import photo3 from "./img/3.webp";
import photo4 from "./img/4.webp";
import photo5 from "./img/5.webp";
import photo6 from "./img/6.webp";
import { useRouter } from "next/router";
import { Navigation, Pagination } from "swiper/modules";

const photos = [photo1, photo3, photo5, photo6, photo4, photo2];

export const UdziroPage = () => {
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
      <h1 className="trip-title"> ОЗЕРО УДЗИРО </h1>
      <p className="trip-subtitle">
        Озеро Удзиро — жемчужина Рачи, расположенная на высоте более 2800
        метров. Известно своей кристально чистой водой и панорамами на
        Кавказский хребет.
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
          В первый день мы приезжаем в посёлок Шови и останавливаемся на ночёвку
          в местном гестхаусе. На следующий день утром выходим на маршрут. Путь
          к озеру займёт около 6–9 часов. Ночёвка запланирована в лагере прямо у
          озера на высоте более 2800 метров. Вечером нас ждут потрясающий закат,
          ужин, наблюдение за звёздами и ночёвка в палатках.
        </p>
      </section>
      <section className="trip-section">
        <p>
          На третий день отдыхаем и ближе к 11–12 часам отправляемся обратно тем
          же маршрутом в Глолу, после чего возвращаемся в Батуми.
        </p>
      </section>

      <section className="trip-section">
        <h2>🚎 Логистика</h2>
        <ul>
          <li>
            Выезжаем в пятницу после обеда. Дорога до Шови займёт около 6–7
            часов с остановками. Возвращение в Батуми ближе к ночи в
            воскресенье.
          </li>
        </ul>
      </section>
      <section className="trip-section">
        <h2>➕ Что включено</h2>
        <ul>
          <li>Трансфер Батуми — Шови/Глола — Батуми</li>
          <li>Поход на озеро Удзиро (3 дня, 2 ночи)</li>
          <li>Сопровождение опытных гидов</li>
          <li> Фото и видео с дрона</li>
          <li>
            Вся кухонная и групповая снаряга (котлы, газ, тенты, посуда и пр.)
          </li>

          <li>Групповая аптечка</li>
          <li>Время для отдыха, фото и прогулок у озера</li>
        </ul>
      </section>

      <section className="trip-section">
        <h2>📅 Детали</h2>
        <p>
          <strong>Место сбора:</strong> магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 350₾/450₾ с включённой едой (бронь по 50%
          предоплате, не возвращается при отмене путешествия участником)
        </p>
      </section>

      <section className="trip-section">
        <h2>⚠️ Что взять с собой</h2>
        <ul>
          <li>Спальную систему — палатку, коврик, спальник</li>
          <li>Тёплые вещи (вечером может быть прохладно)</li>
          <li>Сменную одежду и обувь</li>
          <li>SPF крем</li>
          <li>КЛМН — кружку, ложку, миску, нож</li>
          <li> Воду (1,5–2 л) и перекусы</li>
          <li> Трекинговые палки — рекомендуются</li>
          <li> Заряженный телефон/камеру + повербанк</li>
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
