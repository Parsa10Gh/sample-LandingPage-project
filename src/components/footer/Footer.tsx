import React from "react";
import { Button } from "../ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div
      id="footer-container"
      className="bg-[#161c2d] px-2 sm:px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72"
    >
      <div
        id="footer-startProject"
        className="sm:flex justify-between items-center text-white text-center sm:text-left border-b-2 border-[#272b39] py-6 md:py-10 lg:py-16"
      >
        <div id="footer-startProject-text" className="py-8">
          <h2 className="text-xl sm:text-2xl font-extrabold pb-5">
            Ready to launch your next project?
          </h2>
          <p className="sm:w-3/4 font-sans text-lg sm:text-justify font-extralight">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <Button className="bg-[#473BF0] w-full sm:w-fit p-6 rounded-lg text-white hover:bg-[#4751c5]">
          Get started a project
        </Button>
      </div>
      <div id="footer-main" className="grid grid-cols-6 gap-10 py-16">
        <div id="footer-discription" className="w-fit mx-auto col-span-6 lg:col-span-2 lg:pr-16 text-center md:text-start">
          <h1 className="text-2xl font-sans font-bold text-white pb-6">Brainwave.io</h1>
          <p className="font-sans font-extralight text-[#aeb0b6]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <div id="footer-icons" className="flex justify-center md:justify-start gap-2 text-[#aeb0b6] pt-6">
            <Twitter/>
            <Instagram/>  
            <Facebook/>
            <Linkedin/>
          </div>
        </div>
        <div id="footer-lists" className="col-span-6 lg:col-span-4 grid grid-cols-2 md:grid-cols-4 text-center lg:text-left">
          <div className="text-white">
            <p className="font-sans font-thin text-[#aeb0b6] pb-4">Company</p>
            <ul className="font-sans font-extralight">
              <li className="py-1">About us</li>
              <li className="py-1">Contact us</li>
              <li className="py-1">Careers</li>
              <li className="py-1">Press</li>
            </ul>
          </div>
          <div className="text-white pb-10">
            <p className="font-sans font-thin text-[#aeb0b6] pb-4">Product</p>
            <ul className="font-sans font-extralight">
              <li className="py-1">Features</li>
              <li className="py-1">Pricing</li>
              <li className="py-1">News</li>
              <li className="py-1">Help desk</li>
              <li className="py-1">Support</li>
            </ul>
          </div>
          <div className="text-white">
            <p className="font-sans font-thin text-[#aeb0b6] pb-4">Services</p>
            <ul className="font-sans font-extralight">
              <li className="py-1">Digital Marketing</li>
              <li className="py-1">Content Writing</li>
              <li className="py-1">SEO for Business</li>
              <li className="py-1">UI Design</li>
            </ul>
          </div>
          <div className="text-white">
            <p className="font-sans font-thin text-[#aeb0b6] pb-4">Legal</p>
            <ul className="font-sans font-extralight">
              <li className="py-1">Privacy Policy</li>
              <li className="py-1">Terms & Conditions</li>
              <li className="py-1">Return Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
