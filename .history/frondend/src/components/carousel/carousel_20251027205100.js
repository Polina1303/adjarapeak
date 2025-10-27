import { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "antd";
import { Buy } from "../buy/buy";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./carousel.css";

const CarouselWrapper = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    background: rgba(255, 255, 255, 0.9);
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

  .arrow:hover {
    background: #fff;
    transform: translateY(-50%) scale(1.05);
  }

  .arrow.prev {
    left: 5px;
  }

  .arrow.next {
    right: 5px;
  }

  @media (max-width: 768px) {
    .arrow {
      width: 36px;
      height: 36px;
      font-size: 20px;
    }

    .arrow.prev {
      left: 0;
    }

    .arrow.next {
      right: 0;
    }
  }
`;

export const RecommendedCarousel = ({ products }) => {
  const carouselRef = useRef(null);
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
    <CarouselWrapper>
      {/* Стрелки внутри области карусели */}
      <Box className="arrow prev" onClick={() => carouselRef.current?.prev()}>
        <LeftOutlined />
      </Box>
      <Box className="arrow next" onClick={() => carouselRef.current?.next()}>
        <RightOutlined />
      </Box>

      <Carousel
        ref={carouselRef}
        arrows={false}
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
      </Carousel>
    </CarouselWrapper>
  );
};
