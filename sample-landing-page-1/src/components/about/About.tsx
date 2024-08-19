import React from "react";

const About = () => {
  return (
    <div
      id="about-container"
      className="block pt-24 pb-12 sm:pb-32 px-2 sm:px-4 md:px-8 lg:px-36 xl:px-60 2xl:px-72"
    >
      <div id="about-text">
        <p className="text-[#F64B4B] text-sm font-sans font-bold pb-6">
          OUR STORY
        </p>
        <h2 className="text-3xl font-extrabold lg:w-3/6 pr-20 pt-5">
          We know how everything works and why your business is failing over and
          over again.
        </h2>
      </div>
      <div
        id="about-pictures"
        className="grid lg:grid-cols-5 text-center pt-12"
      >
        <div className="col-span-2 flex pt-16 px-4">
          <img src="about-1.png" alt="" className="" />
        </div>
        <div className="col-span-3 px-20">
          <div className="flex w-fit">
            <img src="about-2.png" alt="" />
            <img src="about-3.png" alt="" className="h-fit pl-20 pt-32" />
          </div>
          <p className="text-left font-sans font-extralight pt-24">
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand. With lots of unique
            blocks, you can easily build a page without coding. Build your next
            landing page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
