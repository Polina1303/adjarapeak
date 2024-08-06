import "./footer.css";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";

import { useSelector } from "react-redux";

export const Footer = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);
  return (
    <>
      <div className="footer-container">
        <ul className="footer-container-list">
          <li>{languages==="RU"? 'Прокат без залога денежных средств и документов':"Rental without a deposit or documents"} </li>
          {/* <li>{languages==="RU"? 'Бронирование без предоплаты':"Booking without prepayment"}</li> */}
          <li>{languages==="RU"? 'Продажа, прокат и доставка "под заказ"':"Sales, rental, and delivery 'on order'"}</li>
          <li>
            <MdLocationPin size={25} color={"#de682d"} />
            <a
              href="https://www.google.com/maps/place/Adjara+Peak/@41.6330328,41.6130369,15z/data=!4m6!3m5!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6330328!4d41.6130369!16s%2Fg%2F11t40_rjr5?entry=ttu"
              target="_blank"
              rel="noreferrer"
              style={{ color: "rgba(34, 34, 34, 0.788)" }}
            >
         {languages==="RU"? 'Батуми ул.Тбел-Абусеридзе, 38. ежедневно (11:00-19:00)':"Batumi, 38 Tbel-Abuseridze Street. Monday-Saturday (11:00-19:00)"}   
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
            <li>Соцсети Adjara Peak / Adjpeak:</li>
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
              {/* <a
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
              </a> */}
            </div>
          </li>
        </ul>
        {/* <div className="footer-description">
          <span className="footer-description-text">
          {languages==="RU"? '  Adjara Peak / Adjpeak':"Adjara Peak - the first store/rental service for tourist equipment in Adjara. We began our activities on July 1, 2022, with the ambitious goal of introducing tourists to the mountains of Adjara on a large scale! In these 9 months, we have met the needs of more than 600 clients, received 86 positive reviews, and gained about 1900 followers on social media. We have brought in world-renowned brands such as Quechua, Forclaz, Btrace, Naturehike, Stanley, Petzl, and Campsor, and have grown to offer 100 items for sale and 45 for rent! We are constantly growing thanks to you! Thank you for your trust!"}
          
          </span>
        </div> */}
      </div>
    </>
  );
};
