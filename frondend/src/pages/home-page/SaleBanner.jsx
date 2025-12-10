import React from "react";
import { useRouter } from "next/router";
import styles from "./SaleBanner.module.css";
import saleB from "./saleB.JPG";

export const SaleBanner = () => {
  const router = useRouter();

  const handleClickSale = () => router.push("/discount");

  return (
    <section onClick={handleClickSale} className={styles.saleHero} aria-label="Акция">
      <div className={styles.saleHeroContent}>
        <span className={styles.saleHeroBadge}>Акция до 30.09</span>

        <h2 className={styles.saleHeroTitle}>
          Осенняя распродажа — <span>до -50% на снаряжение</span>
        </h2>

        <p className={styles.saleHeroText}>
          Туристическое, горнолыжное и спортивное. Только до конца месяца —
          успей забрать своё по лучшей цене.
        </p>

        <a
          onClick={handleClickSale}
          className={styles.saleHeroBtn}
          // href="/catalog?discount=true"
        >
          Купить со скидкой сейчас
        </a>
      </div>

      <div className={styles.saleHeroArt} aria-hidden="true">
        <img src={saleB} alt="" loading="lazy" />
      </div>
    </section>
  );
};
