export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "boolean"
  | "image"
  | "json"
  | "date"
  | "time"
  | "fk"
  | "gallery"
  | "string_list"
  | "reasons"
  | "packing_list";

export type FieldConfig = {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  // for fk
  fkTable?: AdminTableKey;
  fkParentField?: string; // dependent select: filter fkTable rows by this field on the parent
  fkParentSource?: string; // which field on the current row provides the parent id
};

export type AdminTableConfig = {
  key: AdminTableKey;
  table: string;
  label: string;
  section: "shop" | "rental" | "hikes";
  hasHidden?: boolean;
  hasSortOrder?: boolean;
  sortScopeField?: string;
  listColumns: string[]; // columns to show in the list (must be subset of fields keys + id)
  fields: FieldConfig[];
};

export type AdminTableKey =
  | "shop_groups"
  | "shop_categories"
  | "shop_subcategories"
  | "shop_products"
  | "rental_groups"
  | "rental_categories"
  | "rental_subcategories"
  | "rental_items"
  | "hikes";

export const ADMIN_TABLES: Record<AdminTableKey, AdminTableConfig> = {
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
      { key: "sort_order", label: "Порядок сортировки", type: "number" },
    ],
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
      { key: "sort_order", label: "Порядок сортировки", type: "number" },
    ],
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
      { key: "sort_order", label: "Порядок сортировки", type: "number" },
    ],
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
      { key: "hidden", label: "Скрыто", type: "boolean" },
    ],
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
      { key: "sort_order", label: "Порядок сортировки", type: "number" },
    ],
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
      { key: "sort_order", label: "Порядок сортировки", type: "number" },
    ],
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
      { key: "sort_order", label: "Порядок сортировки", type: "number" },
    ],
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
      { key: "hidden", label: "Скрыто", type: "boolean" },
    ],
  },
  hikes: {
    key: "hikes",
    table: "hikes",
    label: "Походы",
    section: "hikes",
    hasHidden: true,
    hasSortOrder: true,
    listColumns: ["sort_order", "title", "slug", "price", "hidden"],
    fields: [
      { key: "title", label: "Название", type: "text", required: true },
      { key: "slug", label: "Слаг", type: "text", required: true },
      { key: "shortly", label: "Краткое описание", type: "text" },
      { key: "description", label: "Описание", type: "textarea" },
      { key: "image", label: "Главное изображение", type: "image" },
      { key: "gallery", label: "Галерея", type: "gallery" },
      { key: "price", label: "Цена ₾", type: "number", required: true },
      { key: "sale_price", label: "Цена со скидкой ₾", type: "number" },
      { key: "start_date", label: "Дата начала", type: "date" },
      { key: "end_date", label: "Дата окончания", type: "date" },
      { key: "start_time", label: "Время начала", type: "time" },
      { key: "duration", label: "Длительность (напр. «2 дня»)", type: "text" },
      { key: "distance_km", label: "Километраж (км)", type: "number" },
      { key: "difficulty", label: "Сложность", type: "text" },
      { key: "group_size", label: "Размер группы", type: "text" },
      { key: "location", label: "Локация", type: "text" },
      { key: "features", label: "Что включено", type: "string_list" },
      { key: "reasons", label: "Причины пойти (фото + текст)", type: "reasons" },
      { key: "packing_list", label: "Что взять с собой", type: "packing_list" },
      { key: "sort_order", label: "Порядок сортировки", type: "number" },
      { key: "hidden", label: "Скрыто", type: "boolean" },
    ],
  },
};

export const ADMIN_TABLE_LIST: AdminTableConfig[] = [
  ADMIN_TABLES.shop_groups,
  ADMIN_TABLES.shop_categories,
  ADMIN_TABLES.shop_subcategories,
  ADMIN_TABLES.shop_products,
  ADMIN_TABLES.rental_groups,
  ADMIN_TABLES.rental_categories,
  ADMIN_TABLES.rental_subcategories,
  ADMIN_TABLES.rental_items,
  ADMIN_TABLES.hikes,
];
