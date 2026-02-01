// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { RockClimbing } from "../../components/rock-сlimbing";
// import { ChooseUs } from "../../components/chooseus";
// import { Routes } from "../../components/routes/routes";
// import { useInView } from "react-intersection-observer";
// import RulesPage from "../rules-page";
// import styles from "./home-page.module.css";
// import { useSelector } from "react-redux";
// import { Sales } from "../sales";

// const HomePage = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const languages = useSelector((state) => state.languages.currentLanguages);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setIsMobile(window.innerWidth <= 630);
//       localStorage.removeItem("activeType");
//       localStorage.removeItem("activeTypeSale");
//       localStorage.removeItem("searchQuery");

//       const handleResize = () => setIsMobile(window.innerWidth <= 630);
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }
//   }, []);
//   const { ref } = useInView({ threshold: 0, triggerOnce: true });

//   const isRU = languages === "RU";

//   return (
//     <div className={styles.homePageContainer}>
//       <header className={styles.headerSectionAlt}>
//         <h1 className={styles.rentalName}>Adjara Peak</h1>

//         <p
//           className={styles.mainTitleAlt}
//           aria-label={
//             isRU
//               ? "Туристическое горнолыжное и спортивное снаряжение"
//               : "Tourist, ski and sports equipment"
//           }
//         >
//           {isRU ? (
//             <>
//               <span className={styles.orangeLine}>Туристическое, </span>
//               <span className={styles.orangeLine}>горнолыжное </span>
//               <span className={styles.orangeBox}>и</span>
//               <span className={styles.orangeLine}> спортивное</span>
//               <span className={styles.orangeLine}> снаряжение</span>
//             </>
//           ) : (
//             <>
//               <span className={styles.orangeLine}>Tourist, </span>
//               <span className={styles.orangeLine}>ski </span>
//               <span className={styles.orangeBox}>and</span>
//               <span className={styles.orangeLine}> sports</span>
//               <span className={styles.orangeLine}> equipment</span>
//             </>
//           )}
//         </p>

//         <p className={styles.subTitleAlt}>
//           <span className={styles.highlightAlt}>
//             {isRU ? "Центр твоих приключений. " : "The hiking season "}
//           </span>
//           <span>{isRU ? "Всё для спорта и туризма." : "is open!"}</span>
//         </p>
//       </header>

//       <section
//         className={styles.saleContainer}
//         aria-label={isRU ? "Разделы магазина" : "Store sections"}
//       >
//         <article ref={ref} className={styles.saleItem}>
//           <Link href="sale/alpinesking" className={styles.saleCard}>
//             <Image
//               loading="lazy"
//               src="/img/sale.webp"
//               alt="Tourist equipment sale"
//               className={styles.saleImg}
//             />

//             <div className={styles.saleInfo}>
//               <h3 className={styles.saleTitle}>
//                 <span className={styles.highlightRent}>
//                   {isRU ? "Купить" : "Sale"}
//                 </span>
//                 <br />
//                 {isRU ? "снаряжения" : "of tourist equipment"}
//               </h3>
//             </div>
//           </Link>
//         </article>

//         <article className={styles.saleItem}>
//           <Link href="/rent/skiRental" className={styles.saleCard}>
//             <Image
//               loading="lazy"
//               src="/img/rent.webp"
//               alt="Tourist equipment rental"
//               className={styles.saleImg}
//             />
//             <div className={styles.saleInfo}>
//               <h3 className={styles.saleTitle}>
//                 <span className={styles.highlightRent}>
//                   {isRU ? "Арендовать" : "Rental"}
//                 </span>
//                 <br />
//                 {isRU ? "снаряжения" : "of tourist equipment"}
//               </h3>
//             </div>
//           </Link>
//         </article>

//         <article className={styles.saleItem}>
//           <Link href="/trip" className={styles.saleCard}>
//             <Image
//               loading="lazy"
//               src="/img/tour.webp"
//               alt="Travel booking"
//               className={styles.saleImg}
//             />
//             <div className={styles.saleInfo}>
//               <h3 className={styles.saleTitle}>
//                 <span className={styles.highlightSale}>
//                   {isRU ? "Забронировать" : "Schedule"}
//                 </span>
//                 <br />
//                 {isRU ? "путешествие" : "of events"}
//               </h3>
//             </div>
//           </Link>
//         </article>
//         <article className={styles.saleItem}>
//           <Link href="/rent/skiRental" className={styles.saleCard}>
//             <Image
//               loading="lazy"
//               src="/img/snow.webp"
//               alt="adjara peak"
//               className={styles.saleImg}
//             />
//             <div className={styles.saleInfo}>
//               <div className={styles.saleTitle}>
//                 <span className={styles.highlightSale}>
//                   {languages === "RU" ? "Прокат" : "Rental"}
//                 </span>
//                 <br />
//                 {languages === "RU"
//                   ? "горнолыжного снаряжения"
//                   : "of ski equipment"}
//               </div>
//             </div>
//           </Link>
//         </article>
//       </section>
//       <Sales />
//       <RockClimbing />
//       <Routes />
//       <RulesPage />
//       <ChooseUs />
//     </div>
//   );
// };

// export default HomePage;

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RockClimbing } from "../../components/rock-сlimbing";
import { ChooseUs } from "../../components/chooseus";
import { Routes } from "../../components/routes/routes";
import { useInView } from "react-intersection-observer";
import RulesPage from "../rules-page";
import styles from "./home-page.module.css";
import { useSelector } from "react-redux";
import { Sales } from "../sales";

const saleItems = [
  {
    id: 1,
    href: "sale/alpinesking",
    src: "/img/sale.webp",
    alt: {
      RU: "Продажа снаряжения для туризма и спорта",
      EN: "Tourist and sports equipment sale",
    },
    title: { RU: "Купить", EN: "Sale" },
    subtitle: { RU: "снаряжение", EN: "of tourist equipment" },
    highlight: "rent",
    width: 400,
    height: 300,
  },
  {
    id: 2,
    href: "/rent/skiRental",
    src: "/img/rent.webp",
    alt: {
      RU: "Аренда туристического снаряжения",
      EN: "Tourist equipment rental",
    },
    title: { RU: "Арендовать", EN: "Rental" },
    subtitle: { RU: "снаряжение", EN: "of tourist equipment" },
    highlight: "rent",
    width: 400,
    height: 300,
  },
  {
    id: 3,
    href: "/trip",
    src: "/img/tour.webp",
    alt: {
      RU: "Бронирование путешествий и туров",
      EN: "Travel and tour booking",
    },
    title: { RU: "Забронировать", EN: "Schedule" },
    subtitle: { RU: "путешествие", EN: "of events" },
    highlight: "sale",
    width: 400,
    height: 300,
  },
  {
    id: 4,
    href: "/rent/skiRental",
    src: "/img/snow.webp",
    alt: {
      RU: "Прокат горнолыжного снаряжения",
      EN: "Ski equipment rental",
    },
    title: { RU: "Прокат", EN: "Rental" },
    subtitle: {
      RU: "горнолыжного снаряжения",
      EN: "of ski equipment",
    },
    highlight: "sale",
    width: 400,
    height: 300,
  },
];

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const languages = useSelector((state) => state.languages.currentLanguages);

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
        {saleItems.map((item, index) => (
          <article
            key={item.id}
            ref={index === 0 ? ref : null}
            className={styles.saleItem}
          >
            <Link href={item.href} className={styles.saleCard}>
              <Image
                priority={index === 0}
                src={item.src}
                alt={isRU ? item.alt.RU : item.alt.EN}
                width={item.width}
                height={item.height}
                className={styles.saleImg}
                placeholder="blur"
                blurDataURL="/img/placeholder-small.webp"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                quality={85}
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
              />

              <div className={styles.saleInfo}>
                <h3 className={styles.saleTitle}>
                  <span
                    className={
                      item.highlight === "rent"
                        ? styles.highlightRent
                        : styles.highlightSale
                    }
                  >
                    {isRU ? item.title.RU : item.title.EN}
                  </span>
                  <br />
                  {isRU ? item.subtitle.RU : item.subtitle.EN}
                </h3>
              </div>
            </Link>
          </article>
        ))}
      </section>

      <Sales />
      <RockClimbing />
      <Routes />
      <RulesPage />
      <ChooseUs />
    </div>
  );
};

export default HomePage;
