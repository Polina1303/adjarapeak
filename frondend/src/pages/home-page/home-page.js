import { useState, useEffect } from "react";
import { HitSales } from "../../components/hit-sales";
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
import main from "../../components/image/main1.jpg";
import rent from "../../components/image/rent.jpg";
import mattress from "../../components/image/mattressIntex2.jpg";
import hermo from "../../components/image/trekking-su-gecirmez-sikistirma-kilif-25-litre.jpg";
import termoryukzak from "../../components/image/kamp-esnek-sogutucu-10l.jpg";
import sublimates from "../../components/image/sublimates.jpg";
import supboard from "../../components/image/supruneed.jpg";
import shoes from "../../components/image/shoes.png";
import drip from '../../components/image/drip.png'
import socks from '../../components/image/8641380-produ.jpg'
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
    navigate("/bottle");
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
  const handleClickSocks = () => {
    navigate("/socks");
  };
  // const handleClickRaincoat = () => {
  //   navigate("/raincoat");
  // };
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
  const handleClickCoffee = () => {
    navigate("/coffee");
  };
  const handleClickSupboard = () => {
    navigate("/supboard");
  };
  const handleClickShoes = () => {
    navigate("/shoes");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,

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
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="home-page__container">
      <SliderMain />

      <div className="home-page__container-title">
      {/* <h3 style={{top:50}}>Cайт обновляется, актуальные цены уточняйте в <a href="https://t.me/shpaksn" target="_blank" rel="noreferrer" style={{color:'rgba(0, 136, 204)'}}>Telegram</a> <a  href="https://www.instagram.com/adjarapeak/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer" style={{color:'rgba(0, 136, 204)'}}>Instagram</a>  или по номеру телефона   <a href="tel:+995511147586">+995 511 147 586</a> </h3> */}

        <h2>{languages==="RU"?'Основные категории':"Primary categories"} </h2>
      </div>
      {isMobile ? (
        <div
          className="categories"
          style={{
            height: "100%",
            display: "flex",
            width:'100%',

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
                {languages==="RU"? 'Продажа снаряжения':"Sales equipment"}
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
                {languages==="RU"? 'Прокат снаряжения':"Rental equipment"}    
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickShoes}
          >
            <a href="/shoes">
              <img
                src={shoes}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">{languages==="RU"? 'Обувь':"Shoes"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Сублиматы':"Freeze-dried food"}</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickCoffee}
          >
            <a href="/coffee">
              <img
                src={drip}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">{languages==="RU"? 'Кофе дрип':"Coffee"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Палатки':"Tents"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Спальные мешки':"Sleeping bags"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Рюкзаки':"Backpacks"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Фонари':"Headlamps"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Газ / горелки':"Gas / burners"}</div>
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
                {languages==="RU"? 'Коврики / карематы':"Mats"} 
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
                {languages==="RU"? 'Треккинговые палки':"Trekking poles"} 
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
                <div className="categories-item-title_back">{languages==="RU"? 'Посуда':"Dishware"}</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickThermos}
          >
            <a href="/bottle">
              <img
                src={thermose}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                {languages==="RU"? 'Бутылки':"Bottles"}
                </div>
              </div>
            </a>
          </div>
          {/* <div
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
                {languages==="RU"? 'Термосы / кружки':"Thermos"}
                </div>
              </div>
            </a>
          </div> */}
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
                <div className="categories-item-title_back"> {languages==="RU"? 'Термос / Терморюкзак':"Thermal backpack"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Ножи':"Knives"}</div>
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
                <div className="categories-item-title_back">
                {languages==="RU"? 'Кемпинговая мебель':"Camping furniture"}
                </div>
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
                {languages==="RU"? 'Баффы / балаклавы':"Buffs / balaclavas"}    
                </div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickSocks}>
            <a href="/socks">
              <img
                src={socks}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                {languages==="RU"? 'Носки':"Socks"}    
                </div>
              </div>
            </a>
          </div>
          {/* <div
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
                {languages==="RU"? 'Дождевики / чехлы':"Raincoats"} 
                </div>
              </div>
            </a>
          </div> */}
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
                {languages==="RU"? 'Солнцезащитные очки':"Sunglasses"}  
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
                {languages==="RU"? 'Надувная продукция':"Inflatable product"} 
                </div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickHermo}>
            <a href="/hermo">
              <img
                src={hermo}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back"> {languages==="RU"? 'Дождевики и гермомешки':" Waterproof bags"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Аксессуары':"Accessories"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? ' SUP-доски':"SUP Boards"}</div>
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
                {languages==="RU"? 'Продажа снаряжения':"Sales equipment"}
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
                {languages==="RU"? 'Прокат снаряжения':"Rental equipment"}
                </div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickShoes}
          >
            <a href="/shoes">
              <img
                src={shoes}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">{languages==="RU"? 'Обувь':"Shoes"}</div>
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
                <div className="categories-item-title_back"> {languages==="RU"? 'Сублиматы':"Freeze-dried food"}</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickCoffee}
          >
            <a href="/coffee">
              <img
                src={drip}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">{languages==="RU"? 'Кофе дрип':"Coffee"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Палатки':"Tents"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Спальные мешки':"Sleeping bags"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Рюкзаки':"Backpacks"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Фонари':"Headlamps"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Газ / горелки':"Gas / burners"}</div>
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
                {languages==="RU"? 'Коврики / карематы':"Mats"} 
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
                {languages==="RU"? 'Треккинговые палки':"Trekking poles"} 
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
                <div className="categories-item-title_back">{languages==="RU"? 'Посуда':"Dishware"}</div>
              </div>
            </a>
          </div>
          <div
            ref={ref}
            className="categories-item"
            onClick={handleClickThermos}
          >
            <a href="/bottle">
              <img
                src={thermose}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                {languages==="RU"? 'Бутылки':"Bottles"}
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
                <div className="categories-item-title_back"> {languages==="RU"? 'Термос / Терморюкзак':"Thermal backpack"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Ножи':"Knives"}</div>
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
                <div className="categories-item-title_back">
                {languages==="RU"? 'Кемпинговая мебель':"Camping furniture"}    
                </div>
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
                {languages==="RU"? 'Баффы / балаклавы':"Buffs / balaclavas"} 
                </div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickSocks}>
            <a href="/socks">
              <img
                src={socks}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">
                {languages==="RU"? 'Носки':"Socks"}    
                </div>
              </div>
            </a>
          </div>
          {/* <div
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
                {languages==="RU"? 'Дождевики / чехлы':"Raincoats"}  
                </div>
              </div>
            </a>
          </div> */}
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
                {languages==="RU"? 'Солнцезащитные очки':"Sunglasses"}  
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
                {languages==="RU"? 'Надувная продукция':"Inflatable product"}    
                </div>
              </div>
            </a>
          </div>
          <div ref={ref} className="categories-item" onClick={handleClickHermo}>
            <a href="/hermo">
              <img
                src={poncho}
                alt="adjara peak"
                className="categories-item-img"
              />
              <div className="categories-item-title">
                <div className="categories-item-title_back">{languages==="RU"? 'Дождевики и гермомешки':" Waterproof bags"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? 'Аксессуары':"Accessories"}</div>
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
                <div className="categories-item-title_back">{languages==="RU"? ' SUP-доски':"SUP Boards"}</div>
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
