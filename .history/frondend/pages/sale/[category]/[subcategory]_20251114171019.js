import SaleCategoryPage from "../../../src/pages/sale-category-page";
import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { category, subcategory } = router.query;

  return <SaleCategoryPage key={category} />;
}
