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
    <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>
  </Swiper>
</div>;
