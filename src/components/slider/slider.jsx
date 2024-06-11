import React, { useEffect, useState } from "react";
import "./slider.scss";
import logo from "../../assets/logo-2.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Slider = () => {
  useEffect(() => {
    Aos.init({
      duration: 650,
      once: true,
    });
  }, []);
  const [slideIndex, setSlideIndex] = useState(1);
  const slides = [
    "https://www.electrive.com/media/2024/01/xiaomi-su7-2023-11-min.jpg.webp",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/05/bev-sport_front_16x9.jpg",
  ];

  const showDivs = (n) => {
    let newIndex = n;
    if (n > slides.length) newIndex = 1;
    if (n < 1) newIndex = slides.length;
    setSlideIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="contain">
        <div className="background">
          <div className="slider_textContent">
            <img
              data-aos="zoom-in"
              className="header_logo_img"
              src={logo}
              alt="#"
            />
            <h3 data-aos="fade-right" className="slider_logoText">
              Выкупим ваше авто на выгодных условиях
            </h3>
            <ul data-aos="fade-right" className="slider_ul">
              <li data-aos="fade-right" className="slider_li">
                Оценим ваш автомобиль онлайн
              </li>
              <li data-aos="fade-right" className="slider_li">
                Осмотр автомобиля в удобном месте, в удобное время
              </li>
              <li data-aos="fade-right" className="slider_li">
                Подходят любые легковые авто
              </li>
            </ul>
            <button data-aos="zoom-in" className="slider_more">
              Подборнее
            </button>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="container">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={slideIndex === index + 1 ? "visible" : ""}
          />
        ))}
        <div className="controls">
          <div
            className="new-arrow left"
            onClick={() => showDivs(slideIndex - 1)}
          >
            &#10094;
          </div>
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${slideIndex === index + 1 ? "active" : ""}`}
                onClick={() => showDivs(index + 1)}
              ></span>
            ))}
          </div>
          <div
            className="new-arrow right"
            onClick={() => showDivs(slideIndex + 1)}
          >
            &#10095;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
