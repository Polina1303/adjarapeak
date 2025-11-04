import { useLocation, useNavigate } from "react-router-dom";
import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import { Outlet } from "react-router-dom";

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
export const TourismCampingPage = ({ category }) => {
  const navigate = useNavigate();

  // если category — массив разделов (главная /sale)
  const cards = Array.isArray(category) ? category : category.types || [];

  if (!cards.length) return <p>Нет доступных товаров в этом разделе</p>;

  return (
    <div className="home-page-product">
      {cards.map(({ title, img, category: cat, path }) => {
        const segment = cat || path || title.toLowerCase().replace(/\s+/g, "-");
        const routePath = path
          ? `/sale/${path}/${segment}`
          : `/sale/${segment}`;

        return (
          <div className="category-product" key={segment}>
            <Card
              sx={{
                boxShadow: 3,
                height: "100%",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
              onClick={() => navigate(routePath)}
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
      }
