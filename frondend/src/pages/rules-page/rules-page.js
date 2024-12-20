import "./rules-page.css";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

export const RulesPage = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);

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
        <h3 className="rent-rules-title">
          {languages === "RU" ? "УСЛОВИЯ ПРОКАТА" : "RENTAL RULES"}
        </h3>
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
                {/* <li className="column__list">
                  <span className="modal__column__text">
                  {languages==="RU"? 'Для удобства клиентов, в прокате существует система бронирования, позволяющая клиенту заблаговременно заключить договор проката, указав лишь своё имя и номер телефона.':
"For customer convenience, the rental has a reservation system that allows the customer to make a rental agreement in advance by providing only their name and phone number."}               
                  </span>
                </li> */}
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
