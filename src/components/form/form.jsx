// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./form.scss";
// import axios from "axios";
// import { useDispatch } from "react-redux";

// function Form() {
//     const [errors, setErrors] = useState({});
//     const [images, setImages] = useState([]);

//     const [car, carSet] = useState({
//         marka: [],
//         body: [],
//         color: [],
//         checkpoint:[],
//         driveUnit:[],
//         steer:[],
//         introduceYear: [],
//     });
    

//        useEffect(() => {
//            axios.get("http://13.49.183.39:8000/car-data/").then((res) =>{
//              carSet({
//                  ...car,
//                  marka: res.data.marka,
//                  body: res.data.body,
//                  color: res.data.body_color,
//                  checkpoint: res.data.checkpoint,
//                  driveUnit: res.data.drive_unit,
//                  steer: res.data.steering_wheel,
//                  introduceYear: res.data.year_of_manufacture,
//              });
//              }
             
//              )
//              }, []);
             


//     const [formData, setFormData] = useState({
//         marka: 0,
//         car_model: "",
//         price: 0,
//         year_of_manufacture: 0,
//         mileage: 0,
//         body: 0,
//         body_color: 0,
//         engine: "",
//         power: "",
//         name:"",
//         phone_number:"",
//         checkpoint: 0,
//         drive_unit: 0,
//         owners: 0,
//         steering_wheel: "",
//         images: [],
//     });

    
//     function sendHandler() {
//         axios
//         .post("http://13.49.183.39:8000/cars/", formData)
//         .then((res) => console.log(res));
//         }

//     function getHandler() {
//         axios
//             .get("http://13.49.183.39:8000/cars/")
//             .then((res) => console.log(res));
//     }


//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.marka) newErrors.marka = "Это поле обязательно";
//         if (!formData.car_model) newErrors.car_model = "Это поле обязательно";
//         if (!formData.body) newErrors.body = "Это поле обязательно";
//         if (!formData.body_color) newErrors.body_color = "Это поле обязательно";
//         if (!formData.engine) newErrors.engine = "Это поле обязательно";
//         if (!formData.power) newErrors.power = "Это поле обязательно";
//         if (!formData.price) newErrors.price = "Это поле обязательно";
//         if (!formData.year_of_manufacture)
//             newErrors.year_of_manufacture = "Это поле обязательно";
//         if (!formData.mileage) newErrors.mileage = "Это поле обязательно";
//         if (!formData.checkpoint) newErrors.checkpoint = "Это поле обязательно";
//         if (!formData.steering_wheel)
//             newErrors.steering_wheel = "Это поле обязательно";
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             const formDataToSubmit = new FormData();
//             Object.keys(formData).forEach((key) => {
//                 formDataToSubmit.append(key, formData[key]);
//             });
//         }
//     };

//     const handleImageUpload = (event) => {
//         const fileList = event.target.files;
//         const newImages = [];
//         for (let i = 0; i < fileList.length; i++) {
//             const imageUrl = URL.createObjectURL(fileList[i]);
//             newImages.push(imageUrl);
//         }
//         setImages((prevImages) => [...prevImages, ...newImages]);
//         const formDataCopy = { ...formData };
//         formDataCopy.images = [...formData.images, ...newImages];
//         setFormData(formDataCopy);
//     };

//     return (
//         <div className="form">
//             <Link to="/">
//                 <button className="btn-back">{"< "}Назад</button>
//             </Link>
//             <h2>Введите данные об авто</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="marka">Марка авто</label>
//                     <select
//                         id="marka"
//                         name="marka"
//                         value={formData.marka}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 marka: Number(e.target.value),
//                             })
//                         }
//                     >
//                         <option value="">Выберите марку</option>
//                         {car.marka.map((el) => (
//                             <option value={el.id}>{el.marka}</option>
//                         ))}
//                     </select>
//                     {errors.marka && (
//                         <span className="error">{errors.marka}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="car_model">Модель</label>
//                     <input
//                         type="text"
//                         id="car_model"
//                         name="car_model"
//                         placeholder="Введите модель"
//                         value={formData.car_model}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 car_model: e.target.value,
//                             })
//                         }
//                     />
//                     {errors.car_model && (
//                         <span className="error">{errors.car_model}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="body">Кузов</label>
//                     <select
//                         id="body"
//                         name="body"
//                         value={formData.body}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 body: Number(e.target.value),
//                             })
//                         }
//                     >
//                         <option value="">Выберите кузов</option>
//                         {car.body.map((el) => (
//                             <option value={el.id}>{el.body}</option>
//                         ))}
//                     </select>
//                     {errors.body && (
//                         <span className="error">{errors.body}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="body_color">Цвет</label>
//                     <select
//                         id="body_color"
//                         name="body_color"
//                         value={formData.body_color}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 body_color: Number(e.target.value),
//                             })
//                         }
//                     >
//                         <option value="">Выберите цвет</option>
//                         {car.color.map((el) => (
//                             <option value={el.id}>{el.body_color}</option>
//                         ))}
//                     </select>
//                     {errors.body_color && (
//                         <span className="error">{errors.body_color}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="engine">Двигатель</label>
//                     <input
//                         type="text"
//                         id="engine"
//                         name="engine"
//                         placeholder="Введите двигатель"
//                         value={formData.engine}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 engine: e.target.value,
//                             })
//                         }
//                     />
//                     {errors.engine && (
//                         <span className="error">{errors.engine}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="power">Мощность, л.с.</label>
//                     <input
//                         type="text"
//                         id="power"
//                         name="power"
//                         placeholder="Введите мощность"
//                         value={formData.power}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 power: e.target.value,
//                             })
//                         }
//                     />
//                     {errors.power && (
//                         <span className="error">{errors.power}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="price">Цена, руб</label>
//                     <input
//                         type="number"
//                         id="price"
//                         name="price"
//                         placeholder="Введите цену"
//                         value={formData.price}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 price: Number(e.target.value),
//                             })
//                         }
//                     />
//                     {errors.price && (
//                         <span className="error">{errors.price}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="year_of_manufacture">Год выпуска</label>
//                     <select
//                         id="year_of_manufacture"
//                         name="year_of_manufacture"
//                         value={formData.year_of_manufacture}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 year_of_manufacture: Number(e.target.value),
//                             })
//                         }
//                     >
//                         <option value="">Выберите год</option>
//                         {car.introduceYear.map((el) => (
//                             <option value={el.id}>
//                                 {el.year_of_manufacture}
//                             </option>
//                         ))}
//                     </select>
//                     {errors.year_of_manufacture && (
//                         <span className="error">
//                             {errors.year_of_manufacture}
//                         </span>
//                     )}
//                 </div>
             
//                 <div className="form-group">
//                     <label htmlFor="mileage">Пробег, км</label>
//                     <input
//                         type="number"
//                         id="mileage"
//                         name="mileage"
//                         placeholder="Введите пробег"
//                         value={formData.mileage}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 mileage: Number(e.target.value),
//                             })
//                         }
//                     />
//                     {errors.mileage && (
//                         <span className="error">{errors.mileage}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="checkpoint">Коробка передач</label>
//                     <select
//                         id="checkpoint"
//                         name="checkpoint"
//                         value={formData.checkpoint}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 checkpoint: Number(e.target.value),
//                             })
//                         }
//                     >
//                         <option value="">Выберите коробку передач</option>
//                         {car.checkpoint.map((el) => (
//                             <option value={parseInt(el.id)}>
//                                 {el.checkpoint}
//                             </option>
//                         ))}
//                     </select>
//                     {errors.checkpoint && (
//                         <span className="error">{errors.checkpoint}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="drive_unit">Привод</label>
//                     <select
//                         id="drive_unit"
//                         name="drive_unit"
//                         value={formData.drive_unit}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 drive_unit: Number(e.target.value),
//                             })
//                         }
//                     >
//                         <option value="">Выберите привод</option>
//                         {car.driveUnit.map((el) => (
//                             <option value={parseInt(el.id)}>
//                                 {el.drive_unit}
//                             </option>
//                         ))}
//                     </select>
//                     {errors.drive_unit && (
//                         <span className="error">{errors.drive_unit}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="owners">Количество владельцев</label>
//                     <input
//                         type="number"
//                         id="owners"
//                         name="owners"
//                         placeholder="Введите количество владельцев"
//                         value={formData.owners}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 owners: Number(e.target.value),
//                             })
//                         }
//                     />
//                     {errors.owners && (
//                         <span className="error">{errors.owners}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="steering_wheel">Руль</label>
//                     <select
//                         id="steering_wheel"
//                         name="steering_wheel"
//                         value={formData.steering_wheel}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 steering_wheel: Number(e.target.value),
//                             })
//                         }
//                     >
//                         <option value="">Выберите положение руля</option>
//                         {car.steer.map((el) => (
//                             <option value={el.id}>{el.steering_wheel}</option>
//                         ))}
//                     </select>
//                     {errors.steering_wheel && (
//                         <span className="error">{errors.steering_wheel}</span>
//                     )}
//                 </div>
//                 <div className="">
//                     <input
//                         type="text"
//                         placeholder="write your name"
//                         value={formData.name}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 name: e.target.value,
//                             })
//                         }
//                     />
//                 </div>
//                 <div className="">
//                     <input
//                         type="text"
//                         placeholder="write your phone number"
//                         value={formData.phone_number}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 phone_number: e.target.value,
//                             })
//                         }
//                     />
//                 </div>
//                 <div>
//                     <input type="file" multiple onChange={handleImageUpload} />
//                     <div className="photo-preview">
//                         {images.map((image, index) => (
//                             <img
//                                 key={index}
//                                 src={image}
//                                 alt={`upload-${index}`}
//                             />
//                         ))}
//                     </div>
//                     <div>Количество выбранных фото: {images.length}</div>
//                 </div>
//                 <div className="btn_toEnd">
//                     <button
//                         onClick={sendHandler}
//                         type="submit"
//                         className="btn-submit"
//                     >
//                         Отправить
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Form;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./form.scss";
import axios from "axios";

function Form() {
    const [errors, setErrors] = useState({});
    const [images, setImages] = useState([]);

    const [car, carSet] = useState({
        marka: [],
        body: [],
        color: [],
        checkpoint: [],
        driveUnit: [],
        steer: [],
        introduceYear: [],
    });

    useEffect(() => {
        axios.get("http://13.49.183.39:8000/car-data/").then((res) => {
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
    console.log(formData);

    function sendHandler() {
        axios
            .post("http://13.49.183.39:8000/cars/", formData)
            .then((res) => console.log(res));
    }

    function getHandler() {
        axios
            .get("http://13.49.183.39:8000/cars/")
            .then((res) => console.log(res));
    }

    const validateForm = () => {
        const newErrors = {};
        if (!formData.marka) newErrors.marka = "Это поле обязательно";
        if (!formData.car_model) newErrors.car_model = "Это поле обязательно";
        if (!formData.body) newErrors.body = "Это поле обязательно";
        if (!formData.body_color) newErrors.body_color = "Это поле обязательно";
        if (!formData.engine) newErrors.engine = "Это поле обязательно";
        if (!formData.power) newErrors.power = "Это поле обязательно";
        if (!formData.price) newErrors.price = "Это поле обязательно";
        if (!formData.year_of_manufacture)
            newErrors.year_of_manufacture = "Это поле обязательно";
        if (!formData.mileage) newErrors.mileage = "Это поле обязательно";
        if (!formData.checkpoint) newErrors.checkpoint = "Это поле обязательно";
        if (!formData.steering_wheel)
            newErrors.steering_wheel = "Это поле обязательно";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formDataToSubmit = new FormData();
            Object.keys(formData).forEach((key) => {
                if (key === "images") {
                    formData[key].forEach((imageObject) => {
                        formDataToSubmit.append(
                            "images",
                            JSON.stringify(imageObject)
                        );
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
                    <label htmlFor="marka">Марка авто</label>
                    <select
                        id="marka"
                        name="marka"
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
                    {errors.marka && (
                        <span className="error">{errors.marka}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="car_model">Модель</label>
                    <input
                        type="text"
                        id="car_model"
                        name="car_model"
                        placeholder="Введите модель"
                        value={formData.car_model}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                car_model: e.target.value,
                            })
                        }
                    />
                    {errors.car_model && (
                        <span className="error">{errors.car_model}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="body">Кузов</label>
                    <select
                        id="body"
                        name="body"
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
                    {errors.body && (
                        <span className="error">{errors.body}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="body_color">Цвет</label>
                    <select
                        id="body_color"
                        name="body_color"
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
                    {errors.body_color && (
                        <span className="error">{errors.body_color}</span>
                    )}
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
                    {errors.engine && (
                        <span className="error">{errors.engine}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="power">Мощность, л.с.</label>
                    <input
                        type="text"
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
                    {errors.power && (
                        <span className="error">{errors.power}</span>
                    )}
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
                    {errors.price && (
                        <span className="error">{errors.price}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="year_of_manufacture">Год выпуска</label>
                    <select
                        id="year_of_manufacture"
                        name="year_of_manufacture"
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
                    {errors.year_of_manufacture && (
                        <span className="error">
                            {errors.year_of_manufacture}
                        </span>
                    )}
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
                    {errors.mileage && (
                        <span className="error">{errors.mileage}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="checkpoint">Коробка передач</label>
                    <select
                        id="checkpoint"
                        name="checkpoint"
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
                            <option key={el.id} value={parseInt(el.id)}>
                                {el.checkpoint}
                            </option>
                        ))}
                    </select>
                    {errors.checkpoint && (
                        <span className="error">{errors.checkpoint}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="drive_unit">Привод</label>
                    <select
                        id="drive_unit"
                        name="drive_unit"
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
                            <option key={el.id} value={parseInt(el.id)}>
                                {el.drive_unit}
                            </option>
                        ))}
                    </select>
                    {errors.drive_unit && (
                        <span className="error">{errors.drive_unit}</span>
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
                    {errors.owners && (
                        <span className="error">{errors.owners}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="steering_wheel">Руль</label>
                    <select
                        id="steering_wheel"
                        name="steering_wheel"
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
                    {errors.steering_wheel && (
                        <span className="error">{errors.steering_wheel}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="name">Имя</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                name: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone_number">Телефон</label>
                    <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Введите ваш номер телефона"
                        value={formData.phone_number}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                phone_number: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="images">Фото</label>
                    <input type="file" multiple onChange={handleImageUpload} />
                    <div className="photo-preview">
                        {images.map((imageObject, index) => (
                            <img
                                key={index}
                                src={imageObject.image}
                                alt={`upload-${index}`}
                            />
                        ))}
                    </div>
                    <div>Количество выбранных фото: {images.length}</div>
                </div>
                <div className="btn_toEnd">
                    <button
                        onClick={sendHandler}
                        type="submit"
                        className="btn-submit"
                    >
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
