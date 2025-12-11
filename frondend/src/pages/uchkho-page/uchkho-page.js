import React, { useState } from "react";

import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import photo1 from "./imgUchkho/Uchkho1.jpg";
import styles from "./uchkho-page.module.css";
export const UchkhoTripPage = () => {
  const photos = [photo1];

  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div className={styles["uchkho-container"]}>
      <button className={styles["back-button"]} onClick={() => router.back()}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>
      <h1 className={styles["title-uch"]}>
        ОЗЕРО УЧХО — поход к одному из самых высокогорных озёр Аджарии
      </h1>
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
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
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
      <p>
        Единственный летний выезд туда, куда не водят туристов — к одному из
        самых живописных озёр Аджарии, расположенному на высоте 1700 метров и
        окружённому густым хвойным лесом 🌲
      </p>
      <section className={styles["description"]}>
        <p>
          🚐 Добираемся до села Учхо, где сделаем короткий перерыв перед началом
          маршрута.
        </p>
        <p>Тропа — грунтовая, с плавным, но ощутимым подъёмом.</p>
        <p>
          У озера устроим большой привал, горячий чай, пикник, сладости и…
          синхронное кваканье лягушек 🐸
        </p>
      </section>

      <hr />

      <section className={styles["included"]}>
        <h2 className={styles["subtitle-uch"]}>Что включено ❓</h2>
        <ul className={styles["uchkho-list"]}>
          <li>• Трансфер с ожиданием: Батуми — село Учхо — Батуми</li>
          <li>• Сопровождение гида (2 гида при группе 10+ участников)</li>
          <li>• Хайкинг до озера и обратно (~18 км, ~1200 м набора)</li>
          <li>• Общий пикник у озера: чай, кофе, сладости, фрукты</li>
          <li>• Газ, горелки, посуда — всё с собой</li>
          <li>• Фото на память от профессионального фотографа 📸</li>
          <li>• Видео и фото с дрона</li>
        </ul>
      </section>

      <section className={styles["info"]}>
        <p>
          <strong>Место сбора:</strong> магазин AdjaraPeak
        </p>
        <p>
          💰 <strong>Стоимость:</strong> 80₾ лари
        </p>
        <p className={styles["note"]}>
          (бронь по 50% предоплате, не возвращается при отмене)
        </p>
      </section>

      <hr />

      <section className={styles["checklist"]}>
        <h2 className={styles["subtitle-uch"]}>⚠️ Что взять с собой:</h2>
        <ul>
          <li>• Удобную треккинговую обувь</li>
          <li>• Воду (1.5 л), лёгкий перекус</li>
          <li>• Плед или сидушку</li>
          <li>• Трекинговые палки — желательно (аренда онлайн)</li>
          <li>• Всё лишнее можно оставить в машине</li>
        </ul>
      </section>

      <p className={styles["contact"]}>
        🔗 Чтобы записаться или задать вопрос — пиши{" "}
        <strong>
          Лео |{" "}
          <a
            href="https://t.me/molmeena"
            target="_blank"
            rel="noopener noreferrer"
          >
            @molmeena
          </a>
        </strong>
      </p>
    </div>
  );
};
