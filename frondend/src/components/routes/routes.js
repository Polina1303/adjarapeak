import lake from "../image/lake.jpg";
import erge from "../image/erge.jpg";
import garden from "../image/garden.jpg";
import { useNavigate } from "react-router-dom";
import "./routes.css";
import { useInView } from "react-intersection-observer";

export const Routes = () => {
  const { ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const handleClickLake = () => {
    navigate("/lake");
  };
  const handleClickErge = () => {
    navigate("/erge");
  };
  const handleClickGarden = () => {
    navigate("/garden");
  };
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="routes-title">Вокруг Батуми: Удивительные маршруты</h2>
      <div className="cover-routes">
        <div className="routes-cover-block" onClick={handleClickLake}>
          <a href="/lake">
            <img ref={ref} src={lake} alt="lake" className="routes-image" />
            <div className="routes-cover-title">
              <p>Батуми - Хуло - Таго - пеший маршрут к озеру</p>
              <p className="routes-item-page">Исследуйте сейчас</p>
            </div>
          </a>
        </div>
        <div className="routes-cover-block" onClick={handleClickErge}>
          <a href="/erge">
            <img ref={ref} src={erge} alt="lake" className="routes-image" />
            <div className="routes-cover-title">
              <p>Вершина Эрге</p>
              <p className="routes-item-page">Исследуйте сейчас</p>
            </div>
          </a>
        </div>
        <div className="routes-cover-block" onClick={handleClickGarden}>
          <a href="/garden">
            <img ref={ref} src={garden} alt="lake" className="routes-image" />
            <div className="routes-cover-title">
              <p>Ботанический сад</p>
              <p className="routes-item-page">Исследуйте сейчас</p>
            </div>
          </a>
        </div>
      </div>
      <p className="routes-cover-summary">Откройте для себя любовь к природе</p>
    </div>
  );
};
