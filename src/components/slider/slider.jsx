import React, { useState } from "react";
import "./slider.scss";
import logo from "../../assets/logo-2.png";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slides = [
    "https://s3-alpha-sig.figma.com/img/2292/ce61/ca41be38791095be7d9260a72618df98?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0HkQDrRBhBBa2ZHVB33GTk17gMtI70YW3mkpMAXUK7QdsLh7ZxVafrdUlKVHkYfTWHnT-RKHvwg8XOui93sX76Uia3X-GoreZcj~~uIUCGxs1zvDwXOShYbXZk3VpNRB8wEyiCMfKXMb91XazcJ8J7cN608Rxz-5Xeq7UAUyWwBWa~dLRYe6dMvZbkD6nicZ0ShAMOlKcFmF~2bhaRhz9wGxdqP~Z6G2IdjPL~ZsAFLmK6PiD8p5b77CZw1xNZdnwiRDLtg4Arf-QoF-jwj2AC2m~Tma58qp1f7RsYNO5qnwQU~IGVpkL1mSuhajjhz5Viklp620SLqLidSIY-7cQ__",
    "https://s3-alpha-sig.figma.com/img/2292/ce61/ca41be38791095be7d9260a72618df98?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0HkQDrRBhBBa2ZHVB33GTk17gMtI70YW3mkpMAXUK7QdsLh7ZxVafrdUlKVHkYfTWHnT-RKHvwg8XOui93sX76Uia3X-GoreZcj~~uIUCGxs1zvDwXOShYbXZk3VpNRB8wEyiCMfKXMb91XazcJ8J7cN608Rxz-5Xeq7UAUyWwBWa~dLRYe6dMvZbkD6nicZ0ShAMOlKcFmF~2bhaRhz9wGxdqP~Z6G2IdjPL~ZsAFLmK6PiD8p5b77CZw1xNZdnwiRDLtg4Arf-QoF-jwj2AC2m~Tma58qp1f7RsYNO5qnwQU~IGVpkL1mSuhajjhz5Viklp620SLqLidSIY-7cQ__",
    "https://s3-alpha-sig.figma.com/img/2292/ce61/ca41be38791095be7d9260a72618df98?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0HkQDrRBhBBa2ZHVB33GTk17gMtI70YW3mkpMAXUK7QdsLh7ZxVafrdUlKVHkYfTWHnT-RKHvwg8XOui93sX76Uia3X-GoreZcj~~uIUCGxs1zvDwXOShYbXZk3VpNRB8wEyiCMfKXMb91XazcJ8J7cN608Rxz-5Xeq7UAUyWwBWa~dLRYe6dMvZbkD6nicZ0ShAMOlKcFmF~2bhaRhz9wGxdqP~Z6G2IdjPL~ZsAFLmK6PiD8p5b77CZw1xNZdnwiRDLtg4Arf-QoF-jwj2AC2m~Tma58qp1f7RsYNO5qnwQU~IGVpkL1mSuhajjhz5Viklp620SLqLidSIY-7cQ__",
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
        <div className="slider_textContent">
          <img className="header_logo_img" src={logo} alt="#" />
          <h3 className="slider_logoText">
            Выкупим ваше авто на выгодных условиях
          </h3>
          <ul className="slider_ul">
            <li className="slider_li">Оценим ваш автомобиль онлайн</li>
            <li className="slider_li">
              Осмотр автомобиля в удобном месте, в удобное время
            </li>
            <li className="slider_li">Подходят любые легковые авто</li>
          </ul>
          <button className="slider_more">Подборнее</button>
        </div>
      </div>
      <div className="container">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={slideIndex === index + 1 ? "visible" : ""}
          />
        ))}
        <div className="controls">
          <div className="arrow left" onClick={() => showDivs(slideIndex - 1)}>
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
          <div className="arrow right" onClick={() => showDivs(slideIndex + 1)}>
            &#10095;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
