import SalePage from "../../src/pages/sale-page/SalePage"; // твоя главная страница
import SaleCategoryPage from "@/components/SaleCategoryPage";

export default function SaleIndex() {
  return (
    <>
      <SalePage />
      <SaleCategoryPage /> {/* index: true */}
    </>
  );
}
