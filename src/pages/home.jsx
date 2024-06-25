import React from "react";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Slider from "../components/slider/slider";
import Cards from "../components/cards/cards";
import Footer from "../components/footer/footer";
import Add from "../components/add/add";
import Banner from "../components/banner/banner";
import Reklams from "../components/reklams/reklams";
import Questions from "../components/questions/questions";
// import NewCars from "../components/newCars/newCars";
// import WithPrice from "../components/filtrWithPrice/withPrice";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Add />
      <Banner />
      <Slider />
      <Cards />
      {/* <NewCars />
      <WithPrice /> */}
      <Questions />
      <Reklams />
      <Footer />
    </>
  );
}

export default Home;
