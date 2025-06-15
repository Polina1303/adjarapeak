import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCurrentProduct } from "../../redux/product/reducer";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Buy } from "../../components/buy/buy";
import { PRODUCT } from "../../components/product-range/product";
import { SPORT_PRODUCT } from "../../components/product-range/sportProduct";
import "./product-page.css";
import { RENT } from "../../components/product-range/rent";
import { RENT_SKY } from "../../components/product-range/rent-sky";
import { SEA_PRODUCT } from "../../components/product-range/sea-product";

export const ProductPage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const product = useSelector((state) => state.products.currentProduct);
  useEffect(() => {
    const parsedProduct = PRODUCT.filter(
      (item) => item.id === Number(params.id)
    );
    const parsedSportProduct = SPORT_PRODUCT.filter(
      (item) => item.id === Number(params.id)
    );
    const parsedRent = RENT.filter((item) => item.id === Number(params.id));
    const parsedRentSky = RENT_SKY.filter(
      (item) => item.id === Number(params.id)
    );
    const parsedSea = SEA_PRODUCT.filter(
      (item) => item.id === Number(params.id)
    );

    if (parsedProduct.length > 0) {
      dispatch(setCurrentProduct(parsedProduct[0]));
    } else if (parsedRent.length > 0) {
      dispatch(setCurrentProduct(parsedRent[0]));
    } else if (parsedRentSky.length > 0) {
      dispatch(setCurrentProduct(parsedRentSky[0]));
    } else if (parsedSportProduct.length > 0) {
      dispatch(setCurrentProduct(parsedSportProduct[0]));
    } else if (parsedSea.length > 0) {
      dispatch(setCurrentProduct(parsedSea[0]));
    } else {
      history("/error");
    }
  }, [dispatch, params, history]);

  if (!product || !product.column) return null;
  const column = product.column;

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => history(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>

      <div className="product-container">
        <div className="product-page__wrapper">
          <div className="image-container">
            <img
              className="product-page__img"
              src={process.env.PUBLIC_URL + "/img/" + product.img}
              alt={product.title}
            ></img>
          </div>

          <div className="product-info-container">
            <h1 className="product-page__title">
              {product.title.toUpperCase()}
            </h1>
            <p className="product-text">{product.desc}</p>
            <p className="product-text">{product.shortly}</p>
            <ul className="column">
              {column.map((item) => (
                <li className="column__list" key={item}>
                  <span> {item}</span>
                </li>
              ))}
            </ul>

            <b className="product-page__day">{product.day}</b>
            <div className="cover-count-price">
              <div className="product-page__price__buy">
                <div className="buttom-buy">
                  <Buy product={product} page={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
