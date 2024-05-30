import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.webp";
import telegram from "../../assets/telegram.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <img className="header_logo_img" src={logo} alt="ВЫКУП.KG" />
          </div>
          <nav className="footer-nav">
            <a href="#">О нас</a>
            <a href="#">Контакты</a>
            <a href="#">Услуги</a>
            <a href="#">Акции</a>
            <a href="#">Новости</a>
            <a href="#">Партнеры</a>
            <a href="#">Блог</a>
          </nav>
        </div>
        <div className="footer-middle">
          <div className="footer-contact">
            <p>Свяжитесь с нами:</p>
            <p>Телефон: +996 (123) 456-789</p>
            <p>Email: info@vykup.kg</p>
            <p>Адрес: г. Бишкек, ул. Ленина, д. 10</p>
          </div>
          <div className="footer-social">
            <p>Следите за нами:</p>
            <a href="#">
              <img src={facebook} alt="Facebook" />
              <p>Facebook</p>
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram" />
              <p>Instagram</p>
            </a>
            <a href="#">
              <img src={telegram} alt="Telegram" />
              <p>Telegram</p>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ВЫКУП.KG. Все права защищены.</p>
          <p>
            Использование сайта означает согласие с{" "}
            <a href="#">Политикой конфиденциальности</a> и{" "}
            <a href="#">Условиями использования</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
