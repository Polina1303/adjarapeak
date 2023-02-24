import "./footer.css";
import certificate from "../image/certificate.jpg";

export const Footer = () => {
  return (
    <div className="footer-container">
      <ul>
        <li>Первый в Аджарии</li>
        <li>Продажа, прокат и доставка "под заказ"</li>
        <li>Только качественное снаряжение</li>
        <li>Батуми ул.Тбел-Абусеридзе,38 (10:00-18:00)</li>
        <li>+995 511 147 586</li>
      </ul>
      <div className="certificate-container">
        <div className="certificate-title">
          В ADJARA PEAK можно преобрести сертификат на любую сумму
        </div>
        <img
          className="image"
          src={certificate}
          alt="certificate"
          width={350}
        />
      </div>
    </div>
  );
};
