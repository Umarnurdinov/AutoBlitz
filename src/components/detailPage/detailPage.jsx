import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../card/card";

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
    <div className="detail">
      <div className="container">
        {data ? <Card data={data} /> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default DetailPage;
