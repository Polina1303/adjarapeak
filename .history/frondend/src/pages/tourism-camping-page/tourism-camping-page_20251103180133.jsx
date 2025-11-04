import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Skeleton,
} from "@mui/material";

const CategoryCard = ({ title, img, routePath }) => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  return (
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
          <>
            {!loaded && <Skeleton variant="rectangular" height={140} />}
            <CardMedia
              component="img"
              sx={{
                objectFit: "cover",
                display: loaded ? "block" : "none",
              }}
              image={process.env.PUBLIC_URL + "/img/" + img}
              alt={title}
              loading="lazy"
              onLoad={() => setLoaded(true)}
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
            {title}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const TourismCampingPage = ({ category }) => {
  const location = useLocation();

  const isRootLevel =
    location.pathname === "/sale" ||
    location.pathname === `/sale/${category.path}`;

  const cards = Array.isArray(category)
    ? category
    : category.types || category.subcategories || [];

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
              <CategoryCard title={title} img={img} routePath={routePath} />
            </div>
          );
        })}
      </div>
    );
  }

  return <Outlet />;
};
