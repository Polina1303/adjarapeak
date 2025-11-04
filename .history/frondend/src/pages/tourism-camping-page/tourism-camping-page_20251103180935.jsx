import { useLocation, Outlet } from "react-router-dom";
import { CategoryCard } from "../../components/category-card";

export const TourismCampingPage = ({ category }) => {
  const location = useLocation();

  const isRootLevel =
    location.pathname === "/sale" ||
    location.pathname === `/sale/${category.path}`;

  const cards = Array.isArray(category)
    ? category
    : category.types || category.subcategories || [];

  if (isRootLevel && cards.length) {
    return (
      <div className="home-page-product">
        {cards.map(({ title, img, category: cat, path }) => {
          const segment = cat || path;
          const routePath = category.path
            ? `/sale/${category.path}/${segment}`
            : `/sale/${segment}`;

          return (
            <div className="category-product" key={segment}>
              <CategoryCard title={title} img={img} routePath={routePath} />
            </div>
          );
        })}
      </div>
    );
  }
  return <Outlet />;
};
