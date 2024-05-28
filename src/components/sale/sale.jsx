import React, { useState } from "react";
import { Input, Button, Select, Form, Typography } from "antd";
import "./sale.scss";

const { Option } = Select;
const { Title } = Typography;

function Sale() {
  const [form] = Form.useForm();
  const [showDetailedForm, setShowDetailedForm] = useState(false);

  const handleFinish = (values) => {
    console.log("Form values:", values);
  };

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
          >
            <Form.Item name="region" label="Регион">
              <Select>
                <Option value="region1">Region 1</Option>
                <Option value="region2">Region 2</Option>
                <Option value="region3">Region 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="make" label="Марка авто">
              <Select>
                <Option value="make1">Make 1</Option>
                <Option value="make2">Make 2</Option>
                <Option value="make3">Make 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="model" label="Модель">
              <Select>
                <Option value="model1">Model 1</Option>
                <Option value="model2">Model 2</Option>
                <Option value="model3">Model 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="year" label="Год выпуска">
              <Select>
                <Option value="year1">2020</Option>
                <Option value="year2">2021</Option>
                <Option value="year3">2022</Option>
              </Select>
            </Form.Item>
            <Form.Item name="generation" label="Поколение">
              <Select>
                <Option value="generation1">Generation 1</Option>
                <Option value="generation2">Generation 2</Option>
                <Option value="generation3">Generation 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="body" label="Кузов">
              <Select>
                <Option value="body1">Body 1</Option>
                <Option value="body2">Body 2</Option>
                <Option value="body3">Body 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="transmission" label="Коробка передач">
              <Select>
                <Option value="transmission1">Transmission 1</Option>
                <Option value="transmission2">Transmission 2</Option>
                <Option value="transmission3">Transmission 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="drive" label="Привод">
              <Select>
                <Option value="drive1">Drive 1</Option>
                <Option value="drive2">Drive 2</Option>
                <Option value="drive3">Drive 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="engine" label="Двигатель">
              <Input placeholder="Enter engine type" />
            </Form.Item>
            <Form.Item name="mileage" label="Пробег, км">
              <Input placeholder="Enter mileage" />
            </Form.Item>
            <Form.Item className="sale-buttons">
              <Button type="primary" htmlType="submit">
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
          >
            <Form.Item name="region" label="Регион">
              <Select>
                <Option value="region1">Region 1</Option>
                <Option value="region2">Region 2</Option>
                <Option value="region3">Region 3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="plateNumber" label="Госномер авто">
              <Input
                placeholder="o 000"
                suffix={<span className="plate-suffix">000 RUS 🇷🇺</span>}
              />
            </Form.Item>
            <Form.Item name="mileage" label="Пробег, км">
              <Input placeholder="Enter mileage" />
            </Form.Item>
            <Form.Item className="sale-buttons">
              <Button type="primary" htmlType="submit">
                Оцени авто бесплатно
              </Button>
              <Button type="link" onClick={() => setShowDetailedForm(true)}>
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
