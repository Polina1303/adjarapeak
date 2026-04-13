import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Trans, useTranslation } from "react-i18next";
import styles from "./rules-page.module.css";
const RulesPage = () => {
  // const pdfUrl = "../../../public/img/Adjara-Peak.pdf";
  const { t } = useTranslation("rent");

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
        <h3 className={styles["rent-rules-title"]}>{t("rules.title")}</h3>
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
                    <Trans
                      i18nKey="rules.contract"
                      ns="rent"
                      components={{
                        contract: (
                          <a
                            target="_blank"
                            style={{ color: "blue", cursor: "pointer" }}
                          />
                        ),
                      }}
                    />
                  </span>
                </li>

                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.weekend")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.prepayment")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.planAhead")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.expeditionBonus")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.paymentDay")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.noDeposit")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.overdue")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.earlyNotice")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.noRecalculation")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.cleanReturn")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.damage")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.loss")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.weekendReturn")}
                  </span>
                </li>
                <li className={styles["column__list"]}>
                  <span className={styles["modal__column__text"]}>
                    {t("rules.items.respect")}
                  </span>
                </li>
              </ul>
              <div className={styles["modal__column__text_ps-cover"]}>
                <span className={styles["modal__column__text_ps"]}>
                  {t("rules.footer")}
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
