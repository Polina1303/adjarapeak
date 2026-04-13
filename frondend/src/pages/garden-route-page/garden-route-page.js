import { useInView } from "react-intersection-observer";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import styles from "./garden-route-page.module.css";

export const GardenRoutePage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <div className={styles["back-button-cover"]}>
        <button className={styles["back-button"]} onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} /> {t("routePages.back")}
        </button>
      </div>
      <h3>{t("routePages.garden.heading")}</h3>
      <div className={styles["lake-route-page-cover"]}>
        <div ref={ref} className={styles["lake-route-page-cover-img"]}>
          <div>
            <Image
              src="/image/garden1.jpg"
              alt="erge"
              className={styles["route-page-img"]}
              width={500}
              height={300}
              layout="responsive"
              priority
            />
          </div>
          <div>
            <Image
              src="/image/garden2.jpg"
              alt="erge"
              className={styles["route-page-img"]}
              width={500}
              height={300}
              layout="responsive"
              priority
            />
          </div>
          <div>
            <Image
              src="/image/garden3.jpg"
              alt="erge"
              className={styles["route-page-img"]}
              width={500}
              height={300}
              layout="responsive"
              priority
            />
          </div>
          <div>
            <Image
              src="/image/garden4.jpg"
              alt="erge"
              className={styles["route-page-img"]}
              width={500}
              height={300}
              layout="responsive"
              priority
            />
          </div>
        </div>
        <div className={styles["lake-route-page-cover-desc"]}>
          <p className={styles["lake-route-page-cover-title"]}>
            {t("routePages.garden.title")}
          </p>
          <p>
            <span className={styles["lake-route-page-cover-title"]}>
              {t("routePages.garden.howToGetTitle")}
            </span>
            {t("routePages.garden.howToGet")}
          </p>
          <p>
            <span className={styles["lake-route-page-cover-title"]}>
              {t("routePages.garden.ticketTitle")}
            </span>
            {t("routePages.garden.ticket")}
          </p>
          <p>
            <span className={styles["lake-route-page-cover-title"]}>
              {t("routePages.garden.websiteTitle")}
            </span>
            <a
              className={styles["lake-route-page-url"]}
              href="http://bbg.ge/"
              target="_blank"
              rel="noreferrer"
            >
              bbg.ge
            </a>
          </p>

          <p>{t("routePages.garden.description1")}</p>
          <p>
            {t("routePages.garden.routeBefore")}
            <a
              className={styles["lake-route-page-url"]}
              href="https://www.komoot.com/"
              target="_blank"
              rel="noreferrer"
            >
              Komoot
            </a>
            <a
              className={styles["lake-route-page-url"]}
              href="https://www.komoot.comhttps://www.komoot.com/tour/1142299971?ref=itd&fbclid=PAAab3tgUw2qkBsa7nEeuIcmllF63udDyccHuHzcbgJdYZ20tecvVK2jFaAB4_aem_th_ARIVCl5Z42O297AqN-fpy2jy9Mm8wzU615I_kPdeW-CRwaoAiqFqpyCQSbPdKHUMOkY/tour/1143937607"
              target="_blank"
              rel="noreferrer"
            >
              {t("routePages.routeLink")}
            </a>
            <br />
            {t("routePages.common.mountains")}
            <br />
            {t("routePages.common.seeYou")}
          </p>
          <p>
            <span className={styles["lake-route-page-cover-title"]}>
              {t("routePages.common.safetyTitle")}
            </span>
            {t("routePages.garden.safety")}
          </p>
        </div>
      </div>
    </>
  );
};
