import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
  Pagination,
} from "swiper/modules";
import Image from "next/image";
import styles from "../../components/carousel/carousel.module.css";
export const SwiperPhoto = ({ photos }) => {
  return (
    <>
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
            prevEl: `.${styles["swiper-button-prev"]}`,
            nextEl: `.${styles["swiper-button-next"]}`,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          mousewheel={{ forceToAxis: true, sensitivity: 1 }}
          allowTouchMove={true}
          slidesPerView={4}
          spaceBetween={8}
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
          {photos.map((photo) => (
            <SwiperSlide key={photo}>
              <div
                style={{ position: "relative", width: "100%", height: "320px" }}
              >
                <Image
                  src={photo}
                  alt=""
                  fill
                  //   style={{ objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles["swiper-button-prev"]}></div>
        <div className={styles["swiper-button-next"]}></div>
      </div>
    </>
  );
};
