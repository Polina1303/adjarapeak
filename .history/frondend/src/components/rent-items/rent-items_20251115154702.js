import { Rent } from "../rent/rent";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { setCurrentProduct } from "../../redux/product/reducer";
import { BsSearch } from "react-icons/bs";
import styles from "./rent-items.module.css";

export const RentItems = ({ rent }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handelClickImg = () => {
    dispatch(setCurrentProduct(rent));
    router.push(`/app/${rent.id}`);
  };

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={styles["rent-items"]}>
      <div ref={ref} className={styles["rent-items__details"]}>
        <a href={`/app/${rent.id}`}>
          {inView ? (
            <img
              onClick={handelClickImg}
              className={styles["rent-items__img"]}
              fill
              src={"/img/" + rent.img}
              alt={rent.title}
            />
          ) : (
            <div className={styles["product-items__img-unvisible"]}></div>
          )}
        </a>
        <div className={styles["icon-background"]} onClick={handelClickImg}>
          <div className={styles["icon-search"]}>
            <BsSearch />
          </div>
        </div>
        <span className={styles["rent-items__title"]}>{rent.title}</span>
        <p className={styles["rent-items__desc"]}>{rent.desc}</p>
      </div>

      <Rent rent={rent} />
    </div>
  );
};
