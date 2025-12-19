import { ProductItems } from "../../components/product-items";
import { SEA_PRODUCT } from "../../components/product-range/sea-product";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { Menu } from "antd";
import { CATEGORY_SEA } from "../../components/product-range/categorySea";
import { useEffect, useState } from "react";

const items = CATEGORY_SEA.map((item, index) => ({
  key: index,
  label: item.title,
  type: item.type,
}));

export const SeaSalePage = () => {
  const router = useRouter();
  const [activeType, setActiveType] = useState(0);
  const [active, setActive] = useState(SEA_PRODUCT);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSearchQuery(localStorage.getItem("searchQuery") || "");
    }
  }, []);

  useEffect(() => {
    const storedActiveType = localStorage.getItem("activeTypeSale");
    if (storedActiveType) {
      setActiveType(Number(storedActiveType));
    }
  }, []);

  const overflowedIndicator = <span>показать больше...</span>;

  const handleClick = (e) => {
    const newActiveType = Number(e.key);
    setActiveType(newActiveType);
    localStorage.setItem("activeTypeSale", newActiveType);

    setSearchQuery("");
    localStorage.removeItem("searchQuery", searchQuery);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
  };

  useEffect(() => {
    const currentItems = SEA_PRODUCT.filter((item) => {
      return item.category === items[activeType].type;
    });
    setActive(currentItems.length === 0 ? SEA_PRODUCT : currentItems);
  }, [activeType]);

  useEffect(() => {
    const filteredItems = SEA_PRODUCT.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) &&
        (items[activeType]?.type
          ? item.category === items[activeType].type
          : true)
    );
    setActive(filteredItems);
  }, [searchQuery, activeType]);

  return (
    <>
      <div className="back-button-cover">
        <button className="back-button" onClick={() => router.back()}>
          <IoIosArrowBack size={"25px"} /> Назад
        </button>
      </div>
      <div className="search-container" style={{ margin: "20px 0" }}>
        <Menu
          mode="horizontal"
          selectedKeys={[`${activeType}`]}
          items={items}
          style={{ flex: 1, minWidth: 0, marginBottom: 10 }}
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
      <div className="home-page__container-product">
        <div>
          <div className="title" id="home-page-buy">
            ПРОДАЖА ТОВАРОВ ДЛЯ ВОДНЫХ РАЗВЛЕЧЕНИЙ И ПЛЯЖНОГО ОТДЫХА
          </div>
          <>
            <div className="home-page-product">
              {active.length > 0 ? (
                active.map((product) => (
                  <ProductItems key={product.id} product={product} />
                ))
              ) : (
                <div className="not-found">
                  <p>К сожалению, ничего не найдено.</p>
                  <p>
                    Попробуйте изменить запрос или выбрать другую категорию.
                  </p>
                </div>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  );
};
