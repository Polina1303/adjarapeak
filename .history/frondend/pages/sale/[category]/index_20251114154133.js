import SalePage from "../../../src/components/SalePage";
import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query; // динамический сегмент

  return <SalePage key={category} />; // key нужен, чтобы компонент обновлялся при смене категории
}
