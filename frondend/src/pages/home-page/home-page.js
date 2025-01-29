import { useState, useEffect } from "react";
import { HitSales } from "../../components/hit-sales";
import { LycianWay } from "../../components/lycian-way";
import { RockClimbing } from "../../components/rock-сlimbing/rock-сlimbing";
import { ChooseUs } from "../../components/chooseus";
import { Routes } from "../../components/routes/routes";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { MdOutlineArrowLeft, MdArrowRight } from "react-icons/md";
import { RulesPage } from "../rules-page";
import "./home-page.css";

import sky from "../../components/image/sky.png";
import eq from "../../components/image/eq (1).png";
import eq2 from "../../components/image/eq3.png";
import del from "../../components/image/del.png";
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
    // localStorage.setItem("activeType", 0);
    // localStorage.setItem("activeTypeSale", 0);
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

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const handleClickSale = () => {
    navigate("/sale");
  };
  const handleClickRent = () => {
    navigate("/rent");
  };
  const handleClickRentSky = () => {
    navigate("/rent_ski");
  };
  const handleClickTrip = () => {
    navigate("/");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home-page__container">
      <div class="header-section-alt">
        <h2 class="rental-name">Adjara Peak</h2>
        <p class="main-title-alt">
          {languages === "RU" ? (
            <>
              <span class="orange-line"> Туристическое </span>{" "}
              <span class="orange-box">и</span>{" "}
              <span class="orange-line"> горнолыжное </span>{" "}
              <span class="orange-line">снаряжение</span>
            </>
          ) : (
            <>
              <span class="orange-line"> Tourist</span>{" "}
              <span class="orange-box">and</span>{" "}
              <span class="orange-line"> ski</span>{" "}
              <span class="orange-line">equipment</span>
            </>
          )}
        </p>
        <p class="sub-title-alt">
          <span class="highlight-alt">
            {languages === "RU"
              ? "Горнолыжный сезон 2024–2025"
              : "The 2024–2025 Ski Season is"}{" "}
          </span>
          <span class="orange-box">
            {" "}
            {languages === "RU" ? "открыт!" : "open!"}
          </span>
        </p>
      </div>
      <div className="home-page__container-title">
        <h2>
          {languages === "RU"
            ? "ЗАБРОНИРУЙ, пока не расхватали!"
            : "BOOK NOW Before It's Gone!"}
        </h2>
      </div>

      <div class="sale-container">
        <div ref={ref} onClick={handleClickTrip} class="sale-item">
          <a href="/trip">
            <img src={del} alt="adjara peak" class="sale-img" />
            <div class="sale-info">
              <div class="sale-title">
                <span class="highlight-sale">
                  {languages === "RU" ? "Горнолыжные" : "Ski Trips"}
                </span>
                <br />{" "}
                {languages === "RU"
                  ? "выезды с Adjara Peak"
                  : " with Adjara Peak"}
              </div>
            </div>
          </a>
        </div>
        <div ref={ref} onClick={handleClickRentSky} class="sale-item">
          <a href="/rent_ski">
            <img src={sky} alt="adjara peak" class="sale-img" />
            <div class="sale-info">
              <div class="sale-title">
                <span class="highlight-sale">
                  {languages === "RU" ? "Прокат" : "Rental"}
                </span>
                {languages === "RU" ? (
                  "горнолыжного снаряжения"
                ) : (
                  <>
                    <br /> ski equipment
                  </>
                )}
              </div>
            </div>
          </a>
        </div>

        <div ref={ref} onClick={handleClickSale} class="sale-item">
          <a href="/sale">
            <img src={eq} alt="adjara peak" class="sale-img" />
            <div class="sale-info">
              <div class="sale-title">
                <span class="highlight-rent">
                  {languages === "RU" ? "Продажа" : "Sales"}
                </span>
                <br /> {languages === "RU" ? "снаряжения" : "equipment"}{" "}
              </div>
            </div>
          </a>
        </div>
        <div ref={ref} onClick={handleClickRent} class="sale-item">
          <a href="/rent">
            <img src={eq2} alt="adjara peak" class="sale-img" />
            <div class="sale-info">
              <div class="sale-title">
                <span class="highlight-rent">
                  {" "}
                  {languages === "RU" ? "Прокат" : "Rental"}
                </span>
                {languages === "RU" ? (
                  "туристического снаряжения"
                ) : (
                  <>
                    <br />
                    tourist equipment
                  </>
                )}
              </div>
            </div>
          </a>
        </div>
      </div>
      <section className="service-section">
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

              <td>~ 35 {languages === "RU" ? "лари" : "gel"}</td>
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
      </section>

      {/* <HitSales /> */}
      {/* <LycianWay/> */}
      <RockClimbing />
      <Routes />
      <RulesPage />
      <ChooseUs />
    </div>
  );
};
