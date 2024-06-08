import React, { useState, useEffect } from "react";
import axios from "axios";

const CarComponent = () => {
    const [enums, setEnums] = useState({});

    useEffect(() => {
        axios
            .get("http://13.49.183.39:8000/cars/")
            .then((response) => {
                const carModelSchema = response.data;
                const extractedEnums = {
                    yearOfManufacture:
                        carModelSchema.year_of_manufacture.Enum || [],
                    checkpoint: carModelSchema.checkpoint.Enum || [],
                    driveUnit: carModelSchema.drive_unit.Enum || [],
                    steeringWheel: carModelSchema.steering_wheel.Enum || [],
                };
                setEnums(extractedEnums);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
            });
    }, []); // Пустой массив зависимостей означает, что эффект выполняется только при монтировании компонента

    return <div>{/* Используйте enums здесь */}</div>;
};

export default CarComponent;
