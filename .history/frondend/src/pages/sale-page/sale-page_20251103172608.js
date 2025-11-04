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
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [activeSubcategory, setActiveSubcategory] = useState(null);
//   const [expandedAccordion, setExpandedAccordion] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(
//     () => localStorage.getItem("searchQuery") || ""
//   );
//   const [filteredProducts, setFilteredProducts] = useState(PRODUCT);

//   const handleCategoryClick = (e) => {
//     const categoryIndex = Number(e.key);
//     setActiveCategory(categoryIndex);
//     setActiveSubcategory(null);
//     setExpandedAccordion(null);
//     localStorage.setItem("activeTypeSale", categoryIndex);
//     setSearchQuery("");
//     localStorage.removeItem("searchQuery");
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     localStorage.setItem("searchQuery", query);
//   };

//   const handleSubcategoryClick = (subcategory) => {
//     setActiveSubcategory(subcategory);
//   };

//   // Фильтрация товаров по категории, сабкатегории и поиску
//   useEffect(() => {
//     const category = CATEGORY_PRODUCT[activeCategory];
//     if (!category) return;

//     let filtered = PRODUCT.filter((product) => {
//       if (activeSubcategory) {
//         return product.category === activeSubcategory;
//       }
//       // Если сабкатегория не выбрана, показываем все товары категории
//       return (
//         product.category === category.types?.[0]?.category ||
//         category.types?.some((t) =>
//           t.subcategories?.some(
//             (sub) => sub.subcategory === product.subcategory
//           )
//         )
//       );
//     });

//     if (searchQuery.trim()) {
//       filtered = filtered.filter((product) =>
//         product.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
//       );
//     }

//     setFilteredProducts(filtered);
//   }, [activeCategory, activeSubcategory, searchQuery]);

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

//         <input
//           type="text"
//           placeholder="Поиск..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//           style={{
//             width: "99%",
//             padding: "10px",
//             fontSize: "16px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
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
//                           onClick={() =>
//                             handleSubcategoryClick(sub.subcategory)
//                           }
//                           sx={{ pl: 3 }}
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
//             {/* : (
//               <div className="not-found">
//                 <p>К сожалению, ничего не найдено.</p>
//                 <p>Попробуйте изменить запрос или выбрать другую категорию.</p>
//               </div>
//               ) */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export const SalePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  // при открытии страницы — выбираем первую категорию по умолчанию
  useEffect(() => {
    if (location.pathname === "/sale") {
      setActiveCategory(0);
      navigate(`/sale/${CATEGORY_PRODUCT[0].path}`, { replace: true });
    } else {
      // если в URL уже есть категория — находим индекс
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
    navigate(`/sale/${category.path}`); // переходим по маршруту
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
      </div>

      <div className="home-page__container-product">
        <div className="sale-page-content">
          <div className="filter-category">
            {/* фильтр по подтипам */}
            {CATEGORY_PRODUCT[activeCategory]?.types?.map((type) => (
              <div key={type.category}>{type.title}</div>
            ))}
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};
