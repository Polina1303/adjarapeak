import SalePage from "../src/pages/sale-page";
import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return <SalePage key={category} />;
}
