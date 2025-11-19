import { useRouter } from "next/router";
import Link from "next/link";
import lake from "../image/lake.jpg";
import erge from "../image/erge.jpg";
import garden from "../image/garden.jpg";
import styles from "./routes.module.css";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

export const Routes = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);
  const router = useRouter();

  const { ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const handleClickLake = () => {
    router.push("/lake-route");
  };
  const handleClickErge = () => {
    router.push("/erge-route");
  };
  const handleClickGarden = () => {
    router.push("/garden-route");
  };
  return (
    <div>
      <h2 className={styles["routes-title"]}>
        {languages === "RU"
          ? "Вокруг Батуми: Удивительные маршруты"
          : "Around Batumi: Amazing routes"}
      </h2>
      <div className={styles["cover-routes"]}>
        <div className={styles["routes-cover-block"]} onClick={handleClickLake}>
          <Link href="/lake-route">
            <img
              ref={ref}
              src={lake}
              alt="lake"
              className={styles["routes-image"]}
            />
            <div className={styles["routes-cover-title"]}>
              <p>
                {languages === "RU"
                  ? "Батуми - Хуло - Таго - пеший маршрут к озеру"
                  : "Batumi - Khulo - Tago - hiking route to the lake"}
              </p>
              <p className={styles["routes-item-page"]}>
                {languages === "RU" ? "Исследуйте сейчас" : "Explore now"}
              </p>
            </div>
          </Link>
        </div>
        <div className={styles["routes-cover-block"]} onClick={handleClickErge}>
          <Link href="/erge-route">
            <img ref={ref} src={erge} alt="lake" className="routes-image" />
            <div className="routes-cover-title">
              <p>
                {languages === "RU" ? "Вершина Эрге" : "The top of the Erge"}
              </p>
              <p className="routes-item-page">
                {languages === "RU" ? "Исследуйте сейчас" : "Explore now"}
              </p>
            </div>
          </Link>
        </div>
        <div className="routes-cover-block" onClick={handleClickGarden}>
          <Link href="/garden-route">
            <img ref={ref} src={garden} alt="lake" className="routes-image" />
            <div className="routes-cover-title">
              <p>
                {languages === "RU"
                  ? "Ботанический сад"
                  : "The Botanical Garden"}
              </p>
              <p className="routes-item-page">
                {languages === "RU" ? "Исследуйте сейчас" : "Explore now"}
              </p>
            </div>
          </Link>
        </div>
        {/* <div className="routes-cover-block" onClick={handleClickGarden}>
          <a href="/garden">
            <img ref={ref} src={garden} alt="lake" className="routes-image" />
            <div className="routes-cover-title">
              <p>
                {languages === "RU"
                  ? "Водопады Махунцет"
                  : "The Botanical Garden"}
              </p>
              <p className="routes-item-page">
                {languages === "RU" ? "Исследуйте сейчас" : "Explore now"}
              </p>
            </div>
          </a>
        </div> */}
      </div>
      <p className="routes-cover-summary">
        {languages === "RU"
          ? "Откройте для себя любовь к природе"
          : "Discover your love for natures"}
      </p>
    </div>
  );
};
