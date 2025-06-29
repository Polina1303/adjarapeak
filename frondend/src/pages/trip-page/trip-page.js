// };

import React, { useState } from "react";
import { Card, Button } from "antd";
import { motion } from "framer-motion";
import "./trip-page.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import rock1 from "./image/rock1.WEBP";
import rock2 from "./image/rock2.JPG";
import martvili from "./image/martvili.jpeg";
import gomismta from "./image/gomismta.jpg";
import latevra from "./image/latevra.jpg";
import nardevan from "./image/nardevan.jpg";
import vashlovani from "./image/vashlovani.jpg";
import beshumi from "./image/beshumi.jpg";
import tobo from "./image/tobo.webp";
import Hihani from "./image/Hihani.JPG";
import uchkho from "./image/uchkho.JPG";
import tago from "./image/tago.webp";
import bakhmaro from "./image/bakhmaro.JPG";
import tbikeli from "./image/tbikeli.JPG";
import TEA from "./image/TEA.jpg";
import lake from "./image/lake.JPG";
import kazbek from "./image/kazbek.JPG";
import see from "./image/see.JPG";
import kappadokia from "./image/kappadokia.jpeg";
import { useInView } from "react-intersection-observer";
import { GuidesSection } from "./guides-section/GuidesSection";

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
    date: "5 июля",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "5 июля",
    title: "Хихани и озёра Шуамта",
    description:
      "Однодневная прогулка к старинным крепостям и к высокогорным озёрам Шуамта (к ним уже по желанию). Маршрут | 14 км, 850 набора и сброса высоты (5 км и 500 набора и сброса высоты, если идти только на крепость). Гид Лео.",
    price: "95",
    image: Hihani,
    link: "/hikhani",
    type: "group",
    leo: true,
  },
  {
    date: "6 июля",
    title: "ГомисМта + пикник + поход на гору ДидиВаке",
    description:
      "Однодневный выезд с походом и пикником в горную деревню на высоте более 2 тысяч метров, закат в море  облаков. Маршрут | 10 км, 350 набора и сброса высоты. Гид Лео.",
    price: "95",
    image: gomismta,
    link: "/",
    type: "group",
    leo: true,
  },
  {
    date: "6 июля",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "12–13 июля",
    title: " Таго – глемпинг с комфортными условиями и ночевкой в палатках",
    description:
      "Двухдневный выезд с палатками, в оборудованном кемпинге с цивилизованным душем, туалетом и инфраструктурой Маршрут | Озеро Оцинари и хребет с панорамными видами на кавказский хребет (12 км и 650 набора и сброса высоты). Гид Лео.",
    price: "190",
    image: tago,
    link: "/",
    type: "group",
    leo: true,
  },
  {
    date: "12 июля",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "13 июля",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "19 июля",
    title: "Бахмаро + пикник + гора Гадрекили",
    description:
      "Однодневная хайкинг-поездка с пикником в высокогорную деревню на высоте более 2000 метров, известную своим чистым и целебным воздухом Маршрут | 8 км, 550 набора и сброса высоты. Гид Лео.",
    price: "95",
    image: bakhmaro,
    link: "/",
    type: "group",
    leo: true,
  },
  {
    date: "19 июля",
    title: "Каньон Балда, водопады Тоба и Ониоре.",
    description:
      "Невероятный хайк на границе Рачи, Имерети и Самегрело.Протяженность 12 км в одну сторону | 24 км с возвращением на место старта, 690 м набора и сброса высоты. Пикник с красивейшим видом на горных хребет. Гид Юля.",
    price: "140",
    image: tobo,
    link: "/",
    type: "group",
  },
  {
    date: "19 июля",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
    type: "rockClimbing",
  },

  {
    date: "20 июля",
    title: "Учхо",
    description:
      "Высокогорное, тайное озеро на высоте 1700+ метров с живописной природой и местной фауной. Маршрут | 18 км, 1200 м набора и сброса высоты. Гид Лео.",
    price: "80",
    image: uchkho,
    link: "/",
    type: "group",
    leo: true,
  },
  {
    date: "20 июля",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "26–27 июля",
    title: "Озеро Тбикели с палатками",
    description:
      "Двухдневный поход и ночёвка на озере Тбикели со стартом маршрута из Джвариминдори — оборудованный кемпинг на высоте более двух тысяч метров с панорамными видами. Маршрут | 30 км, 1300 набора и сброса высоты . Гид Лео.",
    price: "290",
    image: tbikeli,
    link: "/",
    type: "group",
    leo: true,
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
  // {
  //   date: "16 августа",
  //   title: "Гомис Мта",
  //   description: "Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
  //   price: "-",
  //   image: gomismta,
  //   link: "/",
  //   type: "group",
  // },
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
    filter === "all"
      ? events.filter((event) => event.type !== "rockClimbing")
      : events.filter((event) => event.type === filter);

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
            commentMore
            actions
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
                    {event.leo ? (
                      <a
                        href="https://t.me/molmeena"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Записаться
                      </a>
                    ) : (
                      <a
                        href="https://t.me/shpaksn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Записаться
                      </a>
                    )}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <GuidesSection />
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
