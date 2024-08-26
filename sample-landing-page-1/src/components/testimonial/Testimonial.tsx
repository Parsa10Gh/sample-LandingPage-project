import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-[url('/testimonial-BG.png')] bg-cover py-32 text-center">
      <p className="text-[#67d684] font-bold">Testimonial</p>
      <h2 className="font-sans font-semibold text-xl sm:text-2xl md:text-3xl text-white px-1 sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto py-8">
        “Simply the best. Better than all the rest. I’d recommend this product
        to beginners and advanced users.”
      </h2>
      <div id="testimonial-infoCard">
        <img src="/testimonial-img.png" className="mx-auto py-4" alt="" />
        <p className="text-white font-semibold py-2">Ian Klein</p>
        <p className="text-white font-sans font-light">Digital Marketer</p>
      </div>
    </div>
  );
};

export default Testimonial;
