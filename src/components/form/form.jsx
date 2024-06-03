import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./form.scss";

function Form() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    bodyType: "",
    color: "",
    engine: "",
    power: "",
    price: "",
    year: "",
    mileage: "",
    transmission: "",
    drivetrain: "",
    owners: "",
    steering: "",
    photo: null,
  });

  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.brand) newErrors.brand = "Это поле обязательно";
    if (!formData.model) newErrors.model = "Это поле обязательно";
    if (!formData.bodyType) newErrors.bodyType = "Это поле обязательно";
    if (!formData.color) newErrors.color = "Это поле обязательно";
    if (!formData.engine) newErrors.engine = "Это поле обязательно";
    if (!formData.power) newErrors.power = "Это поле обязательно";
    if (!formData.price) newErrors.price = "Это поле обязательно";
    if (!formData.year) newErrors.year = "Это поле обязательно";
    if (!formData.mileage) newErrors.mileage = "Это поле обязательно";
    if (!formData.transmission) newErrors.transmission = "Это поле обязательно";
    if (!formData.steering) newErrors.steering = "Это поле обязательно";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formDataToSubmit = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSubmit.append(key, formData[key]);
      });

      fetch("YOUR_BACKEND_ENDPOINT", {
        method: "POST",
        body: formDataToSubmit,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="form">
      <Link to="/">
        <button className="btn-back">{"< "}Назад</button>
      </Link>
      <h2>Введите данные об авто</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="brand">Марка авто</label>
          <select
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          >
            <option value="">Выберите марку</option>
            <option value="toyota">Toyota</option>
            <option value="ford">Ford</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
          </select>
          {errors.brand && <span className="error">{errors.brand}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="model">Модель</label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="Введите модель"
            value={formData.model}
            onChange={handleChange}
          />
          {errors.model && <span className="error">{errors.model}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="bodyType">Кузов</label>
          <select
            id="bodyType"
            name="bodyType"
            value={formData.bodyType}
            onChange={handleChange}
          >
            <option value="">Выберите кузов</option>
            <option value="sedan">Седан</option>
            <option value="suv">Внедорожник</option>
            <option value="coupe">Купе</option>
            <option value="hatchback">Хэтчбек</option>
            <option value="convertible">Кабриолет</option>
          </select>
          {errors.bodyType && <span className="error">{errors.bodyType}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="color">Цвет</label>
          <select
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          >
            <option value="">Выберите цвет</option>
            <option value="black">Черный</option>
            <option value="white">Белый</option>
            <option value="silver">Серебристый</option>
            <option value="blue">Синий</option>
            <option value="red">Красный</option>
          </select>
          {errors.color && <span className="error">{errors.color}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="engine">Двигатель</label>
          <input
            type="text"
            id="engine"
            name="engine"
            placeholder="Введите двигатель"
            value={formData.engine}
            onChange={handleChange}
          />
          {errors.engine && <span className="error">{errors.engine}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="power">Мощность, л.с.</label>
          <input
            type="number"
            id="power"
            name="power"
            placeholder="Введите мощность"
            value={formData.power}
            onChange={handleChange}
          />
          {errors.power && <span className="error">{errors.power}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Цена, руб</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Введите цену"
            value={formData.price}
            onChange={handleChange}
          />
          {errors.price && <span className="error">{errors.price}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="year">Год выпуска</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
          >
            <option value="">Выберите год</option>
            {[...Array(35).keys()].map((i) => (
              <option key={2024 - i} value={2024 - i}>
                {2024 - i}
              </option>
            ))}
          </select>
          {errors.year && <span className="error">{errors.year}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="mileage">Пробег, км</label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            placeholder="Введите пробег"
            value={formData.mileage}
            onChange={handleChange}
          />
          {errors.mileage && <span className="error">{errors.mileage}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="transmission">Коробка передач</label>
          <select
            id="transmission"
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
          >
            <option value="">Выберите коробку передач</option>
            <option value="automatic">Автоматическая</option>
            <option value="manual">Механическая</option>
            <option value="cvt">Вариатор</option>
            <option value="dual-clutch">Робот</option>
          </select>
          {errors.transmission && (
            <span className="error">{errors.transmission}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="drivetrain">Привод</label>
          <select
            id="drivetrain"
            name="drivetrain"
            value={formData.drivetrain}
            onChange={handleChange}
          >
            <option value="">Выберите привод</option>
            <option value="awd">Полный</option>
            <option value="fwd">Передний</option>
            <option value="rwd">Задний</option>
          </select>
          {errors.drivetrain && (
            <span className="error">{errors.drivetrain}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="owners">Количество владельцев</label>
          <input
            type="number"
            id="owners"
            name="owners"
            placeholder="Введите количество владельцев"
            value={formData.owners}
            onChange={handleChange}
          />
          {errors.owners && <span className="error">{errors.owners}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="steering">Руль</label>
          <select
            id="steering"
            name="steering"
            value={formData.steering}
            onChange={handleChange}
          >
            <option value="">Выберите положение руля</option>
            <option value="left">Левый</option>
            <option value="right">Правый</option>
          </select>
          {errors.steering && <span className="error">{errors.steering}</span>}
        </div>

        <div>
          <input type="file" multiple onChange={handleFileChange} />
          <div className="photo-preview">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`upload-${index}`} />
            ))}
          </div>
          <div>Количество выбранных фото: {images.length}</div>
        </div>

        <div className="btn_toEnd">
          <button type="submit" className="btn-submit">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
