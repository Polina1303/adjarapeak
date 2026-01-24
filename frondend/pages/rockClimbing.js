import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { RockClimbingPage } from "../src/pages/rock-climbing-page";
export default RockClimbingPage;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["rock-climbing"])),
    },
  };
}
