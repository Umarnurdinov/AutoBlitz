import React, { useState } from "react";
import "./card.scss";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Card({
  images = [],
  title,
  price,
  installment,
  mileage,
  year,
  transmission,
  drive,
}) {
  const [hover, setHover] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={`card ${hover ? "hover" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card-image-container">
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt={title}
            className="card-image"
          />
        )}
        {hover && images.length > 0 && (
          <>
            <button className="prev-photo-button" onClick={handlePrevClick}>
              <FaChevronLeft />
            </button>
            <button className="next-photo-button" onClick={handleNextClick}>
              <FaChevronRight />
            </button>
            <span className="heart-icon" onClick={() => setFavorite(!favorite)}>
              {favorite ? <MdFavorite /> : <MdFavoriteBorder />}
            </span>
          </>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price} сом</p>
        <p className="card-installment">от {installment} сом/мес</p>
        <div className="card-details">
          <span>{mileage} км</span>
          <span>{year} г</span>
          <span>{transmission}</span>
          <span>{drive}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
