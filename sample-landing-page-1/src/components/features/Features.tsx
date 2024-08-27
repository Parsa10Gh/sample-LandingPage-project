import { User } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Features = () => {
  const featureCard = [
    {
      title: "Dedicated project manager",
      discribtion:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        color: "#e2e5f9",
        img: "business-contact-86.png",
    },
    {
      title: "Organized tasks",
      discribtion:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        color: "#f6e6e9",
        img: "ic_layers_48px.png",
    },
    {
      title: "Easy feedback sharing",
      discribtion:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        color: "#e6f4ee",
        img: "chat-33.png",
    },
    {
      title: "Never miss deadline",
      discribtion:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        color: "#dee2e5",
        img: "ic_timelapse_48px.png",
    },
  ];

  return (

    <div
      id="feature-container"
      className="bg-[#f5f7fa] block relative pt-12 sm:pt-32 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72"
    >
        <img src="feature-design.png" alt="" className="absolute left-0 top-40 hidden md:block" />
      <div id="feature-text">
        <p className="text-[#F64B4B] text-sm font-sans font-bold w-fit mx-auto py-3">
          WHY CHOSE US
        </p>
        <h2 className="text-3xl font-extrabold text-center w-fit mx-auto sm:px-20 md:px-40 lg:px-60 xl:px-80 py-3">
          People choose us because we serve the best for everyone
        </h2>
      </div>
      <div id="feature-pros-container" className="grid sm:grid-cols-2 md:gap-x-12 gap-y-16 sm:gap-y-24 border-b-2 pb-32 xl:px-16 2xl:px-32 pt-28">
        {featureCard.map((card) => (
          <div id="feature-pros-card" className="text-center sm:text-left sm:flex">
            <div className="flex items-center justify-center h-fit w-fit mx-auto sm:m-0 rounded-xl p-6" style={{backgroundColor: card.color}}>
                <img src={card.img} alt=""  className="w-fit sm:w-20"/>
            </div>
            <div id="feature-pros-card-text" className="sm:px-8 pt-2">
              <h4 className="font-[1000] text-xl pb-3">{card.title}</h4>
              <p className="font-sans text-lg sm:text-justify font-extralight">{card.discribtion}</p>
            </div>
          </div>
        ))}
      </div>
      <div id="feature-startProject" className="sm:flex justify-between items-center text-center sm:text-left py-6 md:py-8 lg:py-12">
        <div id="feature-startProject-text" className="py-8">
          <h2 className="text-2xl font-extrabold pb-5">Ready to launch your next project?</h2>
          <p className="sm:w-3/4 font-sans text-lg sm:text-justify font-extralight">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>
        <Button className="bg-[#473BF0] w-full sm:w-fit p-6 rounded-lg text-white hover:bg-[#4751c5]">
          Get started a project
        </Button>
      </div>
    </div>
  );
};

export default Features;
