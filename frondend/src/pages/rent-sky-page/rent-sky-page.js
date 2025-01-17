import { RentItems } from "../../components/rent-items";
import { useNavigate } from "react-router-dom";
import { RENT_SKY } from "../../components/product-range/rent-sky";
import { IoIosArrowBack } from "react-icons/io";
import { CATEGORY_RENT_SKY } from "../../components/product-range/categoryRentSky";
import { Menu } from "antd";
import { useState, useEffect } from "react";

const items = CATEGORY_RENT_SKY.map((item, index) => ({
  key: index,
  label: item.title,
  type: item.type,
}));

export const RentSkyPage = () => {
  const history = useNavigate();
  const [activeType, setActiveType] = useState(0);
  const [active, setActive] = useState(RENT_SKY);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedActiveType = localStorage.getItem("activeType");
    if (storedActiveType) {
      setActiveType(Number(storedActiveType));
    }
  }, [activeType]);

  const handleClick = (e) => {
    const newActiveType = Number(e.key);
    setActiveType(newActiveType);
    localStorage.setItem("activeType", newActiveType);
  };

  const overflowedIndicator = <span>показать больше...</span>;

  useEffect(() => {
    const currentItems = RENT_SKY.filter(
      (item) => item.type === items[activeType].type
    );
    setActive(currentItems.length === 0 ? RENT_SKY : currentItems);
  }, [activeType]);

  useEffect(() => {
    const filteredItems = RENT_SKY.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (items[activeType]?.type ? item.type === items[activeType].type : true)
    );
    setActive(filteredItems);
  }, [searchQuery, activeType]);

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => history(-1)}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <div className="search-container" style={{ margin: "20px 0" }}>
        <Menu
          mode="horizontal"
          selectedKeys={[`${activeType}`]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          onClick={handleClick}
          overflowedIndicator={overflowedIndicator}
        />

        <input
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "95%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div className="home-page__container">
        <div>
          <div className="title" id="home-page-rent">
            ПРОКАТ ГОРНОЛЫЖНОГО СНАРЯЖЕНИЯ
          </div>

          <div className="home-page-product">
            {active.length > 0 ? (
              active.map((rent) => <RentItems key={rent.id} rent={rent} />)
            ) : (
              <div className="not-found">
                <p>К сожалению, ничего не найдено.</p>

                <p>Попробуйте изменить запрос или выбрать другую категорию.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
