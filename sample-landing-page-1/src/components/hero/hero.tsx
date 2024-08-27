import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div
      id="hero-container"
      className="block sm:flex justify-between items-center pt-24 pb-12 sm:pb-32 px-2 sm:px-4 md:px-8 lg:px-36 xl:px-60 2xl:px-72"
    >
      <div id="hero-text" className="w-full md:w-6/12 md:text-left mx-auto md:m-0">
        <p className="pb-6">Let’s shift your business</p>
        <h1 className="text-4xl md:text-5xl font-extrabold pb-6">Shift your business <br/> fast with Shade Pro.</h1>
        <p className="pb-8 md:text-justify">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </p>
        <Button className="bg-[#473BF0] sm:w-fit px-6 py-3 rounded-xl text-white hover:bg-[#4751c5]">
          Get started a project
        </Button>
      </div>
      <div id="hero-img" className="w-full md:w-4/12 py-20 px-4 min-[400px]:px-20 md:p-0">
        <img src="hero_img.png" alt="woman smiling" className="mx-auto"/>
      </div>
    </div>
  );
};

export default Hero;
