import { useInView } from "react-intersection-observer";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import styles from "./erge-route-page.module.css";
import Image from "next/image";

export const ErgeRoutePage = () => {
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
      <h3>{t("routePages.erge.heading")}</h3>
      <div className={styles["lake-route-page-cover"]}>
        <div ref={ref} className={styles["lake-route-page-cover-img"]}>
          <div>
            <Image
              src="/image/erge1.jpg"
              alt="erge"
              className={styles["route-page-img"]}
              width={500}
              height={500}
              layout="responsive"
              priority
            />
          </div>
          <div>
            <Image
              src="/image/erge2.jpg"
              alt="erge"
              width={500}
              height={500}
              layout="responsive"
              priority
              className={styles["route-page-img"]}
            />
          </div>
          <div>
            <Image
              src="/image/erge3.jpg"
              alt="erge"
              className={styles["route-page-img"]}
              width={500}
              height={500}
              layout="responsive"
              priority
            />
          </div>
          <div>
            <Image
              src="/image/erge4.jpg"
              alt="erge"
              className={styles["route-page-img"]}
              width={500}
              height={500}
              layout="responsive"
              priority
            />
          </div>
        </div>
        <div className={styles["lake-route-page-cover-desc"]}>
          <p className={styles["lake-route-page-cover-title"]}>
            {t("routePages.erge.title")}
          </p>
          <p>{t("routePages.erge.intro")}</p>
          <p>
            <span className={styles["lake-route-page-cover-title"]}>
              {t("routePages.erge.coords")}
            </span>
          </p>
          <p>{t("routePages.erge.description")}</p>
          <p>
            {t("routePages.erge.routeBefore")}
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
              href="https://www.komoot.com/tour/1143937607"
              target="_blank"
              rel="noreferrer"
            >
              {t("routePages.routeLink")}
            </a>
            {t("routePages.erge.routeAfter")}
            <br />{" "}
            {t("routePages.common.mountains")}
            <br />
            {t("routePages.common.seeYou")}
          </p>
          <p>
            <span className={styles["lake-route-page-cover-title"]}>
              {t("routePages.common.safetyTitle")}
            </span>
            {t("routePages.erge.safety")}
          </p>
        </div>
      </div>
    </>
  );
};
