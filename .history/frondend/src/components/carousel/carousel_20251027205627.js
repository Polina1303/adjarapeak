import { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { Buy } from "../buy/buy";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const Wrapper = styled(Box)`
  position: relative;

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #de682d;
    font-size: 22px;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
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
      font-size: 18px;
    }
    .arrow.prev {
      left: 1px;
    }
    .arrow.next {
      right: 1px;
    }
  }
`;

export const RecommendedCarousel = ({ products }) => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!products || products.length === 0) return null;

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    swipeToSlide: true,
    arrows: false, // кастомные стрелки
  };

  return (
    <Wrapper>
      <Box className="arrow prev" onClick={() => sliderRef.current.slickPrev()}>
        <LeftOutlined />
      </Box>
      <Box className="arrow next" onClick={() => sliderRef.current.slickNext()}>
        <RightOutlined />
      </Box>

      <Slider ref={sliderRef} {...settings}>
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
      </Slider>
    </Wrapper>
  );
};
