import React from "react";
import "./SaleBanner.css";

export const SaleBanner = () => {
  return (
    <section className="sale-hero" aria-label="Акция">
      <div className="sale-hero__content">
        <span className="sale-hero__badge">Акция</span>

        <h2 className="sale-hero__title">
          Осенняя распродажа — <span>-30% на снаряжение</span>
        </h2>

        <p className="sale-hero__text">
          Туристическое, горнолыжное и спортивное. Только до конца недели —
          успей забрать своё по лучшей цене.
        </p>

        <a className="sale-hero__btn" href="/catalog?discount=true">
          Купить со скидкой сейчас
        </a>
      </div>

      <div className="sale-hero__art" aria-hidden="true">
        <img src="/images/promo/peak-gear.jpg" alt="" loading="lazy" />
      </div>
    </section>
  );
};
