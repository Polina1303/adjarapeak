import { useState, useEffect } from "react";
// import { HitSales } from "../../components/hit-sales";
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
import thermose from "../../components/image/thermose9.jpg";
import knife from "../../components/image/knife6.jpg";
import chair from "../../components/image/chairBig.jpg";
import buff from "../../components/image/buff3.jpg";
import poncho from "../../components/image/raincoutBlack.jpg";
import sunglasses from "../../components/image/sunglasses.jpg";
import binokl from "../../components/image/binokl3.jpg";
import main from "../../components/image/main1.jpg";
import rent from "../../components/image/rent.jpg";
import mattress from "../../components/image/mattressIntex2.jpg";
import hermo from "../../components/image/trekking-su-gecirmez-sikistirma-kilif-25-litre.jpg";
import termoryukzak from "../../components/image/kamp-esnek-sogutucu-10l.jpg";
import sublimates from "../../components/image/sublimates.jpg";
import supboard from "../../components/image/supruneed.jpg";
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

  useEffect(() => {
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
  const handleClickTent = () => {
    navigate("/tent");
  };
  const handleClickSleepingbag = () => {
    navigate("/sleepingbag");
  };
  const handleClickBackpack = () => {
    navigate("/backpack");
  };
  const handleClickLantern = () => {
    navigate("/lantern");
  };
  const handleClickGas = () => {
    navigate("/gas");
  };
  const handleClickMat = () => {
    navigate("/mat");
  };
  const handleClickTrekkingsticks = () => {
    navigate("/trekkingsticks");
  };
  const handleClickDishes = () => {
    navigate("/dishes");
  };
  const handleClickThermos = () => {
    navigate("/thermos");
  };
  const handleClickKnife = () => {
    navigate("/knife");
  };
  const handleClickChair = () => {
    navigate("/chair");
  };
  const handleClickBuff = () => {
    navigate("/buff");
  };
  const handleClickRaincoat = () => {
    navigate("/raincoat");
  };
  const handleClickSunglasses = () => {
    navigate("/sunglasses");
  };
  const handleClickAir = () => {
    navigate("/air");
  };
  const handleClickHermo = () => {
    navigate("/hermo");
  };
  const handleClickAccessories = () => {
    navigate("/accessories");
  };

  const handleClickTermoryukzak = () => {
    navigate("/termoryukzak");
  };
  const handleClickSublimates = () => {
    navigate("/sublimates");
  };
  const handleClickSupboard = () => {
    navigate("/supboard ");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,

    prevArrow: <CustomNextArrow />,
    nextArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="home-page__container">
      <SliderMain />
      <div className="home-page__container-title">
        <h2>Основные категории</h2>
      </div>
      {isMobile ? (
        <div
          className="categories"
          style={{
            height: "100%",
            display: "flex",
          }}
        >
          <div ref={ref} className="categories-item" onClick={handleClickSale}>
            <a href="/sale">
              <img
                src={rent}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Продажа снаряжения
                </div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickRent}>
            <a href="/rent">
              <img
                src={main}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Прокат снаряжения
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickSublimates}
          >
            <a href="/sublimates">
              <img
                src={sublimates}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Походная еда</div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickTent}>
            <a href="/tent">
              <img
                src={tent}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Палатки</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickSleepingbag}
          >
            <a href="/sleepingbag">
              <img
                src={sleepingBag}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Спальные мешки</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickBackpack}
          >
            <a href="/backpack">
              <img
                src={backpack}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Рюкзаки</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickLantern}
          >
            <a href="/lantern">
              <img
                src={lantern}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Фонари</div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickGas}>
            <a href="/gas">
              <img
                src={burnerGas}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Газ / горелки</div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickMat}>
            <a href="/mat">
              <img
                src={mat}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Коврики / карематы
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickTrekkingsticks}
          >
            <a href="/trekkingsticks">
              <img
                src={trekking}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Треккинговые палки
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickDishes}
          >
            <a href="/dishes">
              <img
                src={camping}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Посуда</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickThermos}
          >
            <a href="/thermos">
              <img
                src={thermose}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Термосы / кружки
                </div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickKnife}>
            <a href="/knife">
              <img
                src={knife}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Ножи</div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickChair}>
            <a href="/chair">
              <img
                src={chair}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Стулья</div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickBuff}>
            <a href="/buff">
              <img
                src={buff}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Баффы / балаклавы
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickRaincoat}
          >
            <a href="/raincoat">
              <img
                src={poncho}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Дождевики / чехлы
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickSunglasses}
          >
            <a href="/sunglasses">
              <img
                src={sunglasses}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Солнцезащитные очки
                </div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickAir}>
            <a href="/air">
              <img
                src={mattress}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Надувная продукция
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickAccessories}
          >
            <a href="/accessories">
              <img
                src={binokl}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Аксессуары</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickSupboard}
          >
            <a href="/supboard">
              <img
                src={supboard}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">SUP-доски</div>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <Slider {...settings}>
          <div ref={ref} className="categories-item" onClick={handleClickSale}>
            <a href="/sale">
              <img
                src={rent}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Продажа снаряжения
                </div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickRent}>
            <a href="/rent">
              <img
                src={main}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Прокат снаряжения
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickSublimates}
          >
            <a href="/sublimates">
              <img
                src={sublimates}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Сублиматы</div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickTent}>
            <a href="/tent">
              <img
                src={tent}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Палатки</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickSleepingbag}
          >
            <a href="/sleepingbag">
              <img
                src={sleepingBag}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Спальные мешки</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickBackpack}
          >
            <a href="/backpack">
              <img
                src={backpack}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Рюкзаки</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickLantern}
          >
            <a href="/lantern">
              <img
                src={lantern}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Фонари</div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickGas}>
            <a href="/gas">
              <img
                src={burnerGas}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Газ / горелки</div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickMat}>
            <a href="/mat">
              <img
                src={mat}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Коврики / карематы
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickTrekkingsticks}
          >
            <a href="/trekkingsticks">
              <img
                src={trekking}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Треккинговые палки
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickDishes}
          >
            <a href="/dishes">
              <img
                src={camping}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Посуда</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickThermos}
          >
            <a href="/thermos">
              <img
                src={thermose}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Термосы / кружки
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickTermoryukzak}
          >
            <a href="/termoryukzak">
              <img
                src={termoryukzak}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Терморюкзак</div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickKnife}>
            <a href="/knife">
              <img
                src={knife}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Ножи</div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickChair}>
            <a href="/chair">
              <img
                src={chair}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Стулья</div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickBuff}>
            <a href="/buff">
              <img
                src={buff}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Баффы / балаклавы
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickRaincoat}
          >
            <a href="/raincoat">
              <img
                src={poncho}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Дождевики / чехлы
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickSunglasses}
          >
            <a href="/sunglasses">
              <img
                src={sunglasses}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Солнцезащитные очки
                </div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickAir}>
            <a href="/air">
              <img
                src={mattress}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                  Надувная продукция
                </div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickHermo}>
            <a href="/air">
              <img
                src={hermo}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Гермомешки</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickAccessories}
          >
            <a href="/accessories">
              <img
                src={binokl}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">Аксессуары</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickSupboard}
          >
            <a href="/supboard">
              <img
                src={supboard}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">SUP-доски</div>
              </div>
            </a>
          </div>
        </Slider>
      )}

      {/* </div> */}
      {/* <HitSales /> */}
      <Routes />
      <RulesPage />
      <ChooseUs />
    </div>
  );
};
