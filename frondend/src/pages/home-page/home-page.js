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

  return (
    <div className="home-page__container">
      <div class="header-section-alt">
        <h2 class="rental-name">AdjaraPeak</h2>
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
                <br /> выезды с AdjaraPeak
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

      {/* <HitSales /> */}
      {/* <LycianWay/> */}
      <RockClimbing />
      <Routes />
      <RulesPage />
      <ChooseUs />
    </div>
  );
};
