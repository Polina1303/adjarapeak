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
//             ПРОДАЖА ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ
//           </div>
//           <div className="sale-page-content">
//             <div className="filter-category">
//               {CATEGORY_PRODUCT[activeCategory]?.types?.map((type) => (
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
//                     // ✅ переход на страницу типа при клике по названию
//                     onClick={(e) => {
//                       e.stopPropagation(); // чтобы не срабатывало раскрытие при клике
//                       handleTypeClick(type.category);
//                     }}
//                     sx={{ cursor: "pointer" }}
//                   >
//                     <span
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
    navigate(`/sale/${category.path}`);
  };

  const handleSubcategoryClick = (subcategoryPath) => {
    const category = CATEGORY_PRODUCT[activeCategory];
    navigate(`/sale/${category.path}/${subcategoryPath}`);
  };

  const handleTypeClick = (typeCategory) => {
    const category = CATEGORY_PRODUCT[activeCategory];
    navigate(`/sale/${category.path}/${typeCategory}`);
  };

  // ✅ Текущая категория (для заголовка)
  const currentCategory = CATEGORY_PRODUCT[activeCategory];

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
      </div>

      <div className="home-page__container-product">
        <div>
          <div className="title" id="home-page-buy">
            {/* ✅ Динамический заголовок */}
            ПРОДАЖА {currentCategory?.title?.toUpperCase() || "ТОВАРОВ"}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTypeClick(type.category);
                    }}
                    sx={{ cursor: "pointer" }}
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
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
