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
        <Link to="/">
          <img src={adjara} alt="adjara peak" width={"130px"} />
        </Link>
      </div>

      <div className="location">
        <MdLocationPin size={25} color={"#de682d"} />
        <span>Батуми ул.Тбел-Абусеридзе,38 (11:00-19:00)</span>
      </div>
      <div className="number">+995 511 147 586</div>
      <div className="icon">
        <a
          href="https://www.instagram.com/adjarapeak/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="instagram" />
        </a>
        <a href="https://t.me/shpaksn" target="_blank" rel="noreferrer">
          <BsTelegram className="icon-telegram" />
        </a>
        <a href="https://wa.me/995511147586" target="_blank" rel="noreferrer">
          <AiOutlineWhatsApp className="icon-whatsApp" />
        </a>
      </div>
      <div className="cart">
        <CartBlock />
      </div>
    </div>
  );
};
