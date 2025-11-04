import { useEffect } from "react";
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
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, [products]);

  if (!products || products.length === 0) return null;

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Autoplay, Mousewheel, Pagination]}
      navigation
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
      className="my-swiper"
    >
      {products.map((item) => (
        <SwiperSlide key={item.id}>
          <ProductItems product={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
