import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ServiceCenterPage from "../src/pages/service-center-page";
export default ServiceCenterPage;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["service"])),
    },
  };
}
