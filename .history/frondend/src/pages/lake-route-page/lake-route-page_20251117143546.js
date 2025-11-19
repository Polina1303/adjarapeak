import { useInView } from "react-intersection-observer";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styles from "./lake-route-page.module.css";

export const LakeRoutePage = () => {
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
      <h3>
        {languages === "RU"
          ? "Озеро в виде 💚 недалеко от Батуми !"
          : "A lake in the view 💚 near Batumi!"}
      </h3>
      <div className={styles["lake-route-page-cover"]}>
        <div ref={ref} className={styles["lake-route-page-cover-img"]}>
          <div>
            <img
              src="/image/lake1.jpg"
              alt="lake"
              className={styles["route-page-img"]}
            />
          </div>
          <div>
            <img
              src="/image/lake2.jpg"
              alt="lake"
              className={styles["route-page-img"]}
            />
          </div>
          <div>
            <img
              src="/image/lake3.jpg"
              alt="lake"
              className={styles["route-page-img"]}
            />
          </div>
          <div>
            <img src={lake4} alt="lake" className={styles["route-page-img"]} />
          </div>
        </div>
        <div className={styles["lake-route-page-cover-desc"]}>
          <p className={styles["lake-route-page-cover-title"]}>
            {languages === "RU"
              ? "Батуми - Хуло - Таго - пеший маршрут к озеру."
              : "Batumi - Khulo - Tago - hiking route to the lake"}
          </p>
          <p>
            {languages === "RU"
              ? "Если вы находитесь в Батуми и ищете захватывающую природную экскурсию, Таго - идеальное место для вас!"
              : "If you are in Batumi and looking for an exciting nature excursion, Tago is the perfect place for you!"}
          </p>
          <p>
            {languages === "RU"
              ? "В этой статье мы расскажем вам о способах добраться до Таго и того самого озера, советах для безопасного."
              : "In this article, we will tell you about the ways to get to Tago and that very lake, along with tips for a safe trip."}
          </p>
          <ol>
            <li className={styles["lake-route-page-points"]}>
              {languages === "RU"
                ? "Как добраться до Хуло из Батуми:"
                : "How to get to Khulo from Batumi:"}
            </li>
            <p>
              <span className={styles["lake-route-page-cover-title"]}>
                {languages === "RU" ? "Маршрутка:" : "By bus:"}
              </span>{" "}
              {languages === "RU"
                ? "    Если вы предпочитаете использовать общественный транспорт, маршрутка - отличный вариант. Отправление происходит с старого автовокзала, и первый рейс стартует в 8:00 утра. В дальнейшем маршрутки ходят каждый час (расписание может меняться). Дорога занимает примерно 2-3 часа, а расстояние до Хуло составляет около 90 км."
                : "If you prefer to use public transportation, a minibus is a great option. Departures are from the old bus station, with the first trip starting at 8:00 AM. Subsequently, minibuses run every hour (the schedule may vary). The journey takes approximately 2-3 hours, and the distance to Khulo is about 90 km."}
            </p>
            <p>
              <span className={styles["lake-route-page-cover-title"]}>
                {languages === "RU" ? "Личный автомобиль:" : "By car:"}
              </span>{" "}
              {languages === "RU"
                ? "Другой вариант - взять в аренду или использовать собственный личный автомобиль. Это даст вам большую свободу перемещения и возможность остановиться на пути, чтобы насладиться живописными видами или посетить другие достопримечательности. Дорога от Батуми до Хуло занимает примерно 2-3 часа, в зависимости от трафика и вашего стиля вождения.:"
                : "Another option is to rent or use your own private car. This will give you greater freedom of movement and the opportunity to stop along the way to enjoy scenic views or visit other attractions. The road from Batumi to Khulo takes approximately 2-3 hours, depending on traffic and your driving style."}
            </p>
            <li className={styles["lake-route-page-points"]}>
              {languages === "RU"
                ? "Путешествие от Хуло до Таго:"
                : "The route from Khulo to Tago:"}
            </li>
            <p>
              {languages === "RU"
                ? "По прибытии в Хуло, вам предстоит преодолеть последний участок пути до Таго. Вы можете выбрать между автомобилем и канатной дорогой. Рекомендуется выбрать канатную дорогу, чтобы получить максимум эмоций и сэкономить время. Стоимость проезда составляет 5 лари, а дорога занимает всего 10 минут. На канатной дороге вы сможете насладиться удивительными видами и проникнуться красотой окружающей природы."
                : "Upon arriving in Khulo, you will need to cover the final stretch to Tago. You can choose between a car and a cable car. It is recommended to take the cable car to maximize your experience and save time. The fare is 5 lari, and the journey takes only 10 minutes. On the cable car, you can enjoy amazing views and immerse yourself in the beauty of the surrounding nature."}
            </p>
            <li className={styles["lake-route-page-points"]}>
              {languages === "RU"
                ? "Путешествие от Таго до озера:"
                : "The route from Khulo to the lake:"}
            </li>
            <p>
              <span className={styles["lake-route-page-cover-title"]}>
                {languages === "RU"
                  ? "Координаты озера (41.614455, 42.34121)"
                  : "The coordinates of the lake are (41.614455, 42.34121)"}
              </span>
              {languages === "RU"
                ? "помогут вам найти точное местоположение. Мы рекомендуем использовать приложение"
                : "these coordinates will help you find the exact location. We recommend using the app"}

              <a
                className={styles["lake-route-page-url"]}
                href="https://maps.me/"
                target="_blank"
                rel="noreferrer"
              >
                Maps.me
              </a>
              {languages === "RU"
                ? "   для построения маршрута, которое будет вашим надежным гидом во время путешествия. Общий набор высоты, с перепадами - 622 метра. Ориентировочное время в пути 2-3 часа, на возвращение стоит закладывать чуть меньше, около 1-1.30 часа. Для безопасности и комфорта на протяжении пути рекомендуется взять с собой треккинговые палки. Они помогут вам сохранить равновесие и снять нагрузку с ног, особенно если у вас есть рюкзак."
                : "These coordinates will help you find the exact location. We recommend using the app for route planning, which will be your reliable guide during the trip. The total elevation gain, with variations, is 622 meters. The estimated travel time is 2-3 hours, and for the return journey, it's advisable to allocate slightly less time, around 1-1.30 hours. For safety and comfort along the way, it's recommended to bring trekking poles. They will help you maintain balance and reduce the load on your legs, especially if you're carrying a backpack."}
            </p>
          </ol>
          <p>
            {languages === "RU"
              ? "Но самое главное - берегите себя! В горах всегда следует быть осторожным и предусмотрительным. Проверьте погодные условия перед поездкой, используйте надежное снаряжение, включая подходящую одежду и обувь. Важно соблюдать правила безопасности и не рисковать своим здоровьем. Горы всегда предлагают незабываемые приключения, поэтому наслаждайтесь своим путешествием в Таго и озеро. Погрузитесь в волшебство природы, насладитесь видами и создайте незабываемые воспоминания о вашем путешествии в горы Грузии.:"
              : "But most importantly, take care of yourself! In the mountains, it's always important to be cautious and prudent. Check the weather conditions before your trip, use reliable equipment, including appropriate clothing and footwear. It's crucial to follow safety rules and not risk your health. Mountains always offer unforgettable adventures, so enjoy your journey to Tago and the lake. Immerse yourself in the magic of nature, enjoy the views, and create unforgettable memories of your trip to the mountains of Georgia."}
          </p>
        </div>
      </div>
    </>
  );
};
