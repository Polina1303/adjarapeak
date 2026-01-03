import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setCurrentProduct } from "../../redux/product/reducer";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import { Buy } from "../buy/buy";
import styles from "./product-items.module.css";
import Link from "next/link";

export const ProductItems = ({ product }) => {
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const handelClickImg = () => {
    dispatch(setCurrentProduct(product));
    router.push(`/app/${product.id}`);
  };

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const href = `/app/${product.id}`;

  return (
    <>
      <div className={styles["product-items"]}>
        <div className={styles["product-items__details"]}>
          <div className={styles["product-items__img-container"]}>
            <Link href={href || "#"} passHref legacyBehavior>
              <a
                onClick={handelClickImg}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  className={styles["product-items__img"]}
                  src={"/img/" + product.img}
                  alt={product.title}
                  width={300}
                  height={300}
                  onLoadingComplete={() => setLoaded(true)}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "90%",
                    maxHeight: "180px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto",
                  }}
                  unoptimized={true}
                />
              </a>
            </Link>
          </div>

          <span className={styles["product-items__title"]}>
            {product.title.toUpperCase()}
          </span>

          <p className={styles["product-items__desc"]}>{product.desc}</p>

          <div className={styles["product-items__button-container"]}>
            <Buy product={product} />
          </div>
        </div>
      </div>
    </>
  );
};
