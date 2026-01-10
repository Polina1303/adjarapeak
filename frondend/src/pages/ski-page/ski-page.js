import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import style from "./ski-page.module.css";
import { SwiperPhoto } from "../../components/swiper";

const photos = [
  "/imageTrip/skitour1.jpg",
  "/imageTrip/skitour2.jpg",
  "/imageTrip/skitour3.jpg",
  "/imageTrip/skitour4.jpg",
  "/imageTrip/skitour5.jpg",
  "/imageTrip/skitour6.jpg",
];

export const SkiPage = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);
  const router = useRouter();

  return (
    <>
      <div className={style["back-button-cover"]}>
        <button className={style["back-button"]} onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} />
          {languages === "RU" ? "Назад" : "Back"}
        </button>
      </div>

      <h2>ГОРНОЛЫЖНЫЙ ТУР В ГОДЕРДЗИ ОДНОДНЕВНЫЙ</h2>

      <SwiperPhoto photos={photos} />
      <section className={style["format-section"]}>
        <h2>Формат тура</h2>

        <div className={style["format-card"]}>
          <h3 className={style["format-title"]}>1 день — 120 лари</h3>
          <ul className={style["format-list"]}>
            <li>Катание на горнолыжном курорте Годердзи</li>
            <li>Гибкий тайминг без спешки</li>
            <li>Сопровождение на протяжении всей поездки</li>
          </ul>
        </div>
      </section>

      <section className={style["advantages-section"]}>
        <h2>Что включено</h2>
        <ul className={style["advantages-list"]}>
          <li>Организованный тур без лишней суеты</li>
          <li>Подходит как новичкам, так и опытным райдерам</li>
          <li>Возможность взять снаряжение и инструктора</li>
        </ul>
      </section>

      <section className={style["format-section"]}>
        <h2>Дополнительно</h2>

        <div className={style["format-card"]}>
          <h3 className={style["format-title"]}>Прокат</h3>
          <ul className={style["format-list"]}>
            <li>
              Прокат комплекта — 70 лари (сноуборд + крепления, ботинки, шлем,
              маска ИЛИ лыжи, ботинки, палки, шлем, маска)
            </li>
          </ul>
        </div>

        <div className={style["format-card"]}>
          <h3 className={style["format-title"]}>Инструктор</h3>
          <ul className={style["format-list"]}>
            <li>Лыжи или сноуборд</li>
            <li>1 час — 120 лари</li>
            <li>Подходит для любого уровня</li>
          </ul>
        </div>
      </section>

      <section className={style["philosophy-section"]}>
        <h2>Наша философия</h2>
        <p className={style["philosophy-text"]}>
          Комфортный горнолыжный день без толп, спешки и хаоса. Вы катаетесь —
          мы организуем всё остальное.
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
