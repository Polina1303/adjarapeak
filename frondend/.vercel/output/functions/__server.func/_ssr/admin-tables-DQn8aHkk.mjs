const ADMIN_TABLES = {
  shop_groups: {
    key: "shop_groups",
    table: "shop_groups",
    label: "Магазин · Группы",
    section: "shop",
    hasSortOrder: true,
    listColumns: ["sort_order", "title", "slug"],
    fields: [
      { key: "title", label: "Название", type: "text", required: true },
      { key: "slug", label: "Слаг", type: "text", required: true },
      { key: "image", label: "Изображение", type: "image" },
      { key: "sort_order", label: "Порядок сортировки", type: "number" }
    ]
  },
  shop_categories: {
    key: "shop_categories",
    table: "shop_categories",
    label: "Магазин · Категории",
    section: "shop",
    hasSortOrder: true,
    sortScopeField: "group_id",
    listColumns: ["sort_order", "group_id", "title", "slug"],
    fields: [
      { key: "group_id", label: "Группа", type: "fk", fkTable: "shop_groups", required: true },
      { key: "title", label: "Название", type: "text", required: true },
      { key: "slug", label: "Слаг", type: "text", required: true },
      { key: "image", label: "Изображение", type: "image" },
      { key: "sort_order", label: "Порядок сортировки", type: "number" }
    ]
  },
  shop_subcategories: {
    key: "shop_subcategories",
    table: "shop_subcategories",
    label: "Магазин · Подкатегории",
    section: "shop",
    hasSortOrder: true,
    sortScopeField: "category_id",
    listColumns: ["sort_order", "category_id", "title", "slug"],
    fields: [
      { key: "category_id", label: "Категория", type: "fk", fkTable: "shop_categories", required: true },
      { key: "title", label: "Название", type: "text", required: true },
      { key: "slug", label: "Слаг", type: "text", required: true },
      { key: "sort_order", label: "Порядок сортировки", type: "number" }
    ]
  },
  shop_products: {
    key: "shop_products",
    table: "shop_products",
    label: "Магазин · Товары",
    section: "shop",
    hasHidden: true,
    listColumns: ["title", "slug", "price", "sale_price", "in_stock", "hidden"],
    fields: [
      { key: "category_id", label: "Категория", type: "fk", fkTable: "shop_categories", required: true },
      { key: "subcategory_id", label: "Подкатегория", type: "fk", fkTable: "shop_subcategories", fkParentField: "category_id", fkParentSource: "category_id" },
      { key: "title", label: "Название", type: "text", required: true },
      { key: "slug", label: "Слаг", type: "text", required: true },
      { key: "price", label: "Цена", type: "number", required: true },
      { key: "sale_price", label: "Цена со скидкой", type: "number" },
      { key: "description", label: "Описание", type: "textarea" },
      { key: "image", label: "Изображение", type: "image" },
      { key: "features", label: "Характеристики (JSON)", type: "json" },
      { key: "in_stock", label: "В наличии", type: "boolean" },
      { key: "hidden", label: "Скрыто", type: "boolean" }
    ]
  },
  rental_groups: {
    key: "rental_groups",
    table: "rental_groups",
    label: "Аренда · Группы",
    section: "rental",
    hasSortOrder: true,
    listColumns: ["sort_order", "title", "slug"],
    fields: [
      { key: "title", label: "Название", type: "text", required: true },
      { key: "slug", label: "Слаг", type: "text", required: true },
      { key: "image", label: "Изображение", type: "image" },
      { key: "sort_order", label: "Порядок сортировки", type: "number" }
    ]
  },
  rental_categories: {
    key: "rental_categories",
    table: "rental_categories",
    label: "Аренда · Категории",
    section: "rental",
    hasSortOrder: true,
    sortScopeField: "group_id",
    listColumns: ["sort_order", "group_id", "title", "slug"],
    fields: [
      { key: "group_id", label: "Группа", type: "fk", fkTable: "rental_groups", required: true },
      { key: "title", label: "Название", type: "text", required: true },
      { key: "slug", label: "Слаг", type: "text", required: true },
      { key: "image", label: "Изображение", type: "image" },
      { key: "sort_order", label: "Порядок сортировки", type: "number" }
    ]
  },
  rental_subcategories: {
    key: "rental_subcategories",
    table: "rental_subcategories",
    label: "Аренда · Подкатегории",
    section: "rental",
    hasSortOrder: true,
    sortScopeField: "category_id",
    listColumns: ["sort_order", "category_id", "title", "slug"],
    fields: [
      { key: "category_id", label: "Категория", type: "fk", fkTable: "rental_categories", required: true },
      { key: "title", label: "Название", type: "text", required: true },
      { key: "slug", label: "Слаг", type: "text", required: true },
      { key: "sort_order", label: "Порядок сортировки", type: "number" }
    ]
  },
  rental_items: {
    key: "rental_items",
    table: "rental_items",
    label: "Аренда · Снаряжение",
    section: "rental",
    hasHidden: true,
    listColumns: ["title", "slug", "price_per_day", "sale_price_per_day", "available", "hidden"],
    fields: [
      { key: "category_id", label: "Категория", type: "fk", fkTable: "rental_categories", required: true },
      { key: "subcategory_id", label: "Подкатегория", type: "fk", fkTable: "rental_subcategories", fkParentField: "category_id", fkParentSource: "category_id" },
      { key: "title", label: "Название", type: "text", required: true },
      { key: "slug", label: "Слаг", type: "text", required: true },
      { key: "price_per_day", label: "Цена / день", type: "number", required: true },
      { key: "sale_price_per_day", label: "Цена / день со скидкой", type: "number" },
      { key: "description", label: "Описание", type: "textarea" },
      { key: "shortly", label: "Краткое описание", type: "text" },
      { key: "image", label: "Изображение", type: "image" },
      { key: "features", label: "Характеристики (JSON)", type: "json" },
      { key: "available", label: "Доступно", type: "boolean" },
      { key: "hidden", label: "Скрыто", type: "boolean" }
    ]
  }
};
const ADMIN_TABLE_LIST = [
  ADMIN_TABLES.shop_groups,
  ADMIN_TABLES.shop_categories,
  ADMIN_TABLES.shop_subcategories,
  ADMIN_TABLES.shop_products,
  ADMIN_TABLES.rental_groups,
  ADMIN_TABLES.rental_categories,
  ADMIN_TABLES.rental_subcategories,
  ADMIN_TABLES.rental_items
];
export {
  ADMIN_TABLES as A,
  ADMIN_TABLE_LIST as a
};
