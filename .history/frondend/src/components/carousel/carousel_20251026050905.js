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
            style={{
              padding: "16px",
              margin: "0 8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              minHeight: "300px",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/" + item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
            <Typography
              style={{
                margin: "8px 0",
                fontSize: "14px",
                fontFamily: "RoadRadio-Thin",
                fontWeight: "300",
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
