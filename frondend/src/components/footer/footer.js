import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styles from "./footer.module.css";

export const Footer = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);
  const router = useRouter();

  const handleClick = () => {
    router.push("/return_policy");
  };
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-content-wrapper"]}>
        <div className={styles["footer-content"]}>
          <div className={styles["footer-info"]}>
            <div className={styles["footer-location"]}>
              <MdLocationPin
                size={20}
                color="#de682d"
                className={styles.icon}
              />

              <a
                href="https://www.google.com/maps/place/Adjara+Peak+%7C+Sport,+Hiking,+Ski+%26+Outdoor+Equipment+-+rental+and+sales/@41.6333914,41.6150928,84m/data=!3m1!1e3!4m14!1m7!3m6!1s0x4067858105d2e915:0x5a619f050a0a9584!2sAdjara+Peak+%7C+Sport,+Hiking,+Ski+%26+Outdoor+Equipment+-+rental+and+sales!8m2!3d41.6333992!4d41.615391!16s%2Fg%2F11t40_rjr5!3m5!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6333992!4d41.615391!16s%2Fg%2F11t40_rjr5?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                {languages === "RU"
                  ? "Батуми, ул. Ген. Аслана Абашидзе, 19"
                  : "Batumi, 38 Tbel-Abuseridze Street. (11:00-20:00), closed on Sunday"}
                <br />
                {languages === "RU"
                  ? "11:00-20:00, без выходных"
                  : "Batumi, 38 Tbel-Abuseridze Street. (11:00-20:00), closed on Sunday"}
              </a>
            </div>
            <div className={styles["footer-phone"]}>
              <AiOutlinePhone
                size={20}
                color="#de682d"
                className={styles.icon}
              />
              <a href="tel:+995511147586">+995 511 147 586 (RU)</a>
            </div>
            <div className={styles["footer-phone"]}>
              <AiOutlinePhone
                size={20}
                color="#de682d"
                className={styles.icon}
              />
              <a href="tel:+995557229348">+995 557 229 348 (ENG/GE)</a>
            </div>

            <div className={styles["reviews-text"]}>
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
            <div onClick={handleClick} className={styles["footer-return"]}>
              Правила возврата товар
            </div>
            <div className={styles["footer-socials"]}>
              <h4 className={styles["footer-heading"]}>
                {languages === "RU"
                  ? "Соцсети Adjara Peak"
                  : "Follow Adjara Peak"}
              </h4>
              <div className={styles["social-icons"]}>
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
        </div>
        <iframe
          title="Adjara Peak"
          className={styles["footer-map"]}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          // sandbox="allow-scripts allow-same-origin allow-popups"
          // referrerPolicy="no-referrer"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=41.63342805662303,%2041.61548271005293+(Adjara%20Peak%20%7C%20Sport,%20Hiking,%20Ski%20&amp;%20Outdoor%20Equipment%20-%20rental%20and%20sales)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
        <a href="https://www.gps.ie/">gps vehicle tracker</a>
      </div>
      <div className={styles["footer-bottom"]}>
        <p>
          &copy; 2022-{new Date().getFullYear()} Adjara Peak.{" "}
          {languages === "RU" ? "Все права защищены." : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
};
