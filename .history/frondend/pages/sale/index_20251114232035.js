import SalePage from "../../src/components/sale-page/sale-page"; // твоя главная страница
import SaleCategoryPage from "../../src/components/sale-category-page/sale-category-page";
import { useRouter } from "next/router";

export default function SaleIndex() {
  const router = useRouter();
  const { section, type, subcategory } = router.query;

  return (
    <SalePage>
      <SaleCategoryPage
        section={section}
        type={type}
        subcategory={subcategory}
      />
    </SalePage>
  );
}
