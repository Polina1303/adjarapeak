import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import style from "./dzip-tour-page.module.css";
import { SwiperPhoto } from "../../components/swiper";
const photos = [
  "/imageTrip/dziptour1.jpg",
  "/imageTrip/dziptour2.jpg",
  "/imageTrip/dziptour3.jpg",
  "/imageTrip/dziptour4.jpg",
  "/imageTrip/dziptour5.jpg",
  "/imageTrip/dziptour7.jpg",
  "/imageTrip/dziptour8.jpg",
  "/imageTrip/dziptour9.jpg",
  "/imageTrip/dziptour10.jpg",
];

export const DzipTourPage = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <>
      <div className={style["back-button-cover"]}>
        <button className={style["back-button"]} onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} />
          {languages === "RU" ? "Назад" : "Back"}
        </button>
      </div>

      <h2>ДЖИП-ТУР</h2>

      <SwiperPhoto photos={photos} />

      <div className={style["booking-section"]}>
        <h3>
          Если желаете попасть в подобное автопутешествие и перезагрузиться
          недалеко от Батуми{" "}
        </h3>
        <p>Забронируйте джип-тур прямо сейчас</p>
        <a
          href="https://t.me/shpaksn"
          target="_blank"
          rel="noreferrer"
          className={style["booking-button"]}
        >
          Забронировать
        </a>
      </div>
    </>
  );
};
