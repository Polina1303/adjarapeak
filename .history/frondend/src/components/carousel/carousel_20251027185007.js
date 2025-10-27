import { Box, Typography, useThemeб useMediaQuery } from "@mui/material";
import { Carousel } from "antd";
import { Buy } from "../buy/buy";
import styled from "styled-components";
import "./carousel.css";

const StyledCarousel = styled(Carousel)`
  .slick-prev,
  .slick-next {
    color: #de682d;
    font-size: 35px;
    width: 60px;
    height: 60px;
  }

  .slick-next {
    right: -15px;
  }
`;

export const RecommendedCarousel = ({ products }) => {
  if (!products || products.length === 0) return null;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledCarousel
      arrows
      infinite={false}
      slidesToShow={isMobile ? 1 : 3}
      slidesToScroll={isMobile ? 1 : 3}
      dots={isMobile}
    >
      {products.map((item) => (
        <Box key={item.id}>
          <Box className="recommended-product-card">
            <img
              src={process.env.PUBLIC_URL + "/img/" + item.img}
              alt={item.title}
              className="recommended-product-image"
            />
            <Typography
              className="recommended-product-title"
              sx={{
                fontSize: "14px",
                fontFamily: "RoadRadio-Thin",
              }}
            >
              {item.title}
            </Typography>
            <Buy product={item} page={true} />
          </Box>
        </Box>
      ))}
    </StyledCarousel>
  );
};
