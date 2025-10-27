import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import { MdLocationPin } from "react-icons/md";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import { updateCurrentLanguages } from "../../redux/languages/reducer";
import "./header.css";
import adjara from "../image/adjara2.png";
export const Header = () => {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.languages.currentLanguages);

  // Initialize `checked` first
  const [checked, setChecked] = useState(
    JSON.stringify(languages) === JSON.stringify("RU")
  );

  useEffect(() => {
    if (checked) {
      dispatch(updateCurrentLanguages("RU"));
    } else {
      dispatch(updateCurrentLanguages("ENG"));
    }
  }, [checked, dispatch]);

  useEffect(() => {
    setChecked(JSON.stringify(languages) === JSON.stringify("RU"));
  }, [languages]);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <>
      <div className="delivery-strip">
        <div className="delivery-text">
          Доставка по Батуми — 10 лари, бесплатно от 300. По Грузии — от 20
          лари, бесплатно от 500.❗️Не распространяется на аренду.
        </div>
      </div>

      <div className="header">
        <div className="wrapper">
          <Link to="/">
            <img src={adjara} alt="adjarapeak" width="130" />
          </Link>
        </div>
        <div className="nav-links">
          {/* <MdLocationPin size={25} color="#de682d" /> */}
          <Link to="/sale">{languages === "RU" ? "МАГАЗИН" : "SHOP"}</Link>
          <Link to="/rent_sky">{languages === "RU" ? "ПРОКАТ" : "RENTAL"}</Link>
          <Link to="/trip">{languages === "RU" ? "ТУРЫ" : "TOURS"}</Link>
          <Link to="/">
            {languages === "RU" ? "СКАЛОЛАЗАНИЕ" : "ROCK CLIMBING"}
          </Link>
          <Link to="/">
            {languages === "RU" ? "СЕРВИС-ЦЕНТР" : "SERVICE CENTER"}
          </Link>
          <Link to="/">{languages === "RU" ? "КОНТАКТЫ" : "CONTACTS"}</Link>
        </div>

        {/* <div className="switch">
        <label htmlFor="material-switch" id="switch-label">
          {languages}
        </label>
        <Switch
          checked={checked}
          onChange={handleChange}
          onHandleColor="#fff"
          handleDiameter={15}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="#f68632"
          activeBoxShadow="#f68632"
          offColor="#f68632"
          onColor="#f68632"
          height={18}
          width={40}
          className="react-switch"
          id="material-switch"
          aria-labelledby="switch-label"
        />
      </div> */}
        <div className="cart">
          <CartBlock />
        </div>
      </div>
    </>
  );
};
