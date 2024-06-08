import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../card/card";
import honda3 from "../../assets/honda3.webp";


const dataFacke = {
    id: 0,
    marka: 0,//марка
    car_model: "string",//model
    price: 9223372036854776000,//цена
    year_of_manufacture: 1990,//  дата выпуска
    mileage: 9223372036854776000,//пробег
    body: 0,                  // кузов
    body_color: 0,            // цвет машины
    engine: 0,                //двигатель
    power: "string",          //мощность
    checkpoint: "Механическая коробка передач",//коробка  передач
    drive_unit: "Передний привод", //привод
    owners: 9223372036854776000,   //владелец
    steering_wheel: "Левый",     //руль
    images: ["string"],        //фото
};

function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const carData = useSelector((state) => state.data.data);

  useEffect(() => {
    const car = carData.flat().find((el) => el.id == id);
    if (car) {
      setData(car);
    }
  }, [carData, id]);

  return (
      // <div className="detail">
      //   <div className="container">
      //     {data ? <Card data={data} /> : <p>Loading...</p>}
      //   </div>
      // </div>
      <>
          <div className="car-ad-container">
              <h1>Skoda Octavia, 3 Рестайлинг</h1>
              <p className="location">Москва</p>
              <div className="price-container">
                  <span className="price">от 2 299 000 ₽</span>
                  <button className="buy-button">Хочу купить</button>
              </div>
              <div className="car-details">
                  <div className="car-image">
                      <img src={honda3} alt="Skoda Octavia" />
                  </div>
                  <div className="car-info">
                      <h2>Характеристики</h2>
                      <ul>
                          <li>Год выпуска: 2020</li>
                          <li>Пробег: 51535 км</li>
                          <li>Кузов: Лифтбек</li>
                          <li>Цвет кузова: Белый</li>
                          <li>Двигатель: 1.8 л, Бензин</li>
                          <li>Мощность: 180 л.с.</li>
                          <li>КПП: Автомат робот</li>
                          <li>Привод: Передний</li>
                          <li>Владельцы: Один</li>
                          <li>Руль: Левый</li>
                          <li>VIN: XW8A***************</li>
                          <li>Комплектация: Ambition</li>
                      </ul>
                  </div>
              </div>
          </div>
      </>
  );
}

export default DetailPage;
