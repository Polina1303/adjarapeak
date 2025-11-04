import { Outlet, useNavigate, useLocation } from "react-router-dom";
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

// export const SalePage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [expandedAccordion, setExpandedAccordion] = useState(null);

//   useEffect(() => {
//     if (location.pathname === "/sale") {
//       setActiveCategory(0);
//       navigate(`/sale/${CATEGORY_PRODUCT[0].path}`, { replace: true });
//     } else {
//       const currentPath = location.pathname.split("/")[2];
//       const foundIndex = CATEGORY_PRODUCT.findIndex(
//         (c) => c.path === currentPath
//       );
//       if (foundIndex !== -1) setActiveCategory(foundIndex);
//     }
//   }, [location.pathname, navigate]);

//   const handleCategoryClick = (e) => {
//     const categoryIndex = Number(e.key);
//     setActiveCategory(categoryIndex);
//     const category = CATEGORY_PRODUCT[categoryIndex];
//     setExpandedAccordion(null);
//     navigate(`/sale/${category.path}`);
//   };

//   const handleSubcategoryClick = (subcategoryPath) => {
//     const category = CATEGORY_PRODUCT[activeCategory];
//     navigate(`/sale/${category.path}/${subcategoryPath}`);
//   };

//   const handleTypeClick = (typeCategory) => {
//     const category = CATEGORY_PRODUCT[activeCategory];
//     navigate(`/sale/${category.path}/${typeCategory}`);
//   };

//   const currentCategory = CATEGORY_PRODUCT[activeCategory];

//   return (
//     <>
//       <div className="search-container" style={{ margin: "20px 0" }}>
//         <div className="filters-scroll-container">
//           <Menu
//             mode="horizontal"
//             selectedKeys={[`${activeCategory}`]}
//             items={CATEGORY_PRODUCT.map((c, i) => ({ key: i, label: c.title }))}
//             className="sticky-horizontal-menu"
//             style={{ flex: 1, marginBottom: 10, fontSize: "12px" }}
//             onClick={handleCategoryClick}
//           />
//         </div>
//       </div>

//       <div className="home-page__container-product">
//         <div>
//           <div className="title" id="home-page-buy">
//             {currentCategory?.title?.toUpperCase() || "ТОВАРОВ"}
//           </div>

//           <div className="sale-page-content">
//             <div className="filter-category">
//               {currentCategory?.types?.map((type) => (
//                 <Accordion
//                   key={type.category}
//                   expanded={expandedAccordion === type.category}
//                   onChange={() =>
//                     setExpandedAccordion((prev) =>
//                       prev === type.category ? null : type.category
//                     )
//                   }
//                   disableGutters
//                   sx={{
//                     boxShadow: "none",
//                     borderBottom: "1px solid #eee",
//                     "&:before": { display: "none" },
//                   }}
//                 >
//                   <AccordionSummary
//                     expandIcon={
//                       type.subcategories?.length ? (
//                         <ExpandMoreIcon style={{ color: "#ff6f00" }} />
//                       ) : null
//                     }
//                     sx={{ cursor: "pointer" }}
//                   >
//                     <span
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleTypeClick(type.category);
//                       }}
//                       style={{
//                         fontWeight: "700",
//                         fontFamily: "RoadRadio, sans-serif",
//                         fontSize: "14px",
//                       }}
//                     >
//                       {type.title}
//                     </span>
//                   </AccordionSummary>

//                   <AccordionDetails sx={{ p: 0 }}>
//                     <List>
//                       {type.subcategories?.map((sub) => (
//                         <ListItemButton
//                           key={sub.subcategory}
//                           sx={{ pl: 3 }}
//                           onClick={() =>
//                             handleSubcategoryClick(sub.subcategory)
//                           }
//                         >
//                           <span
//                             style={{
//                               fontFamily: "RoadRadio, sans-serif",
//                               fontSize: "14px",
//                             }}
//                           >
//                             {sub.title}
//                           </span>
//                         </ListItemButton>
//                       ))}
//                     </List>
//                   </AccordionDetails>
//                 </Accordion>
//               ))}
//             </div>
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export const SalePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState(
    () => localStorage.getItem("searchQuery") || ""
  );
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT);

  const currentCategory = CATEGORY_PRODUCT[activeCategory];

  useEffect(() => {
    if (location.pathname === "/sale") {
      setActiveCategory(0);
      navigate(`/sale/${CATEGORY_PRODUCT[0].path}`, { replace: true });
    } else {
      const currentPath = location.pathname.split("/")[2];
      const foundIndex = CATEGORY_PRODUCT.findIndex(
        (c) => c.path === currentPath
      );
      if (foundIndex !== -1) setActiveCategory(foundIndex);
    }
  }, [location.pathname, navigate]);

  const handleCategoryClick = (e) => {
    const categoryIndex = Number(e.key);
    setActiveCategory(categoryIndex);
    const category = CATEGORY_PRODUCT[categoryIndex];
    setExpandedAccordion(null);
    setSearchQuery("");
    localStorage.removeItem("searchQuery");
    navigate(`/sale/${category.path}`);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
  };

  useEffect(() => {
    const category = CATEGORY_PRODUCT[activeCategory];
    if (!category) return;

    let filtered = PRODUCT.filter((product) => {
      // фильтр по категории
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

    // фильтр по поиску
    if (searchQuery.trim()) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [activeCategory, searchQuery]);

  // навигация по типам и подкатегориям
  const handleTypeClick = (typeCategory) => {
    const category = CATEGORY_PRODUCT[activeCategory];
    navigate(`/sale/${category.path}/${typeCategory}`);
  };

  const handleSubcategoryClick = (subcategoryPath) => {
    const category = CATEGORY_PRODUCT[activeCategory];
    navigate(`/sale/${category.path}/${subcategoryPath}`);
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTypeClick(type.category);
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "700",
                        fontFamily: "RoadRadio, sans-serif",
                        fontSize: "14px",
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

            {/* Если есть поиск — показываем отфильтрованные товары */}
            {searchQuery.trim() ? (
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
                    <p>Попробуй изменить запрос.</p>
                  </div>
                )}
              </div>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
