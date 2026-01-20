// import { AiOutlineCheckCircle } from "react-icons/ai";
// import { FaHandPointUp } from "react-icons/fa";
// import styles from "./chooseus.module.css";
// import { useSelector } from "react-redux";

// export const ChooseUs = () => {
//   const languages = useSelector((state) => state.languages.currentLanguages);

//   return (
//     <div className={styles["choose-cover"]}>
//       <div className={styles["choose-title"]}>
//         <h2>
//           {languages === "RU" ? "Почему выбирают нас?" : "Why Choose Us?"}
//         </h2>

//         <div className={styles["choose-columns"]}>
//           <div className={styles["choose-column"]}>
//             <div className={styles["choose-item"]}>
//               <AiOutlineCheckCircle
//                 size={25}
//                 className={styles["choose-checkin"]}
//               />
//               <h5>{languages === "RU" ? "ВСЁ В ОДНОМ МЕСТЕ" : ""}</h5>
//             </div>
//             <p className={styles["choose-item-description"]}>
//               {languages === "RU"
//                 ? "Магазин, прокат, походы, джиппинг, восхождения и скалолазание — всё в одном месте."
//                 : ""}
//             </p>

//             <div className={styles["choose-item"]}>
//               <AiOutlineCheckCircle
//                 size={25}
//                 className={styles["choose-checkin"]}
//               />
//               <h5>{languages === "RU" ? "ОТСУТСТВИЕ ЗАЛОГА" : ""}</h5>
//             </div>
//             <p className={styles["choose-item-description"]}>
//               {languages === "RU"
//                 ? "Для заключения договора нужен только паспорт."
//                 : ""}
//             </p>

//             <div className={styles["choose-item"]}>
//               <AiOutlineCheckCircle
//                 size={25}
//                 className={styles["choose-checkin"]}
//               />
//               <h5>{languages === "RU" ? "БРОНИРОВАНИЕ" : ""}</h5>
//             </div>
//             <p className={styles["choose-item-description"]}>
//               {languages === "RU" ? (
//                 <>
//                   Доступно от 2 суток, по предоплате.
//                   <br /> Важно: предоплата не возвращается и не переносится в
//                   случае отмены заказа клиентом.
//                 </>
//               ) : (
//                 ""
//               )}
//             </p>

//             <div className={styles["choose-item"]}>
//               <AiOutlineCheckCircle
//                 size={25}
//                 className={styles["choose-checkin"]}
//               />
//               <h5>{languages === "RU" ? "БОНУС ЗА ПОДПИСКУ" : ""}</h5>
//             </div>
//             <p className={styles["choose-item-description"]}>
//               {languages === "RU"
//                 ? "Подписчики нашего"
//                 : "To all our followers"}
//               <a
//                 href="https://t.me/adjarapeak"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: "rgba(0, 136, 204)" }}
//               >
//                 {languages === "RU" ? " Telegram-канал" : "Telegram-channel"}{" "}
//               </a>
//               {languages === "RU" ? (
//                 <>
//                   получают скидку 5% на весь прокат снаряжения.
//                   <br />
//                   Если вы отметите нас в социальных сетях, мы добавим ещё 5%
//                   кэшбэка от суммы заказа. Аккаунт должен быть открыт, отметка —
//                   кликабельной.
//                 </>
//               ) : (
//                 ""
//               )}
//             </p>

//             <div className={styles["choose-item"]}>
//               <AiOutlineCheckCircle
//                 size={25}
//                 className={styles["choose-checkin"]}
//               />
//               <h5>{languages === "RU" ? "ГИБКИЕ УСЛОВИЯ" : ""}</h5>
//             </div>
//             <p className={styles["choose-item-description"]}>
//               {languages === "RU" ? (
//                 <>
//                   Можно взять снаряжение на день, на выходные или на неделю.
//                   <br /> Минимальный срок аренды — всего одни сутки.
//                 </>
//               ) : (
//                 ""
//               )}
//             </p>
//           </div>

//           <div className={styles["choose-column"]}>
//             <div className={styles["choose-item"]}>
//               <AiOutlineCheckCircle
//                 size={25}
//                 className={styles["choose-checkin"]}
//               />
//               <h5>{languages === "RU" ? "ЭКСПЕРТНАЯ КОМАНДА" : ""}</h5>
//             </div>
//             <p className={styles["choose-item-description"]}>
//               {languages === "RU" ? (
//                 <>
//                   Мы сами ходим в горы, занимаемся спортом и тестируем
//                   снаряжение.
//                   <br />
//                   Поможем подобрать всё под маршрут и уровень — даже если вы
//                   новичок.
//                 </>
//               ) : (
//                 ""
//               )}
//             </p>

//             <div className={styles["choose-item"]}>
//               <AiOutlineCheckCircle
//                 size={25}
//                 className={styles["choose-checkin"]}
//               />
//               <h5>{languages === "RU" ? "УДОБНОЕ РАСПОЛОЖЕНИЕ" : ""}</h5>
//             </div>
//             <p className={styles["choose-item-description"]}>
//               {languages === "RU" ? (
//                 <>
//                   Мы находимся недалеко от центрального стадиона и крупнейшего
//                   торгового центра в Батуми.
//                 </>
//               ) : (
//                 ""
//               )}
//             </p>

//             <div className={styles["choose-item"]}>
//               <AiOutlineCheckCircle
//                 size={25}
//                 className={styles["choose-checkin"]}
//               />
//               <h5>{languages === "RU" ? "РЕАЛЬНАЯ ЭКОНОМИЯ" : ""}</h5>
//             </div>
//             <p className={styles["choose-item-description"]}>
//               {languages === "RU" ? (
//                 <>
//                   Не нужно покупать дорогое снаряжение ради одного похода — всё
//                   можно взять в аренду. Снаряжение — всё чистое, проверенное и
//                   готово к использованию.
//                 </>
//               ) : (
//                 ""
//               )}
//             </p>

//             <div className={styles["choose-item"]}>
//               <AiOutlineCheckCircle
//                 size={25}
//                 className={styles["choose-checkin"]}
//               />
//               <h5>{languages === "RU" ? "ОРГАНИЗУЕМ ПРИКЛЮЧЕНИЯ" : ""}</h5>
//             </div>
//             <p className={styles["choose-item-description"]}>
//               {languages === "RU" ? (
//                 <>
//                   Хочешь в поход или на скалы? Мы не просто прокат — мы включаем
//                   тебя в движ.
//                 </>
//               ) : (
//                 ""
//               )}
//             </p>

//             <div className={styles["choose-item"]}>
//               <AiOutlineCheckCircle
//                 size={25}
//                 className={styles["choose-checkin"]}
//               />
//               <h5>{languages === "RU" ? "ЛОКАЛЬНЫЙ БРЕНД" : ""}</h5>
//             </div>
//             <p className={styles["choose-item-description"]}>
//               {languages === "RU" ? (
//                 <>
//                   Мы развиваем спорт и outdoor-культуру в Аджарии.
//                   <br />
//                   Наша цель — сделать горы ближе. И ты — часть этого пути.
//                 </>
//               ) : (
//                 ""
//               )}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaHandPointUp } from "react-icons/fa";
import styles from "./chooseus.module.css";
import { useSelector } from "react-redux";

export const ChooseUs = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);

  return (
    <div className={styles["choose-cover"]}>
      <div className={styles["choose-title"]}>
        <h2>
          {languages === "RU" ? "Почему выбирают нас?" : "Why Choose Us?"}
        </h2>

        <div className={styles["choose-columns"]}>
          <div className={styles["choose-column"]}>
            <div className={styles["choose-item-wrapper"]}>
              <div className={styles["choose-item"]}>
                <AiOutlineCheckCircle
                  size={25}
                  className={styles["choose-checkin"]}
                />
                <h4>
                  {languages === "RU"
                    ? "ВСЁ В ОДНОМ МЕСТЕ"
                    : "EVERYTHING IN ONE PLACE"}
                </h4>
              </div>
              <p className={styles["choose-item-description"]}>
                {languages === "RU"
                  ? "Магазин, прокат, походы, джиппинг, восхождения и скалолазание — всё в одном месте."
                  : "Shop, rental, hikes, jeeping, climbing and mountaineering — all in one place."}
              </p>
            </div>

            <div className={styles["choose-item-wrapper"]}>
              <div className={styles["choose-item"]}>
                <AiOutlineCheckCircle
                  size={25}
                  className={styles["choose-checkin"]}
                />
                <h4>
                  {languages === "RU" ? "ЭКСПЕРТНАЯ КОМАНДА" : "EXPERT TEAM"}
                </h4>
              </div>
              <p className={styles["choose-item-description"]}>
                {languages === "RU"
                  ? "Поможем подобрать всё под маршрут и уровень — даже если вы новичок."
                  : "We'll help you choose everything according to your route and level — even if you're a beginner."}
              </p>
            </div>

            <div className={styles["choose-item-wrapper"]}>
              <div className={styles["choose-item"]}>
                <AiOutlineCheckCircle
                  size={25}
                  className={styles["choose-checkin"]}
                />
                <h4>
                  {languages === "RU" ? "ОТСУТСТВИЕ ЗАЛОГА" : "NO DEPOSIT"}
                </h4>
              </div>
              <p className={styles["choose-item-description"]}>
                {languages === "RU"
                  ? "Для заключения договора нужен только паспорт."
                  : "Only a passport is needed to sign the contract."}
              </p>
            </div>

            <div className={styles["choose-item-wrapper"]}>
              <div className={styles["choose-item"]}>
                <AiOutlineCheckCircle
                  size={25}
                  className={styles["choose-checkin"]}
                />
                <h4>
                  {languages === "RU"
                    ? "УДОБНОЕ РАСПОЛОЖЕНИЕ"
                    : "CONVENIENT LOCATION"}
                </h4>
              </div>
              <p className={styles["choose-item-description"]}>
                {languages === "RU"
                  ? "Мы находимся недалеко от центрального стадиона и крупнейшего торгового центра в Батуми."
                  : "We are located near the central stadium and the largest shopping center in Batumi."}
              </p>
            </div>

            <div className={styles["choose-item-wrapper"]}>
              <div className={styles["choose-item"]}>
                <AiOutlineCheckCircle
                  size={25}
                  className={styles["choose-checkin"]}
                />
                <h4>{languages === "RU" ? "БРОНИРОВАНИЕ" : "BOOKING"}</h4>
              </div>
              <p className={styles["choose-item-description"]}>
                {languages === "RU" ? (
                  <>
                    Доступно от 2 суток, по предоплате.
                    <br /> Важно: предоплата не возвращается и не переносится в
                    случае отмены заказа клиентом.
                  </>
                ) : (
                  <>
                    Available from 2 days, with prepayment.
                    <br /> Important: prepayment is non-refundable and
                    non-transferable if the order is canceled by the client.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className={styles["choose-column"]}>
            <div className={styles["choose-item-wrapper"]}>
              <div className={styles["choose-item"]}>
                <AiOutlineCheckCircle
                  size={25}
                  className={styles["choose-checkin"]}
                />
                <h4>
                  {languages === "RU" ? "РЕАЛЬНАЯ ЭКОНОМИЯ" : "REAL SAVINGS"}
                </h4>
              </div>
              <p className={styles["choose-item-description"]}>
                {languages === "RU" ? (
                  <>
                    Не нужно покупать дорогое снаряжение ради одного похода —
                    всё можно взять в аренду. Снаряжение — всё чистое,
                    проверенное и готово к использованию.
                  </>
                ) : (
                  <>
                    No need to buy expensive equipment for one hike — everything
                    can be rented. All equipment is clean, tested and ready to
                    use.
                  </>
                )}
              </p>
            </div>

            <div className={styles["choose-item-wrapper"]}>
              <div className={styles["choose-item"]}>
                <AiOutlineCheckCircle
                  size={25}
                  className={styles["choose-checkin"]}
                />
                <h4>
                  {languages === "RU"
                    ? "БОНУС ЗА ПОДПИСКУ"
                    : "SUBSCRIPTION BONUS"}
                </h4>
              </div>
              <p className={styles["choose-item-description"]}>
                {languages === "RU" ? (
                  <>
                    Подписчики нашего{" "}
                    <a
                      href="https://t.me/adjarapeak"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "rgba(0, 136, 204)" }}
                    >
                      Telegram-канала
                    </a>{" "}
                    получают скидку 5% на весь прокат снаряжения.
                    <br />
                    Если вы отметите нас в социальных сетях, мы добавим ещё 5%
                    кэшбэка от суммы заказа. Аккаунт должен быть открыт, отметка
                    — кликабельной.
                  </>
                ) : (
                  <>
                    Subscribers of our{" "}
                    <a
                      href="https://t.me/adjarapeak"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "rgba(0, 136, 204)" }}
                    >
                      Telegram channel
                    </a>{" "}
                    receive a 5% discount on all equipment rental.
                    <br />
                    If you tag us on social media, we'll add another 5% cashback
                    from the order amount. The account must be public, and the
                    tag — clickable.
                  </>
                )}
              </p>
            </div>

            <div className={styles["choose-item-wrapper"]}>
              <div className={styles["choose-item"]}>
                <AiOutlineCheckCircle
                  size={25}
                  className={styles["choose-checkin"]}
                />
                <h4>
                  {languages === "RU"
                    ? "ОРГАНИЗУЕМ ПРИКЛЮЧЕНИЯ"
                    : "WE ORGANIZE ADVENTURES"}
                </h4>
              </div>
              <p className={styles["choose-item-description"]}>
                {languages === "RU" ? (
                  <>
                    Хочешь в поход или на скалы? Мы не просто прокат — мы
                    включаем тебя в движение.
                  </>
                ) : (
                  <>
                    Want to go hiking or climbing? We're not just a rental — we
                    get you involved.
                  </>
                )}
              </p>
            </div>

            <div className={styles["choose-item-wrapper"]}>
              <div className={styles["choose-item"]}>
                <AiOutlineCheckCircle
                  size={25}
                  className={styles["choose-checkin"]}
                />
                <h4>
                  {languages === "RU" ? "ЛОКАЛЬНЫЙ БРЕНД" : "LOCAL BRAND"}
                </h4>
              </div>
              <p className={styles["choose-item-description"]}>
                {languages === "RU" ? (
                  <>
                    Мы развиваем спорт и outdoor-культуру в Аджарии.
                    <br />
                    Наша цель — сделать горы ближе. И ты — часть этого пути.
                  </>
                ) : (
                  <>
                    We develop sports and outdoor culture in Adjara.
                    <br />
                    Our goal is to bring the mountains closer. And you are part
                    of this journey.
                  </>
                )}
              </p>
            </div>

            <div className={styles["choose-item-wrapper"]}>
              <div className={styles["choose-item"]}>
                <AiOutlineCheckCircle
                  size={25}
                  className={styles["choose-checkin"]}
                />
                <h4>
                  {languages === "RU" ? "ГИБКИЕ УСЛОВИЯ" : "FLEXIBLE TERMS"}
                </h4>
              </div>
              <p className={styles["choose-item-description"]}>
                {languages === "RU" ? (
                  <>
                    Можно взять снаряжение на день, на выходные или на неделю.
                    <br /> Минимальный срок аренды — всего одни сутки.
                  </>
                ) : (
                  <>
                    You can rent equipment for a day, a weekend, or a week.
                    <br /> Minimum rental period is just one day.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
