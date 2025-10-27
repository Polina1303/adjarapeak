import { NavLink } from "react-router-dom";
import { CartBlock } from "../cart-block";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { TfiAlignJustify } from "react-icons/tfi";
import { updateCurrentLanguages } from "../../redux/languages/reducer";
import "./header.css";
import adjara from "../image/adjara2.png";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";

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

        <Drawer
          anchor="top"
          open={isMobileMenuOpen}
          onClose={closeMobileMenu}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              backgroundColor: "#f5f5f5",
              marginTop: "30px", // Отступ под delivery-strip
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  key={index}
                  component={NavLink}
                  to={item.path}
                  onClick={closeMobileMenu}
                  sx={{
                    color: "#000",
                    textDecoration: "none",
                    borderBottom: "1px solid #ddd",
                    "&:hover": {
                      color: "#de682d",
                      backgroundColor: "rgba(222, 104, 45, 0.1)",
                    },
                    "&.active": {
                      color: "#de682d",
                      backgroundColor: "rgba(222, 104, 45, 0.05)",
                    },
                  }}
                >
                  <ListItemText
                    primary={languages === "RU" ? item.text.RU : item.text.ENG}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontWeight: 600,
                        fontSize: "16px",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <div className="cart">
          <CartBlock />
        </div>
      </div>
    </>
  );
};
