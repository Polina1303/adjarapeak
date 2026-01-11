// import { HomePage } from "../src/pages/home-page";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// export default HomePage;

// export async function getServerSideProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["header"])),
//     },
//   };
// }

import { HomePage } from "../src/pages/home-page";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default HomePage;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      // Добавьте ВСЕ неймспейсы, которые используются на этой странице
      ...(await serverSideTranslations(locale, [
        "common", // общие переводы (обязательно!)
        "header", // для хедера
        "home", // если у вас есть home.json
        "rent", // возможно для секций аренды
        "sale", // возможно для секций продажи
        // добавьте другие неймспейсы, которые использует HomePage
      ])),
    },
  };
}
