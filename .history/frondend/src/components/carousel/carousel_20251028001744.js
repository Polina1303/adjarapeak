import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
  Pagination, // ← ДОБАВИТЬ модуль пагинации
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/pagination"; // ← ДОБАВИТЬ CSS для пагинации
import { Buy } from "../buy/buy";
import "./carousel.css";

export const RecommendedCarousel = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Autoplay, Mousewheel, Pagination]} // ← Добавить Pagination
      spaceBetween={10}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      // Пагинация - точки внизу
      pagination={{
        clickable: true,
        dynamicBullets: true, // Точки меняют размер
      }}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        eventsTarget: "container",
      }}
      allowTouchMove={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
          pagination: {
            enabled: true,
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
          pagination: {
            enabled: true,
          },
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          pagination: {
            enabled: false,
          },
        },
      }}
      className="my-swiper"
    >
      {products.map((item) => (
        <SwiperSlide key={item.id}>
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
