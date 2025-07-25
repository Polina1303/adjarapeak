import React from "react";
import "../hihani-page/hihani-page.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const KazbegPage = () => {
  const history = useNavigate();

  return (
    <div className="trip-container">
      <button className="back-button" onClick={() => history(-1)}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>
      <h1 className="trip-title">Маленькая группа — максимум 6 человек</h1>
      <p className="trip-subtitle">💶 Стоимость — 700 €</p>

      <div className="trip-section">
        <h2>В стоимость входит всё необходимое:</h2>
        <ul>
          <li>Проживание в гостевом доме (первый и последний день)</li>
          <li>Место в палатке (2–3 человека)</li>
          <li>Полноценное трёхразовое питание + перекусы</li>
          <li>Заброска на маршрут и трансфер по окончании</li>
          <li>Работа гида</li>
          <li>
            Медаль и сертификат о восхождении — только тем, кто действительно
            был на вершине
          </li>
        </ul>
      </div>

      <div className="trip-section">
        <h2>❌ Не включено:</h2>
        <ul>
          <li>Дорога до Степанцминды</li>
          <li>
            Личное снаряжение (у нас действует скидка 20% в Adjara Peak — на
            всё, кроме обуви и одежды)
          </li>
          <li>Праздничный ужин после возвращения — по желанию, 40 лари</li>
        </ul>
      </div>

      <div className="trip-section">
        <h2>💪🏻 О гиде:</h2>
        <p>
          С вами пойдёт Александр — сертифицированный инструктор, член Федерации
          альпинизма.
          <br />
          За плечами — десятки маршрутов по Кавказу, в том числе Казбек,
          Эльбрус, Тетнульди, Оштен, Фишт.
          <br />
          Образование, альпинистские разряды, курсы первой помощи, а главное —
          умение работать с людьми: Саша организовывает и ведёт занятия по
          скалолазанию с нами уже второй год. Он умеет держать маршрут и
          команду, поддерживать и направлять там, где это нужно.
        </p>
      </div>

      <div className="trip-contact">
        🔗 Чтобы записаться или задать вопрос — пиши:{" "}
        <a href="https://t.me/shpaksn" target="_blank" rel="noreferrer">
          @shpaksn
        </a>
      </div>
    </div>
  );
};
