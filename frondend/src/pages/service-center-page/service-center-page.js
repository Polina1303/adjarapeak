import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import Image from "next/image";
import style from "./service-center-page.module.css";
import { useTranslation } from "next-i18next";

function ServiceCenterPage() {
  const { t } = useTranslation("service");
  const router = useRouter();

  return (
    <>
      <div className={style["back-button-cover"]}>
        <button className={style["back-button"]} onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} /> {t("back")}
        </button>
      </div>
      <section className={style["service-section"]}>
        <h2 className={style["works-photos-title"]}>{t("title")}</h2>
        <table className={style["service-table"]}>
          <thead>
            <tr>
              <th>{t("table.service")}</th>
              <th>{t("table.price")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {t("services.comprehensive.name")} -{" "}
                {t("services.comprehensive.description")}
              </td>
              <td>{t("services.comprehensive.price")}</td>
            </tr>
            <tr>
              <td>{t("services.edgeSharpening.name")}</td>
              <td>{t("services.edgeSharpening.price")}</td>
            </tr>
            <tr>
              <td>{t("services.preservation.name")}</td>
              <td>{t("services.preservation.price")}</td>
            </tr>
            <tr>
              <td>
                {t("services.surfaceRepair.name")},{" "}
                {t("services.surfaceRepair.description")}
              </td>
              <td>{t("services.surfaceRepair.price")}</td>
            </tr>
            <tr>
              <td>{t("services.waxApplication.name")}</td>
              <td>{t("services.waxApplication.price")}</td>
            </tr>
          </tbody>
        </table>

        <h2 className={style["works-photos-title"]}>{t("photosTitle")}</h2>

        <div className={style["images-container"]}>
          <Image
            src="/serviceImage/IMG_4590.PNG"
            alt="Image 1"
            width={100}
            height={100}
            priority
            className={style["modal-image"]}
          />
          <Image
            src="/serviceImage/IMG_4591.JPG"
            alt="Image 2"
            width={100}
            height={100}
            priority
            className={style["modal-image"]}
          />
          <Image
            src="/serviceImage/IMG_4592.JPG"
            alt="Image 3"
            width={100}
            height={100}
            priority
            className={style["modal-image"]}
          />
          <Image
            src="/serviceImage/IMG_4589.JPG"
            alt="Image 4"
            width={100}
            height={100}
            priority
            className={style["modal-image"]}
          />
        </div>
      </section>
    </>
  );
}

export default ServiceCenterPage;
