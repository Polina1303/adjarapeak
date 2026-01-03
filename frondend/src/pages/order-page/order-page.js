import { useSelector } from "react-redux";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import { calcTotalPrice, enumerate } from "../../components/utils";
import { IoIosArrowBack } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { OrderItem } from "../../components/order-item";
import { OrderInput } from "../../components/order-input/order-input";
import { PRODUCT } from "../../components/product-range/product";
import { RENT } from "../../components/product-range/rent";
import { RENT_SKY } from "../../components/product-range/rent-sky";
import { RecommendedCarousel } from "../../components/carousel";
import styles from "./order-page.module.css";

export const OrderPage = () => {
  const router = useRouter();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const getRecommendedProducts = useCallback(() => {
    if (!items) return [];

    const allProducts = [...PRODUCT, ...RENT, ...RENT_SKY].filter(
      (p) => p.id !== items.id
    );

    const shuffled = allProducts.sort(() => Math.random() - 0.5);

    return shuffled.slice(0, 10);
  }, [items]);

  const recommendedProducts = getRecommendedProducts();

  if (items && items.length < 1) {
    return orderSuccess ? (
      <div>
        <p className={styles["rental-warning"]}>
          ⚠️ <strong>Бронь проката</strong> подтверждается только после
          предоплаты. <br />
          <strong>Предоплата не возвращается</strong> в случае отмены заказа
          клиентом.
        </p>
        Доставка по Батуми — 10 лари, бесплатно от 300. По Грузии — от 20 лари,
        бесплатно от 500.❗️Не распространяется на аренду.
        <br />
        <span>Cамовывоз по адресу:</span>
        <MdLocationPin size={25} color={"#de682d"} />
        <a
          href="https://www.google.com/maps/place/Adjara+Peak+%7C+Sport,+Hiking,+Ski+%26+Outdoor+Equipment+-+rental+and+sales/@41.6333505,41.614659,177m/data=!3m1!1e3!4m14!1m7!3m6!1s0x4067858105d2e915:0x5a619f050a0a9584!2sAdjara+Peak+%7C+Sport,+Hiking,+Ski+%26+Outdoor+Equipment+-+rental+and+sales!8m2!3d41.6333992!4d41.615391!16s%2Fg%2F11t40_rjr5!3m5!1s0x4067858105d2e915:0x5a619f050a0a9584!8m2!3d41.6333992!4d41.615391!16s%2Fg%2F11t40_rjr5?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
        >
          Батуми ул. Ген. Аслана Абашидзе, 19 (11:00-20:00)
        </a>
        <p>
          Благодарим за оформление заказа!
          <br /> В ближайшее время наш представитель свяжется с вами.
          <br /> С уважением, Adjara Peak.
        </p>
        <div style={{ marginTop: 10 }}>
          Всем подписчикам нашего
          <span>
            {" "}
            <a
              href="https://t.me/adjarapeak"
              target="_blank"
              rel="noreferrer"
              style={{ color: "rgba(0, 136, 204)" }}
            >
              Telegram-канала
            </a>
          </span>
          <span> предоставляется СКИДКА 5% на весь прокат снаряжения.</span>
        </div>
        <div style={{ fontFamily: "RoadRadio-Thin" }}>
          Кроме того, если вы отметите нас в социальных сетях, мы добавим еще 5%
          кэшбэка от суммы вашего заказа. Покажите подписку на своём телефоне
          при выдаче снаряжения. Кэшбэк возвращается, если у вас открытый
          аккаунт и отметка кликабельна.
        </div>
        <br />
      </div>
    ) : (
      <h1 style={{ marginTop: 100 }}>Ваша корзина пуста!</h1>
    );
  }

  return (
    <div className={styles["order-page"]}>
      <button className={styles["back-button"]} onClick={() => router.back()}>
        <IoIosArrowBack size={"25px"} /> Назад
      </button>

      <div className={styles["order-page__left"]}>
        {items && items.map((item) => <OrderItem key={item.id} item={item} />)}
      </div>
      <div className={styles["order-page__right"]}>
        <div className={styles["order-page__totalprice"]}>
          <h4>
            {items.length}
            {enumerate(items && items.length, [
              ` товар `,
              ` товара `,
              ` товаров `,
            ])}
            на сумму {calcTotalPrice(items)}.00₾
          </h4>

          <OrderInput setOrderSuccess={setOrderSuccess} items={items} />
        </div>
      </div>
      {/* <Typography
        variant="h5"
        component="h3"
        className={styles["product-related-title"]}
        sx={{
          fontFamily: "RoadRadio-Bold, sans-serif",
          marginBottom: "10px",
        }}
      >
        С этим товаром покупают
      </Typography>
      <RecommendedCarousel products={recommendedProducts} /> */}
    </div>
  );
};
