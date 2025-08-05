import { useState, useEffect } from "react";
import { HitSales } from "../../components/hit-sales";
import { LycianWay } from "../../components/lycian-way";
import { RockClimbing } from "../../components/rock-сlimbing/rock-сlimbing";
import { CertificatesSection } from "../../components/сertificates-section/сertificates-section";
import { ChooseUs } from "../../components/chooseus";
import { Routes } from "../../components/routes/routes";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { MdOutlineArrowLeft, MdArrowRight } from "react-icons/md";
import { RulesPage } from "../rules-page";
import "./home-page.css";

import sport from "./sport.webp";
import sea from "./sea.webp";
import sky from "./sele.webp";
// import sky from "./snow.webp";
import eq from "./sale.webp";
import eq2 from "./rent.webp";
import del from "./tour.webp";
import food from "./food2.webp";
import img1 from "./IMG_7669.JPG";
import img2 from "./IMG_7671.JPG";

import { useSelector } from "react-redux";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 630);
  const languages = useSelector((state) => state.languages.currentLanguages);

  useEffect(() => {
    localStorage.removeItem("activeType");
    localStorage.removeItem("activeTypeSale");
    localStorage.removeItem("searchQuery");
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 630);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  const handleClickSaleFood = () => navigate("/sale_food");
  const handleClickSale = () => navigate("/sale");
  const handleClickSaleSea = () => navigate("/sale_sea");
  const handleClickSportSale = () => navigate("/sport_sale");
  const handleClickRent = () => navigate("/rent");
  const handleClickRentSky = () => navigate("/rent_ski");
  const handleClickTrip = () => navigate("/");

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="home-page__container">
      <div className="header-section-alt">
        <h2 className="rental-name">Adjara Peak</h2>
        <p className="main-title-alt">
          {languages === "RU" ? (
            <>
              <span className="orange-line">Туристическое, </span>
              <span className="orange-line">горнолыжное </span>
              <span className="orange-box"> и </span>
              <span className="orange-line"> спортивное</span>
              <span className="orange-line">снаряжение</span>
            </>
          ) : (
            <>
              <span className="orange-line">Tourist, </span>
              <span className="orange-line">ski, </span>
              <span className="orange-box">and</span>
              <span className="orange-line"> sports</span>
              <span className="orange-line">equipment</span>
            </>
          )}
        </p>

        <p className="sub-title-alt">
          <span className="highlight-alt">
            {languages === "RU"
              ? "Центр твоих приключений. "
              : "The hiking season "}
          </span>
          <span>
            {languages === "RU" ? "Всё для спорта и туризма." : "is open!"}
          </span>
        </p>
      </div>

      <div className="sale-container">
        <div ref={ref} onClick={handleClickSale} className="sale-item">
          <a href="/sale">
            <img src={eq} alt="adjara peak" className="sale-img" />
            <div className="sale-info">
              <div className="sale-title">
                <span className="highlight-rent">
                  {languages === "RU" ? "Продажа" : "Sale"}
                </span>
                <br />
                {languages === "RU"
                  ? "туристического снаряжения"
                  : "of tourist equipment"}
              </div>
            </div>
          </a>
        </div>

        <div ref={ref} onClick={handleClickRent} className="sale-item">
          <a href="/rent">
            <img src={eq2} alt="adjara peak" className="sale-img" />
            <div className="sale-info">
              <div className="sale-title">
                <span className="highlight-rent">
                  {languages === "RU" ? "Прокат" : "Rental"}
                </span>
                <br />
                {languages === "RU"
                  ? "туристического снаряжения"
                  : "of tourist equipment"}
              </div>
            </div>
          </a>
        </div>
        <div ref={ref} onClick={handleClickSaleSea} className="sale-item">
          <a href="/sale_sea">
            <img src={sea} alt="adjara peak" className="sale-img" />
            <div className="sale-info">
              <div className="sale-title">
                <span className="highlight-rent">
                  {languages === "RU" ? "Продажа" : "Sale"}
                </span>
                <br />
                {languages === "RU" ? "водного снаряжения" : "of equipment"}
              </div>
            </div>
          </a>
        </div>
        <div ref={ref} onClick={handleClickSportSale} className="sale-item">
          <a href="/sport_sale">
            <img src={sport} alt="adjara peak" className="sale-img" />
            <div className="sale-info">
              <div className="sale-title">
                <span className="highlight-rent">
                  {languages === "RU" ? "Продажа" : "Sale"}
                </span>
                <br />
                {languages === "RU" ? "спортивного снаряжения" : "of equipment"}
              </div>
            </div>
          </a>
        </div>
        <div ref={ref} onClick={handleClickSaleFood} className="sale-item">
          <a href="/sale_food">
            <img src={food} alt="adjara peak" className="sale-img" />
            <div className="sale-info">
              <div className="sale-title">
                <span className="highlight-rent">
                  {languages === "RU" ? "Продажа" : "Sale"}
                </span>
                <br />
                {languages === "RU" ? "походной еды и кофе" : ""}
              </div>
            </div>
          </a>
        </div>
        <div ref={ref} onClick={handleClickTrip} className="sale-item">
          <a href="/trip">
            <img src={del} alt="adjara peak" className="sale-img" />
            <div className="sale-info">
              <div className="sale-title">
                <span className="highlight-sale">
                  {languages === "RU" ? "Расписание" : "Schedule"}
                </span>
                <br />
                {languages === "RU" ? "мероприятий" : "of events"}
                <br />
                {languages === "RU" ? "с Adjara Peak" : "with Adjara Peak"}
              </div>
            </div>
          </a>
        </div>
        {
          <div ref={ref} onClick={handleClickRentSky} className="sale-item">
            <a href="/rent_ski">
              <img src={sky} alt="adjara peak" className="sale-img" />
              <div className="sale-info">
                <div className="sale-title">
                  <span className="highlight-sale">
                    {languages === "RU" ? "Подарочные" : "Rental"}
                  </span>
                  <br />
                  {languages === "RU"
                    ? "сертификаты на снаряжения"
                    : "of ski equipment"}
                </div>
              </div>
            </a>
          </div>
        }
      </div>
      {/* <CertificatesSection /> */}
      <RockClimbing />
      <Routes />
      <RulesPage />
      <ChooseUs />
    </div>
  );
};

{
  /* <div ref={ref} onClick={handleClickRentSky} className="sale-item">
          <a href="/rent_ski">
            <img src={sky} alt="adjara peak" className="sale-img" />
            <div className="sale-info">
              <div className="sale-title">
                <span className="highlight-sale">
                  {languages === "RU" ? "Прокат" : "Rental"}
                </span>
                <br />
                {languages === "RU"
                  ? "горнолыжного снаряжения"
                  : "of ski equipment"}
              </div>
            </div>
          </a>
        </div> */
}

{
  /* <section className="service-section">
        <h2 className="routes-title">
          {languages === "RU"
            ? "Сервисное обслуживание"
            : "Maintenance service"}
        </h2>
        <table className="service-table">
          <thead>
            <tr>
              <th>{languages === "RU" ? "Услуга" : "Service"}</th>

              <th>{languages === "RU" ? "Цена" : "Price"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {languages === "RU"
                  ? "Комплексное обслуживание - заточка кантов, чистка скользящей поверхности, снятие старого парафина, нанесение нового (парафины от +3 до -20, с шагом 6 градусов)"
                  : "Comprehensive Service - Edge sharpening, base cleaning, old wax removal, and new wax application (wax range from +3°C to -20°C, in 6-degree increments)."}{" "}
              </td>

              <td>~ 80 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
            <tr>
              <td>Заточка кантов</td>

              <td>~ 40 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
            <tr>
              <td>Консервация</td>

              <td>от 20 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
          </tbody>
        </table>

        <button className="rent-rules-button" onClick={toggleModal}>
          <h3 className="rent-rules-title">ПОСМОТРЕТЬ ФОТО РАБОТЫ</h3>
        </button>

        {isOpen && (
          <div className="modal-overlay" onClick={toggleModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()} // Чтобы клик внутри окна не закрывал его
            >
              <button className="close-button" onClick={toggleModal}>
                ×
              </button>
              <div className="images-container">
                <img src={img2} alt="Image 1" className="modal-image" />
                <img src={img1} alt="Image 2" className="modal-image" />
              </div>
            </div>
          </div>
        )}
      </section> */
}

{
  /* <HitSales /> */
}
{
  /* <LycianWay/> */
}
