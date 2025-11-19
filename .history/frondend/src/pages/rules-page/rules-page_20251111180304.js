import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import styles from "./rules-page.module.css";
const RulesPage = () => {
  // const pdfUrl = "../../../public/img/Adjara-Peak.pdf";

  const languages = useSelector((state) => state.languages.currentLanguages);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const onResumeClick = () => {
  //   window.open(pdfUrl, "_blank");
  // };

  return (
    <div className={styles["rent-rules-cover"]}>
      <button className={styles["rent-rules-button"]} onClick={handleOpenModal}>
        <h3 className={styles["rent-rules-title"]}>
          {languages === "RU" ? "УСЛОВИЯ ПРОКАТА" : "RENTAL RULES"}
        </h3>
      </button>

      {isModalOpen && (
        <div className={styles["modal"]} onClick={handleCloseModal}>
          <div
            className={styles["modal-content"]}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles["modal-button-cover"]}>
              <button
                className={styles["modal-button"]}
                onClick={handleCloseModal}
              >
                <AiOutlineCloseCircle size={25} color="black" />
              </button>
            </div>
            <div className={styles["colimn_cover"]}>
              <ul className={styles["column"]}>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {languages === "RU" && (
                      <>
                        Ознакомьтесь с{" "}
                        <a
                          // onClick={onResumeClick}
                          target="_blank"
                          // onClick={handleOpenDoc}
                          style={{ color: "blue", cursor: "pointer" }}
                        >
                          договором аренды
                        </a>
                      </>
                    )}
                  </span>
                </li>

                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {languages === "RU"
                      ? "При бронировании снаряжения на выходные (сб-вс), клиент получает право забрать снаряжение в пятницу 14:00-20:00, а вернуть в понедельник 11:00-14:00, оплачивая лишь 2 суток проката, вместо 3."
                      : "When booking equipment for the weekend (Sat-Sun), the client gets the right to pick up equipment on Friday 14:00-20:00, and return it on Monday 11:00-14:00, paying only 2 days of rental, instead of 3.."}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? "Бронирование по предоплате. Предоплата не возвращается в случае отмены заказа клиентом."
                      : ""}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? "Планируйте свои приключения заранее, бронируя снаряжение на 2 и более суток. Для спонтанных выездов предоставляем возможность аренды на сутки без предварительного заказа, основываясь на наличии в прокате по адресу Генерала Аслана Абашидзе 19."
                      : ""}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? "При бронировании снаряжения на восхождения, многодневные походы от 7 дней с флагом АджараПик и отметкой в сторис, клиент получает 2 дня бесплатной аренды на дорогу. То есть оплачивает 5 суток, вместо 7."
                      : ""}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? "Оплата за прокат производится в день выдачи снаряжения."
                      : "Payment for the rental is made on the day of equipment issuance."}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? "Снаряжение предоставляется клиенту без залога."
                      : "Equipment is provided to the client without a deposit."}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? " Если превышается оговоренный срок проката (без предупреждения), клиент выплачивает стоимость проката за каждый день просрочки в двукратном размере."
                      : "If the agreed rental period is exceeded (without prior notice), the client will pay double the rental fee for each day of delay."}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? "Если вы хотите сдать снаряжение раньше - предупредите нас об этом."
                      : "If you want to return the equipment earlier, please inform us in advance."}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? "В случае возврата снаряжения раньше запланированного времени, пересчет не производится."
                      : "If the equipment is returned earlier than planned, no recalculations will be made."}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? "Снаряжение выдается клиенту в сухом и чистом виде — и подлежит сдаче в таком же состоянии. В случае возврата во влажном или грязном виде, взимается штраф в размере одних суток проката."
                      : "The equipment is issued to the client in a dry and clean condition and must be returned in the same condition. In case of return in a damp or dirty condition, a penalty equal to one day's rental is charged."}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? "В случае повреждения вещей в период проката, клиент возмещает стоимость ремонта."
                      : "In case of damage to items during the rental period, the client will cover the cost of repairs."}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? "В случае утери / порчи снаряжения, когда оно не подлежит ремонту, клиент компенсирует снаряжение по его полной рыночной стоимости, указанной в договоре."
                      : "In case of loss / damage to the equipment, when it cannot be repaired, the client will compensate for the equipment at its full market value, as stated in the contract."}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? " Возврат снаряжения взятого на выходные – строго не позднее 12 часов дня понедельника!"
                      : "Returning equipment taken for the weekend - strictly no later than 12:00 PM on Monday!"}
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    {languages === "RU"
                      ? " Пожалуйста, уважайте наш труд и относитесь бережно к снаряжению, которое берёте в аренду!"
                      : "Please, respect our work and handle the equipment you rent with care!"}
                  </span>
                </li>
              </ul>
              <div className="modal__column__text_ps-cover">
                <span className="modal__column__text_ps">
                  {languages === "RU"
                    ? "С благодарностью, ADJARA PEAK."
                    : "You're welcome! Enjoy your adventure at Adjara Peak."}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RulesPage;
