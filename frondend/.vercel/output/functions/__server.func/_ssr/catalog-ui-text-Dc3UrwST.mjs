function ruProductWord(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return "товар";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "товара";
  return "товаров";
}
function enProductWord(count) {
  return count === 1 ? "item" : "items";
}
const CATALOG_UI_TEXT = {
  RU: {
    searchShop: "Поиск по магазину",
    searchRental: "Поиск по прокату",
    searchSection: "Поиск в разделе",
    sort: "Сортировка",
    sortOptions: {
      default: "По умолчанию",
      newest: "Новинки",
      "price-asc": "Цена: по возрастанию",
      "price-desc": "Цена: по убыванию"
    },
    inStock: "В наличии",
    available: "Доступно",
    clearSearch: "Очистить поиск",
    filters: "Фильтры",
    searchingProducts: "Ищем товары...",
    showMore: "Показать ещё",
    emptyProducts: "Нет товаров по выбранным параметрам.",
    emptyRentals: "Нет позиций проката по выбранным параметрам.",
    itemCount: (count) => `${count} ${ruProductWord(count)}`,
    searchAriaLabel: (placeholder, count) => `${placeholder}, сейчас ${count} ${ruProductWord(count)}`,
    searchingQuery: (query) => `Ищем товары по запросу «${query}»`,
    searchResults: (count, query) => `${count} ${ruProductWord(count)} по запросу «${query}»`,
    shownOf: (shown, total) => `Показано ${shown} из ${total}`
  },
  EN: {
    searchShop: "Search the shop",
    searchRental: "Search rentals",
    searchSection: "Search this section",
    sort: "Sort",
    sortOptions: {
      default: "Default",
      newest: "Newest",
      "price-asc": "Price: low to high",
      "price-desc": "Price: high to low"
    },
    inStock: "In stock",
    available: "Available",
    clearSearch: "Clear search",
    filters: "Filters",
    searchingProducts: "Searching products...",
    showMore: "Show more",
    emptyProducts: "No products match the selected filters.",
    emptyRentals: "No rental items match the selected filters.",
    itemCount: (count) => `${count} ${enProductWord(count)}`,
    searchAriaLabel: (placeholder, count) => `${placeholder}, currently ${count} ${enProductWord(count)}`,
    searchingQuery: (query) => `Searching products for "${query}"`,
    searchResults: (count, query) => `${count} ${enProductWord(count)} for "${query}"`,
    shownOf: (shown, total) => `Shown ${shown} of ${total}`
  },
  GE: {
    searchShop: "ძებნა მაღაზიაში",
    searchRental: "ქირაობის ძებნა",
    searchSection: "ძებნა სექციაში",
    sort: "სორტირება",
    sortOptions: {
      default: "ნაგულისხმევი",
      newest: "სიახლეები",
      "price-asc": "ფასი: ზრდადობით",
      "price-desc": "ფასი: კლებადობით"
    },
    inStock: "მარაგშია",
    available: "ხელმისაწვდომია",
    clearSearch: "ძებნის გასუფთავება",
    filters: "ფილტრები",
    searchingProducts: "პროდუქტების ძებნა...",
    showMore: "მეტის ჩვენება",
    emptyProducts: "არჩეული პარამეტრებით პროდუქტები არ მოიძებნა.",
    emptyRentals: "არჩეული პარამეტრებით ქირაობის პოზიციები არ მოიძებნა.",
    itemCount: (count) => `${count} პროდუქტი`,
    searchAriaLabel: (placeholder, count) => `${placeholder}, ამჟამად ${count} პროდუქტი`,
    searchingQuery: (query) => `პროდუქტების ძებნა მოთხოვნით "${query}"`,
    searchResults: (count, query) => `${count} პროდუქტი მოთხოვნით "${query}"`,
    shownOf: (shown, total) => `ნაჩვენებია ${shown} ${total}-დან`
  }
};
export {
  CATALOG_UI_TEXT as C
};
