import { RentItems } from "../../components/rent-items";
import { useRouter } from "next/router";
import { RENT_SKY } from "../../components/product-range/rent-sky";
import { IoIosArrowBack } from "react-icons/io";
import { CATEGORY_RENT_SKY } from "../../components/product-range/categoryRentSky";
import { Menu } from "antd";
import { useState, useEffect } from "react";
import styles from "../../components/sale-page/sale-page.module.css";
const items = CATEGORY_RENT_SKY.map((item, index) => ({
  key: index,
  label: item.title,
  type: item.type,
}));

export const RentSkyPage = () => {
  const router = useRouter();
  const [activeType, setActiveType] = useState(0);
  const [active, setActive] = useState(RENT_SKY);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("searchQuery") : "";
    if (saved) setSearchQuery(saved);
  }, []);

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
    setSearchQuery("");
    localStorage.removeItem("searchQuery", searchQuery);
  };

  const overflowedIndicator = <span>показать больше...</span>;
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
  };

  useEffect(() => {
    const currentItems = RENT_SKY.filter(
      (item) => item.type === items[activeType].type
    );
    setActive(currentItems.length === 0 ? RENT_SKY : currentItems);
  }, [activeType]);

  useEffect(() => {
    const filteredItems = RENT_SKY.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) &&
        (items[activeType]?.type ? item.type === items[activeType].type : true)
    );
    setActive(filteredItems);
  }, [searchQuery, activeType]);

  return (
    <>
      <div className={styles["back-button-cover"]}>
        <button className={styles["back-button"]} onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <div className={styles["search-container"]} style={{ margin: "20px 0" }}>
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
