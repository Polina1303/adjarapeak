import "./footer.css";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";

import { useSelector } from "react-redux";
import { GoogleMapComponent } from "../footer/googlemaps";

export const Footer = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);
  return (
    <>
      <div className="footer-container">
        <ul className="footer-container-list">
          <li>
            {languages === "RU"
              ? "Прокат без залога денежных средств и документов"
              : "Rental without a deposit or documents"}{" "}
          </li>
          {/* <li>{languages==="RU"? 'Бронирование без предоплаты':"Booking without prepayment"}</li> */}
          <li>
            {languages === "RU"
              ? 'Продажа, прокат и доставка "под заказ"'
              : "Sales, rental, and delivery 'on order'"}
          </li>
          <li>
            <MdLocationPin size={25} color={"#de682d"} />
            <a
              href="https://www.google.com/maps/place/Adjara+Peak/@41.6330328,41.6130369,15z/data=!4m6!3m5!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6330328!4d41.6130369!16s%2Fg%2F11t40_rjr5?entry=ttu"
              target="_blank"
              rel="noreferrer"
              style={{ color: "rgba(34, 34, 34, 0.788)" }}
            >
              {languages === "RU"
                ? "Батуми ул.Тбел-Абусеридзе, 38. (11:00-20:00)"
                : "Batumi, 38 Tbel-Abuseridze Street. Monday-Saturday (11:00-20:00)"}
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
              <a
                href="https://t.me/adjarapeak/229"
                target="_blank"
                rel="noreferrer"
              >
                <BsTelegram className="icon-telegram-footer" />
              </a>
              <a
                href="https://wa.me/995511147586"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp className="icon-whatsApp-footer" />
              </a>
            </div>
          </li>
        </ul>
        {/* <div className="footer-description">
          <GoogleMapComponent />
        </div> */}
      </div>
    </>
  );
};
