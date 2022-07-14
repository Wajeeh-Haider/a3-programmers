import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ScrollToTop from "react-scroll-to-top";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const scrollToTop = {
    backgroundColor: "rgba(40, 58, 90, 0.9)",
    bottom: "20px",
  };
  return (
    <>
      <ScrollToTop smooth style={scrollToTop} color="white" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
