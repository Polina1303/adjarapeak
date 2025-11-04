import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";

export const TourismCampingPage = ({ category }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Определяем, на каком уровне мы сейчас
  const isRootLevel =
    location.pathname === "/sale" ||
    location.pathname === `/sale/${category.path}`;

  // Если категория — массив (все разделы), берём её как список карточек
  const cards = Array.isArray(category)
    ? category
    : category.types || category.subcategories || [];

  // Если есть подкатегории — рендерим карточки
  if (isRootLevel && cards.length) {
    return (
      <div className="home-page-product">
        {cards.map(({ title, img, category: cat, path }) => {
          const segment = cat || path;
          const routePath = category.path
            ? `/sale/${category.path}/${segment}`
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
            </div>
          );
        })}
      </div>
    );
  }

  // Если мы уже в подкатегории — показываем дочерний Outlet
  return <Outlet />;
};
