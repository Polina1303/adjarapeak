import "./slider.css";
import { MdOutlineArrowLeft, MdArrowRight } from "react-icons/md";
import { sliderItem } from "./data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Slider = () => {
  const navigate = useNavigate();
  const [sliderIndex, setSliderIndex] = useState(0);
  const handelClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };

  const handleClickSale = () => {
    navigate("/sale");
  };
  const handleClickRent = () => {
    navigate("/rent");
  };

  return (
    <div className="container-slider ">
      <div className="arrow-left" onClick={() => handelClick("left")}>
        <MdOutlineArrowLeft className="arrow" />
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          transition: "all 1.2s ease",
          transform: `translateX(${sliderIndex * -1250}px)`,
        }}
      >
        {sliderItem.map((item) => (
          <div className="slide" key={item.id}>
            <div className="images-container">
              <img
                className="slider-image"
                src={process.env.PUBLIC_URL + "/img/" + item.img}
                alt="viewTent"
                width={"500px"}
                loading="lazy"
              />
            </div>
            <div className="infocontainer">
              <h1 className="infocontainer-title">{item.titleFirst}</h1>
              <h1 className="infocontainer-title">{item.titleSecond}</h1>
              <p className="infocontainer-descripshion">{item.descripshion}</p>
              {item.id === 1 && (
                <div className="infocontainer-cover">
                  <button
                    className="infocontainer-button"
                    onClick={handleClickSale}
                  >
                    КУПИТЬ
                  </button>
                  <button
                    className="infocontainer-button"
                    onClick={handleClickRent}
                  >
                    АРЕНДОВАТЬ
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="arrow-rigth" onClick={() => handelClick("rigth")}>
        <MdArrowRight className="arrow" />
      </div>
    </div>
  );
};
