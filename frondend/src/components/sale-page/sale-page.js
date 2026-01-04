import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import { PRODUCT } from "../product-range/product";
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
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [activeType, setActiveType] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchValue);
      localStorage.setItem("searchQuery", searchValue);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchValue]);

  const menuContainerRef = useRef(null);

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
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("searchQuery");
      if (saved) setSearchQuery(saved);
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    const pathParts = router.asPath.split("/");
    const categoryPath = pathParts[2];
    const categoryIndex = CATEGORY_PRODUCT.findIndex(
      (c) => c.path === categoryPath
    );
    if (categoryIndex !== -1) setActiveCategory(categoryIndex);
  }, [router.asPath]);

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
    if (!isInitialized || !searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    let results = PRODUCT.filter((p) => p.title?.toLowerCase().includes(query));
    if (availabilityFilter) results = results.filter((p) => p.order === true);
    if (priceSort === "asc") results.sort((a, b) => a.price - b.price);
    if (priceSort === "desc") results.sort((a, b) => b.price - a.price);
    return results;
  }, [searchQuery, isInitialized, availabilityFilter, priceSort]);

  const currentCategory = CATEGORY_PRODUCT[activeCategory];
  const getProductKey = (product, index) => `product-${product.id}-${index}`;

  const handleTypeClick = (typeCategory) => {
    setActiveType(typeCategory);
    setActiveSubcategory(null);
    setExpandedAccordion(typeCategory);

    if (!router.isReady || !currentCategory) return;

    router.push(`/sale/${currentCategory.path}/${typeCategory}`, undefined, {
      shallow: true,
    });
  };

  const handleSubcategoryClick = (subPath) => {
    const category = CATEGORY_PRODUCT[activeCategory];

    setActiveSubcategory(subPath);
    router.push(`/sale/${currentCategory.path}/${subPath}`);
  };

  const handleCategoryClick = (e) => {
    const idx = Number(e.key);
    setActiveCategory(idx);
    setExpandedAccordion(null);
    setSearchValue("");
    setSearchQuery("");
    localStorage.removeItem("searchQuery");
    router.push(`/sale/${CATEGORY_PRODUCT[idx].path}`);
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
            items={CATEGORY_PRODUCT.map((c, i) => ({ key: i, label: c.title }))}
            className={styles["sticky-horizontal-menu"]}
            style={{
              flex: 1,
              marginBottom: 10,
              fontSize: isMobileView ? 13.5 : 14.5,
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
                          onClick={() => router.push(`/app/${product.id}`)}
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
                  <p>Ничего не найдено по запросу "{searchQuery}"</p>
                  <p>Попробуйте изменить запрос</p>
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
