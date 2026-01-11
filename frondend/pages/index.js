import HomePage from "../src/pages/home-page";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default HomePage;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header"])),
    },
  };
}

// import HomePage from "../src/pages/home-page";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// export default HomePage;

// export async function getServerSideProps({ locale }) {
//   const config = {
//     i18n: {
//       defaultLocale: "ru",
//       locales: ["ru", "en", "ka"],
//     },
//     ns: ["common", "rent", "sale", "header"],
//     defaultNS: "common",
//   };

//   return {
//     props: {
//       ...(await serverSideTranslations(
//         locale ?? "ru",
//         ["common", "rent", "sale", "header"],
//         config
//       )),
//     },
//   };
// }
