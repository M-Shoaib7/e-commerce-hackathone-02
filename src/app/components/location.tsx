import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';

const Location = () => {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Title Section */}
      <div className="text-center">
        <p className="text-sm font-bold text-gray-800">VISIT OUR OFFICE</p>
        <h2 className="text-4xl font-bold text-gray-800 mt-6">
          We help small businesses
        </h2>
        <h2 className="text-4xl font-bold text-gray-800 mt-1">
          with big ideas
        </h2>
      </div>

      {/* Card Section */}
      <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {/* First Card */}
        <div className="w-full max-w-sm p-8 bg-gray-100 text-center rounded-lg shadow-md">
          <IoCallOutline className="text-6xl text-blue-500 mx-auto" />
          <p className="text-sm font-bold text-gray-800 mt-8">
            georgia.young@example.com
          </p>
          <p className="text-sm font-bold text-gray-800 mt-2">
            georgia.young@ple.com
          </p>
          <h3 className="text-base font-bold text-gray-800 mt-8">Get Support</h3>
          <button className="mt-6 px-6 py-2 text-sm font-bold text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
            Submit Request
          </button>
        </div>

        {/* Second Card */}
        <div className="w-full max-w-sm p-8 bg-gray-900 text-center rounded-lg shadow-md">
          <FaLocationDot className="text-6xl text-blue-500 mx-auto" />
          <p className="text-sm font-bold text-white mt-8">
            georgia.young@example.com
          </p>
          <p className="text-sm font-bold text-white mt-2">
            georgia.young@ple.com
          </p>
          <h3 className="text-base font-bold text-white mt-8">Get Support</h3>
          <button className="mt-6 px-6 py-2 text-sm font-bold text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
            Submit Request
          </button>
        </div>

        {/* Third Card */}
        <div className="w-full max-w-sm p-8 bg-gray-100 text-center rounded-lg shadow-md">
          <IoIosMail className="text-6xl text-blue-500 mx-auto" />
          <p className="text-sm font-bold text-gray-800 mt-8">
            georgia.young@example.com
          </p>
          <p className="text-sm font-bold text-gray-800 mt-2">
            georgia.young@ple.com
          </p>
          <h3 className="text-base font-bold text-gray-800 mt-8">Get Support</h3>
          <button className="mt-6 px-6 py-2 text-sm font-bold text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
            Submit Request
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-20">
        <p className="text-base font-bold text-gray-800">WE CAN'T WAIT TO MEET YOU</p>
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mt-10">
          Let’s Talk
        </h2>
        <button className="mt-10 px-8 py-3 text-sm font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 transition">
          Try it free now
        </button>
      </div>
    </section>
  );
};

export default Location;
