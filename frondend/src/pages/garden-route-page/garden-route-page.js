import garden1 from "../../components/image/garden1.jpg";
import garden2 from "../../components/image/garden2.jpg";
import garden3 from "../../components/image/garden3.jpg";
import garden4 from "../../components/image/garden4.jpg";
import { useInView } from "react-intersection-observer";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const GardenRoutePage = () => {
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
      <h3>Ботанический сад Батуми</h3>
      <div className="lake-route-page-cover">
        <div ref={ref} className="lake-route-page-cover-img">
          <div>
            <img src={garden1} alt="erge" className="route-page-img" />
          </div>
          <div>
            <img src={garden2} alt="erge" className="route-page-img" />
          </div>
          <div>
            <img src={garden3} alt="erge" className="route-page-img" />
          </div>
          <div>
            <img src={garden4} alt="erge" className="route-page-img" />
          </div>
        </div>
        <div className="lake-route-page-cover-desc">
          <p className="lake-route-page-cover-title">
            Маршрут для тех, у кого нет времени или возможности выбраться в
            горы.
          </p>
          <p>
            <span className="lake-route-page-cover-title">Как добраться:</span>{" "}
            10 автобус идёт прямо к нижнему входу в парк. Такси от Батуми
            примерно 10 лари.
          </p>
          <p>
            <span className="lake-route-page-cover-title">Цена билета:</span> 20
            лари.
          </p>
          <p>
            <span className="lake-route-page-cover-title">
              Официальный сайт:{" "}
            </span>
            <a
              className="lake-route-page-url"
              href="http://bbg.ge/"
              target="_blank"
              rel="noreferrer"
            >
              bbg.ge
            </a>
          </p>

          <p>
            Ботанический парк в Батуми - уникальное место, предлагающее
            захватывающие маршруты для любителей природы. Парк известен своим
            разнообразным растительным миром и красивыми пейзажами, которые
            могут быть исследованы по различным маршрутам.
          </p>
          <p>
            При посещении парка, рекомендуется начать с основных троп, которые
            позволяют охватить основные достопримечательности и ландшафты. Затем
            вы можете пройтись по маршрутам, ведущим к различным садам и
            секторам парка, включая коллекции редких и экзотических растений.
            Для записи маршрута было использовано приложение {""}
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
              href="https://www.komoot.comhttps://www.komoot.com/tour/1142299971?ref=itd&fbclid=PAAab3tgUw2qkBsa7nEeuIcmllF63udDyccHuHzcbgJdYZ20tecvVK2jFaAB4_aem_th_ARIVCl5Z42O297AqN-fpy2jy9Mm8wzU615I_kPdeW-CRwaoAiqFqpyCQSbPdKHUMOkY/tour/1143937607"
              target="_blank"
              rel="noreferrer"
            >
              ( маршрут здесь ).
            </a>
            <br /> Ходите в горы, наслаждайтесь природой и почувствуйте себя
            счастливыми!
            <br /> До встречи в Adjara Peak.
          </p>
          <p>
            <span className="lake-route-page-cover-title">Безопасность: </span>
            Вне зависимости от выбранного маршрута, важно следовать указаниям и
            оставаться на определенных тропах, чтобы сохранить целостность и
            безопасность парка. И не забудьте прихватить с собой воду,
            фотоаппарат и бинокль, чтобы полностью насладиться множеством
            растений и животных, обитающих в Ботаническом парке Батуми.
          </p>
        </div>
      </div>
    </>
  );
};
