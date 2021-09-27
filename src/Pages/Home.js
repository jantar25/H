import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Navbar/Sidebar";
import Slider from "../Components/slider";
import About from "../Components/About";
import Events from "../Components/Events";
import Activity from "../Components/Activity";

import { SlideData } from "../Components/slider/sliderData";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Slider slides={SlideData} />
      <About />
      <Events />
      <Activity />
    </div>
  );
};

export default Home;
