import { useNavigate } from "react-router-dom";
import { CATEGORY_PRODUCT } from "../../components/product-range/categoryProduct";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";

export const TourismCampingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page-product">
      {CATEGORY_PRODUCT[0].types.map(({ title, img, category }) => (
        <div className="category-product">
          <Card
            sx={{
              boxShadow: 3,
              height: "100%",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "scale(1.03)" },
            }}
            onClick={() => navigate(`${CATEGORY_PRODUCT[0].path}/${category}`)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{
                  objectFit: "cover",
                }}
                image={process.env.PUBLIC_URL + "/img/" + img}
                alt={title}
              />
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
      ))}
    </div>
  );
};
