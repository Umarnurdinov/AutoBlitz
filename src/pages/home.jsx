import Header from "../components/header/header";
import React from "react";
import Hero from "../components/hero/hero";
import Slider from "../components/slider/slider";
import Sale from "../components/sale/sale";
import Cards from "../components/cards/cards";
import Footer from "../components/footer/footer";
import Add from "../components/add/add";
import Banner from "../components/banner/banner";
import Reklams from "../components/reklams/reklams";
import Questions from "../components/questions/questions";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Add />
      <Banner />
      <Slider />
      <Cards />
      {/* <Cards />
      <Cards />
      <Cards /> */}
      <Questions />
      <Reklams />
      <Footer />
    </>
  );
}

export default Home;
