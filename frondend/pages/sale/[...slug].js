import SalePage from "../../src/components/sale-page/sale-page";
import SaleCategoryPage from "../../src/components/sale-category-page/sale-category-page";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export default function SaleSlug() {
  const router = useRouter();
  const { slug } = router.query;

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

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "sale", "header"])),
    },
  };
}
