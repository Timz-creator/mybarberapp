import React from "react";
import Card1 from "../assets/Card1.png";

const Whours = () => {
  return (
    <div className="w-full my-32 bg-black">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 space-x-16 ">
        <div className="text-white">
          <img className=" p-4" src={Card1} alt="/" />
        </div>
        <div className="text-white bg-black grid justify-center ">
          <h1 className="font-bold pb-10 text-[#DAA520] font-serif">Working Hours</h1>
          <p1>
            Our hours are flexible and convenient, with early morning and late
            evening appointments avaliable.
          </p1>
          <br></br>
          <p2>Weekdays 9 AM - 9 PM</p2>
          <br></br>
          <b2>Saturday 10 AM - 7 PM</b2>
          <br></br>
          <p4>Sunday Closed</p4>
        </div>
      </div>
    </div>
  );
};

export default Whours;
