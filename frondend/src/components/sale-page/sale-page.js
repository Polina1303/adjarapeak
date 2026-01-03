"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import { PRODUCT } from "../product-range/product";
import { CATEGORY_PRODUCT } from "../product-range/categoryProduct";
import { Menu } from "antd";
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
  const [activeType, setActiveType] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const menuContainerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);

  const findProductCategoryInfo = (productId) => {
    for (const category of CATEGORY_PRODUCT) {
      for (const type of category.types) {
        if (type.products?.some((p) => p.id === productId)) {
          return {
            categoryPath: category.path,
            typePath: type.category,
            subcategoryPath: null,
          };
        }

        if (type.subcategories) {
          for (const sub of type.subcategories) {
            if (sub.products?.some((p) => p.id === productId)) {
              return {
                categoryPath: category.path,
                typePath: type.category,
                subcategoryPath: sub.subcategory,
              };
            }
          }
        }
      }
    }

    const product = PRODUCT.find((p) => p.id === productId);
    if (product && product.category) {
      return {
        categoryPath: product.category,
        typePath: product.type || null,
        subcategoryPath: product.subcategory || null,
      };
    }

    return null;
  };

  const getProductUrl = (productId) => {
    const categoryInfo = findProductCategoryInfo(productId);

    if (categoryInfo) {
      let path = `/sale/${categoryInfo.categoryPath}`;

      if (categoryInfo.typePath) {
        path += `/${categoryInfo.typePath}`;
      }

      if (categoryInfo.subcategoryPath) {
        path += `/${categoryInfo.subcategoryPath}`;
      }

      path += `/app/${productId}`;
      return path;
    }

    return `/app/${productId}`;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("searchQuery");
      if (saved) setSearchQuery(saved);
      setIsInitialized(true);
    }
  }, []);

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
            {type.title}
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
                    {sub.title}
                  </Typography>
                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        )}
      </Accordion>
    ));

  useEffect(() => {
    const pathParts = router.asPath.split("/");
    const categoryPath = pathParts[2];
    const categoryIndex = CATEGORY_PRODUCT.findIndex(
      (c) => c.path === categoryPath
    );
    if (categoryIndex !== -1) setActiveCategory(categoryIndex);
  }, [router.asPath]);

  const filteredProducts = useMemo(() => {
    if (!isInitialized || !searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    return PRODUCT.filter((p) => p.title?.toLowerCase().includes(query));
  }, [searchQuery, isInitialized]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchValue);
      localStorage.setItem("searchQuery", searchValue);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchValue]);

  useEffect(() => {
    if (!router.isReady) return;

    const [, , categoryPath, typeOrSub] = router.asPath.split("/");

    const categoryIndex = CATEGORY_PRODUCT.findIndex(
      (c) => c.path === categoryPath
    );

    if (categoryIndex !== -1) {
      setActiveCategory(categoryIndex);
    }

    const category = CATEGORY_PRODUCT[categoryIndex];
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

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    localStorage.setItem("searchQuery", value);
    setSearchValue(e.target.value);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const currentCategory = CATEGORY_PRODUCT[activeCategory];

  const handleCategoryClick = (e) => {
    if (!router.isReady) return;
    const idx = Number(e.key);
    setActiveCategory(idx);
    setExpandedAccordion(null);
    setSearchValue("");
    setSearchQuery("");
    localStorage.removeItem("searchQuery");

    router.push(`/sale/${CATEGORY_PRODUCT[idx].path}`, undefined, {
      shallow: true,
    });
  };

  const toggleMobileMenu = () => {
    if (isMobileView) setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTypeClick = (typeCategory) => {
    setActiveType(typeCategory);
    setActiveSubcategory(null);
    setExpandedAccordion(typeCategory);

    if (!router.isReady || !currentCategory) return;

    router.push(`/sale/${currentCategory.path}/${typeCategory}`, undefined, {
      shallow: true,
    });
  };

  const handleSubcategoryClick = (subcategoryPath) => {
    const category = CATEGORY_PRODUCT[activeCategory];

    setActiveSubcategory(subcategoryPath);

    router.push(`/sale/${category.path}/${subcategoryPath}`);
  };

  const getProductKey = (product, index) => `product-${product.id}-${index}`;

  return (
    <>
      <div className={styles["search-container"]} style={{ margin: "20px 0" }}>
        <div
          className={styles["filters-scroll-container"]}
          ref={menuContainerRef}
        >
          <Menu
            mode="horizontal"
            selectedKeys={[`${activeCategory}`]}
            items={CATEGORY_PRODUCT.map((c, i) => ({
              key: i,
              label: c.title.trim(),
            }))}
            className={styles["sticky-horizontal-menu"]}
            style={{
              flex: 1,
              marginBottom: 10,

              fontSize: isMobileView ? 18 : 14.5,
              fontFamily: "RoadRadio",
            }}
            onClick={handleCategoryClick}
          />
        </div>

        <input
          type="text"
          placeholder="Поиск"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles["home-page__container-product"]}>
        <div>
          <div className={styles["title"]} id="home-page-buy">
            {currentCategory?.title?.toUpperCase() || "ПРОДАЖА ТОВАРОВ"}
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
                    <p>Фильтры</p>
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
                        Фильтры
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
                        const productUrl = getProductUrl(product.id);

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
                                  "saleState",
                                  JSON.stringify({
                                    activeCategory,
                                    expandedAccordion,
                                  })
                                );
                                router.push(productUrl);
                              }}
                            >
                              <CardActionArea
                                sx={{
                                  flexGrow: 1,
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <ProductItems
                                  product={product}
                                  href={productUrl}
                                />
                              </CardActionArea>
                            </Card>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className={styles["not-found"]}>
                    <p>Ничего не найдено по запросу "{searchQuery}"</p>
                    <p>Попробуйте изменить запрос</p>
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
