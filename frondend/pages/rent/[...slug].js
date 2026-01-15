import RentPage from "../../src/pages/rent-page/rent-page";
import RentCategoryPage from "../../src/components/rent-category-page/rent-category-page";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export default function RentSlug() {
  const router = useRouter();
  const { slug } = router.query;

  const section = slug?.[0] || null;
  const type = slug?.[1] || null;
  const subcategory = slug?.[2] || null;

  if (!slug) return null;

  return (
    <RentPage>
      <RentCategoryPage
        section={section}
        type={type}
        subcategory={subcategory}
      />
    </RentPage>
  );
}
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["rent", "sale"])),
    },
  };
}
