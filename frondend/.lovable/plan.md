
# Админ-панель Adjara Peak

Закрытая панель `/admin/*` для управления каталогом (shop + rental) с авторизацией по email/паролю и ролью `admin`.

## 1. База данных (миграция)

Создаю инфраструктуру ролей и открываю запись для админов:

- ENUM `app_role` со значением `admin`
- Таблица `user_roles (user_id, role)` с RLS
- SECURITY DEFINER функция `has_role(user_id, role)`
- На все 8 таблиц каталога добавляю RLS policies: `INSERT/UPDATE/DELETE` разрешены только если `has_role(auth.uid(), 'admin')`. Существующие public `SELECT` остаются.
- Storage bucket `catalog-images` (public read, admin write) для загрузки картинок товаров.
- В `shop_products` и `rental_items` добавляю колонку `hidden boolean default false` для «скрытия» (мягкое удаление), фронт каталога фильтрует `hidden = false`.

## 2. Аутентификация

- Email + пароль (без Google, чтобы доступ выдавали только вы).
- Auto-confirm email включён (админов мало, удобнее).
- Страница `/admin/login`.
- Layout-route `_admin` с `beforeLoad`: если нет сессии → redirect на login; если есть, но нет роли admin → страница "Доступ запрещён".
- Никакой публичной регистрации. Первого админа добавляете вы вручную одной SQL-вставкой после того, как зарегистрируете себе аккаунт (я дам инструкцию).

## 3. Структура UI

```text
/admin/login
/admin                       — dashboard со счётчиками
/admin/shop/groups
/admin/shop/categories
/admin/shop/subcategories
/admin/shop/products
/admin/rental/groups
/admin/rental/categories
/admin/rental/subcategories
/admin/rental/items
```

Левый sidebar с навигацией по таблицам, верхняя панель с email + logout.

## 4. Функционал на каждой странице таблицы

- Таблица со списком: поиск по title/slug, сортировка по `sort_order`, пагинация (50/стр).
- Кнопки: **Добавить**, **Экспорт CSV** (вся таблица), **Backup** (скачать JSON-снимок всех 8 таблиц).
- Drag-handle или стрелки ↑↓ для изменения `sort_order` (батч-апдейт).
- На каждой строке: **Редактировать**, **Скрыть/Показать** (для products/items), **Удалить** (с подтверждением).
- Модалка формы:
  - Текстовые поля (title, slug, description, shortly, price).
  - Select-dropdown для `group_id`, `category_id`, `subcategory_id` — подгружаются из соответствующих таблиц, показываются по `title`.
  - Зависимые селекты: при выборе category — subcategory фильтруется.
  - Загрузка изображения: drag-n-drop в storage bucket, в БД сохраняется public URL. Превью + замена + удаление.
  - JSON-редактор для `features` (textarea с валидацией).
  - Checkbox `available`/`in_stock`/`hidden`.

## 5. Backup / Export

- **CSV export**: на клиенте формирую CSV из текущей таблицы и отдаю `Blob` → download.
- **Полный backup**: серверная функция `exportBackup` (admin-only) дампит все 8 таблиц в один JSON, возвращает файл. Кнопка в шапке `/admin`. Рекомендуется делать перед массовыми правками.

## 6. Безопасность

- Все мутации идут через обычный supabase client от имени залогиненного пользователя — RLS пропускает только админов.
- Серверная функция `requireAdmin` middleware для `exportBackup` (проверка роли на сервере).
- Никаких ссылок на `/admin` из публичного UI — только прямой URL.

## 7. Технические детали

- Tanstack Router file-based routes под `src/routes/_admin/`.
- Tanstack Query для всех списков, инвалидация после мутаций.
- shadcn компоненты: Table, Dialog, Select, Input, Textarea, Button, Checkbox.
- Drag-n-drop sort: `@dnd-kit/sortable` (добавлю как зависимость).

## Что мне нужно подтвердить

1. ОК делать **soft-hide** через колонку `hidden` (товары не удаляются физически, скрываются с сайта)?
2. Первого админа создаём так: вы регистрируетесь через `/admin/login` → я даю SQL `INSERT INTO user_roles ...` чтобы выдать роль. Подходит?
3. Картинки храним в Lovable Cloud Storage (новый bucket `catalog-images`)? Старые URL в БД остаются как есть, новые загружаются туда.
