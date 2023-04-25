import React from "react";
import Card1 from "../assets/Card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

const Cards1 = () => {
  return (
    <div className="w-full my-32">
      <div className="text-white max-w-[1240px] mx-auto">
        <div className="text-center">
          <h1 className="pb-5 text-3xl text-[#DAA520]">Our services</h1>
          <p1 className="py-6 leading-8">
            We are dedicated to providing you with the best possible experience.
            Our team of experts is
          </p1>
          <h1>
            here to help you every step of the way, from choosing the right
            service to the end.
          </h1>
        </div>
        <div className="grid grid-cols-4 pt-5 space-x-3 ">
          <div className="text-center border border-[#DAA520] ">
            <img className="h-48 w-full object-cover p-2" src={Card1} alt="/" />
            <h1 className="text-[#DAA520]">Shaving</h1>
            <p1>Charge: <span className="text-[#DAA520]">£15</span></p1>
          </div>
          <div className="text-center border border-[#DAA520]">
            <img className="h-48 w-full object-cover p-2" src={card2} alt="/" />
            <h1 className="text-[#DAA520]">Haircutting</h1>
            <p1>Charge: <span className="text-[#DAA520]">£20</span></p1>
          </div>
          <div className="text-center border border-[#DAA520]">
            <img classname="h-48 w-full object-cover p-2" src={card3} alt="/" />
            <h1 className="text-[#DAA520]">Trimming</h1>
            <p1>Charge: <span className="text-[#DAA520]">£35</span></p1>
          </div>
          <div className="border border-[#DAA520] text-center">
            <img classname="h-48 w-full object-cover p-2" src={card4} alt="/" />
            <h1 className="text-[#DAA520]">Style</h1>
            <p1>Charge: <span className="text-[#DAA520]">£40</span></p1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards1;
