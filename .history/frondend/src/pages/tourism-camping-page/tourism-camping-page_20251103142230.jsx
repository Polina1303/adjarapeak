import { useNavigate, Outlet } from "react-router-dom";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";

export const TourismCampingPage = ({ category }) => {
  const navigate = useNavigate();

  // На этом уровне есть либо types (тип товара), либо subcategories
  const cards = category.types || category.subcategories || [];

  return (
    <div className="home-page-product">
      {cards.map(({ title, img, category: cat, subcategory }) => {
        const segment = cat || subcategory;

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
