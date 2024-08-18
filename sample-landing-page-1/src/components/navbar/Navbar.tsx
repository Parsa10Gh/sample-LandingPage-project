import React from "react";
import Link from "next/link";
import  NavbarMenu from "./NavbarMenu";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <div
        id="navbar-container"
        className=" block sm:flex justify-between items-center py-4 px-2 sm:px-4 md:px-8 lg:px-36 xl:px-60 2xl:px-72"
      >
        <div className="flex items-center justify-between mb-8 sm:mb-0">
          <h3 className="font-extrabold text-xl sm:pb-0 pr-8 lg:pr-12">
            Brainwave.io
          </h3>
          <ul className="hidden md:flex items-center">
            <li className="pr-2 lg:pr-4">
              <Link href="#">Demos</Link>
            </li>
            <li className="px-2 lg:px-4">
              <Link href="#">Pages</Link>
            </li>
            <li className="px-2 lg:px-4">
              <Link href="#">Support</Link>
            </li>
            <li className="pl-2 lg:pl-4">
              <Link href="#">Contact</Link>
            </li>
          </ul>
          <div className="block md:hidden w-fit">
            <NavbarMenu/>
          </div>
        </div>
        <Button className="bg-[#473BF0] w-full sm:w-fit px-6 py-3 rounded-xl text-white hover:bg-[#4751c5]">
          Get started a project
        </Button>
      </div>
    </>
  );
};

export default Navbar;
