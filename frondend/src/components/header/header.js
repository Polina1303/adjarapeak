import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CartBlock } from "../cart-block";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
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
import styles from "./header.module.css";
import { LangSwitcher } from "../lang-switcher";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t, ready, i18n } = useTranslation("header");

  console.log(
    "Header translations loaded:",
    ready ? t("delivery-batumi") : "not ready"
  );
  console.log("Header resources:", i18n.getResourceBundle("en", "header"));

  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
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
      document.body.style.overflow = "";
    };
  }, [dispatch, isMobileMenuOpen]);

  useEffect(() => {
    if (mounted)
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen, mounted]);

  const toggleMobileMenu = () => {
    if (isMobileView) setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const menuItems = [
    { path: "/sale/alpinesking", key: "shop" },
    { path: "/rent/skiRental", key: "rental" },
    { path: "/trip", key: "tours" },
    { path: "/rockClimbing", key: "rock-climbing" },
    { path: "/service", key: "service-center" },
    { path: "/contact", key: "contacts" },
  ];

  const menuItemsMobile = [
    { path: "/sale/alpinesking", key: "shop" },
    { path: "/rent/skiRental", key: "rental" },
    { path: "/trip", key: "tours" },
    { path: "/rockClimbing", key: "rock-climbing" },
    { path: "/service", key: "service-center" },
    { path: "/contact", key: "contacts" },
  ];

  return (
    <>
      <div className={styles.deliveryStrip}>
        <div className={styles.deliveryText}>
          {ready ? t("delivery-batumi") : "Loading..."}
        </div>
      </div>

      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            edge="start"
            onClick={toggleMobileMenu}
            className={styles.mobileMenuButton}
          >
            <TfiAlignJustify />
          </IconButton>

          <Box className={styles.logoContainer}>
            <Link href="/">
              <Image
                src="/img/adjara3.png"
                alt="adjarapeak"
                width={130}
                height={50}
                priority
              />
            </Link>
          </Box>

          <Box className={styles.desktopNav}>
            {menuItems.map((item, index) => (
              <Link key={index} href={item.path} className={styles.navLink}>
                {t(item.key)}
              </Link>
            ))}
          </Box>

          <LangSwitcher />

          <Box className={styles.cartContainer}>
            <CartBlock />
          </Box>
        </Toolbar>

        <Drawer
          anchor="top"
          open={isMobileMenuOpen}
          onClose={closeMobileMenu}
          className={styles.mobileDrawer}
          PaperProps={{
            className: styles.mobileDrawerPaper,
            style: {
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              borderBottom: "2px solid #e0e0e0",
            },
          }}
          ModalProps={{
            BackdropProps: { style: { backgroundColor: "rgba(0, 0, 0, 0.5)" } },
          }}
        >
          <Toolbar className={styles.toolbar}>
            <IconButton
              edge="start"
              onClick={toggleMobileMenu}
              className={styles.mobileMenuButton}
            >
              <TfiClose />
            </IconButton>

            <Box className={styles.logoContainer}>
              <Link href="/">
                <Image
                  src="/img/adjara3.png"
                  alt="adjarapeak"
                  width={130}
                  height={50}
                  priority
                />
              </Link>
            </Box>

            <Box className={styles.cartContainer}>
              <CartBlock />
            </Box>
          </Toolbar>

          <List className={styles.mobileMenuList}>
            {menuItemsMobile.map((item, index) => (
              <ListItem
                key={index}
                onClick={closeMobileMenu}
                className={styles.mobileMenuItem}
              >
                <Link
                  href={item.path}
                  style={{
                    width: "100%",
                    textDecoration: "none",
                  }}
                >
                  <ListItemText
                    primary={t(item.key)}
                    classes={{ primary: styles.mobileMenuPrimary }}
                    sx={{ textAlign: "center" }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>

      <Box className={styles.headerSpacer} />
    </>
  );
};
