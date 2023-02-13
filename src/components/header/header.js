import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import adjara from "../image/adjara.jpg";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/adjarapeak">
          <img src={adjara} alt="adjara peak" width={"130px"} />
        </Link>
      </div>
      <div className="location">
        <MdLocationPin size={25} color={"#de682d"} />
        <span>Батуми ул.Тбел-Абусеридзе,38 (10:00-18:00)</span>
      </div>
      <div className="number">+995 511 147 586</div>
      <a href="https://www.instagram.com/adjarapeak/?igshid=YmMyMTA2M2Y%3D">
        <BsInstagram className="instagram" />
      </a>
      <a href="https://t.me/shpaksn">
        <BsTelegram className="icon-telegram" />
      </a>
      <a href="https://wa.me/995511147586">
        <AiOutlineWhatsApp className="icon-whatsApp" />
      </a>
      <div className="cart">
        <CartBlock />
      </div>
    </div>
  );
};
