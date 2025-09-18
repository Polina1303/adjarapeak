import React from "react";
import "./SaleBanner.css";
import saleB from "./saleB.JPG";
import { useNavigate } from "react-router-dom";

export const SaleBanner = () => {
  const navigate = useNavigate();

  const handleClickSale = () => navigate("/discount");

  return (
    <section onClick={handleClickSale} className="sale-hero" aria-label="Акция">
      <div className="sale-hero__content">
        <span className="sale-hero__badge">Акция до 30.09</span>

        <h2 className="sale-hero__title">
          Осенняя распродажа — <span>до -50% на снаряжение</span>
        </h2>

        <p className="sale-hero__text">
          Туристическое, горнолыжное и спортивное. Только до конца месяца —
          успей забрать своё по лучшей цене.
        </p>

        <a
          onClick={handleClickSale}
          className="sale-hero__btn"
          // href="/catalog?discount=true"
        >
          Купить со скидкой сейчас
        </a>
      </div>

      <div className="sale-hero__art" aria-hidden="true">
        <img src={saleB} alt="" loading="lazy" />
      </div>
    </section>
  );
};
