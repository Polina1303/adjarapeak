import { useInView } from "react-intersection-observer";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styles from "./";

export const GardenRoutePage = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);
  const router = useRouter();
  const { ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} />{" "}
          {languages === "RU" ? "Назад" : "Back"}
        </button>
      </div>
      <h3>
        {" "}
        {languages === "RU"
          ? "Ботанический сад Батуми"
          : "Batumi Botanical Garden"}{" "}
      </h3>
      <div className="lake-route-page-cover">
        <div ref={ref} className="lake-route-page-cover-img">
          <div>
            <img
              src="/image/garden1.jpg"
              alt="erge"
              className="route-page-img"
            />
          </div>
          <div>
            <img
              src="/image/garden2.jpg"
              alt="erge"
              className="route-page-img"
            />
          </div>
          <div>
            <img
              src="/image/garden3.jpg"
              alt="erge"
              className="route-page-img"
            />
          </div>
          <div>
            <img
              src="/image/garden4.jpg"
              alt="erge"
              className="route-page-img"
            />
          </div>
        </div>
        <div className="lake-route-page-cover-desc">
          <p className="lake-route-page-cover-title">
            {languages === "RU"
              ? "Маршрут для тех, у кого нет времени или возможности выбраться в горы."
              : "A route for those who don't have the time or opportunity to venture into the mountains."}
          </p>
          <p>
            <span className="lake-route-page-cover-title">
              {languages === "RU" ? "Как добраться:" : "How to get there:"}{" "}
            </span>{" "}
            {languages === "RU"
              ? "10 автобус идёт прямо к нижнему входу в парк. Такси от Батуми примерно 10 лари."
              : "Bus number 10 goes directly to the lower entrance of the park. Taxi from Batumi costs around 10 lari."}
          </p>
          <p>
            <span className="lake-route-page-cover-title">
              {languages === "RU" ? "Цена билета:" : "Ticket price:"}
            </span>
            {languages === "RU" ? " 20 лари." : " 20 lari."}
          </p>
          <p>
            <span className="lake-route-page-cover-title">
              {languages === "RU" ? "Официальный сайт: " : "Official website: "}
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
            {languages === "RU"
              ? "Ботанический парк в Батуми - уникальное место, предлагающее захватывающие маршруты для любителей природы. Парк известен своим разнообразным растительным миром и красивыми пейзажами, которые могут быть исследованы по различным маршрутам."
              : "The Batumi Botanical Garden is a unique place offering exciting routes for nature enthusiasts. The park is known for its diverse plant life and beautiful landscapes, which can be explored along various routes."}
          </p>
          <p>
            {languages === "RU"
              ? "При посещении парка, рекомендуется начать с основных троп, которые позволяют охватить основные достопримечательности и ландшафты. Затем вы можете пройтись по маршрутам, ведущим к различным садам и секторам парка, включая коллекции редких и экзотических растений. Для записи маршрута было использовано приложение "
              : "When visiting the park, it's recommended to start with the main trails, which allow you to cover the main attractions and landscapes. Then, you can explore routes leading to various gardens and sectors of the park, including collections of rare and exotic plants. An app was used to record the route."}
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
              {languages === "RU" ? "( маршрут здесь )" : "( route here )"}
            </a>
            <br />
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
              ? "Вне зависимости от выбранного маршрута, важно следовать указаниям и оставаться на определенных тропах, чтобы сохранить целостность и безопасность парка. И не забудьте прихватить с собой воду, фотоаппарат и бинокль, чтобы полностью насладиться множеством растений и животных, обитающих в Ботаническом парке Батуми.:"
              : "Regardless of the chosen route, it's important to follow the signs and stay on designated trails to maintain the integrity and safety of the park. And don't forget to bring water, a camera, and binoculars to fully enjoy the variety of plants and animals inhabiting the Batumi Botanical Garden."}
          </p>
        </div>
      </div>
    </>
  );
};
