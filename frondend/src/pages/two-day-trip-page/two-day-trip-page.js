"use client";

import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useSelector } from "react-redux";
import style from "../ski-page/ski-page.module.css";
import { SwiperPhoto } from "../../components/swiper";

const photos = [
  "/imageTrip/IMG_8510.JPG",
  "/imageTrip/IMG_8523.JPG",
  "/imageTrip/IMG_8513.JPG",
  "/imageTrip/IMG_8524.JPG",
  "/imageTrip/IMG_8527.JPG",
  "/imageTrip/IMG_8521.JPG",
  "/imageTrip/IMG_8528.JPG",
];

const photosHotel = [
  "/imageTrip/IMG_7781.JPG",
  "/imageTrip/IMG_7874.JPG",
  "/imageTrip/IMG_7877.JPG",
  "/imageTrip/IMG_7878.JPG",
  "/imageTrip/IMG_8243.JPG",
  "/imageTrip/IMG_8244.JPG",
  "/imageTrip/IMG_8469.JPG",
];

export const TripPageTwoDay = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);
  const router = useRouter();

  return (
    <>
      <div className={style["back-button-cover"]}>
        {/* <button className={style["back-button"]} onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} />
          {languages === "RU" ? "Назад" : "Back"}
        </button> */}
      </div>

      <h1>ГОДЕРДЗИ С ADJARA PEAK</h1>
      <h2>Двухдневный выезд ~ 1 ночь</h2>
      <SwiperPhoto photos={photos} />

      <section className={style["advantages-section"]}>
        <h2>Что включено</h2>
        <ul className={style["advantages-list"]}>
          <li>
            ✔️ Раннее заселение — утром в субботу сразу заезжаем в отель,
            переодеваемся в номерах, а не в машине
          </li>
          <li>
            ✔️ Больше катания — два полноценных дня на горе! Как правило, этого
            достаточно, чтобы насладиться Годердзи в полной мере
          </li>
          <li>
            ✔️ Без спешки — на второй день вы можете выспаться, не нужно
            вставать в 6 утра, чтобы успеть к открытию канатки
          </li>
          <li>
            ✔️ Комфортный новый отель — тепло, чисто, уютно: душ, ресторан,
            возможность постирать и высушить вещи, заварить чай прямо в номере.
          </li>
          <li>✔️ Сауна — идеальный способ восстановиться после каталки.</li>
          <li>
            ✔️ Завтраки «шведский стол» — сытно и без поисков кафе, включены в
            стоимость.
          </li>
          <li>
            ✔️ Хорошая компания — с нами всегда собираются адекватные и
            интересные люди
          </li>
          <li>
            ✔️ Сопровождение на курорте — помимо водителя, с вами едет
            сопровождающий, который подскажет, поможет, и будет жить с вами в
            одном отеле.
          </li>
        </ul>
        <SwiperPhoto photos={photosHotel} />
      </section>

      {/* <section className={style["format-section"]}> */}

      <div className={style["format-card"]}>
        <h2 className={style["format-title"]}>
          🎿Снаряжение от Adjara Peak (не включено в стоимость)
        </h2>
        <ul className={style["format-list"]}>
          <li>• подбираем и подготавливаем всё заранее</li>
          <li>• не тратите время в прокатах на горе</li>
          <li>• приезжаете и сразу идёте кататься</li>
          <li>• помогаем с погрузкой и разгрузкой снаряжения</li>
          <li>✅всё снаряжение регулярно обслуживается</li>
        </ul>
      </div>

      <section className={style["philosophy-section"]}>
        <h2>Свободные места :</h2>
        <p className={style["philosophy-text"]}>
          — 3 места в двухместных студиях с раздельными кроватями ~ 400 лари
        </p>
        <p className={style["philosophy-text"]}>
          — 2 места в двухместной студии с общей кроватью и небольшой раскладным
          креслом (для пар и семей) ~ 720 за двоих / 870 за троих
        </p>
      </section>

      <div className={style["booking-section"]}>
        <h3>Готовы открыть сезон?</h3>
        <p>Записывайтесь на горнолыжный тур</p>
        <a
          href="https://t.me/shpaksn"
          target="_blank"
          rel="noreferrer"
          className={style["booking-button"]}
        >
          Забронировать
        </a>
      </div>
    </>
  );
};
