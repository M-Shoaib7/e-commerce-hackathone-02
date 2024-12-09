import React from 'react';

const BigCompany = () => {
  return (
    <>
      <section className="w-full bg-[#FAFAFA] py-12 px-6 md:px-36">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#252B42]">
            Big Companies Are Here
          </h2>
          <p className="text-sm font-normal text-[#252B42] pt-3">
            Problems trying to resolve the conflict between
          </p>
          <p className="text-sm font-normal text-[#252B42] pt-1">
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="mt-10">
          <img 
            src="/home-page/row.png" 
            alt="Big Companies"
            className="w-full h-auto mx-auto" 
          />
        </div>
      </section>
    </>
  );
};

export default BigCompany;
