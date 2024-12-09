import React from 'react';

const Abmain = () => {
  return (
    <>
      <section className="w-full h-auto bg-white">
        <div className="flex flex-col md:flex-row items-center md:justify-between px-6 md:px-36 py-16">
          <div className="text-center md:text-left md:w-[509px]">
            <p className="text-xl font-normal text-[#252B42]">ABOUT COMPANY</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#252B42] pt-6">ABOUT US</h1>
            <p className="text-sm font-normal text-[#737373] pt-4">We know how large objects will act,</p>
            <p className="text-sm font-normal text-[#737373] pt-2">but things on a small scale</p>
            <div className="pt-8">
              <button className="text-sm font-bold text-white w-full md:w-[184px] h-[52px] bg-[#23A6F0] rounded-md hover:bg-[#185274]">
                Get Quote Now
              </button>
            </div>
          </div>
          <div className="pt-8 md:pt-0 mt-8 md:mt-0">
            <img src="/about/main-01.png" alt="About Us" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Abmain;
