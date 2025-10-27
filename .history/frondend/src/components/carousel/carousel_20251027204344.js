import { useState, useEffect } from "react";
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

export const RecommendedCarousel = ({ products }) => {
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth <= 768 ? 1 : 3
  );
  const [slidesToScroll, setSlidesToScroll] = useState(
    window.innerWidth <= 768 ? 1 : 3
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
        setSlidesToScroll(1);
      } else {
        setSlidesToShow(3);
        setSlidesToScroll(3);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!products || products.length === 0) return null;

  return (
    <StyledCarousel
      arrows
      infinite={false}
      dots={false}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      swipeToSlide
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
