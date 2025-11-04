// import { useLocation, Outlet, useNavigate } from "react-router-dom";
// import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
// import { useState } from "react";
// import { PRODUCT } from "../../components/product-range/product";
// import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";

// export const SaleCategoryPage = ({ category }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const segments = location.pathname.split("/").filter(Boolean);
//   const sectionPath = segments[1];
//   const currentCategory = segments[2];

//   const section =
//     CATEGORY_PRODUCT.find((s) => s.path === sectionPath) || category;

//   if (!currentCategory && section?.types) {
//     return (
//       <div className="home-page-product">
//         {section.types.map((type) => {
//           const routePath = `/sale/${section.path}/${type.category}`;
//           return (
//             <div
//               key={type.category}
//               className="category-product"
//               onClick={() => navigate(routePath)}
//               style={{ cursor: "pointer" }}
//             >
//               <Card
//                 sx={{
//                   boxShadow: 3,
//                   height: "100%",
//                   overflow: "hidden",
//                   transition: "transform 0.2s ease",
//                   "&:hover": { transform: "scale(1.03)" },
//                 }}
//               >
//                 <CardActionArea>
//                   {type.img && (
//                     <CardMedia
//                       component="img"
//                       sx={{ objectFit: "cover" }}
//                       image={process.env.PUBLIC_URL + "/img/" + type.img}
//                       alt={type.title}
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
//                       {type.title}
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

//   if (currentCategory) {
//     const filteredProducts = PRODUCT.filter(
//       (p) => p.category === currentCategory
//     );

//     if (!filteredProducts.length)
//       return <p style={{ textAlign: "center" }}>Товары не найдены</p>;

//     return (
//       <div className="home-page-product">
//         {filteredProducts.map((product) => (
//           <div className="category-product" key={product.id}>
//             <Card
//               sx={{
//                 boxShadow: 3,
//                 height: "100%",
//                 overflow: "hidden",
//                 cursor: "pointer",
//                 transition: "transform 0.2s ease",
//                 "&:hover": { transform: "scale(1.03)" },
//               }}
//             >
//               <CardActionArea>
//                 {product.img && (
//                   <CardMedia
//                     component="img"
//                     sx={{ objectFit: "cover" }}
//                     image={process.env.PUBLIC_URL + "/img/" + product.img}
//                     alt={product.title}
//                   />
//                 )}
//                 <CardContent
//                   sx={{
//                     textAlign: "center",
//                     p: 1.5,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <p
//                     style={{
//                       fontFamily: "RoadRadio-Thin, sans-serif",
//                       fontSize: "14px",
//                       fontWeight: 700,
//                       margin: 0,
//                     }}
//                   >
//                     {product.title}
//                   </p>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return <Outlet />;
// };
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Skeleton,
} from "@mui/material";
import { useState } from "react";
import { PRODUCT } from "../../components/product-range/product";
import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";

export const SaleCategoryPage = ({ category }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loadedIds, setLoadedIds] = useState([]);

  const segments = location.pathname.split("/").filter(Boolean);
  const sectionPath = segments[1];
  const currentCategory = segments[2];

  const section =
    CATEGORY_PRODUCT.find((s) => s.path === sectionPath) || category;

  if (!currentCategory && section?.types) {
    return (
      <div className="home-page-product">
        {section.types.map((type) => {
          const routePath = `/sale/${section.path}/${type.category}`;
          const isLoaded = loadedIds.includes(type.category);

          return (
            <div
              key={type.category}
              className="category-product"
              onClick={() => navigate(routePath)}
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
                  {type.img && (
                    <CardMedia
                      component="img"
                      sx={{
                        objectFit: "cover",
                        display: isLoaded ? "block" : "none",
                      }}
                      image={process.env.PUBLIC_URL + "/img/" + type.img}
                      alt={type.title}
                      onLoad={() =>
                        setLoadedIds((prev) => [...prev, type.category])
                      }
                    />
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
                      {type.title}
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
  if (currentCategory) {
    const filteredProducts = PRODUCT.filter(
      (p) => p.category === currentCategory
    );

    if (!filteredProducts.length)
      return <p style={{ textAlign: "center" }}>Товары не найдены</p>;

    return (
      <div className="home-page-product">
        {filteredProducts.map((product) => {
          const isLoaded = loadedIds.includes(product.id);
          return (
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
                  {!isLoaded && <Skeleton variant="rectangular" height={250} />}
                  {product.img && (
                    <CardMedia
                      component="img"
                      sx={{
                        objectFit: "cover",
                        display: isLoaded ? "block" : "none",
                      }}
                      image={process.env.PUBLIC_URL + "/img/" + product.img}
                      alt={product.title}
                      onLoad={() =>
                        setLoadedIds((prev) => [...prev, product.id])
                      }
                    />
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

  return <Outlet />;
};
