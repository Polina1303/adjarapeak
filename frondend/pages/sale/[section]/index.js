import SalePage from "../../../src/components/sale-page/sale-page";
import SaleCategoryPage from "../../../src/components/sale-category-page/sale-category-page";
import { useRouter } from "next/router";

export default function SaleSectionPage() {
  const router = useRouter();
  const { section } = router.query;

  //   if (!router.isReady) return null;

  return (
    <SalePage>
      <SaleCategoryPage section={section} />
    </SalePage>
  );
}
