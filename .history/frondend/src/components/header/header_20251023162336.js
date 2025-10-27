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
        <div className="location">
          {/* <MdLocationPin size={25} color="#de682d" /> */}
          <a
            href="https://www.google.com/maps/place/Adjara+Peak+%7C+Sport,+Hiking,+Ski+%26+Outdoor+Equipment+-+rental+and+sales/@41.6333505,41.614659,177m/data=!3m1!1e3!4m14!1m7!3m6!1s0x4067858105d2e915:0x5a619f050a0a9584!2sAdjara+Peak+%7C+Sport,+Hiking,+Ski+%26+Outdoor+Equipment+-+rental+and+sales!8m2!3d41.6333992!4d41.615391!16s%2Fg%2F11t40_rjr5!3m5!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6333992!4d41.615391!16s%2Fg%2F11t40_rjr5?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            {languages === "RU" ? "Магазин" : "Batumi, 38 Tbel-Abuseridze St."}
            <br />
          </a>
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
