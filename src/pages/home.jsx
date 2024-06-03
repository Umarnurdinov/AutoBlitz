import Header from "../components/header/header";
import React from "react";
import Hero from "../components/hero/hero";
import Slider from "../components/slider/slider";
import Sale from "../components/sale/sale";
import Cards from "../components/cards/cards";
import Footer from "../components/footer/footer";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <Sale />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
