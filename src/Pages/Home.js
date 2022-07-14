import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import WhyUs from "../Components/WhyChooseUs/WhyUs";
import Service from "../Components/Service/Service";
import CTA from "../Components/CTA/CTA";
import Team from "../Components/Team/Team";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Service />
      <CTA />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
