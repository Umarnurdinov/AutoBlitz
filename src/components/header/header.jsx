import React from "react";
import logo from "../../assets/logo.png";
import { FiPlusCircle } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import "./header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_content">
            <div className="header_logo">
              <img src={logo} alt="#" className="header_logo_img" />
              <div className="header_logo_textContent"></div>
            </div>
            <div className="header_nav">
              <div className="header_nav_add">
                <FiPlusCircle className="plus" />
                <p className="header_nav_add_text">Продать авто</p>
              </div>
              <div className="header_nav_like">
                <FaRegHeart className="like" />
                <p className="header_nav_like_text">Избранное</p>
              </div>
              <div className="header_nav_signin">
                <FaRegUser className="signin" />
                <p className="header_nav_signin_text">Войти</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
