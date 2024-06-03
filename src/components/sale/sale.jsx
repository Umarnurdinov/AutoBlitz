import React, { useEffect, useState } from "react";
import { Input, Button, Select, Form, Typography } from "antd";
import "./sale.scss";
import axios from "axios";

const { Option } = Select;
const { Title } = Typography;

function Sale() {
    const [form] = Form.useForm();
    const [showDetailedForm, setShowDetailedForm] = useState(false);

    const handleFinish = (values) => {
        console.log("Form values:", values);
    };

    const validateMessages = {
        required: "${label} обязательное поле!",
    };
  const data = {
      marka: "",
      country: "",
      region: "",
      city: "",
      district: "",
      street: "",
      building: "",
      housing: "",
      apartment: "",
      postal_code: "",
      body: "",
      body_color: "",
      engine: "",
      equipment: "",
      price: "",
      year_of_manufacture: "",
      mileage: "",
      power: "",
      checkpoint: "",
      drive_unit: "",
      owners: "",
      steering_wheel: "",
      vin: "",
  };
    function continueHandler(e) {
       setShowDetailedForm(true)
       e.preventDefault()
         axios
             .post("https://example.com/api/car", data)
             .then((response) => {
                 console.log("Success:", response.data);
             })
             .catch((error) => {
                 console.error("Error:", error);
             });
    }

    return (
        <div className="sale-container">
            {showDetailedForm ? (
                <div className="detailed-form-container">
                    <Button
                        className="back-button"
                        onClick={() => setShowDetailedForm(false)}
                    >
                        Назад
                    </Button>
                    <Title level={3} className="sale-title">
                        Введите данные об авто
                    </Title>

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleFinish}
                        className="sale-form"
                        validateMessages={validateMessages}
                    >
                        <Form.Item
                            name="region"
                            label="Регион"
                            rules={[{ required: true }]}
                        >
                            <Select>
                                <Option value="region1">Region 1</Option>
                                <Option value="region2">Region 2</Option>
                                <Option value="region3">Region 3</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="make"
                            label="Марка авто"
                            rules={[{ required: true }]}
                        >
                            <Select>
                                <Option value="make1">Make 1</Option>
                                <Option value="make2">Make 2</Option>
                                <Option value="make3">Make 3</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="model"
                            label="Модель"
                            rules={[{ required: true }]}
                        >
                            <Select>
                                <Option value="model1">Model 1</Option>
                                <Option value="model2">Model 2</Option>
                                <Option value="model3">Model 3</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="year"
                            label="Год выпуска"
                            rules={[{ required: true }]}
                        >
                            <Select>
                                <Option value="year1">2020</Option>
                                <Option value="year2">2021</Option>
                                <Option value="year3">2022</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="generation"
                            label="Поколение"
                            rules={[{ required: true }]}
                        >
                            <Select>
                                <Option value="generation1">
                                    Generation 1
                                </Option>
                                <Option value="generation2">
                                    Generation 2
                                </Option>
                                <Option value="generation3">
                                    Generation 3
                                </Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="body"
                            label="Кузов"
                            rules={[{ required: true }]}
                        >
                            <Select>
                                <Option value="body1">Body 1</Option>
                                <Option value="body2">Body 2</Option>
                                <Option value="body3">Body 3</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="transmission"
                            label="Коробка передач"
                            rules={[{ required: true }]}
                        >
                            <Select>
                                <Option value="transmission1">
                                    Transmission 1
                                </Option>
                                <Option value="transmission2">
                                    Transmission 2
                                </Option>
                                <Option value="transmission3">
                                    Transmission 3
                                </Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="drive"
                            label="Привод"
                            rules={[{ required: true }]}
                        >
                            <Select>
                                <Option value="drive1">Drive 1</Option>
                                <Option value="drive2">Drive 2</Option>
                                <Option value="drive3">Drive 3</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="engine"
                            label="Двигатель"
                            rules={[{ required: true }]}
                        >
                            <Input placeholder="Enter engine type" />
                        </Form.Item>
                        <Form.Item
                            name="mileage"
                            label="Пробег, км"
                            rules={[{ required: true }]}
                        >
                            <Input placeholder="Enter mileage" />
                        </Form.Item>
                        <Form.Item className="sale-buttons">
                            <Button
                                type="primary"
                                htmlType="submit"
                                onClick={continueHandler}
                            >
                                Далее
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            ) : (
                <>
                    <Title level={3} className="sale-title">
                        Купим ваш автомобиль
                    </Title>

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleFinish}
                        className="sale-form"
                        validateMessages={validateMessages}
                    >
                        <Form.Item
                            name="region"
                            label="Регион"
                            rules={[{ required: true }]}
                        >
                            <Select>
                                <Option value="region1">Кыргызстан</Option>
                                <Option value="region2">Москва</Option>
                                <Option value="region3">Узбекистан</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="plateNumber"
                            label="Госномер авто"
                            rules={[{ required: true }]}
                        >
                            <Input
                                placeholder="o 000"
                                suffix={
                                    <span className="plate-suffix">
                                        000 KGZ 🇰🇬
                                    </span>
                                }
                            />
                        </Form.Item>
                        <Form.Item
                            name="detailedMileage"
                            label="Пробег, км"
                            rules={[{ required: true }]}
                        >
                            <Input placeholder="Enter mileage" />
                        </Form.Item>
                        <Form.Item className="sale-buttons">
                            <Button type="primary" htmlType="submit">
                                Оцени авто бесплатно
                            </Button>
                            <Button
                                type="link"
                                onClick={() => setShowDetailedForm(true)}
                            >
                                Не помню госномер
                            </Button>
                        </Form.Item>
                    </Form>
                </>
            )}
        </div>
    );
}

export default Sale;

