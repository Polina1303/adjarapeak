import SalePage from "../../../../src/components/sale-page/sale-page";
import SaleCategoryPage from "../../../../src/components/sale-category-page/sale-category-page";
import { useRouter } from "next/router";

export default function SaleTypePage() {
  const router = useRouter();
  const { section, type } = router.query;

  //   if (!router.isReady) return null;

  return (
    <SalePage>
      <SaleCategoryPage section={section} type={type} />
    </SalePage>
  );
}
