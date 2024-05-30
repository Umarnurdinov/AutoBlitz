import Header from "../components/header/header";
import React from "react";
import Hero from "../components/hero/hero";
import Slider from "../components/slider/slider";
import Sale from "../components/sale/sale";
import Cars from "../components/cars/cars";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sale/>
      <Slider />
      <Sale />
    </>
  );
}

export default Home;
