import { useState } from "react";
// import { HitSales } from "../../components/hit-sales";
import { ChooseUs } from "../../components/chooseus";
import { Routes } from "../../components/routes/routes";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { MdOutlineArrowLeft, MdArrowRight } from "react-icons/md";
import { RulesPage } from "../rules-page";
import "./home-page.css";
import { Slider } from "../../components/slider";
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

export const HomePage = () => {
  const navigate = useNavigate();

  const { ref } = useInView({
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
  const handleClickAccessories = () => {
    navigate("/accessories");
  };
  const [sliderIndex, setSliderIndex] = useState(0);

  const handelClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };

  return (
    <div className="home-page__container">
      <Slider />
      <div className="home-page__container-title">
        <h2>Основные категории</h2>
        <div className="arrow-cover">
          <div className="arrow-cover-left" onClick={() => handelClick("left")}>
            <MdOutlineArrowLeft className="arrow-categories" />
          </div>
          <div
            className="arrow-cover-right"
            onClick={() => handelClick("rigth")}
          >
            <MdArrowRight className="arrow-categories" />
          </div>
        </div>
      </div>
      <div
        className="categories"
        style={{
          height: "100%",
          display: "flex",
          transition: "all 1.5s ease",
          transform: `translateX(${sliderIndex * -1200}px)`,
        }}
      >
        <div ref={ref} className="categories-item" onClick={handleClickSale}>
          <a href="/sale">
            <img src={rent} alt="adjara peak" className="categories-item-img" />
            <div className="categories-item-title">
              <div className="categories-item-title_back">
                Продажа снаряжения
              </div>
            </div>
          </a>
        </div>
        <div ref={ref} className="categories-item" onClick={handleClickRent}>
          <a href="/rent">
            <img src={main} alt="adjara peak" className="categories-item-img" />
            <div className="categories-item-title">
              <div className="categories-item-title_back">
                Прокат снаряжения
              </div>
            </div>
          </a>
        </div>
        <div ref={ref} className="categories-item" onClick={handleClickTent}>
          <a href="/tent">
            <img src={tent} alt="adjara peak" className="categories-item-img" />
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
        <div ref={ref} className="categories-item" onClick={handleClickLantern}>
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
            <img src={mat} alt="adjara peak" className="categories-item-img" />
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
        <div ref={ref} className="categories-item" onClick={handleClickDishes}>
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
        <div ref={ref} className="categories-item" onClick={handleClickThermos}>
          <a href="/thermos">
            <img
              src={thermose}
              alt="adjara peak"
              className="categories-item-img"
            />
            <div className="categories-item-title">
              <div className="categories-item-title_back">Термосы / кружки</div>
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
            <img src={buff} alt="adjara peak" className="categories-item-img" />
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
      </div>
      {/* <HitSales /> */}
      <Routes />
      <RulesPage />
      <ChooseUs />
    </div>
  );
};
