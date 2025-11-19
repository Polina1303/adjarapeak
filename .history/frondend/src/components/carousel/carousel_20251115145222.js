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
import styles from "./carousel.module.css";
import { ProductItems } from "../product-items";

export const RecommendedCarousel = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className={styles["carousel-container"]}>
      <Swiper
        modules={[
          Navigation,
          Scrollbar,
          A11y,
          Autoplay,
          Mousewheel,
          Pagination,
        ]}
        navigation={{
          prevEl: styles[".swiper-button-prev"],
          nextEl: styles[".swiper-button-next"],
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        allowTouchMove={true}
        slidesPerView={4}
        spaceBetween={12}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
        className={styles["my-swiper"]}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <ProductItems product={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles[".swiper-button-prev"]}></div>
      <div className={styles[".swiper-button-next"]}></div>
    </div>
  );
};
