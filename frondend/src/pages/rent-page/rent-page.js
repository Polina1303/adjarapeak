import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import { RENT } from "../../components/product-range/rent";
import { Menu } from "antd";
import { CATEGORY_RENT } from "../../components/product-range/categoryRent";
import FilterListIcon from "@mui/icons-material/FilterList";
import { ProductItems } from "../../components/product-items/product-items";
import { TfiClose } from "react-icons/tfi";
import { startTransition } from "react";
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
import { useTranslation } from "next-i18next";
import { RENT_SKY } from "../../components/product-range/rent-sky";
import { Card, CardActionArea, Skeleton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./rent-page.module.css";

export default function RentPage({ children }) {
  const router = useRouter();
  const [loadedIds, setLoadedIds] = useState([]);
  const [activeType, setActiveType] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);
  const [priceSort, setPriceSort] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [availabilityFilter, setAvailabilityFilter] = useState(false);
  const { t, i18n, ready } = useTranslation("rent", "sale");
  useEffect(() => {
    i18n.loadNamespaces("rent");
  }, []);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("searchQuery");
    if (saved) setSearchQuery(saved);
  }, []);

  useEffect(() => {
    if (!router.isReady) return;

    setSearchQuery(searchValue);
    localStorage.setItem("searchQuery", searchValue);
  }, [searchValue, router.asPath]);

  useEffect(() => {
    if (!router.isReady) return;

    const [, , categoryPath, typeOrSub] = router.asPath.split("/");

    if (!categoryPath) return;

    setActiveCategory(categoryPath);

    const category = CATEGORY_RENT.find((c) => c.path === categoryPath);
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

  // const renderAccordion = () =>
  //   currentCategory?.types?.map((type) => (
  //     <Accordion
  //       key={type.category}
  //       expanded={expandedAccordion === type.category}
  //       onChange={
  //         type.subcategories?.length
  //           ? () =>
  //               setExpandedAccordion((prev) =>
  //                 prev === type.category ? null : type.category
  //               )
  //           : undefined
  //       }
  //       disableGutters
  //       sx={{
  //         boxShadow: "none",
  //         borderBottom: "1px solid #eee",
  //         "&:before": { display: "none" },
  //       }}
  //     >
  //       <AccordionSummary
  //         expandIcon={
  //           type.subcategories?.length ? (
  //             <ExpandMoreIcon style={{ color: "#ff6f00" }} />
  //           ) : null
  //         }
  //         sx={{
  //           cursor: "pointer",
  //           minHeight: 40,
  //           "&.Mui-expanded": { minHeight: 40 },
  //           "& .MuiAccordionSummary-content": { margin: 0 },
  //           "& .MuiAccordionSummary-content.Mui-expanded": { margin: 0 },
  //         }}
  //         onClick={() => {
  //           handleTypeClick(type.category);
  //           closeMobileMenu();
  //         }}
  //       >
  //         <Typography
  //           sx={{
  //             fontFamily: "RoadRadio, sans-serif",
  //             fontSize: 14,
  //             fontWeight: activeType === type.category ? 700 : 500,
  //             color: activeType === type.category ? "#d87d4a" : "inherit",
  //           }}
  //         >
  //           {t(type.title)}
  //         </Typography>
  //       </AccordionSummary>

  //       {type.subcategories?.length > 0 && (
  //         <AccordionDetails sx={{ p: 0 }}>
  //           <List>
  //             {type.subcategories.map((sub) => (
  //               <ListItemButton
  //                 key={sub.subcategory}
  //                 sx={{ pl: 3 }}
  //                 onMouseDown={(e) => e.stopPropagation()}
  //                 onClick={(e) => {
  //                   e.stopPropagation();
  //                   handleSubcategoryClick(sub.subcategory);
  //                   closeMobileMenu();
  //                 }}
  //               >
  //                 <Typography
  //                   sx={{
  //                     fontFamily: "RoadRadio, sans-serif",
  //                     fontSize: 14,
  //                     fontWeight:
  //                       activeSubcategory === sub.subcategory ? 600 : 400,
  //                     color:
  //                       activeSubcategory === sub.subcategory
  //                         ? "#d87d4a"
  //                         : "inherit",
  //                   }}
  //                 >
  //                   {t(sub.title)}
  //                 </Typography>
  //               </ListItemButton>
  //             ))}
  //           </List>
  //         </AccordionDetails>
  //       )}
  //     </Accordion>
  //   ));

  const renderAccordion = () =>
    currentCategory?.types?.map((type) => (
      <Accordion
        key={type.category}
        expanded={expandedAccordion === type.category}
        onChange={
          type.subcategories?.length
            ? (event, isExpanded) => {
                if (isExpanded) {
                  setExpandedAccordion(type.category);
                } else {
                  setExpandedAccordion(null);
                }
              }
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
          onClick={(e) => {
            const isExpandIconClicked = e.target.closest(
              ".MuiAccordionSummary-expandIconWrapper"
            );

            if (isExpandIconClicked) {
              e.stopPropagation();
              return;
            }

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

  const currentCategory = CATEGORY_RENT.find((c) => c.path === activeCategory);

  useEffect(() => {
    if (!router.isReady) return;
    const categoryPath = router.query.category || router.asPath.split("/")[2];
    if (categoryPath) setActiveCategory(categoryPath);
  }, [router.isReady, router.query.category, router.asPath]);

  // const filteredProducts = useMemo(() => {
  //   if (!isInitialized || !searchQuery.trim()) return [];

  //   const query = searchQuery.toLowerCase().trim();

  //   const all = [...RENT, ...RENT_SKY];

  //   return all.filter(
  //     (p, idx, arr) =>
  //       p.title?.toLowerCase().includes(query) &&
  //       arr.findIndex((x) => x.id === p.id) === idx
  //   );
  // }, [searchQuery, isInitialized]);

  const filteredProducts = useMemo(() => {
    if (!isInitialized) return [];
    const all = [...RENT, ...RENT_SKY];

    if (searchQuery.trim()) {
      const currentPath = router.asPath.split("?")[0];
      const params = new URLSearchParams();

      if (activeCategory) {
        params.set("category", activeCategory);
      }
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
    let results = all.filter((p) => p.title?.toLowerCase().includes(query));

    if (activeCategory && currentCategory) {
      const categoryTypes = currentCategory.types || [];
      const categoryProductIds = new Set();

      categoryTypes.forEach((type) => {
        type.subcategories?.forEach((sub) => {
          sub.products?.forEach((productId) => {
            categoryProductIds.add(productId);
          });
        });
      });

      if (categoryProductIds.size > 0) {
        results = results.filter((p) => categoryProductIds.has(p.id));
      }
    }

    if (availabilityFilter) results = results.filter((p) => p.order === true);
    if (priceSort === "asc") results.sort((a, b) => a.price - b.price);
    if (priceSort === "desc") results.sort((a, b) => b.price - a.price);

    return results;
  }, [
    searchQuery,
    isInitialized,
    availabilityFilter,
    priceSort,
    router,
    activeCategory,
    currentCategory,
  ]);

  const menuContainerRef = useRef(null);

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
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("searchQuery");
      if (saved) {
        setSearchQuery(saved);
      }
      setIsInitialized(true);
    }
  }, []);

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

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    localStorage.setItem("searchQuery", value);
    setSearchValue(e.target.value);
  };

  // const handleCategoryClick = (path) => {
  //   if (!path) return;

  //   startTransition(() => {
  //     setActiveCategory(path);
  //     setActiveType(null);
  //     setActiveSubcategory(null);
  //     setExpandedAccordion(null);
  //     setSearchValue("");
  //     setSearchQuery("");
  //     localStorage.removeItem("searchQuery");
  //   });

  //   router.push(`/rent/${path}`);
  // };
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

      const cleanUrl = `/rent/${path}`;
      router.push(cleanUrl, undefined, { shallow: true });
    });
  };

  useEffect(() => {
    if (!router.isReady || !isInitialized) return;

    if (router.query.q) {
      const queryFromUrl = decodeURIComponent(router.query.q);
      if (queryFromUrl !== searchValue) {
        setSearchValue(queryFromUrl);
        setSearchQuery(queryFromUrl);
        localStorage.setItem("searchQuery", queryFromUrl);
      }
    }

    if (router.query.category) {
      const category = router.query.category;
      setActiveCategory(category);
      localStorage.setItem("activeCategory", category);
    }
  }, [router.isReady, router.query.q, router.query.category, isInitialized]);

  useEffect(() => {
    const handlePopState = () => {
      if (router.query.q) {
        const queryFromUrl = decodeURIComponent(router.query.q);
        setSearchValue(queryFromUrl);
        setSearchQuery(queryFromUrl);
      } else {
        setSearchValue("");
        setSearchQuery("");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [router.query.q]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleMobileMenu = () => {
    if (isMobileView) setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getProductKey = (product, index) => {
    return `product-${product.id}-${index}`;
  };

  const handleTypeClick = (typeCategory) => {
    setActiveType(typeCategory);
    setActiveSubcategory(null);
    setExpandedAccordion(typeCategory);

    if (!router.isReady || !currentCategory) return;

    router.push(`/rent/${currentCategory.path}/${typeCategory}`, undefined, {
      shallow: true,
    });
  };

  const handleSubcategoryClick = (subcategoryPath) => {
    const category = CATEGORY_RENT[activeCategory];

    setActiveSubcategory(subcategoryPath);

    router.push(`/rent/${category.path}/${subcategoryPath}`);
  };

  return (
    <>
      <div className={styles["search-container"]} style={{ margin: "20px 0" }}>
        <div
          className={styles["filters-scroll-container"]}
          ref={menuContainerRef}
        >
          {ready && (
            <Menu
              mode="horizontal"
              selectedKeys={[`${activeCategory}`]}
              items={CATEGORY_RENT.map((c) => ({
                key: c.path,
                label: t(c.title),
              }))}
              className={styles["sticky-horizontal-menu"]}
              style={{
                flex: 1,
                marginBottom: 10,
                fontSize: "14.5px",
                fontFamily: "RoadRadio",
              }}
              onClick={({ key }) => handleCategoryClick(key)}
            />
          )}
        </div>

        <input
          type="text"
          placeholder={t("search.placeholder", { ns: "sale" })}
          value={searchValue}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      <div className={styles["home-page__container-product"]}>
        <div>
          <div className={styles["title"]} id="home-page-buy">
            {currentCategory
              ? t(currentCategory.title).toUpperCase()
              : t("rent.title")}
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
                        {t("filters.title", { ns: "sale" })}
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
              <div>
                {filteredProducts.length > 0 ? (
                  <>
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
                                transition: "transform 0.2s ease",
                                "&:hover": { transform: "scale(1.03)" },
                              }}
                              onClick={() => {
                                localStorage.setItem(
                                  "rentState",
                                  JSON.stringify({
                                    activeCategory,
                                    expandedAccordion,
                                  })
                                );

                                router.push(`/app/${product.id}`);
                              }}

                              // onClick={() => router.push(`/app/${product.id}`)}
                            >
                              <CardActionArea
                                sx={{
                                  flexGrow: 1,
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <ProductItems product={product} />
                              </CardActionArea>
                            </Card>
                          </div>
                        );
                      })}
                    </div>
                  </>
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
                )}
              </div>
            ) : (
              <div className={styles["content"]}>{children}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
