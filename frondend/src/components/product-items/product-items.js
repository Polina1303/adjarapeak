import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { setCurrentProduct } from "../../redux/product/reducer";
import { BsSearch } from "react-icons/bs";
import { Buy } from "../buy/buy";
import "./product-items.css";

export const ProductItems = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelClickImg = () => {
    dispatch(setCurrentProduct(product));
    navigate(`/app/${product.id}`);
  };

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <div className="product-items">
        <div ref={ref} className="product-items__details">
          <a href={`/app/${product.id}`}>
            {inView ? (
              <img
                className="product-items__img"
                src={process.env.PUBLIC_URL + "/img/" + product.img}
                alt={product.title}
              />
            ) : (
              <div className="product-items__img-unvisible"></div>
            )}

            <div className="icon-background" onClick={handelClickImg}>
              <div className="icon-search">
                <BsSearch />
              </div>
            </div>
          </a>

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
