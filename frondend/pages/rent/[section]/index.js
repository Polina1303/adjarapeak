import RentPage from "../../../src/pages/rent-page/rent-page";
import RentCategoryPage from "../../../src/components/rent-category-page/rent-category-page";
import { useRouter } from "next/router";

export default function SaleSectionPage() {
  const router = useRouter();
  const { section } = router.query;

  //   if (!router.isReady) return null;

  return (
    <RentPage>
      <RentCategoryPage section={section} />
    </RentPage>
  );
}
