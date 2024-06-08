import React, { useEffect, useState } from "react";
import { Button, Select, Input, Tabs, Row, Col } from "antd";
import "./cars.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const { Option } = Select;
const tabItems = [
    { key: "1", label: "Все", children: null },
    { key: "2", label: "Новые", children: null },
    { key: "3", label: "С пробегом", children: null },
];
function Cars() {
    const [title, setTitle] = useState("Купить автомобиль");
    const [car, carSet] = useState({
        marka: [],
        body: [],
        color: [],
        checkpoint: [],
        driveUnit: [],
        steer: [],
        introduceYear: [],
    });

    // бул жерде  мен добавляю состояние  для фильтров
    const [filters, setFilters] = useState({
        marka: "", //
        year_lte: "", //
        year_gte: "", //
        lte_price: "", //
        gte_price: "", //
        checkpoint: "", //
        steering_wheel: "", //
        body_color: "", //
        body: "",
        drive_unit: "",
        mileage_lte: "",
        mileage_gte: "",
    });

    useEffect(() => {
        axios.get("http://13.49.183.39:8000/car-data/").then((res) => {
            carSet({
                ...car,
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

    // бул жерде состоянияны обновляю при изменении значений в фильтрах
    function handleFilterChange(key, value) {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [key]: value,
        }));
    }
    //  уже бул жерде делаю запрос бэкендке

    function fetchFilteredCars() {
        const queryParams = Object.keys(filters)
            .filter((key) => filters[key])
            .map((key) => `${key}=${filters[key]}`)
            .join("&");
        console.log(queryParams);
        axios
            .get(`http://13.49.183.39:8000/cars/?${queryParams}`)
            .then((res) => {
                console.log(res.data);
            });
    }

    function tabClick(key) {
        switch (key) {
            case "1":
                setTitle("Купить автомобиль");
                break;
            case "2":
                setTitle("Купить новый автомобиль");
                break;
            case "3":
                setTitle("Авто с пробегом");
                break;
            default:
                setTitle("");
                break;
        }
    }
    
    function resetHandler() {
        
    }

    return (
        <>
            <div className="container">
                <div className="cars-container">
                    <Link to={"/"}>
                        <span className="cars_link">СберАвто {">"}</span>
                    </Link>
                    <Link to={""}>
                        <span className="cars_link">Продажа авто</span>
                    </Link>
                    <h2 className="title">{title}</h2>
                    <Tabs
                        defaultActiveKey="1"
                        onChange={tabClick}
                        items={tabItems}
                    />

                    <div className="filters">
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <Select
                                    placeholder="Марка"
                                    style={{ width: "100%" }}
                                    onChange={(value) =>
                                        handleFilterChange(
                                            "marka",
                                            Number(value)
                                        )
                                    }
                                >
                                    {car.marka.map((el) => (
                                        <Option value={el.marka} key={el.id}>
                                            {el.marka}
                                        </Option>
                                    ))}
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select
                                    placeholder="Кузов"
                                    style={{ width: "100%" }}
                                    onChange={(value) =>
                                        handleFilterChange(
                                            "body",
                                            Number(value)
                                        )
                                    }
                                >
                                    {car.body.map((el) => (
                                        <Option value={el.body} key={el.id}>
                                            {el.body}
                                        </Option>
                                    ))}
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select
                                    placeholder="Коробка"
                                    style={{ width: "100%" }}
                                    onChange={(value) =>
                                        handleFilterChange(
                                            "checkpoint",
                                            Number(value)
                                        )
                                    }
                                >
                                    {car.checkpoint.map((el) => (
                                        <Option
                                            value={el.checkpoint}
                                            key={el.id}
                                        >
                                            {el.checkpoint}
                                        </Option>
                                    ))}
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select
                                    placeholder="Руль"
                                    style={{ width: "100%" }}
                                    onChange={(value) =>
                                        handleFilterChange(
                                            "steering_wheel",
                                            Number(value)
                                        )
                                    }
                                >
                                    {car.steer.map((el) => (
                                        <Option
                                            value={el.steering_wheel}
                                            key={el.id}
                                        >
                                            {el.steering_wheel}
                                        </Option>
                                    ))}
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select
                                    placeholder="Год, от"
                                    style={{ width: "100%" }}
                                    onChange={(value) =>
                                        handleFilterChange(
                                            "year_lte",
                                            Number(value)
                                        )
                                    }
                                >
                                    {car.introduceYear.map((el) => (
                                        <Option
                                            value={el.year_of_manufacture}
                                            key={el.id}
                                        >
                                            {el.year_of_manufacture}
                                        </Option>
                                    ))}
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select
                                    placeholder="До"
                                    style={{ width: "100%" }}
                                    onChange={(value) =>
                                        handleFilterChange(
                                            "year_gte",
                                            Number(value)
                                        )
                                    }
                                >
                                    {car.introduceYear.map((el) => (
                                        <Option
                                            value={el.year_of_manufacture}
                                            key={el.id}
                                        >
                                            {el.year_of_manufacture}
                                        </Option>
                                    ))}
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Input
                                    placeholder="Пробег, от"
                                    style={{ width: "100%" }}
                                    onChange={(e) =>
                                        handleFilterChange(
                                            "mileage_lte",
                                            Number(e.target.value)
                                        )
                                    }
                                />
                            </Col>
                            <Col span={12}>
                                <Input
                                    placeholder="до"
                                    style={{ width: "100%" }}
                                    onChange={(e) =>
                                        handleFilterChange(
                                            "mileage_gte",
                                            Number(e.target.value)
                                        )
                                    }
                                />
                            </Col>

                            <Col span={12}>
                                <Input
                                    placeholder="Цена, от"
                                    style={{ width: "100%" }}
                                    onChange={(e) =>
                                        handleFilterChange(
                                            "lte_price",
                                            Number(e.target.value)
                                        )
                                    }
                                />
                            </Col>
                            <Col span={12}>
                                <Input
                                    placeholder="до"
                                    style={{ width: "100%" }}
                                    onChange={(e) =>
                                        handleFilterChange(
                                            "gte_price",
                                            Number(e.target.value)
                                        )
                                    }
                                />
                            </Col>

                            <Col span={12}>
                                <Select
                                    placeholder="Цвет"
                                    style={{ width: "100%" }}
                                    onChange={(value) =>
                                        handleFilterChange(
                                            "body_color",
                                            Number(value)
                                        )
                                    }
                                >
                                    {car.color.map((el) => (
                                        <Option
                                            value={el.body_color}
                                            key={el.id}
                                        >
                                            {el.body_color}
                                        </Option>
                                    ))}
                                </Select>
                            </Col>
                        </Row>
                    </div>
                    <div className="buttons">
                        <Button type="link" danger className="reset-button">
                            Сбросить
                        </Button>
                        <Button
                            type="primary"
                            className="results-button"
                            onClick={fetchFilteredCars}
                        >
                            Показать результат
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cars;

// import React, { useEffect, useState } from "react";
// import { Button, Select, Input, Tabs, Row, Col } from "antd";
// import "./cars.scss";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const { TabPane } = Tabs;
// const { Option } = Select;

// function Cars() {
//     const [title, setTitle] = useState("Купить автомобиль");
//     const [car, carSet] = useState({
//         marka: [],
//         body: [],
//         color: [],
//         checkpoint: [],
//         driveUnit: [],
//         steer: [],
//         introduceYear: [],
//     });

//     useEffect(() => {
//         axios.get("http://13.49.183.39:8000/car-data/").then((res) => {
//             carSet({
//                 ...car,
//                 marka: res.data.marka,
//                 body: res.data.body,
//                 color: res.data.body_color,
//                 checkpoint: res.data.checkpoint,
//                 driveUnit: res.data.drive_unit,
//                 steer: res.data.steering_wheel,
//                 introduceYear: res.data.year_of_manufacture,
//             });
//         });
//     }, []);

//     console.log(car);

//     function tabClick(key) {
//         switch (key) {
//             case "1":
//                 setTitle("Купить автомобиль");
//                 break;
//             case "2":
//                 setTitle("Купить новый автомобиль");
//                 break;
//             case "3":
//                 setTitle("Авто с пробегом");
//                 break;
//             default:
//                 setTitle("");
//                 break;
//         }
//     }

//     return (
//         <>
//             <div className="container">
//                 <div className="cars-container">
//                     <Link to={"/"}>
//                         <span className="cars_link">СберАвто {">"}</span>
//                     </Link>
//                     <Link to={""}>
//                         <span className="cars_link">Продажа авто</span>
//                     </Link>
//                     <h2 className="title">{title}</h2>
//                     <Tabs defaultActiveKey="1" onChange={tabClick}>
//                         <TabPane tab="Все" key="1"></TabPane>
//                         <TabPane tab="Новые" key="2"></TabPane>
//                         <TabPane tab="С пробегом" key="3"></TabPane>
//                     </Tabs>
//                     <div className="filters">
//                         <Row gutter={[16, 16]}>
//                             <Col span={12}>
//                                 <Select
//                                     placeholder="Марка"
//                                     style={{ width: "100%" }}
//                                 >
//                                     {car.marka.map((el) => (
//                                         <Option value={el.id}>
//                                             {el.marka}
//                                         </Option>
//                                     ))}
//                                 </Select>
//                             </Col>
//                             <Col span={12}>
//                                 <Select
//                                     placeholder="Год, от"
//                                     style={{ width: "100%" }}
//                                 >
//                                     <Option value="">Год, от</Option>
//                                 </Select>
//                             </Col>
//                             <Col span={12}>
//                                 <Select
//                                     placeholder="До"
//                                     style={{ width: "100%" }}
//                                 >
//                                     <Option value="">До</Option>
//                                 </Select>
//                             </Col>
//                             <Col span={12}>
//                                 <Input
//                                     placeholder="Цена, от"
//                                     style={{ width: "100%" }}
//                                 />
//                             </Col>
//                             <Col span={12}>
//                                 <Input
//                                     placeholder="до"
//                                     style={{ width: "100%" }}
//                                 />
//                             </Col>
//                             <Col span={12}>
//                                 <Select
//                                     placeholder="Коробка"
//                                     style={{ width: "100%" }}
//                                 >
//                                     {car.checkpoint.map((el)=>(

//                                     <Option value={el.id}>{el.checkpoint}</Option>
//                                     ))}
//                                 </Select>
//                             </Col>
//                             <Col span={12}>
//                                 <Select
//                                     placeholder="Руль"
//                                     style={{ width: "100%" }}
//                                 >
//                                     {car.steer.map((el)=>(

//                                     <Option value={el.id}>{el.steering_wheel}</Option>
//                                     ))}
//                                 </Select>
//                             </Col>
//                             <Col span={12}>
//                                 <Select
//                                     placeholder="Цвет"
//                                     style={{ width: "100%" }}
//                                 >
//                                     {car.color.map((el)=>(

//                                     <Option value={el.id}>{el.body_color}</Option>
//                                     ))}

//                                 </Select>
//                             </Col>
//                         </Row>
//                     </div>
//                     <div className="buttons">
//                         <Button type="link" danger className="reset-button">
//                             Сбросить
//                         </Button>
//                         <Button type="primary" className="results-button">
//                             Показать результат
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Cars;
// //http://13.49.183.39:8000/cars/?marka=1&&body_color=5&steering_wheel=1&lte_price=900&gte_price=200&year_lte=1&year_gte=1&&checkpoint=1&owners=1
