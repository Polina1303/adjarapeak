import { NavLink } from "react-router-dom";
import { CartBlock } from "../cart-block";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { TfiAlignJustify } from "react-icons/tfi";
import { updateCurrentLanguages } from "../../redux/languages/reducer";
import "./header.css";
import adjara from "../image/adjara2.png";
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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

  const menuItems = [
    { path: "/sale", text: { RU: "МАГАЗИН", ENG: "SHOP" } },
    {
      path: "/rent_sky",
      text: {
        RU: "ПРОКАТ ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ",
        ENG: "SKI EQUIPMENT RENTAL",
      },
    },
    {
      path: "/rent",
      text: {
        RU: "ПРОКАТ ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ",
        ENG: "CAMPING EQUIPMENT RENTAL",
      },
    },
    { path: "/trip", text: { RU: "ТУРЫ", ENG: "TOURS" } },
    {
      path: "/rockClimbing",
      text: { RU: "СКАЛОЛАЗАНИЕ", ENG: "ROCK CLIMBING" },
    },
    { path: "/service", text: { RU: "СЕРВИС-ЦЕНТР", ENG: "SERVICE CENTER" } },
    { path: "/contact", text: { RU: "КОНТАКТЫ", ENG: "CONTACTS" } },
  ];

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

        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? "mobile-menu-open" : ""
          }`}
        >
          <div className="mobile-menu-content">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="mobile-menu-item"
                onClick={closeMobileMenu}
              >
                {languages === "RU" ? item.text.RU : item.text.ENG}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="cart">
          <CartBlock />
        </div>
      </div>
    </>
  );
};
