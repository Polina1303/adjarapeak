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

        <div className="choose-columns">
          <div className="choose-column">
            <div className="choose-item">
              <AiOutlineCheckCircle size={25} className="choose-checkin" />
              <h5>{languages === "RU" ? "ВСЁ В ОДНОМ МЕСТЕ" : ""}</h5>
            </div>
            <p className="choose-item-description">
              {languages === "RU"
                ? "Магазин, прокат, походы, джиппинг, восхождения и скалолазание — всё в одном месте."
                : ""}
            </p>

            <div className="choose-item">
              <AiOutlineCheckCircle size={25} className="choose-checkin" />
              <h5>{languages === "RU" ? "ОТСУТСТВИЕ ЗАЛОГА" : ""}</h5>
            </div>
            <p className="choose-item-description">
              {languages === "RU"
                ? "Для заключения договора нужен только паспорт."
                : ""}
            </p>

            <div className="choose-item">
              <AiOutlineCheckCircle size={25} className="choose-checkin" />
              <h5>{languages === "RU" ? "БРОНИРОВАНИЕ" : ""}</h5>
            </div>
            <p className="choose-item-description">
              {languages === "RU" ? (
                <>
                  Доступно от 2 суток, по предоплате.
                  <br /> Важно: предоплата не возвращается и не переносится в
                  случае отмены заказа клиентом.
                </>
              ) : (
                ""
              )}
            </p>

            <div className="choose-item">
              <AiOutlineCheckCircle size={25} className="choose-checkin" />
              <h5>{languages === "RU" ? "БОНУС ЗА ПОДПИСКУ" : ""}</h5>
            </div>
            <p className="choose-item-description">
              {languages === "RU"
                ? "Подписчики нашего"
                : "To all our followers"}
              <a
                href="https://t.me/adjarapeak/229"
                target="_blank"
                rel="noreferrer"
                style={{ color: "rgba(0, 136, 204)" }}
              >
                {languages === "RU" ? " Telegram-канал" : "Telegram-channel"}{" "}
              </a>
              {languages === "RU" ? (
                <>
                  получают скидку 5% на весь прокат снаряжения.
                  <br />
                  Если вы отметите нас в социальных сетях, мы добавим ещё 5%
                  кэшбэка от суммы заказа. Аккаунт должен быть открыт, отметка —
                  кликабельной.
                </>
              ) : (
                ""
              )}
            </p>

            <div className="choose-item">
              <AiOutlineCheckCircle size={25} className="choose-checkin" />
              <h5>{languages === "RU" ? "ГИБКИЕ УСЛОВИЯ" : ""}</h5>
            </div>
            <p className="choose-item-description">
              {languages === "RU" ? (
                <>
                  Можно взять снаряжение на день, на выходные или на неделю.
                  <br /> Минимальный срок аренды — всего одни сутки.
                </>
              ) : (
                ""
              )}
            </p>
          </div>

          <div className="choose-column">
            <div className="choose-item">
              <AiOutlineCheckCircle size={25} className="choose-checkin" />
              <h5>{languages === "RU" ? "ЭКСПЕРТНАЯ КОМАНДА" : ""}</h5>
            </div>
            <p className="choose-item-description">
              {languages === "RU" ? (
                <>
                  Мы сами ходим в горы, занимаемся спортом и тестируем
                  снаряжение.
                  <br />
                  Поможем подобрать всё под маршрут и уровень — даже если вы
                  новичок.
                </>
              ) : (
                ""
              )}
            </p>

            <div className="choose-item">
              <AiOutlineCheckCircle size={25} className="choose-checkin" />
              <h5>{languages === "RU" ? "УДОБНОЕ РАСПОЛОЖЕНИЕ" : ""}</h5>
            </div>
            <p className="choose-item-description">
              {languages === "RU" ? (
                <>
                  Мы находимся недалеко от центрального стадиона и крупнейшего
                  торгового центра в Батуми.
                </>
              ) : (
                ""
              )}
            </p>

            <div className="choose-item">
              <AiOutlineCheckCircle size={25} className="choose-checkin" />
              <h5>{languages === "RU" ? "РЕАЛЬНАЯ ЭКОНОМИЯ" : ""}</h5>
            </div>
            <p className="choose-item-description">
              {languages === "RU" ? (
                <>
                  Не нужно покупать дорогое снаряжение ради одного похода — всё
                  можно взять в аренду. Снаряжение — всё чистое, проверенное и
                  готово к использованию.
                </>
              ) : (
                ""
              )}
            </p>

            <div className="choose-item">
              <AiOutlineCheckCircle size={25} className="choose-checkin" />
              <h5>{languages === "RU" ? "ОРГАНИЗУЕМ ПРИКЛЮЧЕНИЯ" : ""}</h5>
            </div>
            <p className="choose-item-description">
              {languages === "RU" ? (
                <>
                  Хочешь в поход или на скалы? Мы не просто прокат — мы включаем
                  тебя в движ.
                </>
              ) : (
                ""
              )}
            </p>

            <div className="choose-item">
              <AiOutlineCheckCircle size={25} className="choose-checkin" />
              <h5>{languages === "RU" ? "ЛОКАЛЬНЫЙ БРЕНД" : ""}</h5>
            </div>
            <p className="choose-item-description">
              {languages === "RU" ? (
                <>
                  Мы развиваем спорт и outdoor-культуру в Аджарии.
                  <br />
                  Наша цель — сделать горы ближе. И ты — часть этого пути.
                </>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
