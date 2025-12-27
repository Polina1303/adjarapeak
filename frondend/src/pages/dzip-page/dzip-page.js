import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import style from "./dzip-page.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const DzipPage = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <>
      <div className={style["back-button-cover"]}>
        <button className={style["back-button"]} onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} />
          {languages === "RU" ? "Назад" : "Back"}
        </button>
      </div>

      <h2>ИНДИВИДУАЛЬНЫЙ ПРЕМИАЛЬНЫЙ ТРАНСФЕР НА ГОРНОЛЫЖНЫЙ КУРОРТ</h2>

      <div className={style["capacity-badge"]}>🚗 До 4 человек</div>

      <section className={style["format-section"]}>
        <h2>Форматы поездки</h2>

        <div className={style["format-card"]}>
          <h3 className={style["format-title"]}>1 день — 600 лари</h3>
          <ul className={style["format-list"]}>
            <li>Трансфер от вашего дома и обратно</li>
            <li>Сопровождение на курорте</li>
            <li>Опытный водитель-владелец авто</li>
            <li>Вы сами выбираете время старта и возвращения</li>
          </ul>
        </div>

        <div className={style["format-card"]}>
          <h3 className={style["format-title"]}>2 дня — 1000 лари</h3>
          <ul className={style["format-list"]}>
            <li>Трансфер от вашего дома и обратно</li>
            <li>Сопровождение на курорте</li>
            <li>Опытный водитель-владелец авто</li>
            <li>Вы сами выбираете время старта и возвращения</li>
            <li>Возможность проживания вне курорта</li>
            <li>Утренние заброски на курорт</li>
            <li>Поездка на замерзшее Зелёное озеро (по желанию)</li>
          </ul>
          <p className={style["note"]}>* без проживания</p>
        </div>
      </section>

      <section className={style["advantages-section"]}>
        <h2>Что важно знать</h2>
        <ul className={style["advantages-list"]}>
          <li>
            Опытный водитель — он же владелец автомобиля, знает все дороги и
            особенности
          </li>
          <li>
            Полная свобода — вы сами выбираете время старта, возвращения,
            остановок и маршрута
          </li>
          <li>Старт от вашего дома — никаких сборов в условленных местах</li>
          <li>
            Приватность — никаких посторонних пассажиров, только ваша компания
          </li>
          <li>
            Удобство со снаряжением— при бронировании снаряжения у нас, водитель
            сам заберёт его в прокате и доставит обратно.
          </li>
        </ul>
      </section>

      <section className={style["philosophy-section"]}>
        <h2>Наша философия</h2>
        <p className={style["philosophy-text"]}>
          Никакой спешки. Только комфорт, приватность и максимум свободы. Вы
          отдыхаете — мы заботимся обо всём остальном.
        </p>
      </section>

      <section className={style["gallery-section"]}>
        <h2>Наши поездки</h2>
        <div className={style["image-gallery"]}>
          <Image
            ref={ref}
            className={style["gallery-image"]}
            src="/imageTrip/dzip1.jpg"
            alt="dzip1"
            width={400}
            height={400}
          />
          <Image
            ref={ref}
            width={400}
            height={400}
            src="/imageTrip/dzip2.jpg"
            alt="dzip2"
            className={style["gallery-image"]}
          />
          <Image
            ref={ref}
            width={400}
            height={400}
            src="/imageTrip/dzip3.jpg"
            alt="dzip3"
            className={style["gallery-image"]}
          />
          <Image
            ref={ref}
            className={style["gallery-image"]}
            width={400}
            height={400}
            src="/imageTrip/dzip4.jpg"
            alt="dzip4"
          />
        </div>
      </section>

      <div className={style["booking-section"]}>
        <h3>Готовы к комфортной поездке?</h3>
        <p>Забронируйте трансфер прямо сейчас</p>
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
