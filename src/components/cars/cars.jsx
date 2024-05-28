import React, { useState } from "react";
import { Button, Select, Input, Tabs, Row, Col } from "antd";
import "./cars.scss";
import Header from "../header/header";
import { Link } from "react-router-dom";


const { TabPane } = Tabs;
const { Option } = Select;

function Cars() {
    const [title,setTitle]=useState('Купить автомобиль')
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

    return (
        <>
            <Header />
            <div className="container">
                <div className="cars-container">
                    <Link to={"/"}>
                        <span className="cars_link">СберАвто {">"}</span>
                    </Link>
                    <Link to={""}>
                        <span className="cars_link">Продажа авто</span>
                    </Link>
                    <h2 className="title">{title}</h2>
                    <Tabs defaultActiveKey="1" onChange={tabClick}>
                        <TabPane tab="Все" key="1"></TabPane>
                        <TabPane tab="Новые" key="2"></TabPane>
                        <TabPane tab="С пробегом" key="3"></TabPane>
                    </Tabs>
                    <div className="filters">
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <Select
                                    placeholder="Марка"
                                    style={{ width: "100%" }}
                                >
                                    <Option value="">Марка</Option>
                                    <Option value="">Марка</Option>
                                    <Option value="">Марка</Option>
                                    <Option value="">Марка</Option>
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select
                                    placeholder="Год, от"
                                    style={{ width: "100%" }}
                                >
                                    <Option value="">Год, от</Option>
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select
                                    placeholder="До"
                                    style={{ width: "100%" }}
                                >
                                    <Option value="">До</Option>
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Input
                                    placeholder="Цена, от"
                                    style={{ width: "100%" }}
                                />
                            </Col>
                            <Col span={12}>
                                <Input
                                    placeholder="до"
                                    style={{ width: "100%" }}
                                />
                            </Col>
                            <Col span={12}>
                                <Select
                                    placeholder="Коробка"
                                    style={{ width: "100%" }}
                                >
                                    <Option value="">Коробка</Option>
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select
                                    placeholder="Руль"
                                    style={{ width: "100%" }}
                                >
                                    <Option value="">Руль</Option>
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select
                                    placeholder="Цвет"
                                    style={{ width: "100%" }}
                                >
                                    <Option value="">Любой</Option>
                                    <Option value="red">Красный</Option>
                                    <Option value="orange">Оранжевый</Option>
                                    <Option value="white">Белый</Option>
                                    <Option value="black">Чёрный</Option>
                                </Select>
                            </Col>
                        </Row>
                    </div>
                    <div className="buttons">
                        <Button type="link" danger className="reset-button">
                            Сбросить
                        </Button>
                        <Button type="primary" className="results-button">
                            Показать результат
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cars;
