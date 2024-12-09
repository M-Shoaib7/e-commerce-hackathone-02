import React from 'react';

const Hero = () => {
  return (
    <section>
      {/* Hero section start */}
      <section
        className="w-full h-[716px] bg-cover bg-center"
        style={{ backgroundImage: "url(/home-page/main.jpg)" }}
      >
        <div className="flex flex-col items-start justify-center h-full px-6 sm:px-10 lg:px-20 text-center lg:text-left">
          <h5 className="text-white font-bold text-sm sm:text-base lg:text-lg leading-5">
            SUMMER 2020
          </h5>
          <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight pt-4">
            NEW COLLECTION
          </h1>
          <p className="text-white font-normal text-base sm:text-lg lg:text-xl leading-6 pt-4">
            We know how large objects will act,
          </p>
          <p className="text-white font-normal text-base sm:text-lg lg:text-xl leading-6">
            but things on a small scale.
          </p>
          <button className="w-44 sm:w-auto bg-[#2DC071] hover:bg-[#359b20] text-white font-bold text-sm sm:text-base py-3 px-6 mt-6 rounded-lg">
            SHOP NOW
          </button>
        </div>
      </section>
      {/* Hero section end */}
    </section>
  );
};

export default Hero;
