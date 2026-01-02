import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import { RENT } from "../../components/product-range/rent";
import { Menu } from "antd";
import { CATEGORY_RENT } from "../../components/product-range/categoryRent";
import FilterListIcon from "@mui/icons-material/FilterList";
import { ProductItems } from "../../components/product-items/product-items";
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
import { RENT_SKY } from "../../components/product-range/rent-sky";
import { Card, CardActionArea, Skeleton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./rent-page.module.css";

export default function RentPage({ children }) {
  const router = useRouter();

  const [loadedIds, setLoadedIds] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const menuContainerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);

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
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleTypeClick(type.category);
            closeMobileMenu();
          }}
        >
          <span
            style={{
              fontWeight: 700,
              fontFamily: "RoadRadio, sans-serif",
              fontSize: 14,
            }}
          >
            {type.title}
          </span>
        </AccordionSummary>

        {type.subcategories?.length > 0 && (
          <AccordionDetails sx={{ p: 0 }}>
            <List>
              {type.subcategories.map((sub) => (
                <ListItemButton
                  key={sub.subcategory}
                  sx={{ pl: 3 }}
                  onClick={() => {
                    handleSubcategoryClick(sub.subcategory);
                    closeMobileMenu();
                  }}
                >
                  <span
                    style={{
                      fontFamily: "RoadRadio, sans-serif",
                      fontSize: 14,
                    }}
                  >
                    {sub.title}
                  </span>
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
    const categoryIndex = CATEGORY_RENT.findIndex(
      (c) => c.path === categoryPath
    );
    if (categoryIndex !== -1) setActiveCategory(categoryIndex);
  }, [router.asPath]);

  const filteredProducts = useMemo(() => {
    if (!isInitialized || !searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase().trim();

    const results = [];
    const seenIds = new Set();

    for (const product of RENT || RENT_SKY) {
      if (product.title?.toLowerCase().includes(query)) {
        if (!seenIds.has(product.id)) {
          seenIds.add(product.id);
          results.push(product);
        }
      }
    }

    return results;
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
    const pathParts = router.asPath.split("/");
    const categoryPath = pathParts[2];
    const categoryIndex = CATEGORY_RENT.findIndex(
      (c) => c.path === categoryPath
    );
    if (categoryIndex !== -1) setActiveCategory(categoryIndex);
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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const currentCategory = CATEGORY_RENT[activeCategory];

  const handleCategoryClick = (e) => {
    if (!router.isReady) return;
    const idx = Number(e.key);
    setActiveCategory(idx);
    setExpandedAccordion(null);
    setSearchValue("");
    setSearchQuery("");
    localStorage.removeItem("searchQuery");

    router.push(`/rent/${CATEGORY_RENT[idx].path}`, undefined, {
      shallow: true,
    });
  };

  const handleTypeClick = (typeCategory) => {
    setExpandedAccordion(typeCategory);
    if (!router.isReady || !currentCategory) return;
    router.push(`/rent/${currentCategory.path}/${typeCategory}`, undefined, {
      shallow: true,
    });
  };

  const toggleMobileMenu = () => {
    if (isMobileView) setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSubcategoryClick = (subcategoryPath) => {
    const category = CATEGORY_RENT[activeCategory];
    router.push(`/rent/${category.path}/${subcategoryPath}`);
  };

  const getProductKey = (product, index) => {
    return `product-${product.id}-${index}`;
  };

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
            items={CATEGORY_RENT.map((c, i) => ({
              key: i,
              label: c.title.trim(),
            }))}
            className={styles["sticky-horizontal-menu"]}
            style={{
              flex: 1,
              marginBottom: 10,
              fontSize: "14.5px",
              fontFamily: "RoadRadio",
            }}
            onClick={handleCategoryClick}
          />
        </div>

        <input
          type="text"
          placeholder="Поиск"
          value={searchValue}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      <div className={styles["home-page__container-product"]}>
        <div>
          <div className={styles["title"]} id="home-page-buy">
            {currentCategory?.title?.toUpperCase() || "АРЕНДА ТОВАРОВ"}
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
                                {!isLoaded ? (
                                  <Skeleton
                                    variant="rectangular"
                                    height={450}
                                  />
                                ) : (
                                  <ProductItems product={product} />
                                )}
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
