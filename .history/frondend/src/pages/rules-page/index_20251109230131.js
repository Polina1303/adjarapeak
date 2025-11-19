import dynamic from "next/dynamic";

const RulesPage = dynamic(() => import("./rules-page"), {
  ssr: false, // 💡 отключаем серверный рендер
});

export default RulesPage;
