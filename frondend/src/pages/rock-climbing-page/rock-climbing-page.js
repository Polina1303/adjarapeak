import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SwiperPhoto } from "../../components/swiper";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import style from "./rock-climbing-page.module.css";

const photos = [
  "/rockClimbingImage/IMG_5450.JPG",
  "/rockClimbingImage/IMG_5451.JPG",
  "/rockClimbingImage/IMG_5464.JPG",
  "/rockClimbingImage/IMG_5459.JPG",
  "/rockClimbingImage/IMG_5462.JPG",
  "/rockClimbingImage/IMG_5465.JPG",
];

export const RockClimbingPage = () => {
  const [isClient, setIsClient] = useState(false);
  const { t, i18n } = useTranslation("rock-climbing");
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  console.log(t("titles.locationInfo"));

  useEffect(() => {
    setIsClient(true);
    console.log("Current language:", i18n.language);
    console.log("Available languages:", i18n.languages);
    console.log("Translation resources:", i18n.store.data);
  }, [i18n]);

  console.log("Translation test:", t("titles.locationInfo"));
  console.log("Raw translation:", i18n.exists("titles.locationInfo"));

  if (!isClient) return null;

  return (
    <>
      <div className={style["back-button-cover"]}>
        <button className={style["back-button"]} onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} />
          {t("back")}
        </button>
      </div>

      <h2>{t("titles.locationInfo")}</h2>
      <div className={style["review-wrapper"]}>
        <a
          href="https://g.co/kgs/owW1gm6"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#de682d" }}
        >
          {t("location.place")}
        </a>

        <span>{t("location.howToGet")}</span>

        <p className={style["review-text"]}>{t("location.reviewPrompt")}</p>
        <a
          href="https://g.co/kgs/owW1gm6"
          target="_blank"
          rel="noopener noreferrer"
          className="review-button"
        >
          {t("location.leaveReview")}
        </a>
      </div>

      <h2>{t("titles.instructors")}</h2>

      <section className={style["point"]}>
        <h4 className={style["point-title"]}>{t("points.equipment.title")}</h4>
        <ul className={style["point-list"]}>
          <li>{t("points.equipment.list.li1")}</li>
          <li>{t("points.equipment.list.li2")}</li>
          <li>{t("points.equipment.list.li3")}</li>
        </ul>
        <p className={style["details-title"]}>
          {t("points.equipment.detailsTitle")}
        </p>
        <ul className={style["details-list"]}>
          <li>{t("points.equipment.details.li1")}</li>
          <li>{t("points.equipment.details.li2")}</li>
          <li>{t("points.equipment.details.li3")}</li>
          <li>{t("points.equipment.details.li4")}</li>
          <li>{t("points.equipment.details.li5")}</li>
          <li>{t("points.equipment.details.li6")}</li>
        </ul>
      </section>

      <section className={style["point"]}>
        <h4 className={style["point-title"]}>
          {t("points.accessibility.title")}
        </h4>
        <p className={style["point-description"]}>
          {t("points.accessibility.description")}
        </p>
        <SwiperPhoto photos={photos} />
      </section>

      <section className={style["point"]}>
        <h4 className={style["point-title"]}>{t("points.experience.title")}</h4>
        <p className={style["point-description"]}>
          {t("points.experience.description")}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className={style["image-gallery"]}
        >
          <Image
            ref={ref}
            width={200}
            height={200}
            src="/rockClimbingImage/al.JPG"
            alt="Снаряжение 1"
            className={style["gallery-image-instructor"]}
            style={{ objectFit: "contain" }}
          />
          <Image
            ref={ref}
            width={200}
            height={200}
            src="/rockClimbingImage/eg.JPG"
            alt="Снаряжение 2"
            className={style["gallery-image-instructor"]}
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>

      <h2>{t("titles.schedule")}</h2>

      <div className={style["day-card"]}>
        <h5 className={style["day-title"]}>{t("schedule.sunday.title")}</h5>
        <p className={style["price"]}>{t("schedule.price")}</p>

        <div className={style["session"]}>
          <span className={style["group-time"]}>{t("schedule.groups.0")}</span>
        </div>
        <div className={style["session"]}>
          <span className={style["group-time"]}>{t("schedule.groups.1")}</span>
        </div>
        <a
          href="https://t.me/shpaksn"
          target="_blank"
          rel="noreferrer"
          className={style["register-button"]}
        >
          {t("schedule.signup")}
        </a>
      </div>
    </>
  );
};
