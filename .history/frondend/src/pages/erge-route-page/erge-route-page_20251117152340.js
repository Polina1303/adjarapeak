import erge1 from "../../components/image/erge1.jpg";
import erge2 from "../../components/image/erge2.jpg";
import erge3 from "../../components/image/erge3.jpg";
import erge4 from "../../components/image/erge4.jpg";
import { useInView } from "react-intersection-observer";
import { IoIosArrowBack } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styles from "./erge-route-page.module.css";

export const ErgeRoutePage = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);

  const router = useRouter();
  const { ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <div className={styles["back-button-cover"]}>
        <button className={styles["back-button"]} onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} />{" "}
          {languages === "RU" ? "Назад" : "Back"}
        </button>
      </div>
      <h3>{languages === "RU" ? "Вершина Эрге" : "Mount Erge"}</h3>
      <div className={styles["lake-route-page-cover"]}>
        <div ref={ref} className={styles["lake-route-page-cover-img"]}>
          <div>
            <img src={erge1} alt="erge" className={styles["route-page-img"]} />
          </div>
          <div>
            <img src={erge2} alt="erge" className={styles["route-page-img"]} />
          </div>
          <div>
            <img src={erge3} alt="erge" className={styles["route-page-img"]} />
          </div>
          <div>
            <img src={erge4} alt="erge" className={styles["route-page-img"]} />
          </div>
        </div>
        <div className="lake-route-page-cover-desc">
          <p className="lake-route-page-cover-title">
            {languages === "RU"
              ? "Бонусом этого хайкинга является прекрасный панорамный вид на Батуми!"
              : "A bonus of this hiking trip is the magnificent panoramic view of Batumi!"}
          </p>
          <p>
            {languages === "RU"
              ? "Высота горы почти 900 метров, оттуда открывается отличный вид на город."
              : "The mountain's height is almost 900 meters, offering an excellent view of the city from there."}
          </p>
          <p>
            <span className="lake-route-page-cover-title">
              {languages === "RU"
                ? "Координаты церкви: 41.601451, 41.720233"
                : "Coordinates of the church: 41.601451, 41.720233"}
            </span>
          </p>
          <p>
            {languages === "RU"
              ? "  Эрге, с его почти 900 метров высоты, представляет собой захватывающую гору с потрясающим панорамным видом на город Батуми. Этот хайкинг маршрут находится на юго-западной стороне горы, и его особенностью является пологий подъем. Для тех, кто предпочитает удобство и быстроту, добраться до начала маршрута можно на машине или такси (примерно 20 лари от Батуми), прибыв с направления Квемо Джочо. Или маршрутка №199."
              : "Erge, with its almost 900-meter height, is a thrilling mountain with stunning panoramic views of the city of Batumi. This hiking route is located on the southwest side of the mountain, and its feature is the gentle ascent. For those who prefer convenience and speed, you can reach the starting point of the route by car or taxi (approximately 20 lari from Batumi) from the direction of Kvemo Joch'o. Alternatively, you can take minibus No. 199."}
          </p>
          <p>
            {languages === "RU"
              ? " Общее растояние 15.4 км. У нас время на маршрут составило 6.57 минут с учетом привалов. При планировании и записи этого маршрута использовалось приложение"
              : "The total distance is 15.4 km. It took us 6 hours and 57 minutes to complete the route, including breaks. An app was used for planning and recording this route."}
            <a
              className="lake-route-page-url"
              href="https://www.komoot.com/"
              target="_blank"
              rel="noreferrer"
            >
              Komoot
            </a>
            <a
              className="lake-route-page-url"
              href="https://www.komoot.com/tour/1143937607"
              target="_blank"
              rel="noreferrer"
            >
              {languages === "RU" ? "( маршрут здесь )" : "( route here )"}
            </a>
            {languages === "RU"
              ? ", и оно предоставило все необходимые сведения и навигацию для успешного освоения горы."
              : ",and it provided all the necessary information and navigation for a successful mountain ascent."}
            <br />{" "}
            {languages === "RU"
              ? "Ходите в горы, наслаждайтесь природой и почувствуйте себя счастливыми!"
              : "Go into the mountains, enjoy nature, and feel happy!"}
            <br />
            {languages === "RU"
              ? "До встречи в Adjara Peak."
              : "See you at Adjara Peak!"}
          </p>
          <p>
            <span className="lake-route-page-cover-title">
              {languages === "RU" ? "Безопасность:" : "Safety:"}{" "}
            </span>
            {languages === "RU"
              ? "Проверьте погоду, подготовьтесь соответствующе и имейте необходимое снаряжение. Учитывайте свои физические возможности и выбирайте маршруты с учетом своего опыта. Избегайте опасных условий и уведомьте кого-то о своих планах. Наслаждайтесь природой, но помните о безопасности."
              : "Check the weather, prepare accordingly, and have the necessary equipment. Consider your physical abilities and choose routes based on your experience. Avoid dangerous conditions and inform someone of your plans. Enjoy nature, but remember safety."}
          </p>
        </div>
      </div>
    </>
  );
};
