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
import end from "./image/end.jpg";
import svan from "./image/svan.jpg";
import { useInView } from "react-intersection-observer";

const events = [
  {
    date: "Ежедневно",
    title: "Трансфер",
    description:
      "Если вы предпочитаете путешествовать самостоятельно, мы с радостью предоставим услугу трансфера!",
    price: "-",
    image: auto,
    link: "/transfer",
  },
  {
    date: "15 февраля",
    title: "Однодневный выезд в Годердзи. НЕТ МЕСТ",
    description:
      "Ищете способ провести день в снегу, бюджетно и без ночевки? Мы подготовили решение.",
    price: "130",
    image: goder,
    link: "/one_day_trip",
  },
  {
    date: "15 февраля",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
  },
  {
    date: "15-16 февраля",
    title: "Двухдневный выезд в Годердзи. МЕСТ НЕТ",
    description:
      "Проживание в отеле Forest Villa завтрак и сауна включены. Сопровождение на курорте.",
    price: "350",
    image: goder2,
    link: "/two_day_trip",
  },
  {
    date: "16 февраля",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
  },
  {
    date: "22 февраля",
    title: "Однодневный выезд в Годердзи. Cвободно 12/35 мест",
    description:
      "Ищете способ провести день в снегу, бюджетно и без ночевки? Последний выезд в Годердзи на 1 день в этом сезоне.",
    price: "130",
    image: goder,
    link: "/one_day_trip",
  },
  {
    date: "22 февраля",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
  },
  {
    date: "22-23 февраля. НЕТ МЕСТ",
    title: "Двухдневный выезд в Годердзи",
    description:
      "Проживание в отеле Forest Villa завтрак и сауна включены. Сопровождение на курорте.",
    price: "350",
    image: goder2,
    link: "/two_day_trip",
  },
  {
    date: "23 февраля",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
  },
  {
    date: "28 февраля-02 марта",
    title: "Сванети на 2 ночи",
    description: "В разработке",
    price: "-",
    image: svan,
    link: "/",
  },
  {
    date: "1 марта",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
  },
  {
    date: "2 марта",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
  },
  {
    date: "7-09 марта",
    title: "Сванети на 2 ночи",
    description: "В разработке",
    price: "",
    image: svan,
    link: "/",
  },
  {
    date: "8 марта",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
  },
  {
    date: "9 марта",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
  },
  {
    date: "15 марта",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
  },
  {
    date: "16 марта",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
  },
  {
    date: "14-16 марта ИЛИ 21-23 марта",
    title: "Масштабное закрытие сезона на 150 человек",
    description:
      "В партнерстве с другими организаторами! 3 дня! Первые 50 билетов со скидкой! Полноценный анонс позже.",
    price: "-",
    image: end,
    link: "/end-season",
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
        {/* <h2 className="event-schedule-title">
          Расписание мероприятий на Февраль
        </h2> */}
        <h2 className="event-schedule-title">
          <span className="orange-line"> Расписание </span>{" "}
          <span className="orange-line"> мероприятий </span>{" "}
          <span className="orange-box">на</span>{" "}
          <span className="orange-line">февраль и март</span>
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
                title={`${event.date}`} // Combining date and title
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
