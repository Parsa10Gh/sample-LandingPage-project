import { User } from "lucide-react";
import React from "react";

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
      className="bg-[url('/feature-BG.png')] bg-cover bg-right block pb-12 sm:pb-32 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72"
    >
        <img src="feature-design.png" alt="" />
      <div id="feature-text">
        <p className="text-[#F64B4B] text-sm font-sans font-bold w-fit mx-auto py-3">
          WHY CHOSE US
        </p>
        <h2 className="text-3xl font-extrabold text-center w-fit mx-auto sm:px-20 md:px-40 lg:px-60 xl:px-80 py-3">
          People choose us because we serve the best for everyone
        </h2>
      </div>
      <div id="feature-pros-container" className="grid grid-cols-2 md:gap-x-12 gap-y-24 border-b-2 pb-32 xl:px-16 2xl:px-32 pt-28">
        {featureCard.map((card) => (
          <div id="feature-pros-card" className="sm:flex">
            <div className="flex items-center justify-center h-fit w-fit rounded-xl p-6" style={{backgroundColor: card.color}}>
                <img src={card.img} alt=""  className="w-fit sm:w-20"/>
            </div>
            <div id="feature-pros-card-text" className="px-8">
              <h4 className="font-[1000] text-xl pb-3">{card.title}</h4>
              <p className="font-sans text-lg font-extralight">{card.discribtion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
