import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaOdnoklassnikiSquare } from "react-icons/fa";
import adjara from "../image/adjara1.jpg";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/">
          <img src={adjara} alt="adjarapeak" width={"130px"} />
        </Link>
      </div>
      <div className="location">
        <MdLocationPin size={25} color={"#de682d"} />
        <a
          href="https://www.google.com/maps/place/Adjara+Peak/@41.6330328,41.6130369,15z/data=!4m6!3m5!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6330328!4d41.6130369!16s%2Fg%2F11t40_rjr5?entry=ttu"
          target="_blank"
          rel="noreferrer"
        >
          Батуми ул.Тбел-Абусеридзе,38 (12:00-18:00)
        </a>
      </div>
      <div className="number">
        <a href="tel:+995511147586">+995 511 147 586</a>
      </div>
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
        <a href="https://vk.com/adjarapeak" target="_blank" rel="noreferrer">
          <SlSocialVkontakte className="icon-vk" />
        </a>
        <a
          href="https://ok.ru/group/70000002578399"
          target="_blank"
          rel="noreferrer"
        >
          <FaOdnoklassnikiSquare className="icon-odnoklassniki" />
        </a>
      </div>
      <div className="cart">
        <CartBlock />
      </div>
    </div>
    // </>
  );
};
