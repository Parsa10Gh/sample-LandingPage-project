import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Works = () => {
  const worksCardInfo = [
    {
      img: "/works-img2.png",
      title: "Graphic Design",
      subtitle: "Aura Branding Design",
    },
    {
      img: "/works-img1.png",
      title: "Graphic Design",
      subtitle: "AB.S Snack Packaging",
    },
    {
      img: "/works-img3.png",
      title: "Web Development",
      subtitle: "Gradient Website Development",
    },
    {
      img: "/works-img4.png",
      title: "Content Writing",
      subtitle: "Magazine Content Writing",
    },
  ];

  return (
    <div
      id="works-container"
      className="block relative py-12 sm:py-32 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72"
    >
      <div id="works-text">
        <p className="text-[#F64B4B] text-sm font-sans font-bold w-fit mx-auto py-3">
          CASE STUDIES
        </p>
        <h2 className="text-3xl font-extrabold text-center w-fit mx-auto sm:px-20 md:px-40 lg:px-60 xl:px-80 py-3">
          Our works describe why we are the best in the business
        </h2>
      </div>
      <div id="works-cards-container" className=" sm:flex justify-center py-20">
        <div id="works-card-left" className="w-fit mx-auto sm:pr-8">
          {worksCardInfo.map(
            (card, i) =>
              (i === 0 || i === 2) && (
                <div
                  id="works-card"
                  className="transition-all duration-500 hover:scale-105 hover:cursor-pointer"
                >
                  <img src={card.img} alt={card.subtitle} />
                  <div id="card-text" className=" pt-4 pb-8 px-8">
                    <p className="font-sans text-sm font-extralight pb-3">
                      {card.title}
                    </p>
                    <h4 className="font-extrabold text-lg">{card.subtitle}</h4>
                  </div>
                </div>
              )
          )}
        </div>
        <div id="works-card-right" className="w-fit mx-auto md:pl-8">
          {worksCardInfo.map(
            (card, i) =>
              (i === 1 || i === 3) && (
                <div
                  id="works-card"
                  className="transition-all duration-500 hover:scale-105 hover:cursor-pointer"
                >
                  <img src={card.img} alt={card.subtitle} />
                  <div id="card-text" className=" pt-4 pb-8 px-8">
                    <p className="font-sans text-sm font-extralight pb-3">
                      {card.title}
                    </p>
                    <h4 className="font-extrabold text-lg">{card.subtitle}</h4>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <Link
        href="#"
        className="w-fit flex mx-auto text-[#4338e2] font-bold py-2 duration-500 hover:scale-110"
      >
        See all works
        <ArrowRight className="ml-5" />
      </Link>
    </div>
  );
};

export default Works;
