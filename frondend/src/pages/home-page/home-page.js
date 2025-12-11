import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { RockClimbing } from "../../components/rock-сlimbing";
import { ChooseUs } from "../../components/chooseus";
import { Routes } from "../../components/routes/routes";
import { useInView } from "react-intersection-observer";
import RulesPage from "../rules-page";
import styles from "./home-page.module.css";
// import { SaleBanner } from "./SaleBanner";

// import sport from "./sport.webp";
// import clothes from "./sea.webp";
// import sea from "./sea2.webp";
// import food from "./food2.webp";

import { useSelector } from "react-redux";

export const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const languages = useSelector((state) => state.languages.currentLanguages);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 630);
      localStorage.removeItem("activeType");
      localStorage.removeItem("activeTypeSale");
      localStorage.removeItem("searchQuery");

      const handleResize = () => setIsMobile(window.innerWidth <= 630);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  const { ref } = useInView({ threshold: 0, triggerOnce: true });

  const isRU = languages === "RU";

  return (
    <div className={styles.homePageContainer}>
      <header className={styles.headerSectionAlt}>
        <h1 className={styles.rentalName}>Adjara Peak</h1>

        <p
          className={styles.mainTitleAlt}
          aria-label={
            isRU
              ? "Туристическое горнолыжное и спортивное снаряжение"
              : "Tourist, ski and sports equipment"
          }
        >
          {isRU ? (
            <>
              <span className={styles.orangeLine}>Туристическое, </span>
              <span className={styles.orangeLine}>горнолыжное </span>
              <span className={styles.orangeBox}>и</span>
              <span className={styles.orangeLine}> спортивное</span>
              <span className={styles.orangeLine}> снаряжение</span>
            </>
          ) : (
            <>
              <span className={styles.orangeLine}>Tourist, </span>
              <span className={styles.orangeLine}>ski </span>
              <span className={styles.orangeBox}>and</span>
              <span className={styles.orangeLine}> sports</span>
              <span className={styles.orangeLine}> equipment</span>
            </>
          )}
        </p>

        <p className={styles.subTitleAlt}>
          <span className={styles.highlightAlt}>
            {isRU ? "Центр твоих приключений. " : "The hiking season "}
          </span>
          <span>{isRU ? "Всё для спорта и туризма." : "is open!"}</span>
        </p>
      </header>

      <section
        className={styles.saleContainer}
        aria-label={isRU ? "Разделы магазина" : "Store sections"}
      >
        <article ref={ref} className={styles.saleItem}>
          <Link href="sale/alpinesking" className={styles.saleCard}>
            <img
              loading="lazy"
              src="/img/sale.webp"
              alt="Tourist equipment sale"
              className={styles.saleImg}
            />

            <div className={styles.saleInfo}>
              <h3 className={styles.saleTitle}>
                <span className={styles.highlightRent}>
                  {isRU ? "Купить" : "Sale"}
                </span>
                <br />
                {isRU ? "снаряжения" : "of tourist equipment"}
              </h3>
            </div>
          </Link>
        </article>

        <article className={styles.saleItem}>
          <Link href="/rent/skiRental" className={styles.saleCard}>
            <img
              loading="lazy"
              src="/img/rent.webp"
              alt="Tourist equipment rental"
              className={styles.saleImg}
            />
            <div className={styles.saleInfo}>
              <h3 className={styles.saleTitle}>
                <span className={styles.highlightRent}>
                  {isRU ? "Арендовать" : "Rental"}
                </span>
                <br />
                {isRU ? "снаряжения" : "of tourist equipment"}
              </h3>
            </div>
          </Link>
        </article>

        <article className={styles.saleItem}>
          <Link href="/trip" className={styles.saleCard}>
            <img
              loading="lazy"
              src="/img/tour.webp"
              alt="Travel booking"
              className={styles.saleImg}
            />
            <div className={styles.saleInfo}>
              <h3 className={styles.saleTitle}>
                <span className={styles.highlightSale}>
                  {isRU ? "Забронировать" : "Schedule"}
                </span>
                <br />
                {isRU ? "путешествие" : "of events"}
              </h3>
            </div>
          </Link>
        </article>
        <article className={styles.saleItem}>
          <Link href="/rent/skiRental" className={styles.saleCard}>
            <img
              loading="lazy"
              src="/img/snow.webp"
              alt="adjara peak"
              className={styles.saleImg}
            />
            <div className={styles.saleInfo}>
              <div className={styles.saleTitle}>
                <span className={styles.highlightSale}>
                  {languages === "RU" ? "Прокат" : "Rental"}
                </span>
                <br />
                {languages === "RU"
                  ? "горнолыжного снаряжения"
                  : "of ski equipment"}
              </div>
            </div>
          </Link>
        </article>
      </section>

      <RockClimbing />
      <Routes />
      <RulesPage />
      <ChooseUs />
    </div>
  );
};
