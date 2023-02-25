import React from "react";
import About from "./About";
import BackImg from "./BackImg";
import Categories from "./Categories";
import MidBar from "./MidBar";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="100%">
      <Slider />
      <About/>
      <Categories/>
      <BackImg/>
      <MidBar/>
    </div>
  );
};

export default Home;
