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
import { SliderMain } from "../../components/slider";
import tent from "../../components/image/cloudup2-green-210T.jpg";
import sleepingBag from "../../components/image/BTRACE_ZERO_L.png";
import backpack from "../../components/image/backpack11.jpg";
import lantern from "../../components/image/lantern_black.jpg";
import burnerGas from "../../components/image/burnerGas.jpg";
import mat from "../../components/image/mat_with_case.jpg";
import trekking from "../../components/image/trekkingsticks1.jpg";
import camping from "../../components/image/setForCamping.jpg";
import thermose from "../../components/image/botle2.jpg";
import knife from "../../components/image/knife6.jpg";
import chair from "../../components/image/chairBig.jpg";
import buff from "../../components/image/buff3.jpg";
import poncho from "../../components/image/raincoutBlack.jpg";
import sunglasses from "../../components/image/sunglasses.jpg";
import binokl from "../../components/image/binokl3.jpg";
import sky from "../../components/image/sky.png";
import eq from "../../components/image/eq (1).png";
import eq2 from "../../components/image/eq3.png";
import rent from "../../components/image/rent.jpg";
import mattress from "../../components/image/mattressIntex2.jpg";
import hermo from "../../components/image/trekking-su-gecirmez-sikistirma-kilif-25-litre.jpg";
import termoryukzak from "../../components/image/kamp-esnek-sogutucu-10l.jpg";
import sublimates from "../../components/image/sublimates.jpg";
import supboard from "../../components/image/supruneed.jpg";
import shoes from "../../components/image/shoes.png";
import drip from "../../components/image/drip.png";
import socks from "../../components/image/8641380-produ.jpg";
import { useSelector } from "react-redux";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => {
  return (
    <div className="arrow-categories-left" onClick={props.onClick}>
      <MdArrowRight size={25} className="slick-arrow" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  return (
    <div className="arrow-categories" onClick={props.onClick}>
      <MdOutlineArrowLeft size={25} className="slick-arrow" />
    </div>
  );
};

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

        <div ref={ref} onClick={handleClickRentSky} class="sale-item">
          <a href="/rent_ski">
            <img src={sky} alt="adjara peak" class="sale-img" />
            <div class="sale-info">
              <div class="sale-title">
                <span class="highlight-sale">Прокат</span> горнолыжного
                снаряжения
              </div>
            </div>
          </a>
        </div>

        <div ref={ref} onClick={handleClickRent} class="sale-item">
          <a href="/rent">
            <img src={eq2} alt="adjara peak" class="sale-img" />
            <div class="sale-info">
              <div class="sale-title">
                <span class="highlight-rent">Прокат</span> туристического
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
