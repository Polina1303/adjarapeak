import "./footer.css";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineWhatsApp,AiOutlinePhone } from "react-icons/ai";


export const Footer = () => {
  return (
    <div className="footer-container">
   
      <ul>
        <li>Первый в Аджарии</li>
        <li>Продажа, прокат и доставка "под заказ"</li>
        <li>Только качественное снаряжение</li>
        <li>  <MdLocationPin size={25} color={"#de682d"} /> Батуми ул.Тбел-Абусеридзе,38 (11:00-19:00)</li>
        <li><AiOutlinePhone size={25} color={"#de682d"}/>  +995 511 147 586</li>
        <li> <div className="icon-footer">
        <a href="https://www.instagram.com/adjarapeak/?igshid=YmMyMTA2M2Y%3D">
          <BsInstagram className="instagram" />
        </a>
        <a href="https://t.me/shpaksn">
          <BsTelegram className="icon-telegram" />
        </a>
        <a href="https://wa.me/995511147586">
          <AiOutlineWhatsApp className="icon-whatsApp" />
        </a>
      </div></li>
      </ul>
      <div>     
      </div>
    </div>
  );
};
