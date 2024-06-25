import React, { useRef, useEffect, useState } from "react";
import Card from "../card/card";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addData } from "../../store/slices/data";
import "./cards.scss";

function Cards() {
  const [loading, setLoading] = useState(true);
  const [showArrows, setShowArrows] = useState(window.innerWidth > 900);
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://13.49.229.91:8000/cars/");
        res.data.forEach((el) => dispatch(addData(el)));
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cars data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const cars = useSelector((state) => state.data.data);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth > 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -310, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 310, behavior: "smooth" });
  };

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
