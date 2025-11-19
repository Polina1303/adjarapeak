import SalePage from "../../src/components/sale-page/sale-page"; // твоя главная страница
import SaleCategoryPage from "../../src/components/sale-category-page/sale-category-page";
import { useRouter } from "next/router";

export default function SaleSlug() {
  const router = useRouter();
  const { slug } = router.query; // slug = ['tourismCamping', 'tent', 'tent_accessories']

  const section = slug?.[0] || null;
  const type = slug?.[1] || null;
  const subcategory = slug?.[2] || null;

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
