import React, { useState } from "react";
import "./card.scss";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaN } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { detailData } from "../../store/slices/detail";

function Card({ data }) {
  const nav = useNavigate();

  const [hover, setHover] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };
  function cardClick(id) {
    nav(`/detail/${id}`);
    dispatch(detailData(data));
  }
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      onClick={() => cardClick(data.id)}
      className={`card ${hover ? "hover" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={"/detail"}>
        <div className="card-image-container">
          {data.images.length > 0 && (
            <img
              src={data.images[currentImageIndex]}
              alt={data.title}
              className="card-image"
            />
          )}
          {hover && data.images.length > 0 && (
            <>
              <button className="prev-photo-button" onClick={handlePrevClick}>
                <FaChevronLeft />
              </button>
              <button className="next-photo-button" onClick={handleNextClick}>
                <FaChevronRight />
              </button>
              <span
                className="heart-icon"
                onClick={() => setFavorite(!favorite)}
              >
                {favorite ? <MdFavorite /> : <MdFavoriteBorder />}
              </span>
            </>
          )}
        </div>
        <div className="card-content">
          <h3 className="card-title">{data.title}</h3>
          <p className="card-price">{data.price} сом</p>
          <p className="card-installment">от {data.installment} сом/мес</p>
          <div className="card-details">
            <span>{data.mileage} км</span>
            <span>{data.year} г</span>
            <span>{data.transmission}</span>
            <span>{data.drive}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
