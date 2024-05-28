import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { FiPlusCircle } from "react-icons/fi";
import "./detail.scss";
export const Sale = () => {
    return (
        <>
            <div className="container">
                <div className="btns">
                    <Link to="/cars" className="btn btn_search">
                        <CgSearch size={20} />
                        Перейти к поиску авто
                    </Link>
                    <Link to="/addCar" className="btn btn_sell">
                        <FiPlusCircle size={20} />
                        Продать
                    </Link>
                </div>
             
            </div>
        </>
    );
};
