import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import  lycian  from '../image/lycian.webp'

export const LycianWay = () => {

    const navigate = useNavigate();

  const handleClickLake = () => {
    navigate("/lycian");
  };

  const { ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
return(
    <>
    <h2 className="routes-title">Ликийская тропа: путешествие по Турции с Adjarapeak в режиме реального времени</h2>
    <p>
    Ликийская тропа — один из самых красивых пеших маршрутов в мире, пролегающий по юго-западному побережью Турции.
    Наше путешествие обещает стать незабываемым, и мы приглашаем вас следить за ним в реальном времени!
    </p>
    <div className="routes-cover-block" onClick={handleClickLake}>

    <a href="/lycian">
            <img ref={ref} src={lycian} alt="lycian" className="routes-image" />
            <div className="routes-cover-title">
              <p>Ликийская тропа</p>
              <p className="routes-item-page">Исследуйте сейчас</p>
            </div>
          </a>
          </div>
</>
)
}