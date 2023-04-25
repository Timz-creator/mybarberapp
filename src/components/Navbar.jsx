import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex text-white items-center mt-6 ml-72">
      <h1 className="font-bold font-serif ml-20 mr-8 justify-between text-2xl">
        Barbers
      </h1>
      <ul className="flex ml-52 ">
        <li className="mr-11">Home</li>
        <li className="mr-11">About</li>
        <li className="mr-11">Services</li>
        <li className="mr-11">Pricing</li>
        <li className="mr-11">Gallery</li>
        <li className="mr-11">Contact</li>
      </ul>
      <div className="flex space-x-4  text-[#DAA520] ml-72">
        <FaFacebook size={20} />
        <FaInstagram size={20} />
        <FaTiktok size={20} />
      </div>
    </div>
  );
};

export default Navbar;
