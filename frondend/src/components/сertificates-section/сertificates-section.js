import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { MdAddShoppingCart } from "react-icons/md";
import styles from './сertificates-section.module.css';
import { useEffect, useState } from "react";

import rentImg from "./img/rent.webp"; // Пример путей к картинкам
import leaseImg from "./img/sele.webp";
import climbingImg from "./img/rock.webp";

const certificates = [
  {
    id: "cert1",
    title: "Прадажа  снаряжения",
    image: rentImg,
  },
  {
    id: "cert2",
    title: "Аренда снаряжения",
    image: leaseImg,
  },
  {
    id: "cert3",
    title: "Скалолазание",
    image: climbingImg,
  },
];

const denominations = [100, 200, 300, 500, 1000, 1500, 2000];

export const CertificatesSection = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (certificate, selectedPrice) => {
    dispatch(
      setItemInCart({
        id: `${certificate.id}-${selectedPrice}`,
        title: `${certificate.title} — ${selectedPrice}₾`,
        price: selectedPrice,
        type: "certificate",
        count: 1,
        image: certificate.image,
      })
    );
  };

  return (
    <div className="certificates-container">
      <h2 className="certificates-title">Сертификаты</h2>
      <div className="certificates-list">
        {certificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            onAdd={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

const CertificateCard = ({ certificate, onAdd }) => {
  const [selectedPrice, setSelectedPrice] = useState(100);

  return (
    <div className="certificate-card">
      <img
        src={certificate.image}
        alt={certificate.title}
        className="certificate-image"
      />
      <h3>{certificate.title}</h3>
      <select
        className="price-select"
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(+e.target.value)}
      >
        {denominations.map((price) => (
          <option key={price} value={price}>
            {price}₾
          </option>
        ))}
      </select>
      <button
        className="add-certificate-button"
        onClick={() => onAdd(certificate, selectedPrice)}
      >
        В корзину <MdAddShoppingCart />
      </button>
    </div>
  );
};
