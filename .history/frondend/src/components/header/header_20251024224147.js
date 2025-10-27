import { NavLink } from "react-router-dom";
import { CartBlock } from "../cart-block";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { updateCurrentLanguages } from "../../redux/languages/reducer";
import "./header.css";
import adjara from "../image/adjara2.png";
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <TfiClose size={20} />
          ) : (
            <TfiAlignJustify size={20} />
          )}
        </div>
        <div className="wrapper">
          <NavLink to="/">
            <img src={adjara} alt="adjarapeak" width="130" />
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/sale">
            {languages === "RU" ? "МАГАЗИН" : "SHOP"}
          </NavLink>
          <NavLink to="/rental">
            {languages === "RU" ? "ПРОКАТ" : "RENTAL"}
          </NavLink>
          <NavLink to="/trip">{languages === "RU" ? "ТУРЫ" : "TOURS"}</NavLink>
          <NavLink to="/rockClimbing">
            {languages === "RU" ? "СКАЛОЛАЗАНИЕ" : "ROCK CLIMBING"}
          </NavLink>
          <NavLink to="/service">
            {languages === "RU" ? "СЕРВИС-ЦЕНТР" : "SERVICE CENTER"}
          </NavLink>
          <NavLink to="/contact">
            {languages === "RU" ? "КОНТАКТЫ" : "CONTACTS"}
          </NavLink>
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
