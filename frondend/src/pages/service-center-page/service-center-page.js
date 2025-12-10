import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import style from "./service-center-page.module.css";

function ServiceCenterPage() {
  const languages = useSelector((state) => state.languages.currentLanguages);

  const router = useRouter();

  return (
    <>
      <div className={style["back-button-cover"]}>
        <button className={style["back-button"]} onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <section className={style["service-section"]}>
        <h2 className={style["works-photos-title"]}>
          {languages === "RU"
            ? "Сервисное обслуживание"
            : "Maintenance service"}
        </h2>
        <table className={style["service-table"]}>
          <thead>
            <tr>
              <th>{languages === "RU" ? "Услуга" : "Service"}</th>

              <th>{languages === "RU" ? "Цена" : "Price"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {languages === "RU"
                  ? "Комплексное обслуживание - заточка кантов, чистка скользящей поверхности, снятие старого парафина, нанесение нового (парафины от +3 до -20, с шагом 6 градусов)"
                  : "Comprehensive Service - Edge sharpening, base cleaning, old wax removal, and new wax application (wax range from +3°C to -20°C, in 6-degree increments)."}{" "}
              </td>

              <td>~ 80 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
            <tr>
              <td>Заточка кантов</td>

              <td>~ 40 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
            <tr>
              <td>Консервация</td>

              <td>от 20 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
            <tr>
              <td>
                {languages === "RU"
                  ? "Ремонт скользящей поверхности, заливка царапин Р-Тех"
                  : "Sliding surface repair, scratch filling R-Tech"}
              </td>

              <td>от 20 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
            <tr>
              <td>
                {languages === "RU"
                  ? "Нанесение температурного парафина"
                  : "Application of temperature paraffin"}
              </td>

              <td> 40 {languages === "RU" ? "лари" : "gel"}</td>
            </tr>
          </tbody>
        </table>

        <h2 className={style["works-photos-title"]}>
          {languages === "RU" ? "ФОТО РАБОТЫ" : "PHOTO OF THE WORK"}
        </h2>

        <div className={style["images-container"]}>
          <img
            src="/serviceImage/IMG_4590.PNG"
            alt="Image 1"
            className={style["modal-image"]}
          />
          <img
            src="/serviceImage/IMG_4591.JPG"
            alt="Image 2"
            className={style["modal-image"]}
          />
        </div>
        <div className={style["images-container"]}>
          <img
            src="/serviceImage/IMG_4592.JPG"
            alt="Image 3"
            className={style["modal-image"]}
          />
          <img
            src="/serviceImage/IMG_4589.JPG"
            alt="Image 4"
            className={style["modal-image"]}
          />
        </div>
      </section>
    </>
  );
}

export default ServiceCenterPage;
