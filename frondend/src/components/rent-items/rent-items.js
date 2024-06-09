import { Rent } from "../rent/rent";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { setCurrentProduct } from "../../redux/product/reducer";
import { BsSearch } from "react-icons/bs";
import "./rent-items.css";

export const RentItems = ({ rent }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelClickImg = () => {
    dispatch(setCurrentProduct(rent));
    navigate(`/app/${rent.id}`);
  };

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

 

  return (
    <div className="rent-items">
      <div ref={ref} className="rent-items__details">
        <a href={`/app/${rent.id}`}>
          {inView ? (
            <img
              onClick={handelClickImg}
              className="rent-items__img"
              src={process.env.PUBLIC_URL + "/img/" + rent.img}
              alt={rent.title}
            />
          ) : (
            <div className="product-items__img-unvisible"></div>
          )}
        </a>
        <div className="icon-background" onClick={handelClickImg}>
          <div className="icon-search">
            <BsSearch />
          </div>
        </div>
        <span className="rent-items__title">{rent.title}</span>
        <p className="rent-items__desc">{rent.desc}</p>
        <b className="product-items__price">{rent.price}₾-сутки</b>

        <Rent rent={rent} />
      </div>
    </div>
  );
};
