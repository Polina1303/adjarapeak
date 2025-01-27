import "./footer.css";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";

import { useSelector } from "react-redux";

export const Footer = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-location">
            <MdLocationPin size={20} color="#de682d" className="icon" />

            <a
              href="https://www.google.com/maps/place/Adjara+Peak/@41.6330328,41.6130369,15z/data=!4m6!3m5!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6330328!4d41.6130369!16s%2Fg%2F11t40_rjr5?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              {languages === "RU"
                ? "Батуми ул.Тбел-Абусеридзе, 38. (11:00-20:00), выходной — воскресенье"
                : "Batumi, 38 Tbel-Abuseridze Street. (11:00-20:00), closed on Sunday"}
            </a>
          </div>
          <div className="footer-phone">
            <AiOutlinePhone size={20} color="#de682d" className="icon" />
            <a href="tel:+995511147586">+995 511 147 586</a>
          </div>
          <div class="reviews-text">
            <p>
              <a
                href="https://www.google.com/maps/place/Adjara+Peak/@41.6330368,41.6104566,17z/data=!4m8!3m7!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6330328!4d41.6130369!9m1!1b1!16s%2Fg%2F11t40_rjr5?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                {languages === "RU"
                  ? "Оставь отзыв в Google"
                  : "Leave a review on Google"}
              </a>
            </p>
            <p>
              <a
                href="https://yandex.com.ge/maps/org/adzhara_pik/33060720484/reviews/?ll=41.613251%2C41.633090&mode=search&sll=41.613252%2C41.633089&source=serp_navig&tab=reviews&text=%D0%B0%D0%B4%D0%B6%D0%B0%D1%80%D0%B0%D0%BF%D0%B8%D0%BA&z=16"
                target="_blank"
                rel="noopener noreferrer"
              >
                {languages === "RU"
                  ? "Оставь отзыв в Яндекс"
                  : "Leave a review on Yandex"}
              </a>
            </p>
          </div>
        </div>

        <div className="footer-socials">
          <h4 className="footer-heading">
            {languages === "RU" ? "Соцсети Adjara Peak" : "Follow Adjara Peak"}
          </h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/adjarapeak/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <BsInstagram />
            </a>
            <a
              href="https://t.me/adjarapeak/229"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <BsTelegram />
            </a>
            <a
              href="https://wa.me/995511147586"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2022-{new Date().getFullYear()} Adjara Peak.{" "}
          {languages === "RU" ? "Все права защищены." : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
};
