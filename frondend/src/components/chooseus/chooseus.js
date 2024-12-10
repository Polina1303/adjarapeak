import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaHandPointUp } from "react-icons/fa";
import "./chooseus.css";
import { useSelector } from "react-redux";

export const ChooseUs = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);

  
  return (
    <div className="choose-cover">
      <div className="choose-cover-advice">
        <h2>{languages==="RU"? 'Почему выбирают нас?':"Why Choose Us?"}</h2>
        <div className="choose-item">
          <AiOutlineCheckCircle size={25} className="choose-checkin" />
          <h5> {languages==="RU"? 'ОТСУТСТВИЕ ЗАЛОГА':"NO DEPOSIT REQUIRED"} </h5>
        </div>
        <p className="choose-item-description">
        {languages==="RU"? 'Для заключения договора нужен только паспорт. Бронирование по предоплате. Предоплата не возвращается в случае отмены заказа клиентом.':"Only a passport is required to sign the contract. For booking, you just need to provide your name and phone number."}
         
        </p>
        <div className="choose-item">
          <AiOutlineCheckCircle size={25} className="choose-checkin" />
          <h5> {languages==="RU"? 'БОНУС ЗА ПОДПИСКУ':"SUBSCRIPTION BONUS"}  </h5>
        </div>
        <p className="choose-item-description"> 
        {languages==="RU"? 'Всем подписчикам нашего':"To all our followers"}<a href="https://t.me/adjarapeak/229" target="_blank" rel="noreferrer" style={{color:'rgba(0, 136, 204)'}}>{languages==="RU"? ' Telegram-канал':"Telegram-channel"} </a>{languages==="RU"? 'предоставляется СКИДКА 5% на весь прокат снаряжения! Кроме того, если вы отметите нас в социальных сетях, мы добавим еще 5% кэшбэка от суммы вашего заказа. Чтобы воспользоваться предложением, используйте промокод «ПОДПИСКА» при бронировании на сайте, или покажите подписку на своём телефоне при выдаче снаряжения. Кэшбэк возвращается, если у вас открытый аккаунт и отметка кликабельна.':""}   
 
        </p>
        <div className="choose-item">
          <AiOutlineCheckCircle size={25} className="choose-checkin" />
          <h5>  {languages==="RU"? 'МИНИМАЛЬНЫЙ СРОК АРЕНДЫ':"MINIMUM RENTAL PERIOD"} </h5>
        </div>
        <p className="choose-item-description">
        {languages==="RU"? 'Минимальный срок аренды палаток и прочего туристического снаряжения составляет всего одни сутки.':"The minimum rental period for tents and other tourist equipment is only one day."}
        
        </p>
      </div>
      <div className="choose-cover-advice">
        <h2> {languages==="RU"? 'Успешный поход: советы':"Successful hiking: advices"} </h2>
        <div className="choose-item">
          <FaHandPointUp size={25} className="choose-checkin" />
          <h5>{languages==="RU"? 'ИССЛЕДУЙТЕ МАРШРУТ':"EXPLORE THE ROUTE"} </h5>
        </div>
        <p className="choose-item-description">
        {languages==="RU"? 'Познакомьтесь с местностью, по которой вы собираетесь ходить. Изучите карты, узнайте о возможных преградах или опасностях на пути.':"Get to know the area you are going to walk through. Study the maps, find out about possible obstacles or dangers on the way."} 
        
        </p>
        <div className="choose-item">
          <FaHandPointUp size={25} className="choose-checkin" />
          <h5>{languages==="RU"? 'БУДЬТЕ ГОТОВЫ К ИЗМЕНЕНИЯМ':"BE PREPARED FOR CHANGES"}</h5>
        </div>
        <p className="choose-item-description">
        {languages==="RU"? 'В походе могут возникнуть непредвиденные обстоятельства, поэтому важно быть гибким и адаптироваться к изменениям планов. Умейте принимать решения и реагировать на ситуации. Планируйте запасной маршрут – изучите альтернативные пути и точки выхода из маршрута на случай чрезвычайной ситуации. Имейте минимальный набор экстренной помощи – аптечку, запас еды и воды, а также средства связи.':"Unforeseen circumstances may arise during the campaign, so it is important to be flexible and adapt to changes in plans. Be able to make decisions and react to situations."}        
        </p>
        <div className="choose-item">
          <FaHandPointUp size={25} className="choose-checkin" />
          <h5>{languages==="RU"? 'НАСЛАЖДАЙТЕСЬ ПРИРОДОЙ':"ENJOY NATURE"}</h5>
        </div>
        <p className="choose-item-description">{languages==="RU"? 'Не забывай':"Do not forget"}</p>
      </div>
    </div>
  );
};
