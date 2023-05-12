import React from "react";

const Experience = () => {
  return (
    <div className="w-full bg-black py-20 px-4">
      <div className="grid grid-cols-2 mx-auto text-white">
        <div className="mx-auto">
          <h className="pl-9 text-[#DAA520] text-8xl font-serif">15</h>
          <p className="text-4xl font-serif">Years</p>
          <p className="text-4xl font-serif">Experience</p>
        </div>
        <div className="space-y-7">
          <h className="text-[#DAA520] text-5xl font-serif "> Who we are</h>
          <p className="font-thin">
            Barbers is a team of passionate and experienced professionals
            dedicated to providing the highest quality hair styling tools on the
            market. Our mission is to help you achieve your best hair day, every
            day. We believe that beauty should be accessible to everyone, which
            is why we offer addordable and innovatice products that are easy to
            use and deliver professional results.
          </p>
          <button className="border-[2px] p-2 px-4 border-[#DAA520] bg-[#DAA520] text-black hover:text-[#DAA520] hover:bg-black ">
            More about us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
