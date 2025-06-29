import React from "react";
import "./hihani-page.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const HikhaniTripPage = () => {
  const history = useNavigate();

  return (
    <div className="trip-container">
      <button className="back-button" onClick={() => history(-1)}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>
      <h1 className="trip-title">5 июля | КРЕПОСТЬ ХИХАНИ и озёра ШУАМТА</h1>
      <p className="trip-subtitle">
        Старинная крепость с панорамными видами на кавказский хребет +
        высокогорные живописные озёра Шуамта.
      </p>

      <section className="trip-section">
        <h2>🚐 Описание маршрута</h2>
        <p>
          Нам предстоит доехать до пограничного пункта на границе с Турцией.
          Пройдём КПП (обязательно нужен загранпаспорт!), получим разрешения и
          отправимся в путь к Хихани — старинной крепости Абусеридзе с
          захватывающими видами на Кавказский хребет.
        </p>
        <p>
          Дорога хорошая, и уже через полчаса начнётся подъём по оборудованной
          тропе с лестницами и разметкой.
        </p>
        <p>
          Наверху у крепости сделаем привал с пикником, а затем спустимся
          обратно к КПП и продолжим маршрут к живописным высокогорным озёрам
          Шуамта.
        </p>
      </section>

      <section className="trip-section">
        <h2>❓ Что включено</h2>
        <ul>
          <li>Трансфер с ожиданием: Батуми — крепость Хихани — Батуми</li>
          <li>
            Сопровождение в хайке до крепости и озёр (~10 км, ~740 м набора)
          </li>
          <li>Сопровождение двух гидов и фотограф</li>
          <li>Оформление пропуска в приграничную зону</li>
          <li>Общий пикник у крепости: чай, кофе, фрукты, сладости</li>
          <li>Остановки по дороге: пирожковая лавка с магазином и туалетом</li>
          <li>Профессиональные фотографии на память 📸</li>
        </ul>
      </section>

      <section className="trip-section">
        <h2>📅 Детали</h2>
        <p>
          <strong>Когда:</strong> 05.07 (сб) в 08:00
        </p>
        <p>
          <strong>Место сбора:</strong> магазин AdjaraPeak
        </p>
        <p>
          <strong>Стоимость:</strong> 95₾ (бронь 50% предоплата, не возвращается
          при отмене)
        </p>
      </section>

      <section className="trip-section">
        <h2>⚠️ Что взять с собой</h2>
        <ul>
          <li>Загранпаспорт для оформления разрешения</li>
          <li>Воду (1 л), перекус на себя</li>
          <li>Удобную обувь, головной убор, ветровку</li>
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
