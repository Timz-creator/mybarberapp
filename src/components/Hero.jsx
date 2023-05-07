import React from "react";
import black_barber from "../assets/black_barber.png";
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify center w-full px-2 py-8 text-white ">
          <p className="text-9xl ">Getting you <span className="text-[#DAA520]">fresh</span> is our goal</p>
          <Typed className ="py-8 font-thin text-2xl" strings={['Get the perfect cut of your deams every time at the barber shop that cares about your style!']} typeSpeed={50} />
          <div className="flex flex-row space-x-24 items-center">
            <button className="border-[2px] p-2 px-4 bg-[#DAA520] text-black border-[#DAA520]">
              Appointment
            </button>
            <button className="border-[2px] p-2 px-4 text-[#DAA520] border-[#DAA520]">
              Contact Us
            </button>
          </div>
        </div>
        <div>
          <img src={black_barber} alt="/"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
