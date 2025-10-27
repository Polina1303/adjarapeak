import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "antd";
import { Buy } from "../buy/buy";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./carousel.css";

const StyledCarousel = styled(Carousel)`
  position: relative;

  .custom-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #de682d;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;
  }

  .custom-arrow:hover {
    background: #fff;
    transform: translateY(-50%) scale(1.05);
  }

  .prev-arrow {
    left: -10px;
  }

  .next-arrow {
    right: -10px;
  }

  @media (max-width: 768px) {
    .custom-arrow {
      width: 36px;
      height: 36px;
      font-size: 20px;
    }

    .prev-arrow {
      left: 5px;
    }

    .next-arrow {
      right: 5px;
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
  const [carouselRef, setCarouselRef] = useState(null);

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
    <Box position="relative">
      <StyledCarousel
        arrows={false} // отключаем встроенные стрелки
        infinite={false}
        dots={false}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        swipeToSlide
        ref={setCarouselRef}
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

      <Box
        className="custom-arrow next-arrow"
        onClick={() => carouselRef?.next()}
      >
        <RightOutlined />
      </Box>
    </Box>
  );
};
