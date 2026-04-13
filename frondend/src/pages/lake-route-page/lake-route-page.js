import { useInView } from "react-intersection-observer";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import styles from "./lake-route-page.module.css";
import Image from "next/image";

export const LakeRoutePage = () => {
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
      <h3>{t("routePages.lake.heading")}</h3>
      <div className={styles["lake-route-page-cover"]}>
        <div ref={ref} className={styles["lake-route-page-cover-img"]}>
          <div>
            <Image
              src="/image/lake1.jpg"
              alt="lake"
              className={styles["route-page-img"]}
              width={300}
              height={300}
              priority
            />
          </div>
          <div>
            <Image
              src="/image/lake2.jpg"
              alt="lake"
              className={styles["route-page-img"]}
              width={300}
              height={300}
              priority
            />
          </div>
          <div>
            <Image
              src="/image/lake3.jpg"
              alt="lake"
              className={styles["route-page-img"]}
              width={300}
              height={300}
              priority
            />
          </div>
          <div>
            <Image
              src="/image/lake4.jpg"
              alt="lake"
              className={styles["route-page-img"]}
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
        <div className={styles["lake-route-page-cover-desc"]}>
          <p className={styles["lake-route-page-cover-title"]}>
            {t("routePages.lake.title")}
          </p>
          <p>{t("routePages.lake.intro1")}</p>
          <p>{t("routePages.lake.intro2")}</p>
          <ol>
            <li className={styles["lake-route-page-points"]}>
              {t("routePages.lake.point1")}
            </li>
            <p>
              <span className={styles["lake-route-page-cover-title"]}>
                {t("routePages.lake.busTitle")}
              </span>{" "}
              {t("routePages.lake.busText")}
            </p>
            <p>
              <span className={styles["lake-route-page-cover-title"]}>
                {t("routePages.lake.carTitle")}
              </span>{" "}
              {t("routePages.lake.carText")}
            </p>
            <li className={styles["lake-route-page-points"]}>
              {t("routePages.lake.point2")}
            </li>
            <p>{t("routePages.lake.point2Text")}</p>
            <li className={styles["lake-route-page-points"]}>
              {t("routePages.lake.point3")}
            </li>
            <p>
              <span className={styles["lake-route-page-cover-title"]}>
                {t("routePages.lake.coordsTitle")}
              </span>
              {t("routePages.lake.coordsBefore")}

              <a
                className={styles["lake-route-page-url"]}
                href="https://maps.me/"
                target="_blank"
                rel="noreferrer"
              >
                Maps.me
              </a>
              {t("routePages.lake.coordsAfter")}
            </p>
          </ol>
          <p>{t("routePages.lake.outro")}</p>
        </div>
      </div>
    </>
  );
};
