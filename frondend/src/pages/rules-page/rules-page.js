import "./rules-page.css";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const RulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rent-rules-cover">
      <button className="rent-rules-button" onClick={handleOpenModal}>
        <h3 className="rent-rules-title">УСЛОВИЯ ПРОКАТА</h3>
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-button-cover">
              <button className="modal-button" onClick={handleCloseModal}>
                <AiOutlineCloseCircle size={25} color="black" />
              </button>
            </div>
            <div className="colimn_cover">
              <ul className="column">
                <li className="column__list">
                  <span className="modal__column__text">
                    Для удобства клиентов, в прокате существует система
                    бронирования, позволяющая клиенту заблаговременно заключить
                    договор проката, указав лишь своё имя и номер телефона.
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    Оплата за прокат производится в день выдачи снаряжения.
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    Снаряжение предоставляется клиенту без залога.
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    Если превышается оговоренный срок проката (без
                    предупреждения), клиент выплачивает стоимость проката за
                    каждый день просрочки в двукратном размере.
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    Если вы хотите сдать снаряжение раньше - предупредите нас об
                    этом.
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    В случае возврата снаряжения раньше запланированного
                    времени, пересчет не производится.
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    Снаряжение выдается клиенту в сухом и чистом виде — и
                    подлежит сдаче в таком же состоянии. В случае возврата во
                    влажном или грязном виде, взимается штраф в размере одних
                    суток проката.
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    В случае повреждения вещей в период проката, клиент
                    возмещает стоимость ремонта.
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    В случае утери / порчи снаряжения, когда оно не подлежит
                    ремонту, клиент компенсирует снаряжение по его полной
                    рыночной стоимости, указанной в договоре.
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    Возврат снаряжения взятого на выходные – строго не позднее
                    12 часов дня понедельника!
                  </span>
                </li>
                <li className="column__list">
                  <span className="modal__column__text">
                    Пожалуйста, уважайте наш труд и относитесь бережно к
                    снаряжению, которое берёте в аренду!
                  </span>
                </li>
              </ul>
              <div className="modal__column__text_ps-cover">
                <span className="modal__column__text_ps">
                  С благодарностью, ADJARA PEAK.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
