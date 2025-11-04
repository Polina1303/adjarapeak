import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Skeleton,
} from "@mui/material";

export const CategoryCard = ({ title, img, routePath }) => {
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
            {!loaded && <Skeleton variant="rectangular" />}
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
