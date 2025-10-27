import { Box, Typography } from "@mui/material";
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
    z-index: 2;
  }

  .slick-next {
    right: -15px;
  }

  .slick-prev {
    left: -15px;
  }

  @media (max-width: 768px) {
    .slick-prev,
    .slick-next {
      font-size: 28px;
      width: 40px;
      height: 40px;
    }
  }
`;

const responsiveSettings = [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true, // ✅ стрелки включены
      infinite: false,
    },
  },
];

export const RecommendedCarousel = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <StyledCarousel
      arrows
      infinite={false}
      dots={false}
      slidesToShow={3}
      slidesToScroll={3}
      responsive={responsiveSettings}
      swipeToSlide // ✅ можно свайпать на мобильных
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
