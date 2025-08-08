import React from "react";
import "./tbikeli-page.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import photo1 from "./imagegoHikhani/1.webp";
import photo2 from "./imagegoHikhani/2.webp";
import photo3 from "./imagegoHikhani/3.webp";
import photo4 from "./imagegoHikhani/4.webp";
import photo5 from "./imagegoHikhani/5.webp";
import photo6 from "./imagegoHikhani/6.webp";
import { Navigation, Pagination } from "swiper/modules";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

export const TbikeliTripPage = () => {
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
      <h1 className="trip-title"> ОЗЕРО ТБИКЕЛИ </h1>
      <p className="trip-subtitle">
        До Тбикели ведут три маршрута: из Гомисмта, Хино и Джвариминдори. Мы
        выбираем самый живописный и доступный в августе — через Джвариминдори.
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
        <p>
          Озеро Тбикели — одно из самых высокогорных в Аджарии, оно расположено
          на высоте более 2200 метров у подножия горы Кибадзири.
        </p>
        <p>
          🏔Это один из тех походов, которые остаются в памяти надолго. А особую
          атмосферу придаст звёздный поток Персеид, который мы будем наблюдать
          вечером у озера.
        </p>
        <p>Этот выезд проходит в коллаборации с натуралистом Арвидасом</p>
      </section>
      <section className="trip-section">
        <h2>Программа:</h2>
        <p>
          Выезжаем в 7:00. Дорога с остановкой займет около 2,5–3 часов.
          Приехав, устроим короткий отдых в кемпинг-зоне Джвариминдори,
          подготовим снаряжение, наберём воду из родника — и выдвинемся по
          маршруту к озеру.
        </p>
        <p>
          <strong> День первый:</strong>
          <br />
          Пройдём около 15 км с набором и сбросом высоты по 650 м, чтобы дойти
          до озера Тбикели. По прибытии выберем место для ночевки — либо у
          самого озера, либо за хребтом на поляне, в зависимости от погоды и
          условий. Планируем прибыть к лагерю до 18:00. Вечером — ужин, костёр,
          общение и наблюдение за потоком Персеид под звёздным небом.
        </p>
        <p>
          <strong> День второй:</strong>
          <br />
          Неспешное утро: завтрак, отдых, сборы. Около 12:00 выходим обратно в
          Джвариминдори. После возвращения — короткий привал, затем поедем в
          Гомисмта (дорога в пределах часа), где встретим закат, устроим пикник
          и насладимся видом на море облаков. Ориентировочное прибытие в Батуми
          — около 23:00.
        </p>
      </section>

      <section className="trip-section">
        <h2>❓ Что включено</h2>
        <ul>
          <li>Трансфер Батуми — Джвариминдори — Батуми</li>
          <li>Двухдневный поход на озеро Тбикели</li>
          <li>
            Сопровождение трёх опытных гидов (в том числе натуралиста) и
            фотограф
          </li>
          <li>
            {" "}
            Запоминающийся вечер второго дня в ГомисМта: закат с пикником и
            ужином на мангале
          </li>
          <li>Фото и видео от профессионального фотографа</li>
          <li>Фото и видео с дрона</li>
          <li>
            Вся кухонная и групповая снаряга (котлы, газ, тенты, посуда и пр.)
          </li>
          <li>Групповая аптечка</li>
          <li>Время для фото и отдыха у озера и на закате в ГомисМта</li>
          <li>Остановки по пути: посёлок Кеда (магазин, туалет)</li>
        </ul>
      </section>

      <section className="trip-section">
        <h2>📅 Детали</h2>
        <p>
          <strong>Место сбора:</strong>в 07:00, магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 250₾ (бронь 50% предоплата, не
          возвращается при отмене)
        </p>
      </section>

      <section className="trip-section">
        <h2>⚠️ Что взять с собой</h2>
        <ul>
          <li>Спальную систему — палатку, коврик, спальник</li>
          <li>Тёплые вещи (вечером может быть прохладно)</li>
          <li>Сменную одежду и обувь для лагеря</li>
          <li>сидушку или коврик</li>
          <li>КЛМН — кружку, ложку, миску, нож</li>
          <li>Воду (1,5-2 л), перекусы/еду во время похода</li>
          <li>Заряженный телефон или камеру (и повербанк) — виды будут 🔥</li>
          <li>
            Трекинговые палки — рекомендуется. Арендуйте онлайн, и мы возьмём их
            с собой для вас
          </li>
        </ul>
      </section>

      <div className="trip-contact">
        🔗 Чтобы записаться или задать вопрос — пиши Станислав:{" "}
        <a href="https://t.me/shpaksn" target="_blank" rel="noreferrer">
          @shpaksn
        </a>
      </div>
    </div>
  );
};
