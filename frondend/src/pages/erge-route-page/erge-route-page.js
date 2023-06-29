import erge1 from "../../components/image/erge1.jpg";
import erge2 from "../../components/image/erge2.jpg";
import erge3 from "../../components/image/erge3.jpg";
import erge4 from "../../components/image/erge4.jpg";
import { useInView } from "react-intersection-observer";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import "./erge-route-page.css";

export const ErgeRoutePage = () => {
  const history = useNavigate();
  const { ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => history(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <h3>Вершина Эрге </h3>
      <div className="lake-route-page-cover">
        <div ref={ref} className="lake-route-page-cover-img">
          <div>
            <img src={erge1} alt="erge" className="route-page-img" />
          </div>
          <div>
            <img src={erge2} alt="erge" className="route-page-img" />
          </div>
          <div>
            <img src={erge3} alt="erge" className="route-page-img" />
          </div>
          <div>
            <img src={erge4} alt="erge" className="route-page-img" />
          </div>
        </div>
        <div className="lake-route-page-cover-desc">
          <p className="lake-route-page-cover-title">
            Бонусом этого хайкинга является прекрасный панорамный вид на Батуми!
          </p>
          <p>
            Высота горы почти 900 метров, оттуда открывается отличный вид на
            город.
          </p>
          <p>
            <span className="lake-route-page-cover-title">
              Координаты церкви: 41.601451, 41.720233
            </span>
          </p>
          <p>
            Эрге, с его почти 900 метров высоты, представляет собой
            захватывающую гору с потрясающим панорамным видом на город Батуми.
            Этот хайкинг маршрут находится на юго-западной стороне горы, и его
            особенностью является пологий подъем. Для тех, кто предпочитает
            удобство и быстроту, добраться до начала маршрута можно на машине
            или такси (примерно 20 лари от Батуми), прибыв с направления Квемо
            Джочо. Или маршрутка №199.
          </p>
          <p>
            Общее растояние 15.4 км. У нас время на маршрут составило 6.57 минут
            с учетом привалов. При планировании и записи этого маршрута
            использовалось приложение
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
              ( маршрут здесь )
            </a>
            , и оно предоставило все необходимые сведения и навигацию для
            успешного освоения горы.
            <br /> Ходите в горы, наслаждайтесь природой и почувствуйте себя
            счастливыми!
            <br /> До встречи в Adjara Peak.
          </p>
          <p>
            <span className="lake-route-page-cover-title">Безопасность: </span>
            Проверьте погоду, подготовьтесь соответствующе и имейте необходимое
            снаряжение. Учитывайте свои физические возможности и выбирайте
            маршруты с учетом своего опыта. Избегайте опасных условий и
            уведомьте кого-то о своих планах. Наслаждайтесь природой, но помните
            о безопасности.
          </p>
        </div>
      </div>
    </>
  );
};
