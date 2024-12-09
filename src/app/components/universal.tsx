import React from 'react';

const universal = () => {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row items-center lg:items-start">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/home-page/part-01.jpg"
            alt="Part of the Neural Universe"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 text-center lg:text-left">
          <h5 className="text-base font-bold text-gray-400">SUMMER 2020</h5>
          <h2 className="text-3xl lg:text-4xl text-gray-900 font-bold pt-4">
            Part of the Neural
          </h2>
          <h2 className="text-3xl lg:text-4xl text-gray-900 font-bold">
            Universe
          </h2>
          <p className="text-lg font-normal text-gray-500 pt-6">
            We know how large objects will act,
          </p>
          <p className="text-lg font-normal text-gray-500">
            but things on a small scale.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 pt-8">
            <button className="h-12 w-40 text-white bg-green-500 hover:bg-white hover:text-green-500 hover:border-2 hover:border-green-500 rounded-md">
              BUY NOW
            </button>
            <button className="h-12 w-40 bg-white text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white rounded-md">
              READ MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default universal;
