// pages/_error.js
export default function Error({ statusCode }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{statusCode ? `Ошибка ${statusCode}` : "Ошибка на странице"}</h1>
      <p>Что-то пошло не так. Попробуйте перезагрузить страницу.</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
