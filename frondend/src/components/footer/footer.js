import "./footer.css";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <ul>
          <li>Первый в Аджарии</li>
          <li>Продажа, прокат и доставка "под заказ"</li>
          <li>Только качественное снаряжение</li>
          <li>
            <MdLocationPin size={25} color={"#de682d"} /> Батуми
            ул.Тбел-Абусеридзе,38 (11:00-19:00)
          </li>
          <li>
            <AiOutlinePhone size={25} color={"#de682d"} /> +995 511 147 586
          </li>
          <li>
            <div className="icon-footer">
              <a href="https://www.instagram.com/adjarapeak/?igshid=YmMyMTA2M2Y%3D">
                <BsInstagram className="instagram" />
              </a>
              <a href="https://t.me/shpaksn">
                <BsTelegram className="icon-telegram" />
              </a>
              <a href="https://wa.me/995511147586">
                <AiOutlineWhatsApp className="icon-whatsApp" />
              </a>
            </div>
          </li>
        </ul>
        <div className="footer-description">
          <span className="footer-description-text">
            Adjara Peak - первый в Аджарии магазин/прокат туристического
            снаряжения. Мы начали свою деятельность 1 июля 2022 года, преследуя
            амбициозную цель - массовое знакомство туриста с горами Аджарии! За
            эти 10 месяцев мы удовлетворили запрос более 600 клиентов, собрали
            86 положительных отзывов и около 1900 подписчиков в социальных
            сетях. Привезли известные бренды - Quechua, Forclaz, Btrace,
            Naturehike, Stanley, Petzl, Campsor; и даже начали организовывать
            небольшие туры-восхождения. Спасибо вам за доверие!
          </span>
        </div>
      </div>
    </>
  );
};
