import SalePage from "../../src/components/sale-page/sale-page"; // твоя главная страница
import SaleCategoryPage from "../../src/components/sale-category-page/sale-category-page";

export default function SaleIndex() {
  return (
    <SalePage>
      <SaleCategoryPage />
    </SalePage>
  );
}
