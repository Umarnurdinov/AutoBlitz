import React, { useRef, useEffect, useState } from "react";
import Card from "../card/card";
import mazda from "../../assets/mazda.webp";
import mazda2 from "../../assets/mazda2.jpeg";
import mazda3 from "../../assets/mazda3.webp";
import camry from "../../assets/camry.webp";
import camry2 from "../../assets/camry2.webp";
import camry3 from "../../assets/camry3.webp";
import honda from "../../assets/honda.jpeg";
import honda2 from "../../assets/honda2.jpeg";
import honda3 from "../../assets/honda3.webp";
import bmw from "../../assets/bmwx5.webp";
import bmw2 from "../../assets/bmwx52.jpeg";
import bmw3 from "../../assets/bmwx53.webp";
import mercedes from "../../assets/mercedes.jpeg";
import mercedes2 from "../../assets/mercedes2.jpeg";
import mercedes3 from "../../assets/mercedes3.jpeg";
import { useDispatch } from "react-redux";
import "./cards.scss";
import { Button } from "antd";
import { addData } from "../../store/slices/data";

function Cards() {
  const cardData = [
    {
      images: [mazda, mazda2, mazda3],
      title: "Mazda 6 3 (GJ) Рестайлинг",
      price: "2 178 000",
      installment: "37 219",
      mileage: "78 395",
      year: "2018",
      transmission: "АТ",
      drive: "Передний привод",
      id: 1,
    },
    {
      images: [camry, camry2, camry3],
      title: "Toyota Camry 7 Рестайлинг",
      price: "2 400 000",
      installment: "41 071",
      mileage: "82 000",
      year: "2017",
      transmission: "АТ",
      drive: "Полный привод",
      id: 2,
    },
    {
      images: [honda, honda2, honda3],
      title: "Honda CR-V 5 Рестайлинг",
      price: "2 950 000",
      installment: "50 482",
      mileage: "55 000",
      year: "2019",
      transmission: "АКП",
      drive: "Полный привод",
      id: 3,
    },
    {
      images: [bmw, bmw2, bmw3],
      title: "BMW X5",
      price: "5 200 000",
      installment: "89 247",
      mileage: "30 000",
      year: "2020",
      transmission: "АКПП",
      drive: "Полный привод",
      id: 4,
    },
    {
      images: [mercedes, mercedes2, mercedes3],
      title: "Mercedes-Benz E-Class",
      price: "3 700 000",
      installment: "63 424",
      mileage: "40 000",
      year: "2019",
      transmission: "АКПП",
      drive: "Задний привод",
      id: 5,
    },
  ];

  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const [showArrows, setShowArrows] = useState(window.innerWidth > 900);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  const handleAddData = () => {
    dispatch(addData(cardData));
  };

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth > 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="cards">
      <div className="container">
        <h2 className="recomendText">Рекомендуем вам</h2>
        {showArrows && (
          <button className="arrow arrow-left" onClick={scrollLeft}>
            {"<"}
          </button>
        )}
        <div className="cards-container" ref={containerRef}>
          {cardData.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>
        {showArrows && (
          <button className="arrow arrow-right" onClick={scrollRight}>
            {">"}
          </button>
        )}
        <Button danger onClick={handleAddData}>
          Эз
        </Button>
      </div>
    </div>
  );
}

export default Cards;
