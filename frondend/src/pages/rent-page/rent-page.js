import { RentItems } from "../../components/rent-items";
import { useNavigate } from "react-router-dom";
import { RENT } from "../../components/product-range/rent";
import { IoIosArrowBack } from "react-icons/io";
import { CATEGORY_RENT } from "../../components/product-range/categoryRent";
import { Menu } from "antd";
import { useState, useEffect } from "react";

const items = CATEGORY_RENT.map((item, index) => ({
  key: index,
  label: item.title,
  type: item.type,
}));

export const RentPage = () => {
  const history = useNavigate();
  const [activeType, setActiveType] = useState(0);
  const [active, setActive] = useState(RENT);

  useEffect(() => {
    const storedActiveType = localStorage.getItem("activeType");
    if (storedActiveType) {
      setActiveType(Number(storedActiveType));
    }
  }, []);

  const handleClick = (e) => {
    const newActiveType = Number(e.key);
    setActiveType(newActiveType);
    localStorage.setItem("activeType", newActiveType);
  };

  const overflowedIndicator = <span>показать больше...</span>;

  useEffect(() => {
    const currentItems = RENT.filter(
      (item) => item.type === items[activeType].type
    );
    setActive(currentItems.length === 0 ? RENT : currentItems);
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
            ПРОКАТ ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ
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
