import React from "react";
import ServicesCard from "./ServicesCard";
import { servicesCardData } from "./cardsdata/data";
import { Star } from "lucide-react";

interface cardInfo {
  servicesCardData: {
    image: string;
    color: string;
    title: string;
    discribtion: string;
  };
}

const Services = () => {

    const stars = [];
    for (let i = 0; i < 4; i++) {
        stars.push(<img src="start-service.png" className="px-0.5" alt="star" />);
    }

  return (
    <div
      id="services-container"
      className="pt-24 px-4 sm:px-10 md:px-60 lg:px-16 xl:px-36 2xl:px-72"
    >
      <div id="services-text" className="text-center mx-auto">
        <p className="text-[#F64B4B] text-sm font-extrabold [text-shadow:0px_4px_6px_var(--tw-shadow-color)] shadow-slate-700 pb-6">
          OUR SERVICES
        </p>
        <h3 className="text-3xl font-extrabold">
          We provide great services for our <br /> customers based on needs
        </h3>
      </div>
      <div id="services-cards" className="grid lg:grid-cols-3 gap-8 py-20">
        {servicesCardData.map((cardData) => (
          <ServicesCard servicesCardData={cardData} />
        ))}
      </div>
      <div id="services-opinion" className="lg:flex justify-center items-center border-b-2 border-x-slate-400 pb-20 lg:px-12">
        <div id="opinion-img" className="w-full md:w-fit mx-auto lg:m-0 py-8 lg:py-10 xl:py-28 px-10 min-[380px]:px-24 min-[450px]:px-32 min-[520px]:px-44 sm:px-48 md:px-20 lg:px-10 xl:px-20 bg-slate500">
            <img src="oval.png" alt="web-developer" className="w-full h-full"/>
        </div>
        <div id="opinion-text" className="">
            <div className="flex pb-9">
                {stars}
                <img src="start-service.png" alt="star" />
            </div>
            <h3 className="font-extrabold pb-5">“OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.”   </h3>
            <p className="font-extralight font-sans"><span className="font-bold px-2">Franklin Hicks</span>Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
