// import React from "react";
// import "./trip-page.css";
// import { useNavigate } from "react-router-dom";
// import { IoIosArrowBack } from "react-icons/io";
// import photo1 from "./IMG_8516.JPG";
// import photo2 from "./IMG_8526.JPG";
// import photo3 from "./IMG_8178.jpg";

// export const TripPage = () => {
//   const history = useNavigate();
//   const navigate = useNavigate();

//   const handleClickOneDayTrip = () => {
//     navigate("/one_day_trip");
//   };
//   const handleClickTwoDayTrip = () => {
//     navigate("/two_day_trip");
//   };
//   const handleClickTransfer = () => {
//     navigate("/transfer");
//   };
//   return (
//     <div className="back-button-cover">
//       <button className="back-button" onClick={() => history(-1)}>
//         <IoIosArrowBack size={"25px"} /> Назад
//       </button>
//       <div className="container">
//         {/* Первый блок */}
//         <div className="tour-option">
//           <img
//             onClick={handleClickOneDayTrip}
//             src={photo1}
//             alt="Однодневный выезд"
//             className="tour-image-vertical"
//           />
//           <p className="tour-text">
//             Однодневный выезд в Гадердзи (каждую субботу)
//           </p>
//           <p
//             onClick={handleClickOneDayTrip}
//             style={{ marginTop: 10 }}
//             className="routes-item-page"
//           >
//             Узнать подробнее
//           </p>
//         </div>

//         {/* Второй блок */}
//         <div className="tour-option">
//           <img
//             onClick={handleClickTwoDayTrip}
//             src={photo2}
//             alt="Двудневный выезд"
//             className="tour-image-vertical"
//           />
//           <p className="tour-text">
//             Двудневный выезд в Гадердзи (каждую субботу-воскресенье)
//           </p>
//           <p
//             onClick={handleClickTwoDayTrip}
//             style={{ marginTop: 10 }}
//             className="routes-item-page"
//           >
//             Узнать подробнее
//           </p>
//         </div>
//         <div className="tour-option">
//           <img
//             onClick={handleClickTransfer}
//             src={photo3}
//             alt="Двудневный выезд"
//             className="tour-image-vertical"
//           />
//           <p className="tour-text">
//             Предоставляем трансфер для поездок в удобное время!
//           </p>

//           <p
//             style={{ marginTop: 10 }}
//             onClick={handleClickTransfer}
//             className="routes-item-page"
//           >
//             Узнать подробнее
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { Card, Button } from "antd";
import { motion } from "framer-motion";
import "./trip-page.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import goder from "./image/IMG_8516.JPG";
import rock from "./image/rock.jpg";
import goder2 from "./image/IMG_8526.JPG";

const events = [
  {
    date: "1 февраля",
    title: "Однодневный выезд в Годердзи",
    description:
      "Ищете способ провести день в снегу, бюджетно и без ночевки? Мы подготовили решение",
    price: "130",
    image: goder,
    link: "/one_day_trip",
  },
  {
    date: "1 февраля",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock,
    link: "/rockClimbing",
  },
  {
    date: "1-2 февраля",
    title: "Двудневный выезд в Годердзи",
    description:
      "Проживание в отеле Forest Villa завтрак и сауна включены. Сопровождение на курорте.",
    price: "350",
    image: goder2,
    link: "/two_day_trip",
  },
  {
    date: "2 февраля",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock,
    link: "/rockClimbing",
  },
  {
    date: "8 февраля",
    title: "Однодневный выезд в Годердзи",
    description:
      "Ищете способ провести день в снегу, бюджетно и без ночевки? Мы подготовили решение",
    price: "130",
    image: goder,
    link: "/one_day_trip",
  },
  {
    date: "8 февраля",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock,
    link: "/rockClimbing",
  },
  {
    date: "8-9 февраля",
    title: "Двудневный выезд в Годердзи",
    description:
      "Проживание в отеле Forest Villa завтрак и сауна включены. Сопровождение на курорте.",
    price: "350",
    image: goder2,
    link: "/two_day_trip",
  },
  {
    date: "9 февраля",
    title: "Скалолазание",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock,
    link: "/rockClimbing",
  },
  {
    date: "15 февраля",
    title: "Однодневный выезд в Годердзи",
    description:
      "Ищете способ провести день в снегу, бюджетно и без ночевки? Мы подготовили решение",
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
    image: rock,
    link: "/rockClimbing",
  },
  {
    date: "15-16 февраля",
    title: "Двудневный выезд в Годердзи",
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
    image: rock,
    link: "/rockClimbing",
  },
  {
    date: "22 февраля",
    title: "Однодневный выезд в Годердзи",
    description:
      "Ищете способ провести день в снегу, бюджетно и без ночевки? Мы подготовили решение",
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
    image: rock,
    link: "/rockClimbing",
  },
  {
    date: "22-23 февраля",
    title: "Двудневный выезд в Годердзи",
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
    image: rock,
    link: "/rockClimbing",
  },
];

export const TripPage = () => {
  const history = useNavigate();
  const navigate = useNavigate();
  const handleLearnMoreClick = (link) => {
    navigate(link); // Navigate to the event-specific page
  };
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
          <span class="orange-line"> Расписание </span>{" "}
          <span class="orange-line"> мероприятий </span>{" "}
          <span class="orange-box">на</span>{" "}
          <span class="orange-line">Февраль</span>
        </h2>
        <div className="card-grid">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card title={event.date} bordered={false} className="card-item">
                <div className="card-header">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="card-image"
                  />
                  <h3 className="card-title">{event.title}</h3>
                </div>
                <p className="card-description">{event.description}</p>
                <p className="card-price">Цена: {event.price} лари</p>
                <div className="card-buttons">
                  <Button
                    className="button"
                    onClick={() => handleLearnMoreClick(event.link)}
                  >
                    Узнать больше
                  </Button>
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
