import React from 'react';

const Grow = () => {
  return (
    <>
      <section className="w-full px-6 py-12 md:px-12 lg:px-36 bg-[#2A7CC7]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 p-6 md:p-12">
            <p className="text-xl font-normal text-[#FFFFFF] mb-4">WORK WITH US</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-5">
              Now Let’s grow Yours
            </h1>
            <p className="text-sm font-normal text-[#FFFFFF] mb-3">
              The gradual accumulation of information about atomic and
            </p>
            <p className="text-sm font-normal text-[#FFFFFF] mb-5">
              small-scale behavior during the first quarter of the 20th
            </p>
            <button className="text-sm font-bold text-[#FFFFFF] md:w-[184px] h-[52px] bg-[#23A6F0] rounded-md px-4 py-2 hover:bg-[#185274]">
              Button
            </button>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="/about/grow-01.png"
              alt="Grow Image"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Grow;
