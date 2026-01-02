import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "../../redux/product/reducer";
import Image from "next/image";
import { Buy } from "../buy/buy";
import { Skeleton } from "@mui/material";
import styles from "./product-items.module.css";
import Link from "next/link";

export const ProductItems = ({ product, href }) => {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClickImg = (e) => {
    e.preventDefault();
    dispatch(setCurrentProduct(product));

    if (router.isReady && href) {
      router.push(href);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles["product-items"]}>
      <div className={styles["product-items__details"]}>
        <Link href={href || "#"} passHref legacyBehavior>
          <a
            onClick={handleClickImg}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Image
              className={styles["product-items__img"]}
              src={"/img/" + product.img}
              alt={product.title}
              width={300}
              height={300}
              onLoadingComplete={() => setLoaded(true)}
            />

            <span className={styles["product-items__title"]}>
              {product.title.toUpperCase()}
            </span>
          </a>
        </Link>

        <p className={styles["product-items__desc"]}>{product.desc}</p>
        <Buy product={product} />
      </div>
    </div>
  );
};
