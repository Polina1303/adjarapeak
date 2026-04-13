import { useRouter } from "next/router";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./routes.module.css";

export const Routes = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const { ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const handleClickLake = () => {
    router.push("/lake-route");
  };
  const handleClickErge = () => {
    router.push("/erge-route");
  };
  const handleClickGarden = () => {
    router.push("/garden-route");
  };

  const routes = [
    {
      id: 1,
      href: "/lake-route",
      image: "/image/lake1.jpg",
      title: t("routes.items.lake"),
      onClick: handleClickLake,
    },
    {
      id: 2,
      href: "/erge-route",
      image: "/image/erge1.jpg",
      title: t("routes.items.erge"),
      onClick: handleClickErge,
    },
    {
      id: 3,
      href: "/garden-route",
      image: "/image/garden1.jpg",
      title: t("routes.items.garden"),
      onClick: handleClickGarden,
    },
  ];
  return (
    <div>
      <h2 className={styles["routes-title"]}>{t("routes.title")}</h2>

      <Swiper
        modules={[Navigation, Mousewheel, Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        allowTouchMove
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={false}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        }}
        className={styles["my-swiper"]}
      >
        {routes.map((route) => (
          <SwiperSlide key={route.id}>
            <div
              className={styles["routes-cover-block"]}
              onClick={route.onClick}
            >
              <Link
                href={route.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div className={styles["slide-img"]}>
                  <Image
                    src={route.image}
                    alt={route.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={false}
                  />
                </div>
                <div className={styles["routes-cover-title"]}>
                  <p>{route.title}</p>
                  <p className={styles["routes-item-page"]}>
                    {t("routes.explore")}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className={styles["routes-cover-summary"]}>
        {t("routes.summary")}
      </p>
    </div>
  );
};
