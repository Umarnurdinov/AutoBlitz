import React, { useState } from "react";
import "./hero.scss";
import axios from "axios";

function Hero() {
  const [address, setAddress] = useState("");
  const [data, setData] = useState({
    name: "",
    number: "",
    address: address,
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  function send() {
    console.log("hello world");
    axios
      .post("http://13.49.183.39:8000/fast-sell/", data)
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  }

  function autoLocation() {
    if ("geolocation" in navigator) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          fetchAddress(latitude, longitude);
        },
        (error) => {
          setLoading(false);
          if (error.code === 1) {
            setShowModal(true);
          } else {
            alert("Error obtaining geolocation: " + error.message);
          }
        }
      );
    } else {
      alert("Geolocation not available in this browser.");
    }
  }

  const fetchAddress = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.display_name) {
        setAddress(data.display_name);
        setData((prevData) => ({
          ...prevData,
          address: data.display_name,
        }));
      } else {
        alert("No address found");
      }
    } catch (error) {
      alert("Error fetching address: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(address);

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
            <a href="tel:0709713875" className="hero_callBtn">
              ЗВОНИТЕ: (0709) 71-38-75
            </a>
          </div>
          <div className="hero_form">
            <p className="hero_form_text">Оцените автомобиль:</p>
            <form className="form" action="#">
              <input
                placeholder="Ваше имя"
                type="text"
                className="name"
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    name: e.target.value,
                  }))
                }
              />
              <input
                placeholder="Ваш номер телефона"
                type="text"
                className="number"
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    number: e.target.value,
                  }))
                }
              />
              <input
                placeholder={loading ? "Загрузка..." : "Нажмите для заполнение"}
                value={address}
                type="text"
                className="location"
                onClick={autoLocation}
                readOnly
              />
              <button type="button" className="send" onClick={send}>
                ОТПРАВИТЬ
              </button>
            </form>
            <p className="info-adress">
              {address ? "Ваш адрес заполнен!" : "Адрес не указан!"}
            </p>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <p>
              Геолокация отключена или доступ запрещен. Пожалуйста, включите ее
              в настройках вашего браузера или устройства.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
