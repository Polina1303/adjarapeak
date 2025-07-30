import React, { useState } from "react";
import { Card, Button } from "antd";
import { motion } from "framer-motion";
import "./trip-page.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import rock1 from "./image/rock1.WEBP";
import rock2 from "./image/rock2.JPG";
import martvili from "./image/martvili.jpeg";
import udziro from "./image/udziro.jpg";
import gomismta from "./image/gomismta.jpg";
import latevra from "./image/latevra.jpg";
import nardevan from "./image/nardevan.jpg";
import vashlovani from "./image/vashlovani.jpg";
import beshumi from "./image/beshumi.jpg";
import greenlake from "./image/greenlake.jpg";
import tago from "./image/tago.jpg";
import tobo from "./image/tobo.webp";
import mu from "./image/mu.jpg";
import Hihani from "./image/Hihani.JPG";
// import uchkho from "./image/uchkho.JPG";
// import tago from "./image/tago.webp";
import bakhmaro from "./image/bakhmaro.JPG";
import tbikeli from "./image/tbi.jpg";
import TEA from "./image/TEA.jpg";
import lake from "./image/lake.JPG";
import balda_canyon from "./image/balda_canyon.jpg";
import kazbek from "./image/kazbek.JPG";
import maga from "./image/maga.jpg";
import astro from "./image/astro.jpg";
import djava from "./image/djava.jpg";
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

  // {
  //   date: "6 июля",
  //   title: "ГомисМта + пикник + поход на гору ДидиВаке",
  //   description:
  //     "Однодневный выезд с походом и пикником в горную деревню на высоте более 2 тысяч метров, закат в море  облаков. Маршрут | 10 км, 350 набора и сброса высоты. Гид Лео.",
  //   price: "95",
  //   image: gomismta,
  //   link: "/",
  //   type: "group",
  //   leo: true,
  // },
  // {
  //   date: "6 июля",
  //   title: "Скалолазание в Гонио",
  //   description:
  //     "Тренировки и маршруты для любого уровня – от новичков до любителей.",
  //   price: "49",
  //   image: rock2,
  //   link: "/rockClimbing",
  //   type: "rockClimbing",
  // },
  // {
  //   date: "12–13 июля",
  //   title: " Таго – глемпинг с комфортными условиями и ночевкой в палатках",
  //   description:
  //     "Двухдневный выезд с палатками, в оборудованном кемпинге с цивилизованным душем, туалетом и инфраструктурой Маршрут | Озеро Оцинари и хребет с панорамными видами на кавказский хребет (12 км и 650 набора и сброса высоты). Гид Лео.",
  //   price: "190",
  //   image: tago,
  //   link: "/",
  //   type: "group",
  //   leo: true,
  // },

  // {
  //   date: "19 июля",
  //   title: "Скалолазание в Гонио",
  //   description:
  //     "Тренировки и маршруты для любого уровня – от новичков до любителей.",
  //   price: "49",
  //   image: rock1,
  //   link: "/rockClimbing",
  //   type: "rockClimbing",
  // },
  // {
  //   date: "20 июля",
  //   title: "Скалолазание в Гонио",
  //   description:
  //     "Тренировки и маршруты для любого уровня – от новичков до любителей.",
  //   price: "49",
  //   image: rock2,
  //   link: "/rockClimbing",
  //   type: "rockClimbing",
  // },

  // {
  //   date: "20 июля",
  //   title: "Учхо",
  //   description:
  //     "Высокогорное, тайное озеро на высоте 1700+ метров с живописной природой и местной фауной. Маршрут | 18 км, 1200 м набора и сброса высоты. Гид Лео.",
  //   price: "80",
  //   image: uchkho,
  //   link: "/uchkho",
  //   type: "group",
  //   leo: true,
  // },
  // {
  //   date: "26 июля",
  //   title: "Хихани и озёра Шуамта",
  //   description:
  //     "Однодневная прогулка к старинным крепостям и к высокогорным озёрам Шуамта (к ним уже по желанию). Маршрут | 14 км, 850 набора и сброса высоты (5 км и 500 набора и сброса высоты, если идти только на крепость). Гид Лео.",
  //   price: "90",
  //   image: Hihani,
  //   link: "/hikhani",
  //   type: "group",
  //   leo: true,
  // },
  // {
  //   date: "27 июля",
  //   title: "БАХМАРО и вершина ГАДРЕКИЛИ — к хребту, откуда виден Эльбрус",
  //   description:
  //     "Однодневная хайкинг-поездка с пикником в высокогорную деревню на высоте более 2000 метров, известную своим чистым и целебным воздухом Маршрут | 8 км, 550 набора и сброса высоты. Гид Лео.",
  //   price: "90",
  //   image: bakhmaro,
  //   link: "/",
  //   type: "group",
  //   leo: true,
  // },

  {
    date: "2 августа (сб)",
    title: "МагалМта с заброской к альпийский лугам",
    description:
      "Редкий маршрут с заброской на внедорожниках на высоту более 2 тысяч метров и подъём на вершину с шикарными панорамными видами на Кавказ и Турцию. Маршрут | 7 км, 350 м набора и сброса. ",
    price: "150",
    image: maga,
    link: "/",
    type: "group",
    leo: true,
  },
  {
    date: "2 августа (сб)",
    title: "Мартвили + тайное место для купания",
    description:
      "Комбинация живописных каньонов и купания в укромной локации — идеальный летний день. Лёгкая прогулка и купание.",
    price: "120",
    image: martvili,
    link: "/",
    type: "group",
  },
  {
    date: "2 августа (сб)",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
    type: "rockClimbing",
  },

  {
    date: "3 августа (вс)",
    title: "Гомисмта с закатом и морем облаков",
    description:
      "Единственный выезд в августе к «морю облаков» и в лёгкий поход на вершину Диди Ваке. Маршрут | 10 км, 350 м набора.",
    price: "100",
    image: gomismta,
    link: "/",
    type: "group",
    leo: true,
  },
  {
    date: "3 августа (вс)",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock2,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  // {
  //   date: "3 августа (вс)",
  //   title: "Джвариминдори – гора Тагинаури и альпийские луга",
  //   description:
  //     "Средней сложности маршрут с подъёмом на одну из самых высших гор всей Гурии. Маршрут | 7 км, 500 м набора и сброса.",
  //   price: "110",
  //   image: djava,
  //   link: "/",
  //   type: "group",
  //   leo: true,
  // },
  // {
  //   date: "2 августа - 3 августа",
  //   title: "Шуамтоба в Бешуми + хайк с ночевкой или на один день",
  //   description:
  //     "В высокогорном селе Бешуми в Аджарии проходит народный праздник «Шуамтоба», символизирующий завершение полевых работ и подъем в горы на летние пастбища. Праздник сопровождается песнями, танцами, традиционными угощениями и спортивными состязаниями, включая скачки. Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
  //   price: "-",
  //   image: beshumi,
  //   link: "/",
  //   type: "group",
  // },
  {
    date: "3–10 августа",
    title: "Восхождение на Казбек",
    description:
      "Маленькая группа — максимум 6 человек.Один из самых доступных пятитысячников Кавказа — и одновременно один из самых живописных. Если вы давно мечтали испытать себя в горах, это идеальный маршрут для первого восхождения. 7-дневная программа подойдёт даже новичкам.",
    price: "-",
    image: kazbek,
    link: "/kazbeg",
    type: "group",
  },

  {
    date: "9 августа (сб) ",
    title: "Крепость Хихани",
    description:
      "Однодневная прогулка к старинным крепостям и к высокогорным озёрам Шуамта (к ним уже по желанию). Маршрут | 14 км, 850 набора и сброса высоты (5 км и 500 набора и сброса высоты, если идти только на крепость). Гид Лео.",
    price: "100",
    image: Hihani,
    link: "/hikhani",
    type: "group",
    leo: true,
  },
  {
    date: "9–10 августа (сб–вс)",
    title: "Астровыезд + Рабат + Зелёное озеро",
    description:
      "Древние крепости, альпийское озеро и звёздный поток Персеиды — всё за два дня. Идеальная поездка для тех, кто хочет всё и сразу.",
    price: "400",
    image: astro,
    link: "/",
    type: "group",
  },
  {
    date: "9 августа (сб)",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "10 августа (вс)",
    title: "Джвариминдори – гора Тагинаури и альпийские луга",
    description:
      "Средней сложности маршрут с подъёмом на одну из самых высших гор всей Гурии. Маршрут | 7 км, 500 м набора и сброса.",
    price: "110",
    image: djava,
    link: "/",
    type: "group",
    leo: true,
  },
  {
    date: "10 августа (вс)",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  // {
  //   date: "9 августа - 10 августа",
  //   title: "Каньон Мартивили (водопады Тоби и Ориони)",
  //   description:
  //     "С ночевкой или без. Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
  //   price: "-",
  //   image: martvili,
  //   link: "/",
  //   type: "group",
  // },
  // {
  //   date: "10 августа (вс)",
  //   title: "Гомисмта с закатом и морем облаков",
  //   description:
  //     "Единственный выезд в августе к «морю облаков» и в лёгкий поход на вершину Диди Ваке.Маршрут | 10 км, 350 м набора.",
  //   price: "100",
  //   image: gomismta,
  //   link: "/",
  //   type: "group",
  //   leo: true,
  // },

  {
    date: "16-17 август (сб–вс)",
    title: "Озеро Тбикели с палатками",
    description:
      "Ночёвка у одного из самых красивых озёр Грузии — с классными видами, костром и звездным потоком Персеиды.Маршрут | 30 км, 1300 м набора (по 15км в день).",
    price: "250",
    image: tbikeli,
    link: "/",
    type: "group",
    leo: true,
  },
  {
    date: "16 августа (сб)",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "16 августа (сб) ",
    title: "Ущелье Балда и водопады",
    description:
      "Живописный маршрут к водопадам и каньону с тёплой водой окруженной лесами.",
    price: "120",
    image: balda_canyon,
    link: "/",
    type: "group",
  },
  {
    date: "17 августа (вс)",
    title: "Гора Мухелта (Годердзи)",
    description:
      "Живописный поход по лесам и хребтам с выходом на вершину горы Мухелта с панорамными и живописными видами. Маршрут | 12 км, 700 м набора и сброса ",
    price: "100",
    image: mu,
    link: "/",
    type: "group",
    leo: true,
  },
  {
    date: "17 августа (вс)",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "23 августа (сб)",
    title: "Зелёное озеро (опции: 1 день или с ночёвкой)",
    description:
      "Поездка к высокогорному альпийскому Зелёному озеру в Годердзи с походом к озеру Сабанела. Для тех, кто остаётся на ночь — вечер у костра с шашлыком под звёздным небом, а утром — новый трек к Чёрному озеру. Маршрут | 14 км. 100 лари (1 день) / 160 лари (с ночёвкой). ",
    price: "100",
    image: greenlake,
    link: "/",
    type: "group",
    leo: true,
  },
  {
    date: "23 августа (сб)",
    title: "Таго – озеро Оцинари",
    description:
      "Живописный однодневный маршрут с выходом к малоизвестному высокогорному озеру Оцинари.",
    price: "100",
    image: tago,
    link: "/",
    type: "group",
  },
  {
    date: "23 августа (сб)",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "24 августа (вс)",
    title: "Бахмаро – Гора Гадрекили.",
    description:
      "Однодневная хайкинг-поездка с пикником в высокогорную деревню на высоте более 2000 метров, известную своим чистым и целебным воздухом Маршрут | 8 км, 550 набора и сброса высоты. Гид Лео.",
    price: "100",
    image: bakhmaro,
    link: "/",
    type: "group",
    leo: true,
  },
  {
    date: "24 августа (вс)",
    title: "Скалолазание в Гонио",
    description:
      "Тренировки и маршруты для любого уровня – от новичков до любителей.",
    price: "49",
    image: rock1,
    link: "/rockClimbing",
    type: "rockClimbing",
  },
  {
    date: "29–31 августа (пт–вс) ",
    title: "Озеро  Удзиро",
    description:
      "Финальный выезд лета — озеро на высоте 2800+, один из самых известных треков в Раче. Многодневный маршрут (3 дня и 2 ночи). Еда включена в стоимость. ",
    price: "450",
    image: udziro,
    link: "/",
    type: "group",
    leo: true,
  },
  {
    date: "6–14 сентября",
    title: "Восхождение на Казбек",
    description:
      "Маленькая группа — максимум 6 человек.Один из самых доступных пятитысячников Кавказа — и одновременно один из самых живописных. Если вы давно мечтали испытать себя в горах, это идеальный маршрут для первого восхождения. 7-дневная программа подойдёт даже новичкам.",
    price: "-",
    image: kazbek,
    link: "/kazbeg",
    type: "group",
  },
  // {
  //   date: "13 сентября",
  //   title: "Латевра (Гобронети) 1320м",
  //   description: "Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
  //   price: "-",
  //   image: latevra,
  //   link: "/",
  //   type: "group",
  // },
  // {
  //   date: "20 сентября",
  //   title: "Крепость Нардевани",
  //   description:
  //     "2360 км, длина маршрута: 14 км. Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
  //   price: "-",
  //   image: nardevan,
  //   link: "/",
  //   type: "group",
  // },
  // {
  //   date: "4 октября - 5 октября",
  //   title: "Вашловани",
  //   description:
  //     "Выезд из Тбилиси в субботу и возвращение в воскресенье в Тбилиси. Идёт подготовка тура. Предзапись уже открыта. Гид Юлия.",
  //   price: "-",
  //   image: vashlovani,
  //   link: "/",
  //   type: "group",
  // },
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
