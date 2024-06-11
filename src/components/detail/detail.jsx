import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.scss";
import bmw1 from "../../assets/bmwx5.webp";
import bmw2 from "../../assets/bmwx52.jpeg";
import bmw3 from "../../assets/bmwx53.webp";
import mazda1 from "../../assets/mazda.webp";
import mazda2 from "../../assets/mazda3.webp";
import mazda3 from "../../assets/mazda2.jpeg";
import camry1 from "../../assets/camry.webp";
import camry2 from "../../assets/camry2.webp";
import camry3 from "../../assets/camry3.webp";
import mercedes from "../../assets/mercedes.jpeg";
import mercedes2 from "../../assets/mercedes2.jpeg";
import mercedes3 from "../../assets/mercedes3.jpeg";
import userMale from "../../assets/user.png";
import userFemale from "../../assets/userFemale.png";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

// const sampleData = [
//   {
//     id: 1,
//     marka: "LADA",
//     car_model: "Largus",
//     price: 1639000,
//     year_of_manufacture: 2021,
//     mileage: 43517,
//     body: "Универсал",
//     body_color: "Белый",
//     engine: "1.6 л, Бензин",
//     power: "106 л.с.",
//     checkpoint: "Механическая ",
//     drive_unit: "Передний привод",
//     owners: 1,
//     steering_wheel: "Левый",
//     phone_number: "+996 702 138 887",
//     name: "Аделина",
//     gender: "",
//     images: [
//       camry1,
//       camry2,
//       camry3,
//       bmw1,
//       bmw2,
//       bmw3,
//       mazda1,
//       mazda2,
//       mazda3,
//       mercedes,
//       mercedes2,
//       mercedes3,
//     ],
//   },
// ];

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [showFullNumber, setShowFullNumber] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [like, setLike] = useState(false);
  const datas = useSelector((state) => state.data.data);

  useEffect(() => {
    const car = datas.find((el) => el.id == id);
    if (car) {
      setData(car);
      setSelectedImage(car.images[0]);
      setCurrentIndex(0);
    }
  }, [id]);
  const guessGender = (name) => {
    const femaleNames = ["а", "я", "и", "a"];
    const lastChar = name.slice(-1).toLowerCase();
    return femaleNames.includes(lastChar) ? "female" : "male";
  };

  const handleThumbnailClick = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % data.images.length;
    setSelectedImage(data.images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    const prevIndex =
      (currentIndex - 1 + data.images.length) % data.images.length;
    setSelectedImage(data.images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${data.phone_number.replace(/\s+/g, "")}`,
      "_blank"
    );
  };

  const openTelegram = () => {
    window.open(
      `https://t.me/${data.phone_number.replace(/\s+/g, "")}`,
      "_blank"
    );
  };

  const handleShowNumberClick = () => {
    setShowFullNumber(true);
  };

  const handleContactClick = () => {
    setShowContactOptions(!showContactOptions);
  };

  const maskPhoneNumber = (number) => {
    return number.replace(/\d(?=\d{0,2}$)/g, "x");
  };
  if (!data) {
    return (
      <div className="loaderToCenter">
        <div className="loaderHelper">
          <div className="loader"></div>
        </div>
      </div>
    );
  }
  function favorite() {
    setLike(!like);
  }

  return (
    <div className="detail">
      <div className="container">
        <div className="detail-header">
          <div className="detail-info">
            <h1 className="name">{` ${data.marka_name} ${data.car_model} ${data.body_name} `}</h1>
            <div className="detail-infoContent">
              <div className="detail-location">
                <IoLocationOutline size={25} />
                <p className="loactionText">Бишкек</p>
              </div>
              <div className="detail-favorite" onClick={favorite}>
                {like ? (
                  <MdFavorite size={30} />
                ) : (
                  <MdFavoriteBorder size={30} />
                )}
                <p className="favoriteText">В избранное</p>
              </div>
            </div>
          </div>
          <div className="detail-buy">
            <h2 className="price">{` ${data.price.toLocaleString()} сом`}</h2>
            <a href={`tel:${data.phone_number}`} className="call">
              Позвонить
            </a>
          </div>
        </div>
        <div className="content">
          <div className="car-details">
            <h3>Характеристики</h3>
            <ul>
              <li>
                <strong className="detailText">Год выпуска:</strong>
                {data.year_of_manufacture_name}
              </li>
              <li>
                <strong className="detailText">Пробег:</strong>
                {data.mileage.toLocaleString()} км
              </li>
              <li>
                <strong className="detailText">Кузов:</strong> {data.body_name}
              </li>
              <li>
                <strong className="detailText">Цвет кузова:</strong>
                {data.body_color_name}
              </li>
              <li>
                <strong className="detailText">Двигатель:</strong> {data.engine}
              </li>
              <li>
                <strong className="detailText">Мощность:</strong> {data.power}
              </li>
              <li>
                <strong className="detailText">КПП:</strong>
                {data.checkpoint_name}
              </li>
              <li>
                <strong className="detailText">Привод:</strong>
                {data.drive_unit_name}
              </li>
              <li>
                <strong className="detailText">Владельцы:</strong> {data.owners}
              </li>
              <li>
                <strong className="detailText">Руль:</strong>
                {data.steering_wheel_name}
              </li>
              <li>
                <strong className="detailText">Номер телефона:</strong>
                {showFullNumber
                  ? data.phone_number
                  : maskPhoneNumber(data.phone_number)}
              </li>
            </ul>
            <div className="contact-info">
              <div className="contact-user">
                <img
                  src={
                    guessGender(data.name) === "male" ? userMale : userFemale
                  }
                  alt="User"
                  className="contact-avatar"
                />
                <p className="contact-name">{data.name}</p>
                <button className="contact-button" onClick={handleContactClick}>
                  {showContactOptions ? "Скрыть" : "Написать"}
                </button>
              </div>
              <div className="contact-number">
                {showFullNumber
                  ? data.phone_number
                  : maskPhoneNumber(data.phone_number)}
                {!showFullNumber && (
                  <span className="show-number" onClick={handleShowNumberClick}>
                    Показать
                  </span>
                )}
              </div>
              {showFullNumber && (
                <div className="contact-options">
                  <a
                    href={`tel:${data.phone_number.replace(/\s+/g, "")}`}
                    className="option"
                  >
                    Позвонить
                  </a>
                  {showContactOptions && (
                    <>
                      <button className="option" onClick={openWhatsApp}>
                        Написать в WhatsApp
                      </button>
                      <button className="option" onClick={openTelegram}>
                        Написать в Telegram
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="detail-adaptive">
            <div className="detail-location-adaptive">
              <IoLocationOutline size={25} />
              <p className="loactionText-adaptive">Бишкек</p>
            </div>
            <div className="detail-favorite-adaptive" onClick={favorite}>
              {like ? <MdFavorite size={30} /> : <MdFavoriteBorder size={30} />}
            </div>
          </div>
          <div className="car-images">
            <div className="main-image" onClick={openFullscreen}>
              <img src={selectedImage} alt="Selected" />
            </div>
            <div className="thumbnail-images">
              {data.images
                .slice(0, showAll ? data.images.length : 4)
                .map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index}`}
                    onClick={() => handleThumbnailClick(img, index)}
                    className={img === selectedImage ? "active" : ""}
                  />
                ))}
              {!showAll && (
                <div
                  className="show-all-thumbnail"
                  onClick={() => setShowAll(true)}
                >
                  Смотреть все
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="detail-buy-adaptive">
        <h2 className="price-adaptive">{` ${data.price.toLocaleString()} сом`}</h2>
        <a href={`tel:${data.phone_number}`} className="call-adaptive">
          Позвонить
        </a>
      </div>
      {isFullscreen && (
        <div className="fullscreen-image" onClick={closeFullscreen}>
          <button className="prev-button" onClick={showPrevImage}>
            ‹
          </button>
          <img src={selectedImage} alt="Full Screen" />
          <button className="next-button" onClick={showNextImage}>
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default Detail;
