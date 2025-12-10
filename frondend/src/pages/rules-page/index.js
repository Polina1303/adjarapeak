import dynamic from "next/dynamic";

const RulesPage = dynamic(() => import("./rules-page"), { ssr: false });

export default RulesPage;
