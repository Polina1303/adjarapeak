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

const items = CATEGORY_PRODUCT.map((item, index) => ({
  key: index,
  label: item.title,
  types: item.types,
}));

export const SalePage = () => {
  const [activeType, setActiveType] = useState(0); // активная категория
  const [activeSubcategory, setActiveSubcategory] = useState(null); // активная сабкатегория
  const [expandedAccordion, setExpandedAccordion] = useState(null); // для раскрытия аккордеона
  const [searchQuery, setSearchQuery] = useState(
    () => localStorage.getItem("searchQuery") || ""
  );
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT);

  useEffect(() => {
    const storedActiveType = localStorage.getItem("activeTypeSale");
    if (storedActiveType) setActiveType(Number(storedActiveType));
  }, []);

  const handleClick = (e) => {
    const newActiveType = Number(e.key);
    setActiveType(newActiveType);
    setActiveSubcategory(null);
    setExpandedAccordion(null);
    localStorage.setItem("activeTypeSale", newActiveType);
    setSearchQuery("");
    localStorage.removeItem("searchQuery");
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
  };

  const handleSubcategoryClick = (subcategoryKey) => {
    setActiveSubcategory(subcategoryKey);
  };

  // Фильтрация по категории, сабкатегории и поиску
  useEffect(() => {
    const category = items[activeType];
    if (!category) return;

    const subcategoriesKeys = category.types.flatMap(
      (type) => type.subcategories?.map((sub) => sub.subcategory) || []
    );

    let filtered = PRODUCT.filter((product) => {
      if (activeSubcategory) return product.subcategory === activeSubcategory;
      return category.types.some(
        (type) =>
          product.category === type.category ||
          subcategoriesKeys.includes(product.subcategory)
      );
    });

    if (searchQuery.trim()) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [activeType, activeSubcategory, searchQuery]);

  return (
    <>
      <div className="search-container" style={{ margin: "20px 0" }}>
        <div className="filters-scroll-container">
          <Menu
            mode="horizontal"
            selectedKeys={[`${activeType}`]}
            items={items}
            className="sticky-horizontal-menu"
            style={{ flex: 1, marginBottom: 10, fontSize: "12px" }}
            onClick={handleClick}
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

          {/* Сабкатегории раскрываются аккордеоном */}
          {items[activeType]?.types?.map((type) =>
            type.subcategories?.map((sub) => (
              <Accordion
                key={sub.subcategory}
                expanded={expandedAccordion === sub.subcategory}
                onChange={() =>
                  setExpandedAccordion((prev) =>
                    prev === sub.subcategory ? null : sub.subcategory
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
                  expandIcon={<ExpandMoreIcon style={{ color: "#ff6f00" }} />}
                >
                  {sub.title}
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <List>
                    <ListItemButton
                      onClick={() => handleSubcategoryClick(sub.subcategory)}
                    >
                      Показать товары
                    </ListItemButton>
                  </List>
                </AccordionDetails>
              </Accordion>
            ))
          )}

          {/* Список товаров */}
          <div className="home-page-product">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductItems key={product.id} product={product} />
              ))
            ) : (
              <div className="not-found">
                <p>К сожалению, ничего не найдено.</p>
                <p>Попробуйте изменить запрос или выбрать другую категорию.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
