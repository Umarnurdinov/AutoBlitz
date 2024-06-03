import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import logoAdd from "../../assets/logoAdd.webp";
import "./add.scss";

function Add() {
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState("");

  const handleSellClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container">
        <div className="btns">
          <Link to="/cars" className="btn btn_search">
            <IoSearch size={20} />
            Перейти к поиску авто
          </Link>
          <button onClick={handleSellClick} className="btn btn_sell">
            <FiPlusCircle size={20} />
            Продать
          </button>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Как вы хотите продать авто?</h2>
            <div className="modal-body">
              <div className="tab-content">
                <ul className="ul">
                  <li className="li">
                    Нет ограничений по возрасту и пробегу автомобиля
                  </li>
                  <li className="li">
                    Вы сами определяете стоимость вашего автомобиля
                  </li>
                  <li className="li">Личная коммуникация с покупателями</li>
                </ul>
                <img className="icon" src={logoAdd} alt="#" />
                <Link to={"/form"}>
                  <button className="btn-create-final">
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
