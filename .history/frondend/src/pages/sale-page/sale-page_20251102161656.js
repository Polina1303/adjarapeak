import { ProductItems } from "../../components/product-items";
import { useState, useEffect } from "react";
import { PRODUCT } from "../../components/product-range/product";
import { useNavigate } from "react-router-dom";
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
  const [activeType, setActiveType] = useState(0);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [active, setActive] = useState(PRODUCT);

  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem("searchQuery") || "";
  });

  useEffect(() => {
    const storedActiveType = localStorage.getItem("activeTypeSale");
    if (storedActiveType) {
      setActiveType(Number(storedActiveType));
    }
  }, []);

  const handleClick = (e) => {
    const newActiveType = Number(e.key);
    setActiveType(newActiveType);
    localStorage.setItem("activeTypeSale", newActiveType);

    setSearchQuery("");
    localStorage.removeItem("searchQuery", searchQuery);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
  };

  const filterProductsByCategory = (products, categoryIndex) => {
    if (categoryIndex === 0) {
      return products.filter((item) =>
        items[categoryIndex].types.includes(item.category)
      );
    }
    return products.filter((item) =>
      items[categoryIndex].types.includes(item.category)
    );
  };

  useEffect(() => {
    const currentItems = filterProductsByCategory(PRODUCT, activeType);
    setActive(currentItems);
  }, [activeType]);

  useEffect(() => {
    let filteredItems = PRODUCT;

    if (activeType >= 0) {
      filteredItems = filterProductsByCategory(PRODUCT, activeType);
    }

    if (searchQuery.trim()) {
      filteredItems = filteredItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
    }

    setActive(filteredItems);
  }, [searchQuery, activeType]);

  return (
    <>
      <div className="search-container" style={{ margin: "20px 0" }}>
        <div className="filters-scroll-container">
          <Menu
            mode="horizontal"
            selectedKeys={[`${activeType}`]}
            items={items}
            className="sticky-horizontal-menu"
            style={{
              flex: 1,
              marginBottom: 10,
              fontSize: "12px",
            }}
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
            ПРОДАЖА ТУРИСТИЧЕСКОГО, ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ
          </div>

          {active.map(({ category, id }) => (
            <Accordion
              key={id}
              expanded={expanded === id}
              onChange={handleChange(id)}
              disableGutters
              sx={{
                boxShadow: "none",
                borderBottom: "1px solid #eee",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  typography: "subtitle1",
                  fontWeight: 600,
                  "&.Mui-expanded": { color: "#ff6f00" },
                }}
              >
                {category.title}
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <List>
                  {category.items.map((item, i) => (
                    <ListItemButton key={i} sx={{ pl: 3 }}>
                      {item}
                    </ListItemButton>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}

          {/* <div className="home-page-product">
              {active.length >c 0 ? (
                active.map((product) => (
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
            </div> */}
        </div>
      </div>
    </>
  );
};
