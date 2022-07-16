import React, { useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import WhyUs from "../Components/WhyChooseUs/WhyUs";
import Service from "../Components/Service/Service";
// import CTA from "../Components/CTA/CTA";
import Team from "../Components/Team/Team";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
const Home = () => {

  const about = useRef();
  const service = useRef();
  const contact  = useRef();
  const team = useRef();
  const onScroll = () => {  
    contact.current.scrollIntoView({ behavior: "smooth" });
  }
    const onScrollForService = () => {
      service.current.scrollIntoView({ behavior: "smooth" });
  };
  const onScrollForTeam = () => { 
    team.current.scrollIntoView({ behavior: "smooth" });
  }
  const onScrollForAbout = () => { 
    about.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Navbar
        scrollToComponent={onScroll}
        onScrollForService={onScrollForService}
        onScrollForTeam={onScrollForTeam}
        onScrollForAbout={onScrollForAbout}
      />
      <Hero onScrollForAbout={onScrollForAbout} />
      <About about={about} scrollToComponent={onScroll} />
      <WhyUs />
      <Service service={service} />
      {/* <CTA /> */}
      <Team team={team} />
      <Contact contact={contact} />
      <Footer />
    </>
  );
};

export default Home;
