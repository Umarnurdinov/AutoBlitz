import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import logoAdd from "../../assets/logoAdd.webp";
import "./add.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function Add() {
  useEffect(() => {
    Aos.init({
      duration: 850,
      once: true,
    });
  }, []);
  const [showModal, setShowModal] = useState(false);

  const handleSellClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [showModal]);

  return (
    <>
      <div className="container">
        <div className="btns">
          <Link data-aos="zoom-in-right" to="/cars" className="btn btn_search">
            <IoSearch size={20} />
            Перейти к поиску авто
          </Link>
          <button
            data-aos="zoom-in-left"
            onClick={handleSellClick}
            className="btn btn_sell"
          >
            <FiPlusCircle size={20} />
            Продать
          </button>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div data-aos="zoom-in" className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2 data-aos="zoom-in">Как вы хотите продать авто?</h2>
            <div className="modal-body">
              <div className="tab-content">
                <ul className="ul">
                  <li data-aos="zoom-in-down" className="li">
                    Нет ограничений по возрасту и пробегу автомобиля
                  </li>
                  <li data-aos="zoom-in-down" className="li">
                    Вы сами определяете стоимость вашего автомобиля
                  </li>
                  <li data-aos="zoom-in-down" className="li">
                    Личная коммуникация с покупателями
                  </li>
                </ul>
                <img
                  data-aos="zoom-in-down"
                  className="icon"
                  src={logoAdd}
                  alt="#"
                />
                <Link to={"/form"}>
                  <button data-aos="zoom-in-up" className="btn-create-final">
                    Создать объявление
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Add;
