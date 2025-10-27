import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
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

  @media (max-width: 768px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`;

export const RecommendedCarousel = ({ products }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // до 600px
  const isTablet = useMediaQuery(theme.breakpoints.down("md")); // до 900px

  if (!products || products.length === 0) return null;

  const getSlidesToShow = () => {
    if (isMobile) return 1; // 1 слайд на мобилках
    if (isTablet) return 2; // 2 слайда на планшетах
    return 3; // 3 слайда на десктопе
  };

  const slidesToShow = getSlidesToShow();

  return (
    <StyledCarousel
      arrows={!isMobile}
      dots={isMobile}
      infinite={false}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToShow}
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
