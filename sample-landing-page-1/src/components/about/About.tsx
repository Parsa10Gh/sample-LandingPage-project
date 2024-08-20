import React from "react";



const About = () => {
  const aboutFacts = [{
    title: "1M+",
    discribtion: "Customers visit Omega every month to get their service done.",
  },
  {
    title: "92%",
    discribtion: "Satisfaction rate comes from our awesome customers.",
  },
  {
    title: "4.9/5.0",
    discribtion: "Average customer ratings we have got all over internet.",
  }];

  return (
    <div
      id="about-container"
      className="block pt-24 pb-12 sm:pb-32 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72"
    >
      <div id="about-text">
        <p className="text-[#F64B4B] text-sm font-sans font-bold w-fit mx-auto lg:m-0 pb-6">
          OUR STORY
        </p>
        <h2 className="text-3xl font-extrabold text-center lg:text-left w-fit mx-auto md:mx-0 md:px-32 lg:px-0 lg:w-3/6 lg:pr-20 pt-5">
          We know how everything works and why your business is failing over and
          over again.
        </h2>
      </div>
      <div
        id="about-pictures"
        className="grid grid-cols-1 lg:grid-cols-5 text-center pt-12 sm:px-20 md:px-0"
      >
        <div className="col-span-2 flex pt-8 sm:pt-16 sm:px-10 md:px-0 sm:mx-auto">
          <img src="about-1.png" alt="" className="" />
        </div>
        <div className="col-span-3 pl-0 sm:pl-6 xl:px-20 pt-8 sm:pt-20">
          <div className="sm:flex w-fit pr-6 sm:mx-auto">
            <img src="about-2.png" alt="" />
            <img src="about-3.png" alt="" className="h-fit sm:pl-6 xl:pl-20 pt-8 sm:pt-32" />
          </div>
          <p className="text-left font-sans font-extralight pt-8 sm:pt-24">
            We share common trends and strategies for improving your rental
            income and making sure you stay in high demand. With lots of unique
            blocks, you can easily build a page without coding. Build your next
            landing page.
          </p>
        </div>
      </div>
      <div id="about-facts" className="grid md:grid-cols-3 gap-10 py-24">
        {aboutFacts.map((fact) => 
          <div className="text-center">
            <h1 className="text-4xl font-mono font-extrabold py-4">{fact.title}</h1>
            <p className="font-sans text-lg font-extralight px-4">{fact.discribtion}</p>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default About;
