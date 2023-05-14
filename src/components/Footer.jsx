import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-8 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
      <div>
        <h1 className="w-ful text-3xl font-bold  text-[#DAA520]">REACT.</h1>
        <p className="py-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
        <div className="flex justify-between md:w-[75%] my-6 text-[#DAA520]">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaTiktok size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Contacts</h6>
          <ul>
            <li className="py-2 text-sm">07852243369</li>
            <li className="py-2 text-sm">barbers@gmail.com</li>
            <li className="py-2 text-sm">34,Bishopgate, London</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Hair Care Guides</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
