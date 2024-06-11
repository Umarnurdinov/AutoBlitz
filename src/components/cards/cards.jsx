import React, { useRef, useEffect, useState } from "react";
import Card from "../card/card";
import bmw from "../../assets/bmwx5.webp";
import bmw2 from "../../assets/bmwx52.jpeg";
import bmw3 from "../../assets/bmwx53.webp";
import mercedes from "../../assets/mercedes.jpeg";
import mercedes2 from "../../assets/mercedes2.jpeg";
import mercedes3 from "../../assets/mercedes3.jpeg";
import lexusrx from "../../assets/lexusrx.jpeg";
import lexusrx2 from "../../assets/lexusrx2.jpeg";
import lexusrx3 from "../../assets/lexusrx3.jpeg";
import tesla from "../../assets/tesla3.webp";
import tesla2 from "../../assets/tesla3-2.avif";
import tesla3 from "../../assets/tesla3-3.jpeg";
import jetour from "../../assets/jetour.jpeg";
import jetour2 from "../../assets/jetour2.jpeg";
import jetour3 from "../../assets/jetour3.jpeg";
import bmwm from "../../assets/bmwm.png";
import bmwm2 from "../../assets/bmwm-2.avif";
import bmwm3 from "../../assets/bmwm-3.jpeg";
import toyota from "../../assets/toyotaHigh.jpeg";
import toyota2 from "../../assets/toyotaHigh2.avif";
import toyota3 from "../../assets/toyotaHigh3.jpeg";
import { useDispatch, useSelector } from "react-redux";
import "./cards.scss";
import { addData } from "../../store/slices/data";
import axios from "axios";

function Cards() {
  const [loading, setLoading] = useState(true);
  const [showArrows, setShowArrows] = useState(window.innerWidth > 900);
  const imgArray = [
    [bmw3, bmw2, bmw],
    [mercedes3, mercedes2, mercedes],
    [lexusrx3, lexusrx2, lexusrx],
    [tesla, tesla2, tesla3],
    [jetour, jetour2, jetour3],
    [bmwm2, bmwm, bmwm3],
    [toyota2, toyota, toyota3],
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://13.49.229.91:8000/cars/")
      .then((res) => {
        res.data.forEach((el, index) => {
          el.images = imgArray[index % imgArray.length]; // Add images to each car
          dispatch(addData(el));
        });
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  const cars = useSelector((state) => state.data.data);
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -310, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 310, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth > 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return (
      <div className="loaderToFullScreen">
        <div className="loaderHelp">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

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
          {cars.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>
        {showArrows && (
          <button className="arrow arrow-right" onClick={scrollRight}>
            {">"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Cards;
