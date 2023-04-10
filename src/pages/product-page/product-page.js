import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Buy } from "../../components/buy/buy";
import "./product-page.css";

export const ProductPage = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/adjarapeak");
  }, [navigate]);
  const product = useSelector((state) => state.products.currentProduct);
  const column = useSelector((state) => state.products.currentProduct.column);

  if (!product) return null;

  return (
    <div className="product-container">
      <div className="product-page__wrapper">
        <div className="image-container">
          <button className="back-button" onClick={() => handleClick()}>
            <IoIosArrowBack size={"25px"} /> Назад
          </button>
          <img
            className="product-page__img"
            src={process.env.PUBLIC_URL + "/img/" + product.img}
            alt={product.title}
          ></img>
        </div>

        <div className="product-info-container">
          <h1 className="product-page__title">{product.title}</h1>
          <p className="product-text">{product.desc}</p>
          <p className="product-text">{product.shortly}</p>
          <ul className="column">
            {column.map((item) => (
              <li className="column__list" key={item}>
                <span> {item}</span>
              </li>
            ))}
          </ul>

          {product.category === "rent" ? (
            <div className="cover-list">
              <h3 className="title">Ознакомьтесь с правилами проката!</h3>
              <ol className="cover-item">
                <li>
                  Для удобства клиентов, в прокате существует система
                  бронирования, позволяющая клиенту заблаговременно заключить
                  договор проката, указав лишь своё имя и номер телефона.{" "}
                </li>
                <li>Оплата за прокат производится в день выдачи снаряжения.</li>
                <li>Снаряжение предоставляется клиенту без залога.</li>
                <details>
                  <summary>далее...</summary>
                  <li>
                    Если превышается оговоренный срок проката (без
                    предупреждения), клиент выплачивает стоимость проката за
                    каждый день просрочки в двукратном размере.
                  </li>
                  <li>
                    Если вы хотите сдать снаряжение раньше - предупредите нас об
                    этом.
                  </li>
                  <li>
                    В случае возврата снаряжения раньше запланированного
                    времени, пересчет не производится
                  </li>
                  <li>
                    Снаряжение выдается клиенту в сухом и чистом виде — и
                    подлежит сдаче в таком же состоянии. В случае возврата во
                    влажном или грязном виде, взимается штраф в размере одних
                    суток проката.
                  </li>
                  <li>
                    В случае повреждения вещей в период проката, клиент
                    возмещает стоимость ремонта.
                  </li>
                  <li>
                    В случае утери / порчи снаряжения, когда оно не подлежит
                    ремонту, клиент компенсирует снаряжение по его полной
                    рыночной стоимости, указанной в договоре
                  </li>
                  <li>
                    Возврат снаряжения взятого на выходные – строго не позднее
                    12 часов дня понедельника!
                  </li>
                  <li>
                    Пожалуйста, уважайте наш труд и относитесь бережно к
                    снаряжению, которое берёте в аренду!
                  </li>
                </details>
              </ol>
            </div>
          ) : null}
          <div className="cover-count-price">
            <div className="product-page__price__buy">
              <div className="product-page__day">{product.day}</div>
              <div></div>
              <div className="buttom-buy">
                <Buy product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
