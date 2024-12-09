import React from 'react';

const Problem = () => {
  return (
    <>
      <section className="w-full h-auto flex flex-col md:flex-row gap-12 md:gap-44 px-6 md:px-36 py-12">
        <div className="w-full md:w-[394px] h-auto pt-3 md:pl-36">
          <p className="text-sm font-normal text-[#E74040] pl-10">Problems trying</p>
          <h3 className="text-xl md:text-2xl font-bold text-[#252B42] pt-2 pl-10">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="w-full md:w-auto">
          <p className="pt-6 md:pt-12 text-sm font-normal text-[#737373]">
            Problems trying to resolve the conflict between the two major realms of
          </p>
          <p className="pt-1 text-sm font-normal text-[#737373]">
            Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>

      <div className="w-full h-auto">
        <img src="/about/about-01.png" alt="About Image 1" className="w-full h-auto" />
      </div>

      <div className="w-full h-auto">
        <img src="/about/about-02.png" alt="About Image 2" className="w-full h-auto" />
      </div>
    </>
  );
};

export default Problem;
