import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./form.scss";
import axios from "axios";

function Form() {
  const [errors, setErrors] = useState({});
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("http://13.49.229.91:8000/car-data/").then((res) => {
      carSet({
        marka: res.data.marka,
        body: res.data.body,
        color: res.data.body_color,
        checkpoint: res.data.checkpoint,
        driveUnit: res.data.drive_unit,
        steer: res.data.steering_wheel,
        introduceYear: res.data.year_of_manufacture,
      });
    });
  }, []);

  const [formData, setFormData] = useState({
    marka: 0,
    car_model: "",
    price: 0,
    year_of_manufacture: 0,
    mileage: 0,
    body: 0,
    body_color: 0,
    engine: "",
    power: "",
    name: "",
    phone_number: "",
    checkpoint: 0,
    drive_unit: 0,
    owners: 0,
    steering_wheel: "",
    images: [],
  });
  const [car, carSet] = useState({
    marka: [],
    body: [],
    color: [],
    checkpoint: [],
    driveUnit: [],
    steer: [],
    introduceYear: [],
  });

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Это поле обязательно";
    if (!formData.number) newErrors.number = "Это поле обязательно";
    if (!formData.gender) newErrors.gender = "Это поле обязательно";
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
  function sendHandler() {
    axios
      .post("http://13.49.183.39:8000/cars/", formData)
      .then((res) => console.log(res));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formDataToSubmit = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "images") {
          formData[key].forEach((imageObject) => {
            formDataToSubmit.append("images", JSON.stringify(imageObject));
          });
        } else {
          formDataToSubmit.append(key, formData[key]);
        }
      });

      axios
        .post("http://13.49.183.39:8000/cars/", formDataToSubmit)
        .then((res) => console.log(res));
    }
  };

  const handleImageUpload = (event) => {
    const fileList = event.target.files;
    const newImages = [];
    for (let i = 0; i < fileList.length; i++) {
      const imageUrl = URL.createObjectURL(fileList[i]);
      newImages.push({
        car: formData.marka,
        image: imageUrl,
      });
    }
    setImages((prevImages) => [...prevImages, ...newImages]);
    const formDataCopy = { ...formData };
    formDataCopy.images = [...formData.images, ...newImages];
    setFormData(formDataCopy);
  };

  return (
    <div className="form">
      <Link to="/">
        <button className="btn-back">{"< "}Назад</button>
      </Link>
      <h2>Введите данные об авто</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Введите имя"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="number">Номер</label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Введите номер"
            value={formData.phone_number}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone_number: e.target.value,
              })
            }
          />
          {errors.number && <span className="error">{errors.number}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="brand">Марка авто</label>
          <select
            id="brand"
            name="brand"
            value={formData.marka}
            onChange={(e) =>
              setFormData({
                ...formData,
                marka: Number(e.target.value),
              })
            }
          >
            <option value="">Выберите марку</option>
            {car.marka.map((el) => (
              <option key={el.id} value={el.id}>
                {el.marka}
              </option>
            ))}
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
            value={formData.car_model}
            onChange={(e) =>
              setFormData({
                ...formData,
                car_model: e.target.value,
              })
            }
          />
          {errors.model && <span className="error">{errors.model}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="bodyType">Кузов</label>
          <select
            id="bodyType"
            name="bodyType"
            value={formData.body}
            onChange={(e) =>
              setFormData({
                ...formData,
                body: Number(e.target.value),
              })
            }
          >
            <option value="">Выберите кузов</option>
            {car.body.map((el) => (
              <option key={el.id} value={el.id}>
                {el.body}
              </option>
            ))}
          </select>
          {errors.bodyType && <span className="error">{errors.bodyType}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="color">Цвет</label>
          <select
            id="color"
            name="color"
            value={formData.body_color}
            onChange={(e) =>
              setFormData({
                ...formData,
                body_color: Number(e.target.value),
              })
            }
          >
            <option value="">Выберите цвет</option>
            {car.color.map((el) => (
              <option key={el.id} value={el.id}>
                {el.body_color}
              </option>
            ))}
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
            onChange={(e) =>
              setFormData({
                ...formData,
                engine: e.target.value,
              })
            }
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
            onChange={(e) =>
              setFormData({
                ...formData,
                power: e.target.value,
              })
            }
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
            onChange={(e) =>
              setFormData({
                ...formData,
                price: Number(e.target.value),
              })
            }
          />
          {errors.price && <span className="error">{errors.price}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="year">Год выпуска</label>
          <select
            id="year"
            name="year"
            value={formData.year_of_manufacture}
            onChange={(e) =>
              setFormData({
                ...formData,
                year_of_manufacture: Number(e.target.value),
              })
            }
          >
            <option value="">Выберите год</option>
            {car.introduceYear.map((el) => (
              <option key={el.id} value={el.id}>
                {el.year_of_manufacture}
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
            onChange={(e) =>
              setFormData({
                ...formData,
                mileage: Number(e.target.value),
              })
            }
          />
          {errors.mileage && <span className="error">{errors.mileage}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="transmission">Коробка передач</label>
          <select
            id="transmission"
            name="transmission"
            value={formData.checkpoint}
            onChange={(e) =>
              setFormData({
                ...formData,
                checkpoint: Number(e.target.value),
              })
            }
          >
            <option value="">Выберите коробку передач</option>
            {car.checkpoint.map((el) => (
              <option key={el.id} value={el.id}>
                {el.checkpoint}
              </option>
            ))}
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
            value={formData.drive_unit}
            onChange={(e) =>
              setFormData({
                ...formData,
                drive_unit: Number(e.target.value),
              })
            }
          >
            <option value="">Выберите привод</option>
            {car.driveUnit.map((el) => (
              <option key={el.id} value={el.id}>
                {el.drive_unit}
              </option>
            ))}
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
            onChange={(e) =>
              setFormData({
                ...formData,
                owners: Number(e.target.value),
              })
            }
          />
          {errors.owners && <span className="error">{errors.owners}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="steering">Руль</label>
          <select
            id="steering"
            name="steering"
            value={formData.steering_wheel}
            onChange={(e) =>
              setFormData({
                ...formData,
                steering_wheel: Number(e.target.value),
              })
            }
          >
            <option value="">Выберите положение руля</option>
            {car.steer.map((el) => (
              <option key={el.id} value={el.id}>
                {el.steering_wheel}
              </option>
            ))}
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
          <button onClick={sendHandler} type="submit" className="btn-submit">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
