import { useRouter } from "next/router";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export const LycianWay = () => {
  const router = useRouter();

  const handleClickLake = () => {
    router.push("/lycianWay");
  };

  const { ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <h2 className="routes-title">
        Ликийская тропа: путешествие по Турции с Adjarapeak в режиме реального
        времени
      </h2>
      <p>
        Ликийская тропа — один из самых красивых пеших маршрутов в мире,
        пролегающий по юго-западному побережью Турции. Наше путешествие обещает
        стать незабываемым, и мы приглашаем вас следить за ним в реальном
        времени!
      </p>
      <div className="routes-cover-block" onClick={handleClickLake}>
        <Link href="/lycianWay">
          <img ref={ref} src={lycian} alt="lycian" className="routes-image" />
          <div className="routes-cover-title">
            <p>Ликийская тропа</p>
            <p className="routes-item-page">Исследуйте сейчас</p>
          </div>
        </Link>
      </div>
    </>
  );
};
