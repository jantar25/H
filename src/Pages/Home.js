import React from "react";
import Slider from "../Components/slider";
import About from "../Components/About";
import Events from "../Components/Events";
import Activity from "../Components/Activity";
import Programs from "../Components/Programs";
import ScrollToTop from '../Components/Scrollontop'

import { SlideData } from "../Components/slider/sliderData";

const Home = () => {
  return (
    <>
    <ScrollToTop />
    <div>  
      <Slider slides={SlideData} />
      <About />
      <Events />
      <Activity />
      <Programs />
    </div>
    </>
  );
};

export default Home;
