// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { CartBlock } from "../cart-block";
// // import { useSelector, useDispatch } from "react-redux";
// // import { updateCurrentLanguages, hydrateLanguages } from "../../redux/languages/reducer";
// // import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
// // import {
// //   AppBar,
// //   Toolbar,
// //   Box,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   IconButton,
// // } from "@mui/material";
// // import adjara from "../image/adjara2.png";
// // import styles from "./header.module.css";

// // export const Header = () => {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [isMobileView, setIsMobileView] = useState(false);
// //   const [mounted, setMounted] = useState(false);

// //   const dispatch = useDispatch();
// //   const languages = useSelector((state) => state.languages.currentLanguages);
// //   // Инициализируем с дефолтным значением, чтобы избежать проблем с гидратацией
// //   const [checked, setChecked] = useState(false);

// //   useEffect(() => {
// //     if (mounted) {
// //       // Синхронизируем checked с languages только после монтирования
// //       setChecked(languages === "RU");
// //     }
// //   }, [languages, mounted]);

// //   useEffect(() => {
// //     if (mounted) {
// //       dispatch(updateCurrentLanguages(checked ? "RU" : "ENG"));
// //     }
// //   }, [checked, dispatch, mounted]);

// //   useEffect(() => {
// //     setMounted(true);
// //     // Загружаем язык из localStorage после монтирования
// //     if (typeof window !== "undefined") {
// //       const storedLang = localStorage.getItem("languages");
// //       if (storedLang) {
// //         try {
// //           const parsed = JSON.parse(storedLang);
// //           if (parsed === "ENG" || parsed === "RU") {
// //             dispatch(hydrateLanguages(parsed));
// //             setChecked(parsed === "RU");
// //           }
// //         } catch (e) {
// //           // Игнорируем ошибки парсинга
// //         }
// //       }
// //     }
// //   }, [dispatch]);

// //   useEffect(() => {
// //     if (typeof window !== "undefined" && mounted) {
// //       document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

// //       const checkScreenSize = () => {
// //         const mobile = window.innerWidth <= 1200;
// //         setIsMobileView(mobile);
// //         if (!mobile && isMobileMenuOpen) {
// //           setIsMobileMenuOpen(false);
// //         }
// //       };

// //       checkScreenSize();

// //       window.addEventListener("resize", checkScreenSize);

// //       return () => {
// //         window.removeEventListener("resize", checkScreenSize);
// //         document.body.style.overflow = "";
// //       };
// //     }
// //   }, [isMobileMenuOpen, mounted]);

// //   const toggleMobileMenu = () => {
// //     if (isMobileView) {
// //       setIsMobileMenuOpen(!isMobileMenuOpen);
// //     }
// //   };

// //   const closeMobileMenu = () => {
// //     setIsMobileMenuOpen(false);
// //   };

// //   const menuItems = [
// //     { path: "/sale", text: { RU: "МАГАЗИН", ENG: "SHOP" } },
// //     { path: "/rental", text: { RU: "ПРОКАТ", ENG: "CAMPING" } },
// //     { path: "/trip", text: { RU: "ТУРЫ", ENG: "TOURS" } },
// //     {
// //       path: "/rockClimbing",
// //       text: { RU: "СКАЛОЛАЗАНИЕ", ENG: "ROCK CLIMBING" },
// //     },
// //     { path: "/service", text: { RU: "СЕРВИС-ЦЕНТР", ENG: "SERVICE CENTER" } },
// //     { path: "/contact", text: { RU: "КОНТАКТЫ", ENG: "CONTACTS" } },
// //   ];

// //   const menuItemsMobile = [
// //     { path: "/sale", text: { RU: "МАГАЗИН", ENG: "SHOP" } },
// //     {
// //       path: "/rent_sky",
// //       text: {
// //         RU: "ПРОКАТ ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ",
// //         ENG: "SKI EQUIPMENT RENTAL",
// //       },
// //     },
// //     {
// //       path: "/rent",
// //       text: {
// //         RU: "ПРОКАТ ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ",
// //         ENG: "CAMPING EQUIPMENT RENTAL",
// //       },
// //     },
// //     { path: "/trip", text: { RU: "ТУРЫ", ENG: "TOURS" } },
// //     {
// //       path: "/rockClimbing",
// //       text: { RU: "СКАЛОЛАЗАНИЕ", ENG: "ROCK CLIMBING" },
// //     },
// //     { path: "/service", text: { RU: "СЕРВИС-ЦЕНТР", ENG: "SERVICE CENTER" } },
// //     { path: "/contact", text: { RU: "КОНТАКТЫ", ENG: "CONTACTS" } },
// //   ];

// //   const deliveryText =
// //     languages === "RU"
// //       ? "Доставка по Батуми — 10 лари, бесплатно от 300. По Грузии — от 20 лари, бесплатно от 500.❗️Не распространяется на аренду."
// //       : "Delivery in Batumi - 10 GEL, free from 300. In Georgia - from 20 GEL, free from 500.❗️Not applicable for rental.";

// //   return (
// //     <>
// //       <div className="delivery-strip">
// //         <div className="delivery-text">{deliveryText}</div>
// //       </div>

// //       <AppBar position="fixed" className="app-bar">
// //         <Toolbar className="toolbar">
// //           <IconButton
// //             edge="start"
// //             onClick={toggleMobileMenu}
// //             className="mobile-menu-button"
// //           >
// //             <TfiAlignJustify />
// //           </IconButton>

// //           <Box className="logo-container">
// //             <Link href="/">
// //               <img src={adjara} alt="adjarapeak" className="logo" />
// //             </Link>
// //           </Box>

// //           <Box className="desktop-nav">
// //             {menuItems.map((item, index) => (
// //               <Link
// //                 key={index}
// //                 href={item.path}
// //                 className="nav-link"
// //               >
// //                 {languages === "RU" ? item.text.RU : item.text.ENG}
// //               </Link>
// //             ))}
// //           </Box>

// //           <Box className="cart-container">
// //             <CartBlock />
// //           </Box>
// //         </Toolbar>

// //         <Drawer
// //           anchor="top"
// //           open={isMobileMenuOpen}
// //           onClose={closeMobileMenu}
// //           className="mobile-drawer"
// //           PaperProps={{
// //             className: "mobile-drawer-paper",
// //             style: {
// //               boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
// //               borderBottom: "2px solid #e0e0e0",
// //             },
// //           }}
// //           ModalProps={{
// //             BackdropProps: {
// //               style: {
// //                 backgroundColor: "rgba(0, 0, 0, 0.5)",
// //               },
// //             },
// //           }}
// //         >
// //           <Toolbar className="toolbar">
// //             <IconButton
// //               edge="start"
// //               onClick={toggleMobileMenu}
// //               className="mobile-menu-button"
// //             >
// //               <TfiClose />
// //             </IconButton>

// //             <Box className="logo-container">
// //               <Link href="/">
// //                 <img src={adjara} alt="adjarapeak" className="logo" />
// //               </Link>
// //             </Box>

// //             <Box className="cart-container">
// //               <CartBlock />
// //             </Box>
// //           </Toolbar>

// //           <List className="mobile-menu-list">
// //             {menuItemsMobile.map((item, index) => (
// //               <ListItem
// //                 key={index}
// //                 onClick={closeMobileMenu}
// //                 className="mobile-menu-item"
// //               >
// //                 <Link href={item.path} style={{ width: "100%", textDecoration: "none" }}>
// //                   <ListItemText
// //                     primary={languages === "RU" ? item.text.RU : item.text.ENG}
// //                     className="mobile-menu-text"
// //                     sx={{
// //                       textAlign: "center",
// //                     }}
// //                   />
// //                 </Link>
// //               </ListItem>
// //             ))}
// //           </List>
// //         </Drawer>
// //       </AppBar>
// //       <Box className="header-spacer" />
// //     </>
// //   );
// // };
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { CartBlock } from "../cart-block";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   updateCurrentLanguages,
//   hydrateLanguages,
// } from "../../redux/languages/reducer";
// import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
// } from "@mui/material";
// import adjara from "../image/adjara2.png";
// import styles from "./header.module.css";

// export const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   const dispatch = useDispatch();
//   const languages = useSelector((state) => state.languages.currentLanguages);

//   const defaultLanguage = "RU";
//   const [checked, setChecked] = useState(defaultLanguage === "RU");

//   useEffect(() => {
//     setMounted(true);

//     const storedLang = localStorage.getItem("languages");
//     if (storedLang) {
//       try {
//         const parsed = JSON.parse(storedLang);
//         if (parsed === "ENG" || parsed === "RU") {
//           dispatch(hydrateLanguages(parsed));
//           setChecked(parsed === "RU");
//         }
//       } catch (e) {
//         console.error("Error parsing stored language:", e);
//       }
//     }

//     const checkScreenSize = () => {
//       const mobile = window.innerWidth <= 1200;
//       setIsMobileView(mobile);
//       if (!mobile && isMobileMenuOpen) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => {
//       window.removeEventListener("resize", checkScreenSize);
//       document.body.style.overflow = "";
//     };
//   }, [dispatch, isMobileMenuOpen]);

//   useEffect(() => {
//     if (mounted) {
//       setChecked(languages === "RU");
//     }
//   }, [languages, mounted]);

//   useEffect(() => {
//     if (mounted) {
//       dispatch(updateCurrentLanguages(checked ? "RU" : "ENG"));
//     }
//   }, [checked, dispatch, mounted]);

//   useEffect(() => {
//     if (mounted) {
//       document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
//     }
//   }, [isMobileMenuOpen, mounted]);

//   const toggleMobileMenu = () => {
//     if (isMobileView) {
//       setIsMobileMenuOpen(!isMobileMenuOpen);
//     }
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const menuItems = [
//     { path: "/sale", text: { RU: "МАГАЗИН", ENG: "SHOP" } },
//     { path: "/rental", text: { RU: "ПРОКАТ", ENG: "CAMPING" } },
//     { path: "/trip", text: { RU: "ТУРЫ", ENG: "TOURS" } },
//     {
//       path: "/rockClimbing",
//       text: { RU: "СКАЛОЛАЗАНИЕ", ENG: "ROCK CLIMBING" },
//     },
//     { path: "/service", text: { RU: "СЕРВИС-ЦЕНТР", ENG: "SERVICE CENTER" } },
//     { path: "/contact", text: { RU: "КОНТАКТЫ", ENG: "CONTACTS" } },
//   ];

//   const menuItemsMobile = [
//     { path: "/sale", text: { RU: "МАГАЗИН", ENG: "SHOP" } },
//     {
//       path: "/rent_sky",
//       text: {
//         RU: "ПРОКАТ ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ",
//         ENG: "SKI EQUIPMENT RENTAL",
//       },
//     },
//     {
//       path: "/rent",
//       text: {
//         RU: "ПРОКАТ ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ",
//         ENG: "CAMPING EQUIPMENT RENTAL",
//       },
//     },
//     { path: "/trip", text: { RU: "ТУРЫ", ENG: "TOURS" } },
//     {
//       path: "/rockClimbing",
//       text: { RU: "СКАЛОЛАЗАНИЕ", ENG: "ROCK CLIMBING" },
//     },
//     { path: "/service", text: { RU: "СЕРВИС-ЦЕНТР", ENG: "SERVICE CENTER" } },
//     { path: "/contact", text: { RU: "КОНТАКТЫ", ENG: "CONTACTS" } },
//   ];

//   const currentLanguage = mounted ? languages : defaultLanguage;

//   const deliveryText =
//     currentLanguage === "RU"
//       ? "Доставка по Батуми — 10 лари, бесплатно от 300. По Грузии — от 20 лари, бесплатно от 500.❗️Не распространяется на аренду."
//       : "Delivery in Batumi - 10 GEL, free from 300. In Georgia - from 20 GEL, free from 500.❗️Not applicable for rental.";

//   return (
//     <>
//       <div className={styles.deliveryStrip}>
//         <div className={styles.deliveryText}>{deliveryText}</div>
//       </div>

//       <AppBar position="fixed" className="app-bar">
//         <Toolbar className="toolbar">
//           <IconButton
//             edge="start"
//             onClick={toggleMobileMenu}
//             className="mobile-menu-button"
//           >
//             <TfiAlignJustify />
//           </IconButton>

//           <Box className="logo-container">
//             <Link href="/">
//               <img src={adjara.src} alt="adjarapeak" className="logo" />
//             </Link>
//           </Box>

//           <Box className="desktop-nav">
//             {menuItems.map((item, index) => (
//               <Link key={index} href={item.path} className="nav-link">
//                 {currentLanguage === "RU" ? item.text.RU : item.text.ENG}
//               </Link>
//             ))}
//           </Box>

//           <Box className="cart-container">
//             <CartBlock />
//           </Box>
//         </Toolbar>

//         <Drawer
//           anchor="top"
//           open={isMobileMenuOpen}
//           onClose={closeMobileMenu}
//           className="mobile-drawer"
//           PaperProps={{
//             className: "mobile-drawer-paper",
//             style: {
//               boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
//               borderBottom: "2px solid #e0e0e0",
//             },
//           }}
//           ModalProps={{
//             BackdropProps: {
//               style: {
//                 backgroundColor: "rgba(0, 0, 0, 0.5)",
//               },
//             },
//           }}
//         >
//           <Toolbar className="toolbar">
//             <IconButton
//               edge="start"
//               onClick={toggleMobileMenu}
//               className="mobile-menu-button"
//             >
//               <TfiClose />
//             </IconButton>

//             <Box className="logo-container">
//               <Link href="/">
//                 <img src={adjara.src} alt="adjarapeak" className="logo" />
//               </Link>
//             </Box>

//             <Box className="cart-container">
//               <CartBlock />
//             </Box>
//           </Toolbar>

//           <List className="mobile-menu-list">
//             {menuItemsMobile.map((item, index) => (
//               <ListItem
//                 key={index}
//                 onClick={closeMobileMenu}
//                 className="mobile-menu-item"
//               >
//                 <Link
//                   href={item.path}
//                   style={{ width: "100%", textDecoration: "none" }}
//                 >
//                   <ListItemText
//                     primary={
//                       currentLanguage === "RU" ? item.text.RU : item.text.ENG
//                     }
//                     className="mobile-menu-text"
//                     sx={{
//                       textAlign: "center",
//                     }}
//                   />
//                 </Link>
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//       </AppBar>
//       <Box className="header-spacer" />
//     </>
//   );
// };

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CartBlock } from "../cart-block";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCurrentLanguages,
  hydrateLanguages,
} from "../../redux/languages/reducer";
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
import adjara from "../../../public/img";
import styles from "./header.module.css";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [mounted, setMounted] = useState(false);

  const dispatch = useDispatch();
  const languages = useSelector((state) => state.languages.currentLanguages);

  const defaultLanguage = "RU";
  const [checked, setChecked] = useState(defaultLanguage === "RU");

  useEffect(() => {
    setMounted(true);

    const storedLang = localStorage.getItem("languages");
    if (storedLang) {
      try {
        const parsed = JSON.parse(storedLang);
        if (parsed === "ENG" || parsed === "RU") {
          dispatch(hydrateLanguages(parsed));
          setChecked(parsed === "RU");
        }
      } catch (e) {
        console.error("Error parsing stored language:", e);
      }
    }

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
    if (mounted) setChecked(languages === "RU");
  }, [languages, mounted]);

  useEffect(() => {
    if (mounted) dispatch(updateCurrentLanguages(checked ? "RU" : "ENG"));
  }, [checked, dispatch, mounted]);

  useEffect(() => {
    if (mounted)
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen, mounted]);

  const toggleMobileMenu = () => {
    if (isMobileView) setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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

  const currentLanguage = mounted ? languages : defaultLanguage;

  const deliveryText =
    currentLanguage === "RU"
      ? "Доставка по Батуми — 10 лари, бесплатно от 300. По Грузии — от 20 лари, бесплатно от 500.❗️Не распространяется на аренду."
      : "Delivery in Batumi - 10 GEL, free from 300. In Georgia - from 20 GEL, free from 500.❗️Not applicable for rental.";

  return (
    <>
      <div className={styles.deliveryStrip}>
        <div className={styles.deliveryText}>{deliveryText}</div>
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
                src={adjara}
                alt="adjarapeak"
                className={styles.logo}
                fill
              />
            </Link>
          </Box>

          <Box className={styles.desktopNav}>
            {menuItems.map((item, index) => (
              <Link key={index} href={item.path} className={styles.navLink}>
                {currentLanguage === "RU" ? item.text.RU : item.text.ENG}
              </Link>
            ))}
          </Box>

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
                  src={adjara}
                  alt="adjarapeak"
                  className={styles.logo}
                  fill
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
                  style={{ width: "100%", textDecoration: "none" }}
                >
                  <ListItemText
                    primary={
                      currentLanguage === "RU" ? item.text.RU : item.text.ENG
                    }
                    className={styles.mobileMenuText}
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
