import React from 'react';

const cursour = () => {
  return (
    <>
      <section className="w-full h-auto bg-[#23856D] flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 p-8 lg:pl-36 lg:pt-36 text-center lg:text-left">
          <p className="text-lg font-normal text-white">SUMMER 2020</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-white pt-6">
            Vita Classic
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold text-white pt-2">
            Product
          </h1>
          <p className="text-base font-normal text-white pt-6">
            We know how large objects will act, We know
          </p>
          <p className="text-base font-normal text-white pt-2">
            how are objects will act, We know
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:items-start lg:gap-7 gap-4 pt-8">
            <h3 className="text-2xl font-bold text-white">$16.48</h3>
            <button className="text-sm font-bold text-white w-44 h-12 bg-[#2DC071] rounded-md hover:bg-[#124b2c]">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center lg:pl-16 lg:pt-28 p-8">
          <img
            src="/home-page/carousel-02.png"
            alt="Product"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </section>
    </>
  );
};

export default cursour;
