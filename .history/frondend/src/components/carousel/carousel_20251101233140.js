import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import { Buy } from "../buy/buy";
import "./carousel.css";
import { ProductItems } from "../product-items";
import { useRef } from "react";

export const RecommendedCarousel = ({ products }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!products || products.length === 0) return null;

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{ clickable: true, dynamicBullets: true }}
        slidesPerView={4}
        spaceBetween={12}
        className="my-swiper"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItems product={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Стрелки вне Swiper */}
    </div>
  );
};
