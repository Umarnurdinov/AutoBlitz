import React, { useState } from "react";
import "./card.scss";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../store/slices/like";

function Card({ data }) {
  const dispatch=useDispatch()
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

    function favoriteClick() {
        setFavorite(!favorite);
      dispatch(addFavorite(data)
      )
    }   

    return (
        <div
            className={`card ${hover ? "hover" : ""}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
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
                        <button
                            className="prev-photo-button"
                            onClick={handlePrevClick}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            className="next-photo-button"
                            onClick={handleNextClick}
                        >
                            <FaChevronRight />
                        </button>
                        <span
                            className="heart-icon"
                            onClick={() => favoriteClick()}
                        >
                            {favorite ? <MdFavorite /> : <MdFavoriteBorder />}
                        </span>
                    </>
                )}
            </div>
            <div className="card-content">
                <h3 className="card-title">{data.title}</h3>
                <p className="card-price">{data.price} сом</p>
                <p className="card-installment">
                    от {data.installment} сом/мес
                </p>
                <div className="card-details">
                    <span>{data.mileage} км</span>
                    <span>{data.year} г</span>
                    <span>{data.transmission}</span>
                    <span>{data.drive}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
