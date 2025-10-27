import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import adjara from "../image/adjara2.png";
import "./header.css";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.languages.currentLanguages);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [checked, setChecked] = useState(languages === "RU");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    dispatch(updateCurrentLanguages(checked ? "RU" : "ENG"));
  }, [checked, dispatch]);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const menuItems = [
    { path: "/sale", text: { RU: "МАГАЗИН", ENG: "SHOP" } },

    {
      path: "/rent",
      text: {
        RU: "ПРОКАТ",
        ENG: "CAMPING",
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
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          top: "30px",
          zIndex: 100,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            padding: "10px",
            gap: { xs: 1, md: 2 }, // Добавляем отступ между элементами
          }}
        >
          {/* Логотип - слева */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: { xs: 0, md: 0 },
            }}
          >
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Box
                component="img"
                src={adjara}
                alt="adjarapeak"
                sx={{ width: 130, height: "auto" }}
              />
            </NavLink>
          </Box>

          {/* Навигация - по центру */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "115px",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {languages === "RU" ? item.text.RU : item.text.ENG}
              </NavLink>
            ))}
          </Box>

          {/* Корзина - справа */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: { xs: 0, md: 0 },
            }}
          >
            <CartBlock />
          </Box>
        </Toolbar>

        <Drawer
          anchor="top"
          open={isMobileMenuOpen}
          onClose={closeMobileMenu}
          ModalProps={{
            BackdropProps: {
              style: {
                backgroundColor: "transparent",
              },
            },
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              backgroundColor: "#ffffff",
              marginTop: "105px",
              boxShadow: "none",
            },
          }}
        >
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
                  "&:hover": {
                    color: "#de682d",
                  },
                  "&.active": {
                    color: "#de682d",
                  },
                }}
              >
                <ListItemText
                  primary={languages === "RU" ? item.text.RU : item.text.ENG}
                  sx={{
                    textAlign: "center",
                    "& .MuiListItemText-primary": {
                      fontWeight: 300,
                      fontSize: "16px",
                      fontFamily: "RoadRadio",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
      <Box sx={{ height: { xs: "140px", md: "130px" } }} />
    </>
  );
};
