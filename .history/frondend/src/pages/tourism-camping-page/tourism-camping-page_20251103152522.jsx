import { useNavigate, Outlet } from "react-router-dom";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";

export const TourismCampingPage = ({ category }) => {
  const navigate = useNavigate();

  // Если category — массив (главные разделы), показываем их как карточки
  const cards = Array.isArray(category)
    ? category
    : category.types || category.subcategories || [];

  return (
    <div className="home-page-product">
      {cards.map((item) => {
        // Для types используем title и category, для subcategories — subcategory
        const title = item.title;
        const img = item.img;
        const segment = item.category || item.subcategory || item.path;

        // Формируем путь: если есть category.path (раздел), добавляем его
        const path = category.path
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
              onClick={() => navigate(path)}
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
