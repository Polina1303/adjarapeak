import { useState } from "react";
import { ProductItems } from "../../components/product-items";
import { useNavigate } from "react-router-dom";
import { RentItems } from "../../components/rent-items";
import { PRODUCT } from "../../components/product-range/product";
import { RENT } from "../../components/product-range/rent";
import "./home-page.css";
import { Slider } from "../../components/slider";

export const HomePage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(PRODUCT);
  const [visibleRent, setVisibleRent] = useState(true);
  const [visibleProduct, setVisibleProduct] = useState(true);

  const showAll = () => {
    setFilter(PRODUCT);
    setVisibleRent(true);
    setVisibleProduct(true);
  };

  const filterProduct = (category) => {
    setVisibleProduct(true);
    const upDateList = PRODUCT.filter((item) => item.category === category);
    setFilter(upDateList);
    setVisibleRent(false);
  };

  const filterRent = () => {
    setVisibleRent(true);
    setVisibleProduct(false);
  };

  return (
    <div className="home-page__container">
      <Slider />
      <div className="categories">
        <button className="categories-item" onClick={() => showAll(PRODUCT)}>
          Всё
        </button>
        <button className="categories-item" onClick={() => filterRent()}>
          Аренда снаряжения
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("tent")}
        >
          Палатки
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("sleeping bag")}
        >
          Спальные мешки
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("backpack")}
        >
          Рюкзаки
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("lantern")}
        >
          Фонари
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("gas/burner")}
        >
          Газ и горелки
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("mat")}
        >
          Коврики / карематы
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("trekking sticks")}
        >
          Треккинговые палки
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("dishes")}
        >
          Посуда
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("thermos")}
        >
          Термосы/кружки
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("knife")}
        >
          Ножи
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("chair")}
        >
          Стулья
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("buff")}
        >
          Бафф/балаклава
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("raincoat")}
        >
          Дождевики и чехлы
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("sunglasses")}
        >
          Солнцезащитные очки
        </button>
        <button
          className="categories-item"
          onClick={() => filterProduct("accessories")}
        >
          Аксессуары
        </button>
      </div>
      {visibleProduct && (
        <div>
          <div className="title" id="home-page-buy">
            ПРОДАЖА
          </div>
          <div className="home-page-product">
            {filter.map((product) => (
              <ProductItems key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {visibleRent && (
        <div>
          <div className="title" id="home-page-rent">
            АРЕНДА
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="button-rules" onClick={() => navigate("/rules")}>
              ОЗНАКОМИТЬСЯ С ПРАВИЛАМИ ПРОКАТА
            </button>
          </div>
          <div className="home-page-product">
            {RENT.map((rent) => (
              <RentItems key={rent.id} rent={rent} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
