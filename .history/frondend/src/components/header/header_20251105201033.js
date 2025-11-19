import { useState, useEffect } from "react";
import Link from "next/link";
import { CartBlock } from "../cart-block";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentLanguages } from "../../redux/languages/reducer";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import adjara from "../image/adjara2.png";
import styles from "./header.module.css";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const dispatch = useDispatch();
  const languages = useSelector((state) => state.languages.currentLanguages);
  const [checked, setChecked] = useState(languages === "RU");

  useEffect(() => {
    dispatch(updateCurrentLanguages(checked ? "RU" : "ENG"));
  }, [checked, dispatch]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 1200;
      setIsMobileView(mobile);
      if (!mobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    if (isMobileView) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { path: "/sale", text: { RU: "МАГАЗИН", ENG: "SHOP" } },
    { path: "/rental", text: { RU: "ПРОКАТ", ENG: "CAMPING" } },
    { path: "/trip", text: { RU: "ТУРЫ", ENG: "TOURS" } },
    {
      path: "/rockClimbing",
      text: { RU: "СКАЛОЛАЗАНИЕ", ENG: "ROCK CLIMBING" },
    },
    { path: "/service", text: { RU: "СЕРВИС-ЦЕНТР", ENG: "SERVICE CENTER" } },
    { path: "/contact", text: { RU: "КОНТАКТЫ", ENG: "CONTACTS" } },
  ];

  const menuItemsMobile = [
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

  const deliveryText =
    languages === "RU"
      ? "Доставка по Батуми — 10 лари, бесплатно от 300. По Грузии — от 20 лари, бесплатно от 500.❗️Не распространяется на аренду."
      : "Delivery in Batumi - 10 GEL, free from 300. In Georgia - from 20 GEL, free from 500.❗️Not applicable for rental.";

  return (
    <>
      <div className="delivery-strip">
        <div className="delivery-text">{deliveryText}</div>
      </div>

      <AppBar position="fixed" className="app-bar">
        <Toolbar className="toolbar">
          <IconButton
            edge="start"
            onClick={toggleMobileMenu}
            className="mobile-menu-button"
          >
            <TfiAlignJustify />
          </IconButton>

          <Box className="logo-container">
            <Link href="/">
              <img src={adjara} alt="adjarapeak" className="logo" />
            </Link>
          </Box>

          <Box className="desktop-nav">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {languages === "RU" ? item.text.RU : item.text.ENG}
              </Link>
            ))}
          </Box>

          <Box className="cart-container">
            <CartBlock />
          </Box>
        </Toolbar>

        <Drawer
          anchor="top"
          open={isMobileMenuOpen}
          onClose={closeMobileMenu}
          className="mobile-drawer"
          PaperProps={{
            className: "mobile-drawer-paper",
            style: {
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              borderBottom: "2px solid #e0e0e0",
            },
          }}
          ModalProps={{
            BackdropProps: {
              style: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          }}
        >
          <Toolbar className="toolbar">
            <IconButton
              edge="start"
              onClick={toggleMobileMenu}
              className="mobile-menu-button"
            >
              <TfiClose />
            </IconButton>

            <Box className="logo-container">
              <Link href="/">
                <img src={adjara} alt="adjarapeak" className="logo" />
              </Link>
            </Box>

            <Box className="cart-container">
              <CartBlock />
            </Box>
          </Toolbar>

          <List className="mobile-menu-list">
            {menuItemsMobile.map((item, index) => (
              <ListItem
                key={index}
                component={Link}
                to={item.path}
                onClick={closeMobileMenu}
                className="mobile-menu-item"
              >
                <ListItemText
                  primary={languages === "RU" ? item.text.RU : item.text.ENG}
                  className="mobile-menu-text"
                  sx={{
                    textAlign: "center",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
      <Box className="header-spacer" />
    </>
  );
};
