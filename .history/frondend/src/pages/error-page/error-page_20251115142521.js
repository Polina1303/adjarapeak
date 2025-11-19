import { useRouter } from "next/router";
import adjara from "../../components/image/adjara2.png";

export const Error = () => {
  const navigate = useRouter();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="error-page-container">
      <div className="error-page-title">
        <h1>Такой страницы нет</h1>
        <img src={adjara} alt="adjara peak" width={"180px"} />
      </div>
      <p className="error-page-error">Ошибка 404</p>
      <p className="error-page-discripshion">
        Возможно, в ссылке опечатка. Если считаете, что страница была здесь
        раньше, но исчезла, — напишите в службу поддержки.
      </p>
      <div>
        <button className="error-page-btn" onClick={handleClick}>
          Перейти на главную
        </button>
        <button className="error-page-btn">
          <a href="https://t.me/shpaksn" target="_blank" rel="noreferrer">
            Написать в поддержку
          </a>
        </button>
      </div>
    </div>
  );
};
