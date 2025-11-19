import { useRouter } from "next/router";
// import adjara from "../../components/image/adjara2.png";
import styles from "./error-page.module.css";

export default function Error {
  const navigate = useRouter();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className={styles["error-page-container"]}>
      <div className={styles["error-page-title"]}>
        <h1>Такой страницы нет</h1>
        <img src="/image/adjara2.png" alt="adjara peak" width={"180px"} />
      </div>
      <p className={styles["error-page-error"]}>Ошибка 404</p>
      <p className={styles["error-page-discripshion"]}>
        Возможно, в ссылке опечатка. Если считаете, что страница была здесь
        раньше, но исчезла, — напишите в службу поддержки.
      </p>
      <div>
        <button className={styles["error-page-btn"]} onClick={handleClick}>
          Перейти на главную
        </button>
        <button className={styles["error-page-btn"]}>
          <a href="https://t.me/shpaksn" target="_blank" rel="noreferrer">
            Написать в поддержку
          </a>
        </button>
      </div>
    </div>
  );
};
