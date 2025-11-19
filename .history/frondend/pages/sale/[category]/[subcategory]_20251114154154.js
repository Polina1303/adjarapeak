import SalePage from "../../../src/components/SalePage";
import { useRouter } from "next/router";

export default function SubcategoryPage() {
  const router = useRouter();
  const { category, subcategory } = router.query;

  return <SalePage key={`${category}-${subcategory}`} />;
}
