import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_content">
          <div className="hero_textContent">
            <h1 className="hero_title">
              ВЫКУПИМ ВАШ АВТОМОБИЛЬ В ЛЮБОМ СОСТОЯНИИ В БИШКЕКЕ
            </h1>
            <p className="hero_pretitle">
              Нам уже доверились более 500 человек. Приедем, осмотрим и купим
              ваше авто из любой точки Кыргызстана!
            </p>
            <button className="hero_callBtn">ЗВОНИТЕ: (0707) 893-939</button>
          </div>
          <div className="hero_form">
            <p className="hero_form_text">Оцените автомобиль:</p>
            <form className="form" action="#">
              <input placeholder="Ваше имя" type="text" className="name" />
              <input
                placeholder="Ваш номер телефона"
                type="number"
                className="number"
              />
              <input placeholder="Ваш адрес" type="text" className="location" />
              <button className="send">ОТПРАВИТЬ</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
