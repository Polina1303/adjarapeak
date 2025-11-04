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

export const RecommendedCarousel = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="swiper-wrapper-outer">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Mousewheel]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
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
    </div>
  );
};
