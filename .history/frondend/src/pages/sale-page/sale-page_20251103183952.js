// import { Outlet, useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { PRODUCT } from "../../components/product-range/product";
// import { Menu } from "antd";
// import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";

// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   List,
//   ListItemButton,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import "./sale-page.css";

// // export const SalePage = () => {
// //   const [activeCategory, setActiveCategory] = useState(0);
// //   const [activeSubcategory, setActiveSubcategory] = useState(null);
// //   const [expandedAccordion, setExpandedAccordion] = useState(null);
// //   const [searchQuery, setSearchQuery] = useState(
// //     () => localStorage.getItem("searchQuery") || ""
// //   );
// //   const [filteredProducts, setFilteredProducts] = useState(PRODUCT);

// //   const handleCategoryClick = (e) => {
// //     const categoryIndex = Number(e.key);
// //     setActiveCategory(categoryIndex);
// //     setActiveSubcategory(null);
// //     setExpandedAccordion(null);
// //     localStorage.setItem("activeTypeSale", categoryIndex);
// //     setSearchQuery("");
// //     localStorage.removeItem("searchQuery");
// //   };

// //   const handleSearchChange = (e) => {
// //     const query = e.target.value;
// //     setSearchQuery(query);
// //     localStorage.setItem("searchQuery", query);
// //   };

// //   const handleSubcategoryClick = (subcategory) => {
// //     setActiveSubcategory(subcategory);
// //   };

// //   // Фильтрация товаров по категории, сабкатегории и поиску
// //   useEffect(() => {
// //     const category = CATEGORY_PRODUCT[activeCategory];
// //     if (!category) return;

// //     let filtered = PRODUCT.filter((product) => {
// //       if (activeSubcategory) {
// //         return product.category === activeSubcategory;
// //       }
// //       // Если сабкатегория не выбрана, показываем все товары категории
// //       return (
// //         product.category === category.types?.[0]?.category ||
// //         category.types?.some((t) =>
// //           t.subcategories?.some(
// //             (sub) => sub.subcategory === product.subcategory
// //           )
// //         )
// //       );
// //     });

// //     if (searchQuery.trim()) {
// //       filtered = filtered.filter((product) =>
// //         product.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
// //       );
// //     }

// //     setFilteredProducts(filtered);
// //   }, [activeCategory, activeSubcategory, searchQuery]);

// //   return (
// //     <>
// //       <div className="search-container" style={{ margin: "20px 0" }}>
// //         <div className="filters-scroll-container">
// //           <Menu
// //             mode="horizontal"
// //             selectedKeys={[`${activeCategory}`]}
// //             items={CATEGORY_PRODUCT.map((c, i) => ({ key: i, label: c.title }))}
// //             className="sticky-horizontal-menu"
// //             style={{ flex: 1, marginBottom: 10, fontSize: "12px" }}
// //             onClick={handleCategoryClick}
// //           />
// //         </div>

// //         <input
// //           type="text"
// //           placeholder="Поиск..."
// //           value={searchQuery}
// //           onChange={handleSearchChange}
// //           style={{
// //             width: "99%",
// //             padding: "10px",
// //             fontSize: "16px",
// //             border: "1px solid #ccc",
// //             borderRadius: "4px",
// //           }}
// //         />
// //       </div>

// // <div className="home-page__container-product">
// //   <div>
// //     <div className="title" id="home-page-buy">
// //       ПРОДАЖА ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ
// //     </div>
// //     <div className="sale-page-content">
// //       <div className="filter-category">
// //         {CATEGORY_PRODUCT[activeCategory]?.types?.map((type) => (
// //           <Accordion
// //             key={type.category}
// //             expanded={expandedAccordion === type.category}
// //             onChange={() =>
// //               setExpandedAccordion((prev) =>
// //                 prev === type.category ? null : type.category
// //               )
// //             }
// //             disableGutters
// //             sx={{
// //               boxShadow: "none",
// //               borderBottom: "1px solid #eee",
// //               "&:before": { display: "none" },
// //             }}
// //           >
// //             <AccordionSummary
// //               expandIcon={
// //                 type.subcategories?.length ? (
// //                   <ExpandMoreIcon style={{ color: "#ff6f00" }} />
// //                 ) : null
// //               }
// //             >
// //               <span
// //                 style={{
// //                   fontWeight: "700",
// //                   fontFamily: "RoadRadio, sans-serif",
// //                   fontSize: "14px",
// //                 }}
// //               >
// //                 {type.title}
// //               </span>
// //             </AccordionSummary>
// //             <AccordionDetails sx={{ p: 0 }}>
// //               <List>
// //                 {type.subcategories?.map((sub) => (
// //                   <ListItemButton
// //                     key={sub.subcategory}
// //                     onClick={() =>
// //                       handleSubcategoryClick(sub.subcategory)
// //                     }
// //                     sx={{ pl: 3 }}
// //                   >
// //                     <span
// //                       style={{
// //                         fontFamily: "RoadRadio, sans-serif",
// //                         fontSize: "14px",
// //                       }}
// //                     >
// //                       {sub.title}
// //                     </span>
// //                   </ListItemButton>
// //                 ))}
// //               </List>
// //             </AccordionDetails>
// //           </Accordion>
// //         ))}
// //       </div>

// //             <Outlet />
// //             {/* : (
// //               <div className="not-found">
// //                 <p>К сожалению, ничего не найдено.</p>
// //                 <p>Попробуйте изменить запрос или выбрать другую категорию.</p>
// //               </div>
// //               ) */}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

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
//     navigate(`/sale/${category.path}`); // переходим по маршруту
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
//                         <ListItemButton key={sub.subcategory} sx={{ pl: 3 }}>
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

//ГЛАВНЫЙ
// SalePage.jsx
// import { Outlet, useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Menu } from "antd";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   List,
//   ListItemButton,
//   Card,
//   CardActionArea,
//   CardMedia,
//   CardContent,
//   Skeleton,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";
// import "./sale-page.css";

// // Универсальная карточка категории
// const CategoryCard = ({ title, img, routePath }) => {
//   const navigate = useNavigate();
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <Card
//       sx={{
//         boxShadow: 3,
//         height: "100%",
//         overflow: "hidden",
//         cursor: "pointer",
//         transition: "transform 0.2s ease",
//         "&:hover": { transform: "scale(1.03)" },
//       }}
//       onClick={() => navigate(routePath)}
//     >
//       <CardActionArea>
//         {img && (
//           <>
//             {!loaded && <Skeleton variant="rectangular" height={140} />}
//             <CardMedia
//               component="img"
//               sx={{
//                 objectFit: "cover",
//                 display: loaded ? "block" : "none",
//                 height: 140,
//               }}
//               image={process.env.PUBLIC_URL + "/img/" + img}
//               alt={title}
//               loading="lazy"
//               onLoad={() => setLoaded(true)}
//             />
//           </>
//         )}
//         <CardContent
//           sx={{
//             textAlign: "center",
//             flex: 1,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             p: 1.5,
//           }}
//         >
//           <p
//             style={{
//               fontFamily: "RoadRadio-Thin, sans-serif",
//               fontSize: "14px",
//               fontWeight: 700,
//               margin: 0,
//             }}
//           >
//             {title}
//           </p>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// Страница категорий / подкатегорий
// export const SaleCategoryPage = ({ category }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isRootLevel =
//     location.pathname === `/sale/${category.path}` ||
//     location.pathname === "/sale";

//   const cards = category.types || category.subcategories || [];

//   if (isRootLevel && cards.length) {
//     return (
//       <div className="home-page-product">
//         {cards.map(({ title, img, category: cat, path }) => {
//           const segment = cat || path;
//           const routePath = category.path
//             ? `/sale/${category.path}/${segment}`
//             : `/sale/${segment}`;

//           return (
//             <div className="category-product" key={segment}>
//               <CategoryCard title={title} img={img} routePath={routePath} />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }

//   return <Outlet />;
// };

// // Главная страница продаж
// export const SalePage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [expandedAccordion, setExpandedAccordion] = useState(null);

//   // Установка категории при открытии страницы
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
import { useLocation } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Skeleton,
} from "@mui/material";
import { useState } from "react";
import { PRODUCT } from "../../components/product-range/product";

export const SaleCategoryPage = ({ category }) => {
  const location = useLocation();
  const [loadedIds, setLoadedIds] = useState([]);

  // Получаем текущую подкатегорию из URL
  const currentSubcategory = location.pathname.split("/")[3]; // /sale/tourismCamping/tent

  // Фильтруем товары из PRODUCT по category (или подкатегории)
  const filteredProducts = PRODUCT.filter(
    (p) => p.category === currentSubcategory
  );

  if (filteredProducts.length) {
    return (
      <div className="home-page-product">
        {filteredProducts.map((product) => (
          <div className="category-product" key={product.id}>
            <Card
              sx={{
                boxShadow: 3,
                height: "100%",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <CardActionArea>
                {product.img && (
                  <>
                    {!loadedIds.includes(product.id) && (
                      <Skeleton variant="rectangular" height={140} />
                    )}
                    <CardMedia
                      component="img"
                      sx={{
                        objectFit: "cover",
                        display: loadedIds.includes(product.id)
                          ? "block"
                          : "none",
                        height: 140,
                      }}
                      image={process.env.PUBLIC_URL + "/img/" + product.img}
                      alt={product.title}
                      loading="lazy"
                      onLoad={() =>
                        setLoadedIds((prev) => [...prev, product.id])
                      }
                    />
                  </>
                )}
                <CardContent
                  sx={{
                    textAlign: "center",
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 1.5,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "RoadRadio-Thin, sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {product.title}
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  return <p>Товары не найдены</p>;
};
