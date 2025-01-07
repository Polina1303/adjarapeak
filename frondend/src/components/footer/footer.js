// import "./footer.css";
// import { MdLocationPin } from "react-icons/md";
// import { BsInstagram, BsTelegram } from "react-icons/bs";
// import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";

// import { useSelector } from "react-redux";

// export const Footer = () => {
//   const languages = useSelector((state) => state.languages.currentLanguages);
//   return (
//     <>
//       <div className="footer-container">
//         <ul className="footer-container-list">
//           <li>
//             {languages === "RU"
//               ? "Прокат без залога денежных средств и документов"
//               : "Rental without a deposit or documents"}{" "}
//           </li>
//           {/* <li>{languages==="RU"? 'Бронирование без предоплаты':"Booking without prepayment"}</li> */}
//           <li>
//             {languages === "RU"
//               ? 'Продажа, прокат и доставка "под заказ"'
//               : "Sales, rental, and delivery 'on order'"}
//           </li>
//           <li>
//             <MdLocationPin size={25} color={"#de682d"} />
//             <a
//               href="https://www.google.com/maps/place/Adjara+Peak/@41.6330328,41.6130369,15z/data=!4m6!3m5!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6330328!4d41.6130369!16s%2Fg%2F11t40_rjr5?entry=ttu"
//               target="_blank"
//               rel="noreferrer"
//               style={{ color: "rgba(34, 34, 34, 0.788)" }}
//             >
//               {languages === "RU"
//                 ? "Батуми ул.Тбел-Абусеридзе, 38. (11:00-20:00)"
//                 : "Batumi, 38 Tbel-Abuseridze Street. Monday-Saturday (11:00-20:00)"}
//             </a>
//           </li>
//           <li>
//             <AiOutlinePhone size={25} color={"#de682d"} />
//             <a
//               href="tel:+995511147586"
//               style={{ color: "rgba(34, 34, 34, 0.788)" }}
//             >
//               +995 511 147 586
//             </a>
//           </li>
//           <li>Соцсети Adjara Peak / Adjpeak:</li>
//           <li>
//             <div className="icon-footer">
//               <a
//                 href="https://www.instagram.com/adjarapeak/?igshid=YmMyMTA2M2Y%3D"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <BsInstagram className="instagram-footer" />
//               </a>
//               <a
//                 href="https://t.me/adjarapeak/229"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <BsTelegram className="icon-telegram-footer" />
//               </a>
//               <a
//                 href="https://wa.me/995511147586"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <AiOutlineWhatsApp className="icon-whatsApp-footer" />
//               </a>
//             </div>
//           </li>
//         </ul>

//       </div>
//     </>
//   );
// };

/* <div className="footer-description">
          <GoogleMapComponent />
        </div> */

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
                ? "Батуми ул.Тбел-Абусеридзе, 38. (11:00-20:00)"
                : "Batumi, 38 Tbel-Abuseridze Street. (11:00-20:00)"}
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
                Оставь отзыв в Google
              </a>
            </p>
            <p>
              <a
                href="https://yandex.com.ge/maps/org/adzhara_pik/33060720484/reviews/?ll=41.613251%2C41.633090&mode=search&sll=41.613252%2C41.633089&source=serp_navig&tab=reviews&text=%D0%B0%D0%B4%D0%B6%D0%B0%D1%80%D0%B0%D0%BF%D0%B8%D0%BA&z=16"
                target="_blank"
                rel="noopener noreferrer"
              >
                Оставь отзыв в Яндекс
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
