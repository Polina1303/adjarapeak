import "./footer.css";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaOdnoklassnikiSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <ul className="footer-container-list">
          <li>Прокат без залога денежных средств и документов</li>
          <li>Бронирование без предоплаты</li>
          <li>Продажа, прокат и доставка "под заказ"</li>
          <li>
            <MdLocationPin size={25} color={"#de682d"} />
            <a
              href="https://www.google.com/maps/place/Adjara+Peak/@41.6330328,41.6130369,15z/data=!4m6!3m5!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6330328!4d41.6130369!16s%2Fg%2F11t40_rjr5?entry=ttu"
              target="_blank"
              rel="noreferrer"
              style={{ color: "rgba(34, 34, 34, 0.788)" }}
            >
              Батуми ул.Тбел-Абусеридзе,38 (12:00-18:00) Выходной: воскресенье,
              понедельник
            </a>
          </li>
          <li>
            <AiOutlinePhone size={25} color={"#de682d"} />
            <a
              href="tel:+995511147586"
              style={{ color: "rgba(34, 34, 34, 0.788)" }}
            >
              +995 511 147 586
            </a>
          </li>
          <li>
            <div className="icon-footer">
              <a
                href="https://www.instagram.com/adjarapeak/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className="instagram-footer" />
              </a>
              <a href="https://t.me/shpaksn" target="_blank" rel="noreferrer">
                <BsTelegram className="icon-telegram-footer" />
              </a>
              <a
                href="https://wa.me/995511147586"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp className="icon-whatsApp-footer" />
              </a>
              <a
                href="https://vk.com/adjarapeak"
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialVkontakte className="icon-vk-footer" />
              </a>
              <a
                href="https://ok.ru/group/70000002578399"
                target="_blank"
                rel="noreferrer"
              >
                <FaOdnoklassnikiSquare className="icon-odnoklassniki-footer" />
              </a>
            </div>
          </li>
        </ul>
        <div className="footer-description">
          <span className="footer-description-text">
            Adjara Peak - первый в Аджарии магазин/прокат туристического
            снаряжения. Мы начали свою деятельность 1 июля 2022 года, преследуя
            амбициозную цель - массовое знакомство туриста с горами Аджарии! За
            эти 9 месяцев мы удовлетворили запрос более 600 клиентов, собрали 86
            положительных отзывов и около 1900 подписчиков в социальных сетях.
            Привезли мировые бренды - Quechua, Forclaz, Btrace, Naturehike,
            Stanley, Petzl, Campsor, и доросли до 100 позиций в продаже, и 45 в
            прокате! Мы постоянно растем, благодаря вам! Спасибо за ваше
            доверие!
          </span>
        </div>
      </div>
    </>
  );
};
