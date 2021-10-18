import React from "react";
import Slider from "../Components/Home/slider";
import About from "../Components/Home/About";
import Events from "../Components/Home/Events";
import Activity from "../Components/Home/Activity";
import PublishedBooks from "../Components/Home/BooksEdition/PublishedBooks";


import { SlideData } from "../Components/Home/slider/sliderData";

const Home = () => {
  return (
    <>
    <div>  
      <Slider slides={SlideData} />
      <About />
      <Events />
      <Activity />
      <PublishedBooks />
    </div>
    </>
  );
};

export default Home;
