import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../card/card";

function NewCars() {
  const [filtrCar, setFiltrCar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://13.49.229.91:8000/cars/");
        const newCars = res.data.filter((el) => el.mileage === 0);
        setFiltrCar(newCars);
      } catch (error) {
        console.error("Error fetching cars data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h4 className="recomendText">Новые, крутые автомобили</h4>
      <div className="cards-container">
        {filtrCar.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
}

export default NewCars;
