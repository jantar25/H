import React from "react";
import Slider from "../Components/slider";
import About from "../Components/About";
import Events from "../Components/Events";
import Activity from "../Components/Activity";
import PublishedBooks from "../Components/BooksEdition/PublishedBooks";


import { SlideData } from "../Components/slider/sliderData";

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
