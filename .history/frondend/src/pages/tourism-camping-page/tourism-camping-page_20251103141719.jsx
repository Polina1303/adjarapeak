// import { useLocation, useNavigate } from "react-router-dom";
// import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";
// import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
// import { Outlet } from "react-router-dom";

// export const TourismCampingPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   return (
//     <div className="home-page-product">
//       {location.pathname === CATEGORY_PRODUCT[0].path ||
//       location.pathname === "/sale" ? (
//         CATEGORY_PRODUCT[0].types.map(({ title, img, category }) => (
//           <div className="category-product">
//             <Card
//               sx={{
//                 boxShadow: 3,
//                 height: "100%",
//                 overflow: "hidden",
//                 cursor: "pointer",
//                 transition: "transform 0.2s ease",
//                 "&:hover": { transform: "scale(1.03)" },
//               }}
//               onClick={() =>
//                 navigate(`${CATEGORY_PRODUCT[0].path}/${category}`)
//               }
//             >
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   sx={{
//                     objectFit: "cover",
//                   }}
//                   image={process.env.PUBLIC_URL + "/img/" + img}
//                   alt={title}
//                 />
//                 <CardContent
//                   sx={{
//                     textAlign: "center",
//                     flex: 1,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     p: 1.5,
//                   }}
//                 >
//                   <p
//                     style={{
//                       fontFamily: "RoadRadio-Thin, sans-serif",
//                       fontSize: "14px",
//                       fontWeight: "700",
//                     }}
//                   >
//                     {title}
//                   </p>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </div>
//         ))
//       ) : (
//         <Outlet />
//       )}
//     </div>
//   );
// };

import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";

export const TourismCampingPage = ({ category }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Разбиваем путь
  const segments = location.pathname.split("/").filter(Boolean);

  // Находим текущий уровень в структуре category
  let currentLevel = category;

  for (let i = 1; i < segments.length; i++) {
    const segment = segments[i];
    if (currentLevel.types) {
      const next = currentLevel.types.find((t) => t.category === segment);
      if (next) currentLevel = next;
    }
    if (currentLevel.subcategories) {
      const next = currentLevel.subcategories.find(
        (s) => s.subcategory === segment
      );
      if (next) currentLevel = next;
    }
  }

  // Рендерим карточки для текущего уровня
  const cards = currentLevel.types || currentLevel.subcategories || [];

  return (
    <div className="home-page-product">
      {cards.map(({ title, img, category, subcategory }) => {
        const path = category || subcategory;
        return (
          <div className="category-product" key={path}>
            <Card
              sx={{
                boxShadow: 3,
                height: "100%",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
              onClick={() => navigate(`${location.pathname}/${path}`)}
            >
              <CardActionArea>
                {img && (
                  <CardMedia
                    component="img"
                    sx={{ objectFit: "cover" }}
                    image={process.env.PUBLIC_URL + "/img/" + img}
                    alt={title}
                  />
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
                      fontWeight: "700",
                    }}
                  >
                    {title}
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
      <Outlet />
    </div>
  );
};
