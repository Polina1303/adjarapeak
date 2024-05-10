import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { calcTotalPrice, enumerate } from "../../components/utils";
import { IoIosArrowBack } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

import { OrderItem } from "../../components/order-item";
import { OrderInput } from "../../components/order-input/order-input";
import "./order-page.css";

export const OrderPage = () => {
  const history = useNavigate();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items && items.length < 1) {
    return (
 orderSuccess?<div style={{marginTop:100}} >
           Благодарим за оформление заказа!<br/> В ближайшее время наш представитель свяжется с вами.<br/>  С уважением, Adjara Peak.
           <br/>Осуществляем самовывоз по адресу:     
        <MdLocationPin size={25} color={"#de682d"} />
        <a
          href="https://www.google.com/maps/place/Adjara+Peak/@41.6330328,41.6130369,15z/data=!4m6!3m5!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6330328!4d41.6130369!16s%2Fg%2F11t40_rjr5?entry=ttu"
          target="_blank"
          rel="noreferrer"
        >
          Батуми ул.Тбел-Абусеридзе, 38
          понедельник-суббота (11:00-19:00)
        </a>
       <div style={{marginTop:10}}>  Всем подписчикам нашего   <a href="https://t.me/adjarapeak" target="_blank" rel="noreferrer" style={{color:'rgba(0, 136, 204)'}}>Telegram-канал</a>  предоставляется СКИДКА 15% на весь прокат снаряжения</div> <div>Покажите подписку в своем телефоне при получении снаряжения и путешествуйте выгодно!
</div> </div>:<h1 style={{marginTop:100}}>Ваша корзина пуста!</h1>
    ) 
  }

  return (
    <div className="order-page">
      <button className="back-button" onClick={() => history(-1)}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>

      <div className="order-page__left">
        {items && items.map((item) => <OrderItem key={item.id} item={item} />)}
      </div>
      <div className="order-page__right">
        <div className="order-page__totalprice">
          <h4>
            {items.length}
            {enumerate(items && items.length, [
              ` товар`,
              ` товара`,
              ` товаров`,
            ])}
            на сумму {calcTotalPrice(items)}₾
          </h4>

          <OrderInput setOrderSuccess={setOrderSuccess} items={items} />
        </div>
      </div>
    </div>
  );
};
