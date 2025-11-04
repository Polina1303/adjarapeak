import { ProductItems } from "../../components/product-items";
import { useState, useEffect } from "react";
import { PRODUCT } from "../../components/product-range/product";
import { Menu } from "antd";
import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItemButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./sale-page.css";

export const SalePage = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState(
    () => localStorage.getItem("searchQuery") || ""
  );
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT);

  const handleCategoryClick = (e) => {
    const categoryIndex = Number(e.key);
    setActiveCategory(categoryIndex);
    setActiveSubcategory(null);
    setExpandedAccordion(null);
    localStorage.setItem("activeTypeSale", categoryIndex);
    setSearchQuery("");
    localStorage.removeItem("searchQuery");
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
  };

  useEffect(() => {
    const category = CATEGORY_PRODUCT[activeCategory];
    if (!category) return;

    let filtered = PRODUCT;

    // 1️⃣ Если выбрана сабкатегория — фильтруем только по ней
    if (activeSubcategory) {
      filtered = PRODUCT.filter((p) => p.subcategory === activeSubcategory);

      // 2️⃣ Если сабкатегория не выбрана, но раскрыт конкретный тип (например "ПАЛАТКИ")
    } else if (expandedAccordion) {
      filtered = PRODUCT.filter((p) => p.category === expandedAccordion);

      // 3️⃣ Если просто выбрана главная категория — показываем всё, что в ней
    } else {
      const allowedCategories = category.types.map((t) => t.category);
      const allowedSubcategories = category.types.flatMap(
        (t) => t.subcategories?.map((s) => s.subcategory) || []
      );
      filtered = PRODUCT.filter(
        (p) =>
          allowedCategories.includes(p.category) ||
          allowedSubcategories.includes(p.subcategory)
      );
    }

    // 🔍 Поиск
    if (searchQuery.trim()) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [activeCategory, expandedAccordion, activeSubcategory, searchQuery]);

  // Фильтрация товаров по категории, сабкатегории и поиску
  // useEffect(() => {
  //   const category = CATEGORY_PRODUCT[activeCategory];
  //   if (!category) return;

  //   let filtered = PRODUCT.filter((product) => {
  //     if (activeSubcategory) {
  //       return product.subcategory === activeSubcategory;
  //     }
  //     // Если сабкатегория не выбрана, показываем все товары категории
  //     return (
  //       product.category === category.types?.[0]?.category ||
  //       category.types?.some((t) =>
  //         t.subcategories?.some(
  //           (sub) => sub.subcategory === product.subcategory
  //         )
  //       )
  //     );
  //   });

  //   if (searchQuery.trim()) {
  //     filtered = filtered.filter((product) =>
  //       product.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
  //     );
  //   }

  //   setFilteredProducts(filtered);
  // }, [activeCategory, activeSubcategory, searchQuery]);

  return (
    <>
      <div className="search-container" style={{ margin: "20px 0" }}>
        <div className="filters-scroll-container">
          <Menu
            mode="horizontal"
            selectedKeys={[`${activeCategory}`]}
            items={CATEGORY_PRODUCT.map((c, i) => ({ key: i, label: c.title }))}
            className="sticky-horizontal-menu"
            style={{ flex: 1, marginBottom: 10, fontSize: "12px" }}
            onClick={handleCategoryClick}
          />
        </div>

        <input
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            width: "99%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div className="home-page__container-product">
        <div>
          <div className="title" id="home-page-buy">
            ПРОДАЖА ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ
          </div>
          <div className="sale-page-content">
            <div className="filter-category">
              {CATEGORY_PRODUCT[activeCategory]?.types?.map((type) => {
                const hasSubcategories = type.subcategories?.length > 0;
                const isExpanded = expandedAccordion === type.category;

                return (
                  <Accordion
                    key={type.category}
                    expanded={isExpanded}
                    onChange={() =>
                      setExpandedAccordion((prev) =>
                        prev === type.category ? null : type.category
                      )
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
                        hasSubcategories ? (
                          <ExpandMoreIcon style={{ color: "#ff6f00" }} />
                        ) : null
                      }
                    >
                      <span
                        onClick={(e) => {
                          e.stopPropagation(); // ← предотвращает раскрытие при клике по тексту
                          setExpandedAccordion(type.category);
                          setActiveSubcategory(null);
                        }}
                        style={{
                          fontWeight: "700",
                          fontFamily: "RoadRadio, sans-serif",
                          fontSize: "14px",
                          cursor: "pointer",
                          color:
                            expandedAccordion === type.category &&
                            !activeSubcategory
                              ? "#ff6f00"
                              : "#000",
                        }}
                      >
                        {type.title}
                      </span>
                    </AccordionSummary>

                    {hasSubcategories && (
                      <AccordionDetails sx={{ p: 0 }}>
                        <List>
                          {type.subcategories.map((sub) => (
                            <ListItemButton
                              key={sub.subcategory}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSubcategory(sub.subcategory);
                              }}
                              sx={{
                                pl: 3,
                                backgroundColor:
                                  activeSubcategory === sub.subcategory
                                    ? "#fff7e6"
                                    : "transparent",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "RoadRadio, sans-serif",
                                  fontSize: "14px",
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
                );
              })}
            </div>

            <div className="home-page-product">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductItems key={product.id} product={product} />
                ))
              ) : (
                <div className="not-found">
                  <p>К сожалению, ничего не найдено.</p>
                  <p>
                    Попробуйте изменить запрос или выбрать другую категорию.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
