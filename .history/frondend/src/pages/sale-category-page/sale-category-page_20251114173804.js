// import { useLocation, Outlet, useNavigate } from "react-router-dom";
// import {
//   Card,
//   CardActionArea,
//   CardMedia,
//   CardContent,
//   Skeleton,
// } from "@mui/material";
// import { useState } from "react";
// import { PRODUCT } from "../../components/product-range/product";
// import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";

// export const SaleCategoryPage = ({ category }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [loadedIds, setLoadedIds] = useState([]);

//   const segments = location.pathname.split("/").filter(Boolean);
//   const sectionPath = segments[1];
//   const currentCategory = segments[2];
//   const currentSubcategory = segments[3];

//   const section =
//     CATEGORY_PRODUCT.find((s) => s.path === sectionPath) || category;

//   let filteredProducts = [];

//   if (currentSubcategory) {
//     filteredProducts = PRODUCT.filter(
//       (p) => p.subcategory === currentSubcategory
//     );
//   } else if (currentCategory) {
//     filteredProducts = PRODUCT.filter(
//       (p) => p.category === currentCategory || p.subcategory === currentCategory
//     );

//     if (!currentCategory && section?.types) {
//       return (
//         <div className="home-page-product">
//           {section.types.map((type) => {
//             const routePath = `/sale/${section.path}/${type.category}`;
//             const isLoaded = loadedIds.includes(type.category);

//             return (
//               <div
//                 key={type.category}
//                 className="category-product"
//                 onClick={() => navigate(routePath)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <Card
//                   sx={{
//                     boxShadow: 3,
//                     height: "100%",
//                     overflow: "hidden",
//                     transition: "transform 0.2s ease",
//                     "&:hover": { transform: "scale(1.03)" },
//                   }}
//                 >
//                   <CardActionArea>
//                     {!isLoaded && (
//                       <Skeleton variant="rectangular" height={250} />
//                     )}
//                     {type.img && (
//                       <CardMedia
//                         component="img"
//                         sx={{
//                           objectFit: "cover",
//                           display: isLoaded ? "block" : "none",
//                         }}
//                         image={process.env.PUBLIC_URL + "/img/" + type.img}
//                         alt={type.title}
//                         onLoad={() =>
//                           setLoadedIds((prev) => [...prev, type.category])
//                         }
//                       />
//                     )}
//                     <CardContent
//                       sx={{
//                         textAlign: "center",
//                         p: 1.5,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <p
//                         style={{
//                           fontFamily: "RoadRadio-Thin, sans-serif",
//                           fontSize: "14px",
//                           fontWeight: 700,
//                           margin: 0,
//                         }}
//                       >
//                         {type.title}
//                       </p>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </div>
//             );
//           })}
//         </div>
//       );
//     }
//     // if (currentCategory) {
//     //   const filteredProducts = PRODUCT.filter(
//     //     (p) => p.category === currentCategory || p.subcategory === currentCategory
//     //   );

//     //   if (!filteredProducts.length)
//     //     return <p style={{ textAlign: "center" }}>Товары не найдены</p>;

//     return (
//       <div className="home-page-product">
//         {filteredProducts.map((product) => {
//           const isLoaded = loadedIds.includes(product.id);
//           return (
//             <div className="category-product" key={product.id}>
//               <Card
//                 sx={{
//                   boxShadow: 3,
//                   height: "100%",
//                   overflow: "hidden",
//                   cursor: "pointer",
//                   transition: "transform 0.2s ease",
//                   "&:hover": { transform: "scale(1.03)" },
//                 }}
//                 onClick={() => navigate(`/app/${product.id}`)}
//               >
//                 <CardActionArea>
//                   {!isLoaded && <Skeleton variant="rectangular" height={250} />}
//                   {product.img && (
//                     <CardMedia
//                       component="img"
//                       sx={{
//                         objectFit: "cover",
//                         display: isLoaded ? "block" : "none",
//                       }}
//                       image={process.env.PUBLIC_URL + "/img/" + product.img}
//                       alt={product.title}
//                       onLoad={() =>
//                         setLoadedIds((prev) => [...prev, product.id])
//                       }
//                     />
//                   )}
//                   <CardContent
//                     sx={{
//                       textAlign: "center",
//                       p: 1.5,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <p
//                       style={{
//                         fontFamily: "RoadRadio-Thin, sans-serif",
//                         fontSize: "14px",
//                         fontWeight: 700,
//                         margin: 0,
//                       }}
//                     >
//                       {product.title}
//                     </p>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }

//   return <Outlet />;
// };

// import { useLocation, Outlet, useNavigate } from "react-router-dom";
// import {
//   Card,
//   CardActionArea,
//   CardMedia,
//   CardContent,
//   Skeleton,
// } from "@mui/material";
// import { useState } from "react";
import { PRODUCT } from "../../components/product-range/product";
import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";
import { Card, CardActionArea, CardContent, Skeleton } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SaleCategoryPage() {
  const router = useRouter();
  const { section, type, subcategory } = router.query;
  const [loadedIds, setLoadedIds] = useState([]);

  // Защита от undefined
  if (router.isFallback) return <p>Загрузка...</p>;

  const sectionData = CATEGORY_PRODUCT.find((s) => s.path === section) || {
    types: [],
  };

  let filteredProducts = [];

  if (subcategory) {
    filteredProducts = PRODUCT.filter((p) => p.subcategory === subcategory);
  } else if (type) {
    filteredProducts = PRODUCT.filter(
      (p) => p.category === type || p.subcategory === type
    );
  }

  // 1. Показываем подкатегории (если нет type)
  if (!type && sectionData?.types?.length > 0) {
    return (
      <div className="home-page-product">
        {sectionData.types.map((t) => {
          const routePath = `/sale/${section}/${t.category}`;
          const isLoaded = loadedIds.includes(t.category);

          return (
            <div
              key={t.category}
              className="category-product"
              onClick={() => router.push(routePath)}
              style={{ cursor: "pointer" }}
            >
              <Card
                sx={{
                  boxShadow: 3,
                  height: "100%",
                  overflow: "hidden",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <CardActionArea>
                  {!isLoaded && <Skeleton variant="rectangular" height={250} />}
                  {t.img && (
                    <div
                      style={{
                        position: "relative",
                        height: 250,
                        display: isLoaded ? "block" : "none",
                      }}
                    >
                      <Image
                        src={`/img/${t.img}`}
                        alt={t.title}
                        fill
                        style={{ objectFit: "cover" }}
                        onLoadingComplete={() =>
                          setLoadedIds((prev) => [...prev, t.category])
                        }
                      />
                    </div>
                  )}
                  <CardContent
                    sx={{
                      textAlign: "center",
                      p: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      {t.title}
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }

  // 2. Показываем товары
  if (filteredProducts.length > 0) {
    return (
      <div className="home-page-product">
        {filteredProducts.map((product) => {
          const isLoaded = loadedIds.includes(product.id);

          return (
            <div key={product.id} className="category-product">
              <Card
                sx={{
                  boxShadow: 3,
                  height: "100%",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
                onClick={() => router.push(`/app/${product.id}`)}
              >
                <CardActionArea>
                  {!isLoaded && <Skeleton variant="rectangular" height={250} />}
                  {product.img && (
                    <div
                      style={{
                        position: "relative",
                        height: 250,
                        display: isLoaded ? "block" : "none",
                      }}
                    >
                      <Image
                        src={`/img/${product.img}`}
                        alt={product.title}
                        fill
                        style={{ objectFit: "cover" }}
                        onLoadingComplete={() =>
                          setLoadedIds((prev) => [...prev, product.id])
                        }
                      />
                    </div>
                  )}
                  <CardContent
                    sx={{
                      textAlign: "center",
                      p: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
          );
        })}
      </div>
    );
  }

  if (type || subcategory) {
    return <p style={{ textAlign: "center" }}>Товары не найдены</p>;
  }

  return null;
}
