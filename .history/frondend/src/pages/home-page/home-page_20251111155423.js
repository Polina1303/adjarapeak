import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { HitSales } from "../../components/hit-sales";
import { LycianWay } from "../../components/lycian-way";
import { RockClimbing } from "../../components/rock-сlimbing";
import { CertificatesSection } from "../../components/сertificates-section/сertificates-section";
import { ChooseUs } from "../../components/chooseus";
import { Routes } from "../../components/routes/routes";
import { useInView } from "react-intersection-observer";
import RulesPage from "../rules-page";
import styles from "./home-page.module.css";
import { SaleBanner } from "./SaleBanner";

import sport from "./sport.webp";
import clothes from "./sea.webp";
import sea from "./sea2.webp";
import sky from "./snow.webp";
import eq from "./sale.webp";
import eq2 from "./rent.webp";
import del from "./tour.webp";
import food from "./food2.webp";
import img1 from "./IMG_7669.JPG";
import img2 from "./IMG_7671.JPG";

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

  const handleClickSaleFood = () => router.push("/sale-food");
  const handleClickSale = () => router.push("/sale");
  const handleClickSaleSea = () => router.push("/sea-sale");
  const handleClickSportSale = () => router.push("/sport-sale");
  const handleClickRent = () => router.push("/rent");
  const handleClickRentSky = () => router.push("/rent-sky");
  const handleClickTrip = () => router.push("/");
  const handleClickСlothes = () => router.push("/clothes");

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((v) => !v);

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
          <Link href="/sale" className={styles.saleCard}>
            {/* <img
              loading="lazy"
              src={eq}
              alt="Tourist equipment sale"
              className={styles.saleImg}
            /> */}

            <Image
              loading="lazy"
              src={eq}
              alt="Tourist equipment sale"
              className={styles.saleImg}
              width={400}
              height={300}
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
          <Link href="/rent" className={styles.saleCard}>
            <img
              loading="lazy"
              src={eq2}
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
              src={del}
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
          <Link href="/rent-sky" className={styles.saleCard}>
            <img
              loading="lazy"
              src={sky}
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

// import { useState, useEffect } from "react";
// import { HitSales } from "../../components/hit-sales";
// import { LycianWay } from "../../components/lycian-way";
// import { RockClimbing } from "../../components/rock-сlimbing/rock-сlimbing";
// import { CertificatesSection } from "../../components/сertificates-section/сertificates-section";
// import { ChooseUs } from "../../components/chooseus";
// import { Routes } from "../../components/routes/routes";
// import { useNavigate } from "react-router-dom";
// import { useInView } from "react-intersection-observer";
// import { MdOutlineArrowLeft, MdArrowRight } from "react-icons/md";
// import { RulesPage } from "../rules-page";
// import "./home-page.css";
// import { SaleBanner } from "./SaleBanner";

// import sport from "./sport.webp";
// import clothes from "./sea.webp";
// import sea from "./sea2.webp";
// // import sky from "./sele.webp";
// import sky from "./sertif.jpg";
// // import sky from "./snow.webp";
// import eq from "./sale.webp";
// import eq2 from "./rent.webp";
// import del from "./tour.webp";
// import food from "./food2.webp";
// import img1 from "./IMG_7669.JPG";
// import img2 from "./IMG_7671.JPG";

// import { useSelector } from "react-redux";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export const HomePage = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 630);
//   const languages = useSelector((state) => state.languages.currentLanguages);

//   useEffect(() => {
//     localStorage.removeItem("activeType");
//     localStorage.removeItem("activeTypeSale");
//     localStorage.removeItem("searchQuery");
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 630);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const navigate = useNavigate();
//   const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

//   const handleClickSaleFood = () => navigate("/sale_food");
//   const handleClickSale = () => navigate("/sale");
//   const handleClickSaleSea = () => navigate("/sale_sea");
//   const handleClickSportSale = () => navigate("/sport_sale");
//   const handleClickRent = () => navigate("/rent");
//   const handleClickRentSky = () => navigate("/certificate");
//   const handleClickTrip = () => navigate("/");
//   const handleClickСlothes = () => navigate("/clothes");

//   const [isOpen, setIsOpen] = useState(false);
//   const toggleModal = () => setIsOpen(!isOpen);

//   return (
//     <div className="home-page__container">
//       <div className="header-section-alt">
//         <h2 className="rental-name">Adjara Peak</h2>
//         <p className="main-title-alt">
//           {languages === "RU" ? (
//             <>
//               <span className="orange-line">Туристическое, </span>
//               <span className="orange-line">горнолыжное </span>
//               <span className="orange-box"> и </span>
//               <span className="orange-line"> спортивное</span>
//               <span className="orange-line">снаряжение</span>
//             </>
//           ) : (
//             <>
//               <span className="orange-line">Tourist, </span>
//               <span className="orange-line">ski, </span>
//               <span className="orange-box">and</span>
//               <span className="orange-line"> sports</span>
//               <span className="orange-line">equipment</span>
//             </>
//           )}
//         </p>

//         <p className="sub-title-alt">
//           <span className="highlight-alt">
//             {languages === "RU"
//               ? "Центр твоих приключений. "
//               : "The hiking season "}
//           </span>
//           <span>
//             {languages === "RU" ? "Всё для спорта и туризма." : "is open!"}
//           </span>
//         </p>
//       </div>
//       <SaleBanner />
//       <div className="sale-container">
//         <div ref={ref} onClick={handleClickSale} className="sale-item">
//           <a href="/sale">
//             <img src={eq} alt="adjara peak" className="sale-img" />
//             <div className="sale-info">
//               <div className="sale-title">
//                 <span className="highlight-rent">
//                   {languages === "RU" ? "Купить" : "Sale"}
//                 </span>
//                 <br />
//                 {languages === "RU" ? "снаряжения" : "of tourist equipment"}
//               </div>
//             </div>
//           </a>
//         </div>

//         <div ref={ref} onClick={handleClickRent} className="sale-item">
//           <a href="/rent">
//             <img src={eq2} alt="adjara peak" className="sale-img" />
//             <div className="sale-info">
//               <div className="sale-title">
//                 <span className="highlight-rent">
//                   {languages === "RU" ? "Арендовать" : "Rental"}
//                 </span>
//                 <br />
//                 {languages === "RU" ? "снаряжения" : "of tourist equipment"}
//               </div>
//             </div>
//           </a>
//         </div>

//         <div ref={ref} onClick={handleClickTrip} className="sale-item">
//           <a href="/trip">
//             <img src={del} alt="adjara peak" className="sale-img" />
//             <div className="sale-info">
//               <div className="sale-title">
//                 <span className="highlight-sale">
//                   {languages === "RU" ? "Забронировать" : "Schedule"}
//                 </span>
//                 <br />
//                 {languages === "RU" ? "путешествие" : "of events"}
//               </div>
//             </div>
//           </a>
//         </div>
//       </div>
//       <RockClimbing />
//       <Routes />
//       <RulesPage />
//       <ChooseUs />
//     </div>
//   );
// };
{
  /* <div ref={ref} onClick={handleClickSaleSea} className="sale-item">
          <a href="/sale_sea">
            <img src={sea} alt="adjara peak" className="sale-img" />
            <div className="sale-info">
              <div className="sale-title">
                <span className="highlight-rent">
                  {languages === "RU" ? "Продажа" : "Sale"}
                </span>
                <br />
                {languages === "RU" ? "водного снаряжения" : "of equipment"}
              </div>
            </div>
          </a>
        </div> */
}
{
  /* <div ref={ref} onClick={handleClickSportSale} className="sale-item">
          <a href="/sport_sale">
            <img src={sport} alt="adjara peak" className="sale-img" />
            <div className="sale-info">
              <div className="sale-title">
                <span className="highlight-rent">
                  {languages === "RU" ? "Продажа" : "Sale"}
                </span>
                <br />
                {languages === "RU" ? "спортивного снаряжения" : "of equipment"}
              </div>
            </div>
          </a>
        </div> */
}
{
  /* <div ref={ref} onClick={handleClickСlothes} className="sale-item">
          <a href="/clothes">
            <img src={clothes} alt="adjara peak" className="sale-img" />
            <div className="sale-info">
              <div className="sale-title">
                <span className="highlight-rent">
                  {languages === "RU" ? "Продажа" : "Sale"}
                </span>
                <br />
                {languages === "RU" ? "одежды и обуви" : ""}
              </div>
            </div>
          </a>
        </div> */
}
{
  /* <div ref={ref} onClick={handleClickSaleFood} className="sale-item">
          <a href="/sale_food">
            <img src={food} alt="adjara peak" className="sale-img" />
            <div className="sale-info">
              <div className="sale-title">
                <span className="highlight-rent">
                  {languages === "RU" ? "Продажа" : "Sale"}
                </span>
                <br />
                {languages === "RU" ? "походной еды и кофе" : ""}
              </div>
            </div>
          </a>
        </div> */
}
{
  /* <div ref={ref} onClick={handleClickRentSky} className="sale-item">
          <a href="/certificate">
            <img src={sky} alt="adjara peak" className="sale-img" />
            <div className="sale-info">
              <div className="sale-title">
                <span className="highlight-sale">
                  {languages === "RU" ? "Прокат" : "Rental"}
                </span>
                <br />
                {languages === "RU"
                  ? "горнолыжного снаряжения"
                  : "of ski equipment"}
              </div>
            </div>
          </a>
        </div> */
}
// <div ref={ref} onClick={handleClickRentSky} className="sale-item">
//   <a href="/certificate">
//     <img src={sky} alt="adjara peak" className="sale-img" />
//     <div className="sale-info">
//       <div className="sale-title">
//         <span className="highlight-sale">
//           {languages === "RU" ? "Подарочные" : "Rental"}
//         </span>
//         <br />
//         {languages === "RU" ? "сертификаты " : "of ski equipment"}
//       </div>
//     </div>
//   </a>
// </div>
{
  /* <section className="service-section">
        <h2 className="routes-title">
          {languages === "RU"
            ? "Сервисное обслуживание"
            : "Maintenance service"}
        </h2>
        <table className="service-table">
          <thead>
            <tr>
              <th>{languages === "RU" ? "Услуга" : "Service"}</th>

              <th>{languages === "RU" ? "Цена" : "Price"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {languages === "RU"
                  ? "Комплексное обслуживание - заточка кантов, чистка скользящей поверхности, снятие старого парафина, нанесение нового (парафины от +3 до -20, с шагом 6 градусов)"
                  : "Comprehensive Service - Edge sharpening, base cleaning, old wax removal, and new wax application (wax range from +3°C to -20°C, in 6-degree increments)."}{" "}
              </td>

              <td>~ 80 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
            <tr>
              <td>Заточка кантов</td>

              <td>~ 40 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
            <tr>
              <td>Консервация</td>

              <td>от 20 {languages === "RU" ? "лари" : "gel"}</td>
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
      </section> */
}

{
  /* <HitSales /> */
}
{
  /* <LycianWay/> */
}
