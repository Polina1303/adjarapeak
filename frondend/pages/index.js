import { HomePage } from "../src/pages/home-page";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default HomePage;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header"])),
    },
  };
}
