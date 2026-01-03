import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../../components/carousel/carousel.module.css";

export const SwiperPhoto = ({ photos = [] }) => {
  return (
    <div className={styles["carousel-container"]}>
      <Swiper
        modules={[Navigation, Mousewheel, Pagination]}
        navigation={{
          prevEl: `.${styles["swiper-button-prev"]}`,
          nextEl: `.${styles["swiper-button-next"]}`,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        allowTouchMove
        slidesPerView={4}
        spaceBetween={8}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 6 },
          600: { slidesPerView: 2, spaceBetween: 6 },
          900: { slidesPerView: 3, spaceBetween: 14 },
          1200: { slidesPerView: 4, spaceBetween: 16 },
        }}
        className={styles["my-swiper"]}
      >
        {photos.map((photo, idx) => (
          <SwiperSlide key={`${photo}-${idx}`}>
            <div className={styles["slide-img"]}>
              <Image
                src={photo}
                alt=""
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles["swiper-button-prev"]} />
      <div className={styles["swiper-button-next"]} />
    </div>
  );
};
