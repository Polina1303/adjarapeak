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
    localStorage.setItem("activeType", 0);
    localStorage.setItem("activeTypeSale", 0);

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
    navigate("/trip");
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
          <span class="orange-line"> Туристическое</span>{" "}
          <span class="orange-box">и</span>{" "}
          <span class="orange-line"> горнолыжное </span>{" "}
          <span class="orange-line">снаряжение</span>
        </p>
        <p class="sub-title-alt">
          <span class="highlight-alt">Горнолыжный сезон 2024–2025 </span>
          <span class="orange-box"> открыт!</span>
        </p>
      </div>
      <div className="home-page__container-title">
        <h2>ЗАБРОНИРУЙ, пока не расхватали!</h2>
      </div>

      <div class="sale-container">
        <div ref={ref} onClick={handleClickTrip} class="sale-item">
          <a href="/trip">
            <img src={del} alt="adjara peak" class="sale-img" />
            <div class="sale-info">
              <div class="sale-title">
                <span class="highlight-sale">Горнолыжные</span>
                <br /> выезды с Adjara Peak
              </div>
            </div>
          </a>
        </div>
        <div ref={ref} onClick={handleClickRentSky} class="sale-item">
          <a href="/rent_ski">
            <img src={sky} alt="adjara peak" class="sale-img" />
            <div class="sale-info">
              <div class="sale-title">
                <span class="highlight-sale">Прокат</span>горнолыжного
                снаряжения
              </div>
            </div>
          </a>
        </div>

        <div ref={ref} onClick={handleClickSale} class="sale-item">
          <a href="/sale">
            <img src={eq} alt="adjara peak" class="sale-img" />
            <div class="sale-info">
              <div class="sale-title">
                <span class="highlight-rent">Продажа</span>
                <br /> снаряжения{" "}
              </div>
            </div>
          </a>
        </div>
        <div ref={ref} onClick={handleClickRent} class="sale-item">
          <a href="/rent">
            <img src={eq2} alt="adjara peak" class="sale-img" />
            <div class="sale-info">
              <div class="sale-title">
                <span class="highlight-rent">Прокат</span>туристического
                снаряжения
              </div>
            </div>
          </a>
        </div>
      </div>
      <section className="service-section">
        <h2 className="routes-title">Сервисное обслуживание</h2>
        <table className="service-table">
          <thead>
            <tr>
              <th>Услуга</th>

              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Комплексное обслуживание - заточка кантов, чистка скользящей
                поверхности, снятие старого парафина, нанесение нового (парафины
                от +3 до -20, с шагом 6 градусов)
              </td>

              <td>~ 80 лари</td>
            </tr>
            <tr>
              <td>Заточка кантов</td>

              <td>~ 40 лари</td>
            </tr>
            <tr>
              <td>Консервация</td>

              <td>~ 35 лари</td>
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
