import lake from "../image/lake.jpg";
import erge from "../image/erge.jpg";
import garden from "../image/garden.jpg";
import { useNavigate } from "react-router-dom";
import "./routes.css";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";


export const Routes = () => {
  const languages = useSelector((state) => state.languages.currentLanguages);

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
      <h2 className="routes-title"> {languages==="RU"? 'Вокруг Батуми: Удивительные маршруты':"Around Batumi: Amazing routes"}</h2>
      <div className="cover-routes">
        <div className="routes-cover-block" onClick={handleClickLake}>
          <a href="/lake">
            <img ref={ref} src={lake} alt="lake" className="routes-image" />
            <div className="routes-cover-title">
              <p>{languages==="RU"? 'Батуми - Хуло - Таго - пеший маршрут к озеру':"Batumi - Khulo - Tago - hiking route to the lake"}</p>
              <p className="routes-item-page">{languages==="RU"? 'Исследуйте сейчас':"Explore now"}</p>
            </div>
          </a>
        </div>
        <div className="routes-cover-block" onClick={handleClickErge}>
          <a href="/erge">
            <img ref={ref} src={erge} alt="lake" className="routes-image" />
            <div className="routes-cover-title">
              <p>{languages==="RU"? 'Вершина Эрге':"The top of the Erge"}</p>
              <p className="routes-item-page">{languages==="RU"? 'Исследуйте сейчас':"Explore now"}</p>
            </div>
          </a>
        </div>
        <div className="routes-cover-block" onClick={handleClickGarden}>
          <a href="/garden">
            <img ref={ref} src={garden} alt="lake" className="routes-image" />
            <div className="routes-cover-title">
              <p>{languages==="RU"? 'Ботанический сад':"The Botanical Garden"}</p>
              <p className="routes-item-page">{languages==="RU"? 'Исследуйте сейчас':"Explore now"}</p>
            </div>
          </a>
        </div>
      </div>
      <p className="routes-cover-summary">{languages==="RU"? 'Откройте для себя любовь к природе':"Discover your love for natures"}</p>
    </div>
  );
};
