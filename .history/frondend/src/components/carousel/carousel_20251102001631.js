// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Scrollbar,
//   A11y,
//   Autoplay,
//   Mousewheel,
//   Pagination,
// } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import "swiper/css/mousewheel";
// import "swiper/css/pagination";
// import "./carousel.css";
// import { ProductItems } from "../product-items";

// export const RecommendedCarousel = ({ products }) => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   if (!products || products.length === 0) return null;

//   return (
//     <div className="carousel-container">
//       <Swiper
//         modules={[
//           Navigation,
//           Scrollbar,
//           A11y,
//           Autoplay,
//           Mousewheel,
//           Pagination,
//         ]}
//         // navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//         navigation
//         pagination={{ clickable: true, dynamicBullets: true }}
//         mousewheel={{ forceToAxis: true, sensitivity: 1 }}
//         // onBeforeInit={(swiper) => {
//         //   swiper.params.navigation.prevEl = prevRef.current;
//         //   swiper.params.navigation.nextEl = nextRef.current;
//         // }}
//         allowTouchMove={true}
//         slidesPerView={4}
//         spaceBetween={12}
//         breakpoints={{
//           0: {
//             slidesPerView: 2,
//             spaceBetween: 6,
//           },
//           600: {
//             slidesPerView: 2,
//             spaceBetween: 6,
//           },
//           900: {
//             slidesPerView: 3,
//             spaceBetween: 14,
//           },
//           1200: {
//             slidesPerView: 4,
//             spaceBetween: 16,
//           },
//         }}
//         className="my-swiper"
//       >
//         {products.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div>
//               <ProductItems product={item} />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {/* <div ref={prevRef} className="swiper-button-prev"></div>
//       <div ref={nextRef} className="swiper-button-next"></div> */}
//     </div>
//   );
// };

/*import { Box, Typography } from "@mui/material";
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
      <div ref={prevRef} className="swiper-button-prev"></div>
      <div ref={nextRef} className="swiper-button-next"></div>
    </div>
  );
};
 */
