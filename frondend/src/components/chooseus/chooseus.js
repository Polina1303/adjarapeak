import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaHandPointUp } from "react-icons/fa";
import "./chooseus.css";

export const ChooseUs = () => {
  return (
    <div className="choose-cover">
      <div className="choose-cover-advice">
        <h2>Почему выбирают нас?</h2>
        <div className="choose-item">
          <AiOutlineCheckCircle size={25} className="choose-checkin" />
          <h5> ОТСУТСТВИЕ ЗАЛОГА</h5>
        </div>
        <p className="choose-item-description">
          Для заключения договора нужен только паспорт. Для бронирования нужно
          указать лишь своё имя и номер телефона.
        </p>
        <div className="choose-item">
          <AiOutlineCheckCircle size={25} className="choose-checkin" />
          <h5> ГИБКАЯ СИСТЕМА СКИДОК</h5>
        </div>
        <p className="choose-item-description">
          У нас действует гибкая система скидок на прокат и продажу
          туристического снаряжения. Скидки от 5% до 50%.
        </p>
        <div className="choose-item">
          <AiOutlineCheckCircle size={25} className="choose-checkin" />
          <h5> МИНИМАЛЬНЫЙ СРОК АРЕНДЫ</h5>
        </div>
        <p className="choose-item-description">
          Минимальный срок аренды палаток и прочего туристического снаряжения
          составляет всего одни сутки.
        </p>
      </div>
      <div className="choose-cover-advice">
        <h2>Успешный поход: советы</h2>
        <div className="choose-item">
          <FaHandPointUp size={25} className="choose-checkin" />
          <h5>ИССЛЕДУЙТЕ МАРШРУТ</h5>
        </div>
        <p className="choose-item-description">
          Познакомьтесь с местностью, по которой вы собираетесь ходить. Изучите
          карты, узнайте о возможных преградах или опасностях на пути.
        </p>
        <div className="choose-item">
          <FaHandPointUp size={25} className="choose-checkin" />
          <h5> БУДЬТЕ ГОТОВЫ К ИЗМЕНЕНИЯМ </h5>
        </div>
        <p className="choose-item-description">
          В походе могут возникнуть непредвиденные обстоятельства, поэтому важно
          быть гибким и адаптироваться к изменениям планов. Умейте принимать
          решения и реагировать на ситуации.
        </p>
        <div className="choose-item">
          <FaHandPointUp size={25} className="choose-checkin" />
          <h5> НАСЛАЖДАЙТЕСЬ ПРИРОДОЙ </h5>
        </div>
        <p className="choose-item-description">Не забывай</p>
      </div>
    </div>
  );
};
