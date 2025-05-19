// };

import React from "react";
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
import TEA from "./image/TEA.jpg";
import lake from "./image/lake.JPG";
import kazbek from "./image/kazbek.JPG";
import see from "./image/see.JPG";
import Sairme from "./image/Sairme.JPG";
import kappadokia from "./image/kappadokia.jpeg";
import { useInView } from "react-intersection-observer";

const events = [
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
  {
    date: "В любой из дней по запросу",
    title: "День чая в горах Гурии",
    description:
      "Большая дегустация редких сортов премиального чая. Мастер-класс по изготовлению чая. *все включено (для детей 15% скидка) ",
    price: "200",
    image: TEA,
    link: "/",
  },
  {
    date: "В любой из дней по запросу",
    title: "Морское приключение на парусной яхте",
    description: "3 часа вокруг Батуми",
    price: "550",
    image: see,
    link: "/",
  },
  {
    date: "24 мая",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
  },
  {
    date: "25 мая",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
  },
  {
    date: "31 мая",
    title: "Саирме + Вани",
    description:
      "Трек к Sairme Pillars (столбам) — около 3 часов, с классными видами и небольшим набором — 386 метров. Расстояние 5 км, уровень легкий. После хайка – горячие источники и купание в Вани",
    price: "110",
    image: Sairme,
    link: "/",
  },
  {
    date: "31 мая",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
  },
  {
    date: "1 июня",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
  },
  {
    date: "7 июня",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
  },

  {
    date: "8 июня",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
  },
  {
    date: "14 июня",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
  },
  {
    date: "15 июня",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
  },
  {
    date: "2 августа - 11 августа",
    title: "Восхождение на Казбек",
    description: "Идёт подготовка тура. Предзапись уже открыта.",
    price: "-",
    image: kazbek,
    link: "/",
  },
  {
    date: "23 август -24 августа",
    title: "Озеро Тбикели (1 ночь)",
    description: "Идёт подготовка тура. Предзапись уже открыта.",
    price: "-",
    image: lake,
    link: "/",
  },
  {
    date: "Октябрь",
    title: "Каппадокия",
    description: "Идёт подготовка тура. Предзапись уже открыта.",
    price: "-",
    image: kappadokia,
    link: "/",
  },
];

export const TripPage = () => {
  const history = useNavigate();
  const navigate = useNavigate();
  const handleLearnMoreClick = (link) => {
    navigate(link); // Navigate to the event-specific page
  };
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="back-button-cover">
      <button className="back-button" onClick={() => history(-1)}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>
      <div className="event-schedule-container">
        <h2 className="event-schedule-title">
          <span className="orange-line"> Расписание </span>{" "}
          <span className="orange-line"> мероприятий </span>{" "}
          <span className="orange-box">на</span>{" "}
          <span className="orange-line">сезон</span>
        </h2>
        <div className="card-grid">
          {events.map((event, index) => (
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
                      onClick={() => handleLearnMoreClick(event.link)}
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
