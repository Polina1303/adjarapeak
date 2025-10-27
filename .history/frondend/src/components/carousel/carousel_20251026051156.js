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
  }

  .slick-next {
    right: -15px;
  }
`;

export const RecommendedCarousel = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <StyledCarousel
      arrows
      infinite={false}
      dots={false}
      slidesToShow={3}
      slidesToScroll={3}
    >
      {products.map((item) => (
        <Box key={item.id}>
          <Box
            className="recommended-product-card"
            sx={{ minHeight: "300px", height: "100%" }}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/" + item.img}
              alt={item.title}
              className="recommended-product-image"
              sx={{
                flexShrink: 0,
              }}
            />
            <Typography
              className="recommended-product-title"
              sx={{
                fontSize: "14px",
                fontFamily: "RoadRadio-Thin",

                flexGrow: 1,

                minHeight: "40px",
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
