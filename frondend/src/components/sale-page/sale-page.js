// import { useState, useEffect, useMemo, useRef } from "react";
// import { useRouter } from "next/router";
// import { useTranslation } from "next-i18next";
// import { PRODUCT } from "../product-range/product";
// import { startTransition } from "react";
// import { Menu } from "antd";
// import { CATEGORY_PRODUCT } from "../product-range/categoryProduct";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import { ProductItems } from "../product-items";
// import { TfiClose } from "react-icons/tfi";
// import {
//   Accordion,
//   Toolbar,
//   Drawer,
//   List,
//   IconButton,
//   AccordionSummary,
//   AccordionDetails,
//   ListItemButton,
//   Typography,
// } from "@mui/material";
// import { Card, CardActionArea, Skeleton } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import styles from "./sale-page.module.css";

// export default function SalePage({ children }) {
//   const router = useRouter();
//   const [loadedIds, setLoadedIds] = useState([]);
//   const [availabilityFilter, setAvailabilityFilter] = useState(false);
//   const [priceSort, setPriceSort] = useState(null);
//   const [searchValue, setSearchValue] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isInitialized, setIsInitialized] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [expandedAccordion, setExpandedAccordion] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [activeSubcategory, setActiveSubcategory] = useState(null);
//   const [activeType, setActiveType] = useState(null);

//   const [mounted, setMounted] = useState(false);
//   const { t, ready } = useTranslation(["common", "sale"]);

//   useEffect(() => {
//     setMounted(true);
//     const saved = localStorage.getItem("searchQuery");
//     if (saved) setSearchQuery(saved);
//   }, []);

//   useEffect(() => {
//     if (!router.isReady) return;

//     setSearchQuery(searchValue);
//     localStorage.setItem("searchQuery", searchValue);
//   }, [searchValue, router.asPath]);

//   const menuContainerRef = useRef(null);

//   useEffect(() => {
//     if (router.query.category) {
//       setActiveCategory(router.query.category);
//     }
//   }, [router.query.category]);

//   useEffect(() => {
//     if (!router.isReady) return;

//     const [, , categoryPath, typeOrSub] = router.asPath.split("/");

//     if (!categoryPath) return;

//     setActiveCategory(categoryPath);

//     const category = CATEGORY_PRODUCT.find((c) => c.path === categoryPath);
//     if (!category) return;

//     let foundType = null;
//     let foundSub = null;

//     category.types?.forEach((type) => {
//       if (type.category === typeOrSub) {
//         foundType = type.category;
//       }
//       type.subcategories?.forEach((sub) => {
//         if (sub.subcategory === typeOrSub) {
//           foundType = type.category;
//           foundSub = sub.subcategory;
//         }
//       });
//     });

//     setActiveType(foundType);
//     setActiveSubcategory(foundSub);
//     setExpandedAccordion(foundType);
//   }, [router.isReady, router.asPath]);

//   useEffect(() => {
//     if (!menuContainerRef.current) return;

//     const container = menuContainerRef.current;
//     const activeItem = container.querySelector(".ant-menu-item-selected");
//     if (!activeItem) return;

//     const containerWidth = container.offsetWidth;
//     const itemLeft = activeItem.offsetLeft;
//     const itemWidth = activeItem.offsetWidth;

//     const scrollPos = itemLeft - containerWidth / 2 + itemWidth / 2;
//     container.scrollTo({ left: scrollPos, behavior: "smooth" });
//   }, [activeCategory]);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem("searchQuery");
//       if (saved) setSearchQuery(saved);
//       setIsInitialized(true);
//     }
//   }, []);

//   useEffect(() => {
//     const checkScreen = () => {
//       const mobile = window.innerWidth <= 1200;
//       setIsMobileView(mobile);
//       if (!mobile) setIsMobileMenuOpen(false);
//     };
//     checkScreen();
//     window.addEventListener("resize", checkScreen);
//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   const filteredProducts = useMemo(() => {
//     if (!isInitialized || !searchQuery.trim()) return [];
//     const query = searchQuery.toLowerCase().trim();
//     let results = PRODUCT.filter((p) => p.title?.toLowerCase().includes(query));
//     if (availabilityFilter) results = results.filter((p) => p.order === true);
//     if (priceSort === "asc") results.sort((a, b) => a.price - b.price);
//     if (priceSort === "desc") results.sort((a, b) => b.price - a.price);
//     return results;
//   }, [searchQuery, isInitialized, availabilityFilter, priceSort]);

//   const currentCategory = CATEGORY_PRODUCT.find(
//     (c) => c.path === activeCategory
//   );

//   const getProductKey = (product, index) => `product-${product.id}-${index}`;

//   const handleTypeClick = (typeCategory) => {
//     setActiveType(typeCategory);
//     setActiveSubcategory(null);
//     setExpandedAccordion(typeCategory);

//     if (!router.isReady || !currentCategory) return;

//     router.push(`/sale/${currentCategory.path}/${typeCategory}`);
//   };

//   const handleSubcategoryClick = (subPath) => {
//     const category = CATEGORY_PRODUCT[activeCategory];

//     setActiveSubcategory(subPath);
//     router.push(`/sale/${currentCategory.path}/${subPath}`);
//   };

//   if (!mounted || !ready) return null;

//   const handleCategoryClick = (path) => {
//     if (!path) return;

//     startTransition(() => {
//       setActiveCategory(path);
//       setActiveType(null);
//       setActiveSubcategory(null);
//       setExpandedAccordion(null);
//       setSearchValue("");
//       setSearchQuery("");
//       localStorage.removeItem("searchQuery");
//     });

//     router.push(`/sale/${path}`);
//   };

//   const toggleMobileMenu = () =>
//     isMobileView && setIsMobileMenuOpen((prev) => !prev);
//   const closeMobileMenu = () => setIsMobileMenuOpen(false);

//   const renderAccordion = () =>
//     currentCategory?.types?.map((type) => (
//       <Accordion
//         key={type.category}
//         expanded={expandedAccordion === type.category}
//         onChange={
//           type.subcategories?.length
//             ? () =>
//                 setExpandedAccordion((prev) =>
//                   prev === type.category ? null : type.category
//                 )
//             : undefined
//         }
//         disableGutters
//         sx={{
//           boxShadow: "none",
//           borderBottom: "1px solid #eee",
//           "&:before": { display: "none" },
//         }}
//       >
//         <AccordionSummary
//           expandIcon={
//             type.subcategories?.length ? (
//               <ExpandMoreIcon style={{ color: "#ff6f00" }} />
//             ) : null
//           }
//           sx={{
//             cursor: "pointer",
//             minHeight: 40,
//             "&.Mui-expanded": { minHeight: 40 },
//             "& .MuiAccordionSummary-content": { margin: 0 },
//             "& .MuiAccordionSummary-content.Mui-expanded": { margin: 0 },
//           }}
//           onClick={() => {
//             handleTypeClick(type.category);
//             closeMobileMenu();
//           }}
//         >
//           <Typography
//             sx={{
//               fontFamily: "RoadRadio, sans-serif",
//               fontSize: 14,
//               fontWeight: activeType === type.category ? 700 : 500,
//               color: activeType === type.category ? "#d87d4a" : "inherit",
//             }}
//           >
//             {t(type.title)}
//           </Typography>
//         </AccordionSummary>

//         {type.subcategories?.length > 0 && (
//           <AccordionDetails sx={{ p: 0 }}>
//             <List>
//               {type.subcategories.map((sub) => (
//                 <ListItemButton
//                   key={sub.subcategory}
//                   sx={{ pl: 3 }}
//                   onMouseDown={(e) => e.stopPropagation()}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleSubcategoryClick(sub.subcategory);
//                     closeMobileMenu();
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontFamily: "RoadRadio, sans-serif",
//                       fontSize: 14,
//                       fontWeight:
//                         activeSubcategory === sub.subcategory ? 600 : 400,
//                       color:
//                         activeSubcategory === sub.subcategory
//                           ? "#d87d4a"
//                           : "inherit",
//                     }}
//                   >
//                     {t(sub.title)}
//                   </Typography>
//                 </ListItemButton>
//               ))}
//             </List>
//           </AccordionDetails>
//         )}
//       </Accordion>
//     ));

//   return (
//     <>
//       <div className={styles["search-container"]} style={{ margin: "20px 0" }}>
//         <div
//           className={styles["filters-scroll-container"]}
//           ref={menuContainerRef}
//         >
//           <Menu
//             mode="horizontal"
//             selectedKeys={activeCategory ? [activeCategory] : []}
//             items={CATEGORY_PRODUCT.map((c) => ({
//               key: c.path,
//               label: t(c.title),
//             }))}
//             className={styles["sticky-horizontal-menu"]}
//             style={{
//               flex: 1,
//               marginBottom: 10,
//               fontSize: isMobileView ? 13.5 : 14.5,
//               fontFamily: "RoadRadio",
//             }}
//             onClick={({ key }) => handleCategoryClick(key)}
//           />
//         </div>

//         <input
//           type="text"
//           placeholder={t("search.placeholder", { ns: "sale" })}
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//           className={styles.searchInput}
//         />
//       </div>

//       <div className={styles["home-page__container-product"]}>
//         <div>
//           <div className={styles["title"]} id="home-page-buy">
//             {currentCategory
//               ? t(currentCategory.title).toUpperCase()
//               : t("sale.title")}
//           </div>

//           <div className={styles["sale-page-content"]}>
//             <div className={styles["filter-category"]}>
//               {isMobileView ? (
//                 <>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "10px",
//                     }}
//                     onClick={toggleMobileMenu}
//                   >
//                     <FilterListIcon />
//                     <p>{t("filters.title", { ns: "sale" })}</p>
//                   </div>

//                   <Drawer
//                     anchor="top"
//                     open={isMobileMenuOpen}
//                     onClose={closeMobileMenu}
//                     className={styles.mobileDrawer}
//                     PaperProps={{
//                       className: styles.mobileDrawerPaper,
//                       style: {
//                         boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
//                         borderBottom: "2px solid #e0e0e0",
//                       },
//                     }}
//                     ModalProps={{
//                       BackdropProps: {
//                         style: { backgroundColor: "rgba(0,0,0,0.5)" },
//                       },
//                     }}
//                   >
//                     <Toolbar className={styles.toolbarMobile}>
//                       <Typography className={styles.filterTitle}>
//                         <p>{t("filters.title", { ns: "sale" })}</p>
//                       </Typography>
//                       <IconButton
//                         edge="start"
//                         onClick={toggleMobileMenu}
//                         className={styles.mobileMenuButton}
//                       >
//                         <TfiClose />
//                       </IconButton>
//                     </Toolbar>
//                     <List className={styles.mobileMenuList}>
//                       {renderAccordion()}
//                     </List>
//                   </Drawer>
//                 </>
//               ) : (
//                 renderAccordion()
//               )}
//             </div>

//             {searchQuery.trim() ? (
//               filteredProducts.length > 0 ? (
//                 <div className={styles["home-page-product"]}>
//                   {filteredProducts.map((product, index) => {
//                     const isLoaded = loadedIds.includes(product.id);
//                     return (
//                       <div
//                         key={getProductKey(product, index)}
//                         className={styles["category-product"]}
//                       >
//                         <Card
//                           sx={{
//                             boxShadow: 3,
//                             height: "95%",
//                             overflow: "hidden",
//                             cursor: "pointer",
//                             transform: "none",
//                             "&:hover": { transform: "none", boxShadow: 3 },
//                             "&:focus": { outline: "none" },
//                             "&:active": { transform: "none" },
//                           }}
//                           onClick={() => router.push(`/app/${product.id}`)}
//                         >
//                           <CardActionArea disableRipple disableTouchRipple>
//                             {isLoaded ? (
//                               <Skeleton variant="rectangular" height={450} />
//                             ) : (
//                               <ProductItems product={product} />
//                             )}
//                           </CardActionArea>
//                         </Card>
//                       </div>
//                     );
//                   })}
//                 </div>
//               ) : (
//                 <div className={styles["not-found"]}>
//                   <p>
//                     {t(
//                       "search.notFound",
//                       { query: searchQuery },
//                       { ns: "sale" }
//                     )}
//                   </p>
//                   <p>{t("search.tryChange", { ns: "sale" })}</p>
//                 </div>
//               )
//             ) : (
//               <div className={styles["content"]}>{children}</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { PRODUCT } from "../product-range/product";
import { startTransition } from "react";
import { Menu } from "antd";
import { CATEGORY_PRODUCT } from "../product-range/categoryProduct";
import FilterListIcon from "@mui/icons-material/FilterList";
import { ProductItems } from "../product-items";
import { TfiClose } from "react-icons/tfi";
import {
  Accordion,
  Toolbar,
  Drawer,
  List,
  IconButton,
  AccordionSummary,
  AccordionDetails,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Card, CardActionArea, Skeleton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./sale-page.module.css";

export default function SalePage({ children }) {
  const router = useRouter();
  const [loadedIds, setLoadedIds] = useState([]);
  const [availabilityFilter, setAvailabilityFilter] = useState(false);
  const [priceSort, setPriceSort] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [activeType, setActiveType] = useState(null);

  const [mounted, setMounted] = useState(false);
  const { t, ready } = useTranslation(["common", "sale"]);
  const searchTimeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const savedSearch = localStorage.getItem("searchQuery");
    const savedCategory = localStorage.getItem("activeCategory");

    if (savedSearch) {
      setSearchValue(savedSearch);
      setSearchQuery(savedSearch);
    }

    if (savedCategory) {
      setActiveCategory(savedCategory);
    }

    if (router.isReady && router.query.q) {
      const queryFromUrl = decodeURIComponent(router.query.q);
      if (queryFromUrl !== savedSearch) {
        setSearchValue(queryFromUrl);
        setSearchQuery(queryFromUrl);
        localStorage.setItem("searchQuery", queryFromUrl);
      }
    }

    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    if (searchQuery.trim()) {
      localStorage.setItem("searchQuery", searchQuery);
    }

    if (activeCategory) {
      localStorage.setItem("activeCategory", activeCategory);
    }
  }, [searchQuery, activeCategory, isInitialized]);

  useEffect(() => {
    if (!router.isReady || !isInitialized) return;

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        const savedSearch = localStorage.getItem("searchQuery");
        if (savedSearch && savedSearch !== searchValue) {
          setSearchValue(savedSearch);
          setSearchQuery(savedSearch);
        }
      }, 50);
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router, isInitialized, searchValue]);

  useEffect(() => {
    const handlePopState = () => {
      setTimeout(() => {
        const savedSearch = localStorage.getItem("searchQuery");
        if (savedSearch && savedSearch !== searchValue) {
          setSearchValue(savedSearch);
          setSearchQuery(savedSearch);
        }
      }, 100);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [searchValue]);

  const menuContainerRef = useRef(null);

  useEffect(() => {
    if (router.query.category) {
      const category = router.query.category;
      setActiveCategory(category);
      localStorage.setItem("activeCategory", category);

      if (router.query.q) {
        const queryFromUrl = decodeURIComponent(router.query.q);
        setSearchValue(queryFromUrl);
        setSearchQuery(queryFromUrl);
        localStorage.setItem("searchQuery", queryFromUrl);
      }
    }
  }, [router.query.category, router.query.q]);

  useEffect(() => {
    if (!router.isReady || !router.asPath) return;

    const [, , categoryPath, typeOrSub] = router.asPath.split("/");

    if (!categoryPath) return;

    setActiveCategory(categoryPath);
    localStorage.setItem("activeCategory", categoryPath);

    const category = CATEGORY_PRODUCT.find((c) => c.path === categoryPath);
    if (!category) return;

    let foundType = null;
    let foundSub = null;

    category.types?.forEach((type) => {
      if (type.category === typeOrSub) {
        foundType = type.category;
      }
      type.subcategories?.forEach((sub) => {
        if (sub.subcategory === typeOrSub) {
          foundType = type.category;
          foundSub = sub.subcategory;
        }
      });
    });

    setActiveType(foundType);
    setActiveSubcategory(foundSub);
    setExpandedAccordion(foundType);
  }, [router.isReady, router.asPath]);

  useEffect(() => {
    if (!menuContainerRef.current) return;

    const container = menuContainerRef.current;
    const activeItem = container.querySelector(".ant-menu-item-selected");
    if (!activeItem) return;

    const containerWidth = container.offsetWidth;
    const itemLeft = activeItem.offsetLeft;
    const itemWidth = activeItem.offsetWidth;

    const scrollPos = itemLeft - containerWidth / 2 + itemWidth / 2;
    container.scrollTo({ left: scrollPos, behavior: "smooth" });
  }, [activeCategory]);

  useEffect(() => {
    const checkScreen = () => {
      const mobile = window.innerWidth <= 1200;
      setIsMobileView(mobile);
      if (!mobile) setIsMobileMenuOpen(false);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const filteredProducts = useMemo(() => {
    if (!isInitialized) return [];

    if (searchQuery.trim()) {
      const currentPath = router.asPath.split("?")[0];
      const params = new URLSearchParams(router.query);
      params.set("q", encodeURIComponent(searchQuery));

      const newUrl = `${currentPath}?${params.toString()}`;
      if (newUrl !== router.asPath) {
        router.replace(newUrl, undefined, { shallow: true, scroll: false });
      }
    } else if (router.query.q) {
      const currentPath = router.asPath.split("?")[0];
      const params = new URLSearchParams(router.query);
      params.delete("q");

      const newUrl = params.toString()
        ? `${currentPath}?${params.toString()}`
        : currentPath;
      if (newUrl !== router.asPath) {
        router.replace(newUrl, undefined, { shallow: true, scroll: false });
      }
    }

    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase().trim();
    let results = PRODUCT.filter((p) => p.title?.toLowerCase().includes(query));
    if (availabilityFilter) results = results.filter((p) => p.order === true);
    if (priceSort === "asc") results.sort((a, b) => a.price - b.price);
    if (priceSort === "desc") results.sort((a, b) => b.price - a.price);

    return results;
  }, [searchQuery, isInitialized, availabilityFilter, priceSort, router]);

  const currentCategory = CATEGORY_PRODUCT.find(
    (c) => c.path === activeCategory
  );

  const getProductKey = (product, index) => `product-${product.id}-${index}`;

  const handleTypeClick = (typeCategory) => {
    setActiveType(typeCategory);
    setActiveSubcategory(null);
    setExpandedAccordion(typeCategory);

    if (!router.isReady || !currentCategory) return;

    router.push(`/sale/${currentCategory.path}/${typeCategory}`);
  };

  const handleSubcategoryClick = (subPath) => {
    if (!currentCategory) return;

    setActiveSubcategory(subPath);
    router.push(`/sale/${currentCategory.path}/${subPath}`);
  };

  if (!mounted || !ready) return null;

  const handleCategoryClick = (path) => {
    if (!path) return;

    startTransition(() => {
      setActiveCategory(path);
      setActiveType(null);
      setActiveSubcategory(null);
      setExpandedAccordion(null);
      setSearchValue("");
      setSearchQuery("");

      localStorage.removeItem("searchQuery");
      localStorage.setItem("activeCategory", path);

      const cleanUrl = `/sale/${path}`;
      router.push(cleanUrl);
    });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      setSearchQuery(value);
    }, 300);
  };

  const toggleMobileMenu = () =>
    isMobileView && setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const renderAccordion = () =>
    currentCategory?.types?.map((type) => (
      <Accordion
        key={type.category}
        expanded={expandedAccordion === type.category}
        onChange={
          type.subcategories?.length
            ? () =>
                setExpandedAccordion((prev) =>
                  prev === type.category ? null : type.category
                )
            : undefined
        }
        disableGutters
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid #eee",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={
            type.subcategories?.length ? (
              <ExpandMoreIcon style={{ color: "#ff6f00" }} />
            ) : null
          }
          sx={{
            cursor: "pointer",
            minHeight: 40,
            "&.Mui-expanded": { minHeight: 40 },
            "& .MuiAccordionSummary-content": { margin: 0 },
            "& .MuiAccordionSummary-content.Mui-expanded": { margin: 0 },
          }}
          onClick={() => {
            handleTypeClick(type.category);
            closeMobileMenu();
          }}
        >
          <Typography
            sx={{
              fontFamily: "RoadRadio, sans-serif",
              fontSize: 14,
              fontWeight: activeType === type.category ? 700 : 500,
              color: activeType === type.category ? "#d87d4a" : "inherit",
            }}
          >
            {t(type.title)}
          </Typography>
        </AccordionSummary>

        {type.subcategories?.length > 0 && (
          <AccordionDetails sx={{ p: 0 }}>
            <List>
              {type.subcategories.map((sub) => (
                <ListItemButton
                  key={sub.subcategory}
                  sx={{ pl: 3 }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubcategoryClick(sub.subcategory);
                    closeMobileMenu();
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "RoadRadio, sans-serif",
                      fontSize: 14,
                      fontWeight:
                        activeSubcategory === sub.subcategory ? 600 : 400,
                      color:
                        activeSubcategory === sub.subcategory
                          ? "#d87d4a"
                          : "inherit",
                    }}
                  >
                    {t(sub.title)}
                  </Typography>
                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        )}
      </Accordion>
    ));

  return (
    <>
      <div className={styles["search-container"]} style={{ margin: "20px 0" }}>
        <div
          className={styles["filters-scroll-container"]}
          ref={menuContainerRef}
        >
          <Menu
            mode="horizontal"
            selectedKeys={activeCategory ? [activeCategory] : []}
            items={CATEGORY_PRODUCT.map((c) => ({
              key: c.path,
              label: t(c.title),
            }))}
            className={styles["sticky-horizontal-menu"]}
            style={{
              flex: 1,
              marginBottom: 10,
              fontSize: isMobileView ? 13.5 : 14.5,
              fontFamily: "RoadRadio",
            }}
            onClick={({ key }) => handleCategoryClick(key)}
          />
        </div>

        <input
          type="text"
          placeholder={t("search.placeholder", { ns: "sale" })}
          value={searchValue}
          onChange={handleSearchChange}
          className={styles.searchInput}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current);
              }
              setSearchQuery(searchValue);
            }
          }}
        />
      </div>

      <div className={styles["home-page__container-product"]}>
        <div>
          <div className={styles["title"]} id="home-page-buy">
            {currentCategory
              ? t(currentCategory.title).toUpperCase()
              : t("sale.title")}
          </div>

          <div className={styles["sale-page-content"]}>
            <div className={styles["filter-category"]}>
              {isMobileView ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    onClick={toggleMobileMenu}
                  >
                    <FilterListIcon />
                    <p>{t("filters.title", { ns: "sale" })}</p>
                  </div>

                  <Drawer
                    anchor="top"
                    open={isMobileMenuOpen}
                    onClose={closeMobileMenu}
                    className={styles.mobileDrawer}
                    PaperProps={{
                      className: styles.mobileDrawerPaper,
                      style: {
                        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                        borderBottom: "2px solid #e0e0e0",
                      },
                    }}
                    ModalProps={{
                      BackdropProps: {
                        style: { backgroundColor: "rgba(0,0,0,0.5)" },
                      },
                    }}
                  >
                    <Toolbar className={styles.toolbarMobile}>
                      <Typography className={styles.filterTitle}>
                        <p>{t("filters.title", { ns: "sale" })}</p>
                      </Typography>
                      <IconButton
                        edge="start"
                        onClick={toggleMobileMenu}
                        className={styles.mobileMenuButton}
                      >
                        <TfiClose />
                      </IconButton>
                    </Toolbar>
                    <List className={styles.mobileMenuList}>
                      {renderAccordion()}
                    </List>
                  </Drawer>
                </>
              ) : (
                renderAccordion()
              )}
            </div>

            {searchQuery.trim() ? (
              filteredProducts.length > 0 ? (
                <div className={styles["home-page-product"]}>
                  {filteredProducts.map((product, index) => {
                    const isLoaded = loadedIds.includes(product.id);
                    return (
                      <div
                        key={getProductKey(product, index)}
                        className={styles["category-product"]}
                      >
                        <Card
                          sx={{
                            boxShadow: 3,
                            height: "95%",
                            overflow: "hidden",
                            cursor: "pointer",
                            transform: "none",
                            "&:hover": { transform: "none", boxShadow: 3 },
                            "&:focus": { outline: "none" },
                            "&:active": { transform: "none" },
                          }}
                          onClick={() => {
                            // Сохраняем текущий scroll position перед переходом
                            sessionStorage.setItem(
                              "scrollPosition",
                              window.pageYOffset
                            );
                            sessionStorage.setItem("searchQuery", searchQuery);
                            sessionStorage.setItem(
                              "activeCategory",
                              activeCategory
                            );
                            router.push(`/app/${product.id}`);
                          }}
                        >
                          <CardActionArea disableRipple disableTouchRipple>
                            {isLoaded ? (
                              <Skeleton variant="rectangular" height={450} />
                            ) : (
                              <ProductItems product={product} />
                            )}
                          </CardActionArea>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className={styles["not-found"]}>
                  <p>
                    {t(
                      "search.notFound",
                      { query: searchQuery },
                      { ns: "sale" }
                    )}
                  </p>
                  <p>{t("search.tryChange", { ns: "sale" })}</p>
                </div>
              )
            ) : (
              <div className={styles["content"]}>{children}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
