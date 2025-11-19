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
import { useRouter } from "next/router";
import styles from "./sale-page.module.css";

export default function SalePage({ children }) {
  const router = useRouter();
  const { section } = router.query;
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  // const [searchQuery, setSearchQuery] = useState(
  //   () => localStorage.getItem("searchQuery") || ""
  // );
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT);

  const currentCategory = CATEGORY_PRODUCT[activeCategory];

  useEffect(() => {
    // if (!section) {
    //   setActiveCategory(0);
    //   router.push(`/sale/${CATEGORY_PRODUCT[0].path}`, { replace: true });
    // } else {
    //   const foundIndex = CATEGORY_PRODUCT.findIndex((c) => c.path === section);
    //   if (foundIndex !== -1) setActiveCategory(foundIndex);
    // }
  }, [section, router]);

  const handleCategoryClick = (e) => {
    const categoryIndex = Number(e.key);
    setActiveCategory(categoryIndex);
    const category = CATEGORY_PRODUCT[categoryIndex];
    setExpandedAccordion(null);
    // setSearchQuery("");
    localStorage.removeItem("searchQuery");
    router.push(`/sale/${category.path}`);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    // setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
  };

  useEffect(() => {
    const category = CATEGORY_PRODUCT[activeCategory];
    if (!category) return;

    let filtered = PRODUCT.filter((product) => {
      const inCategory =
        category.types?.some(
          (type) =>
            product.category === type.category ||
            type.subcategories?.some(
              (sub) => sub.subcategory === product.subcategory
            )
        ) ?? false;
      return inCategory;
    });

    // if (searchQuery.trim()) {
    //   filtered = filtered.filter((product) =>
    //     product.title.toLowerCase().includes(searchQuery.toLowerCase())
    //   );
    // }

    setFilteredProducts(filtered);
  }, [activeCategory]); //searchQuery

  const handleTypeClick = (typeCategory) => {
    const category = CATEGORY_PRODUCT[activeCategory];
    router.push(`/sale/${category.path}/${typeCategory}`);
  };

  const handleSubcategoryClick = (subcategoryPath) => {
    const category = CATEGORY_PRODUCT[activeCategory];
    router.push(`/sale/${category.path}/${subcategoryPath}`);
  };

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
          // value={searchQuery}
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
            {currentCategory?.title?.toUpperCase() || "ПРОДАЖА ТОВАРОВ"}
          </div>

          <div className="sale-page-content">
            <div className="filter-category">
              {currentCategory?.types?.map((type) => (
                <Accordion
                  key={type.category}
                  expanded={expandedAccordion === type.category}
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
                      type.subcategories?.length ? (
                        <ExpandMoreIcon style={{ color: "#ff6f00" }} />
                      ) : null
                    }
                    sx={{ cursor: "pointer" }}
                  >
                    <span
                      style={{
                        fontWeight: "700",
                        fontFamily: "RoadRadio, sans-serif",
                        fontSize: "14px",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTypeClick(type.category);
                      }}
                    >
                      {type.title}
                    </span>
                  </AccordionSummary>

                  <AccordionDetails sx={{ p: 0 }}>
                    <List>
                      {type.subcategories?.map((sub) => (
                        <ListItemButton
                          key={sub.subcategory}
                          sx={{ pl: 3 }}
                          onClick={() =>
                            handleSubcategoryClick(sub.subcategory)
                          }
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
                </Accordion>
              ))}
            </div>

            {/* {searchQuery.trim() ? (
              <div className="filtered-results">
                {filteredProducts.length > 0 ? (
                  <div className="product-grid">
                    {filteredProducts.map((product) => (
                      <div key={product.id} className="product-card">
                        <img
                          src={`/images/${product.img}`}
                          alt={product.title}
                          loading="lazy"
                        />
                        <div className="product-title">{product.title}</div>
                        <div className="product-price">{product.price} BYN</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="not-found">
                    <p>Ничего не найдено </p>
                    <p>Попробуй изменить запрос</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="content">{children}</div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}
