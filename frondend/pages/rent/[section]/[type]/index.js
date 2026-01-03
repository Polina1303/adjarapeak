import RentPage from "../../../../src/pages/rent-page/rent-page";
import RentCategoryPage from "../../../../src/components/rent-category-page/rent-category-page";
import { useRouter } from "next/router";

export default function SaleTypePage() {
  const router = useRouter();
  const { section, type } = router.query;

  //   if (!router.isReady) return null;

  return (
    <RentPage>
      <RentCategoryPage section={section} type={type} />
    </RentPage>
  );
}
