import React from "react";
import Banner from "./Banner";
import Events from "./Events";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar";
import Highlight from "./Highlight";
import City from "./City";
import Artist from "./Artist";
import Creator from "./Creator";
import Cta from "./Cta";

const Homepage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Events />
      <Highlight />
      <City />
      <Artist />
      <Creator />
      <Cta />
      <Footer />
    </>
  );
};

export default Homepage;
