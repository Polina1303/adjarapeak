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
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState(() => {
    const savedActiveType = localStorage.getItem("activeType");
    return savedActiveType ? Number(savedActiveType) : 0;
  });
  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem("searchQuery") || "";
  });
  const [active, setActive] = useState(RENT);

  useEffect(() => {
    const currentItems = RENT.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (items[activeType]?.type ? item.type === items[activeType].type : true)
    );
    setActive(currentItems);
  }, [searchQuery, activeType]);

  const handleClick = (e) => {
    const newActiveType = Number(e.key);
    setActiveType(newActiveType);
    localStorage.setItem("activeType", newActiveType);
    setSearchQuery("");
    localStorage.removeItem("searchQuery", searchQuery);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
  };

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => navigate(-1)}>
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
          overflowedIndicator={<span>показать больше...</span>}
        />

        <input
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={handleSearchChange}
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
            ПРОКАТ ТУРИСТИЧЕСКОГО СНАРЯЖЕНИЯ
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
