import { RentItems } from "../../components/rent-items";
import { useNavigate } from "react-router-dom";
import {  RENT_SKY } from "../../components/product-range/rent-sky";
import { IoIosArrowBack } from "react-icons/io";
import { CATEGORY_RENT_SKY } from "../../components/product-range/categoryRentSky";
import { Menu } from 'antd';
import { useState, useEffect } from "react";

const items = CATEGORY_RENT_SKY.map((item, index) => ({
  key: index,
  label: item.title,
  type: item.type
}));


export const RentSkyPage = () => {
  const history = useNavigate();
  const [activeType, setActiveType] = useState(0);
  const [active, setActive] = useState(RENT_SKY);

  useEffect(() => {
    const storedActiveType = localStorage.getItem('activeType');
    if (storedActiveType) {
      setActiveType(Number(storedActiveType));
    }
  }, [activeType]);

  const handleClick = (e) => {
    const newActiveType = Number(e.key);
    setActiveType(newActiveType);
    localStorage.setItem('activeType', newActiveType);
  };

  const overflowedIndicator = <span>показать больше...</span>;

  useEffect(() => {
    const currentItems =RENT_SKY.filter(item => item.type === items[activeType].type);
    setActive(currentItems.length === 0 ? RENT_SKY : currentItems);
  }, [activeType]);

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => history(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>

      <Menu
        mode="horizontal"
        selectedKeys={[`${activeType}`]} 
        items={items}
        style={{ flex: 1, minWidth: 0 }}
        onClick={handleClick}
        overflowedIndicator={overflowedIndicator}
      />

      <div className="home-page__container">
        <div>
          <div className="title" id="home-page-rent">
            ПРОКАТ ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ
          </div>
          <div className="home-page-product">
            {active.map((rent) => (
              <RentItems key={rent.id} rent={rent} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};