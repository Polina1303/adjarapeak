import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay, Touch } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Buy } from "../buy/buy";
import "./carousel.css";

export const RecommendedCarousel = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      touchEventsTarget="container"
      simulateTouch={true}
      allowTouchMove={true}
      //   autoplay={{
      //     delay: 5000,
      //     disableOnInteraction: false,
      //   }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
          navigation: {
            enabled: true, // Явно включаем на мобилках
          },
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className="my-swiper"
    >
      {products.map((item) => (
        <SwiperSlide key={item}>
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
