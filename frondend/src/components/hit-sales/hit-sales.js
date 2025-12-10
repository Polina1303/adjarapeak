import { useRouter } from "next/router";
import Link from "next/link";
import { PRODUCT } from "../../components/product-range/product";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setCurrentProduct } from "../../redux/product/reducer";
import { BsSearch } from "react-icons/bs";
import { Buy } from "../buy/buy";
import styles from "./hit-sales.module.css";

export const HitSales = () => {
  const discount = PRODUCT.filter((item) => item.newPrice);
  const dispatch = useDispatch();
  const router = useRouter();

  const handelClickImg = (product) => {
    dispatch(setCurrentProduct(product));
    router.push(`/product?id=${product.id}`);
  };

  // const { ref, inView } = useInView({
  //   threshold: 0,
  //   triggerOnce: true,
  // });

  return (
    <div style={{ marginTop: 50 }}>
      <h2>Новогоднии скидки до 29.12.2023</h2>

      <div className="discount-product-center">
        <div className="discount-product">
          {discount.map((product) => (
            <div className="discount-items">
              <div className="discount-items__details">
                <Link href={`/product?id=${product.id}`}>
                  {/* {inView ? ( */}
                  <img
                    className="product-items__img"
                    src={"/img/" + product.img}
                    alt={product.title}
                  />
                  {/* ) : ( */}
                  {/* <div className="product-items__img-unvisible"></div> */}
                  {/* )} */}

                  <div
                    className="icon-background"
                    onClick={() => handelClickImg(product)}
                  >
                    <div className="icon-search">
                      <BsSearch />
                    </div>
                  </div>
                </Link>

                <span className="discount__title">{product.title}</span>

                <p className="discount__desc">{product.desc}</p>
                <Buy product={product} discount={discount} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
