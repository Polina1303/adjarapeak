import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setCurrentProduct } from "../../redux/product/reducer";
import { BsSearch } from "react-icons/bs";
import { Buy } from "../buy/buy";
import styles from "./product-items.module.css";

export const ProductItems = ({ product }) => {
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const handelClickImg = () => {
    dispatch(setCurrentProduct(product));
    router.push(`/product?id=${product.id}`);
  };

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="product-items">
        <div ref={ref} className="product-items__details">
          <img
            className="product-items__img"
            src={"/img/" + product.img}
            alt={product.title}
            loading="lazy"
          />

          <div className="icon-background" onClick={handelClickImg}>
            <div className="icon-search">
              <BsSearch />
            </div>
          </div>

          <span className="product-items__title">
            {product.title.toUpperCase()}
          </span>

          <p className="product-items__desc">{product.desc}</p>
          <Buy product={product} />
        </div>
      </div>
    </>
  );
};
