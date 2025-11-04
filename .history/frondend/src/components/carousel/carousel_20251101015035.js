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
import { ProductItems } from "../product-items";

export const RecommendedCarousel = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Autoplay, Mousewheel, Pagination]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        eventsTarget: "container",
      }}
      allowTouchMove={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      className="my-swiper"
    >
      {products.map((item) => (
        <SwiperSlide key={item.id}>
          <ProductItems key={item.id} product={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
