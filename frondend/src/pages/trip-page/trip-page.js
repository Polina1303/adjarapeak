// };

import React, { useState } from "react";
import { Card, Button } from "antd";
import { motion } from "framer-motion";
import "./trip-page.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import goder from "./image/IMG_8516.JPG";
import rock1 from "./image/rock1.WEBP";
import rock2 from "./image/rock2.JPG";
import auto from "./image/auto.jpg";
import goder2 from "./image/IMG_8526.JPG";
import end from "./image/photo_2024-04-01_15-31-09.jpg";
import svan from "./image/svan.jpg";
import astro from "./image/astro.jpg";
import martvili from "./image/martvili.jpeg";
import gomismta from "./image/gomismta.jpg";
import latevra from "./image/latevra.jpg";
import nardevan from "./image/nardevan.jpg";
import vashlovani from "./image/vashlovani.jpg";
import beshumi from "./image/beshumi.jpg";
import TEA from "./image/TEA.jpg";
import lake from "./image/lake.JPG";
import kazbek from "./image/kazbek.JPG";
import see from "./image/see.JPG";
import Sairme from "./image/Sairme.JPG";
import kappadokia from "./image/kappadokia.jpeg";
import { useInView } from "react-intersection-observer";

const events = [
  {
    date: "В любой из дней по запросу",
    title: "День чая в горах Гурии",
    description:
      "Большая дегустация редких сортов премиального чая. Мастер-класс по изготовлению чая. *все включено (для детей 15% скидка) ",
    price: "200",
    image: TEA,
    link: "/",
    type: "individual",
  },
  {
    date: "В любой из дней по запросу",
    title: "Морское приключение на парусной яхте",
    description: "3 часа вокруг Батуми",
    price: "550",
    image: see,
    link: "/",
    type: "individual",
  },

  {
    date: "14 июня",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "15 июня",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "19 июня-20 июня",
    title: "Астровыезд",
    description: "Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
    price: "-",
    image: astro,
    link: "/",
    type: "group",
  },
  {
    date: "21 июня",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "22 июня",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "28 июня",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "29 июня",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "2 августа - 3 августа",
    title: "Шуамтоба в Бешуми + хайк с ночевкой или на один день",
    description:
      "В высокогорном селе Бешуми в Аджарии проходит народный праздник «Шуамтоба», символизирующий завершение полевых работ и подъем в горы на летние пастбища. Праздник сопровождается песнями, танцами, традиционными угощениями и спортивными состязаниями, включая скачки. Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
    price: "-",
    image: beshumi,
    link: "/",
    type: "group",
  },
  {
    date: "2 августа - 11 августа",
    title: "Восхождение на Казбек",
    description: "Идёт подготовка тура. Предзапись уже открыта.",
    price: "-",
    image: kazbek,
    link: "/",
    type: "group",
  },
  {
    date: "9 августа - 10 августа",
    title: "Каньон Мартивили (водопады Тоби и Ориони)",
    description:
      "С ночевкой или без. Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
    price: "-",
    image: martvili,
    link: "/",
    type: "group",
  },
  {
    date: "16 августа",
    title: "Гомис Мта",
    description: "Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
    price: "-",
    image: gomismta,
    link: "/",
    type: "group",
  },
  {
    date: "23 август -24 августа",
    title: "Озеро Тбикели (1 ночь)",
    description: "Идёт подготовка тура. Предзапись уже открыта.",
    price: "-",
    image: lake,
    link: "/",
    type: "group",
  },

  {
    date: "13 сентября",
    title: "Латевра (Гобронети) 1320м",
    description: "Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
    price: "-",
    image: latevra,
    link: "/",
    type: "group",
  },
  {
    date: "20 сентября",
    title: "Крепость Нардевани",
    description:
      "2360 км, длина маршрута: 14 км. Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
    price: "-",
    image: nardevan,
    link: "/",
    type: "group",
  },
  {
    date: "4 октября - 5 октября",
    title: "Вашловани",
    description:
      "Выезд из Тбилиси в субботу и возвращение в воскресенье в Тбилиси. Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
    price: "-",
    image: vashlovani,
    link: "/",
    type: "group",
  },
  {
    date: "Октябрь",
    title: "Каппадокия",
    description: "Идёт подготовка тура. Предзапись уже открыта.",
    price: "-",
    image: kappadokia,
    link: "/",
    type: "group",
  },
];

export const TripPage = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState("all");

  const handleFilter = (type) => {
    setFilter(type);
  };

  const filteredEvents =
    filter === "all" ? events : events.filter((event) => event.type === filter);

  return (
    <div className="back-button-cover">
      <button className="back-button" onClick={() => navigate(-1)}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>

      <div className="event-schedule-container">
        <h2 className="event-schedule-title">
          <span className="tripe-text"> Расписание </span>{" "}
          <span className="tripe-text"> мероприятий </span>{" "}
          <span className="tripe-text">на</span>{" "}
          <span className="tripe-text">сезон</span>
        </h2>

        <div className="filter-buttons">
          <button
            className={`filter-button ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilter("all")}
          >
            Все туры
          </button>
          <button
            className={`filter-button ${
              filter === "individual" ? "active" : ""
            }`}
            onClick={() => handleFilter("individual")}
          >
            Индивидуальные
          </button>
          <button
            className={`filter-button ${filter === "group" ? "active" : ""}`}
            onClick={() => handleFilter("group")}
          >
            Групповые
          </button>
          <button
            className={`filter-button ${
              filter === "rockClimbing" ? "active" : ""
            }`}
            onClick={() => handleFilter("rockClimbing")}
          >
            Скалолазание
          </button>
        </div>

        <div className="card-grid">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                ref={ref}
                title={`${event.date}`}
                bordered={false}
                className="card-item"
              >
                <div className="card-header">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="card-image"
                  />
                  <h3 className="card-title">{event.title}</h3>
                </div>
                <p className="card-description">{event.description}</p>
                {event.price !== "-" && (
                  <p className="card-price">Цена: {event.price} лари</p>
                )}

                <div className="card-buttons">
                  {event.link !== "/" && (
                    <Button
                      className="button"
                      onClick={() => navigate(event.link)}
                    >
                      Узнать больше
                    </Button>
                  )}
                  <Button className="custom-button">
                    <a
                      href="https://t.me/shpaksn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Записаться
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// {
//   date: "Ежедневно",
//   title: "Трансфер",
//   description:
//     "Если вы предпочитаете путешествовать самостоятельно, мы с радостью предоставим услугу трансфера!",
//   price: "-",
//   image: auto,
//   link: "/transfer",
// },
// {
//   date: "15 февраля",
//   title: "Однодневный выезд в Годердзи. НЕТ МЕСТ",
//   description:
//     "Ищете способ провести день в снегу, бюджетно и без ночевки? Мы подготовили решение.",
//   price: "130",
//   image: goder,
//   link: "/one_day_trip",
// },
// {
//   date: "15 февраля",
//   title: "Скалолазание в Гонио",
//   description:
//     "Тренировки и маршруты для любого уровня – от новичков до любителей.",
//   price: "49",
//   image: rock1,
//   link: "/rockClimbing",
// },
// {
//   date: "15-16 февраля",
//   title: "Двухдневный выезд в Годердзи. МЕСТ НЕТ",
//   description:
//     "Проживание в отеле Forest Villa завтрак и сауна включены. Сопровождение на курорте.",
//   price: "350",
//   image: goder2,
//   link: "/two_day_trip",
// },
// {
//   date: "16 февраля",
//   title: "Скалолазание в Гонио",
//   description:
//     "Тренировки и маршруты для любого уровня – от новичков до любителей.",
//   price: "49",
//   image: rock2,
//   link: "/rockClimbing",
// },
// {
//   date: "22 февраля",
//   title: "Однодневный выезд в Годердзи. Cвободно 12/35 мест",
//   description:
//     "Ищете способ провести день в снегу, бюджетно и без ночевки? Последний выезд в Годердзи на 1 день в этом сезоне.",
//   price: "130",
//   image: goder,
//   link: "/one_day_trip",
// },
// {
//   date: "22 февраля",
//   title: "Скалолазание в Гонио",
//   description:
//     "Тренировки и маршруты для любого уровня – от новичков до любителей.",
//   price: "49",
//   image: rock1,
//   link: "/rockClimbing",
// },
// {
//   date: "22-23 февраля. НЕТ МЕСТ",
//   title: "Двухдневный выезд в Годердзи",
//   description:
//     "Проживание в отеле Forest Villa завтрак и сауна включены. Сопровождение на курорте.",
//   price: "350",
//   image: goder2,
//   link: "/two_day_trip",
// },
// {
//   date: "23 февраля",
//   title: "Скалолазание в Гонио",
//   description:
//     "Тренировки и маршруты для любого уровня – от новичков до любителей.",
//   price: "49",
//   image: rock2,
//   link: "/rockClimbing",
// },

// {
//   date: "7-9 марта",
//   title: "Сванети на 2 ночи",
//   description: "В разработке",
//   price: "",
//   image: svan,
//   link: "/",
// },
// {
//   date: "6 сентября - 7 сентября",
//   title: "Гомис Мта",
//   description: "Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
//   price: "-",
//   image: gomismta,
//   link: "/",
// },
