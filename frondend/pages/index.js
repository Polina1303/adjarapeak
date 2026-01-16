import HomePage from "../src/pages/home-page";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default HomePage;

export async function getServerSideProps({ locale }) {
  const safeLocale = locale ?? "ru";

  return {
    props: {
      ...(await serverSideTranslations(safeLocale, ["header"])),
    },
  };
}
