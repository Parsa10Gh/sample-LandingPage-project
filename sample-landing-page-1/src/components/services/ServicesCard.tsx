import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface servicesCardData {
  servicesCardData: {
    image: string;
    color: string;
    title: string;
    discribtion: string;
  };
}

const ServicesCard = (props: servicesCardData) => {
  return (
    <div
      className="py-9 px-6 text-center rounded-lg transition-all duration-500 hover:scale-105"
      style={{ backgroundColor: props.servicesCardData.color }}
    >
      <div className="w-fit mx-auto pt-5 pb-8">
        <img src={props.servicesCardData.image} alt="" />
      </div>
      <div id="card-texts">
        <h4 className="text-white text-lg font-bold py-4">
          {props.servicesCardData.title}
        </h4>
        <p className="text-white pt-2 font-sans font-extralight pb-10">
          {props.servicesCardData.discribtion}
        </p>
      </div>
      <Link href="#" className="w-fit flex mx-auto text-white font-bold py-2 duration-500 hover:scale-105">
        Learn more
        <ArrowRight className="ml-5" />
      </Link>
    </div>
  );
};

export default ServicesCard;
