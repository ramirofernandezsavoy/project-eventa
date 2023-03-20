import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero"
import Newsletter from "../components/Newsletter/Newsletter"
import SearchEvent from "../components/SearchEvent/SearchEvent";

const Home = () => {
  return (
    <>
      <Navbar />      
      <Hero />
      <Newsletter />
      <SearchEvent /> 
      <Footer />
    </>
  );
};

export default Home;
