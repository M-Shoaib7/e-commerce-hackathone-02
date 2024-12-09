import React from 'react';
import { MdAccessAlarm } from 'react-icons/md';
import { FaChartArea } from 'react-icons/fa';

const Feature = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-16">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h5 className="text-sm font-bold text-[#23A6F0]">Practice Advice</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mt-2">
            Featured Posts
          </h2>
          <p className="text-sm text-[#737373] mt-4">
            Problems trying to resolve the conflict between
          </p>
          <p className="text-sm text-[#737373]">
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Posts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post 1 */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-white">
            <img
              src="/home-page/feature-01.jpg"
              alt="Feature 1"
              className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-[#737373]">
                <p className="text-[#8EC2F2]">Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>
              <h4 className="text-lg font-semibold text-[#252B42] mt-4">
                Loudest à la Madison #1
              </h4>
              <h4 className="text-lg font-semibold text-[#252B42]">(L'integral)</h4>
              <p className="text-sm text-[#737373] mt-4">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between items-center mt-4 text-xs text-[#737373]">
                <span className="flex items-center gap-2">
                  <MdAccessAlarm className="text-[#23A6F0]" />
                  22 April 2021
                </span>
                <span className="flex items-center gap-2">
                  <FaChartArea className="text-[#23A6F0]" />
                  10 comments
                </span>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-white">
            <img
              src="/home-page/feature-02.jpg"
              alt="Feature 2"
              className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-[#737373]">
                <p className="text-[#8EC2F2]">Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>
              <h4 className="text-lg font-semibold text-[#252B42] mt-4">
                Loudest à la Madison #2
              </h4>
              <h4 className="text-lg font-semibold text-[#252B42]">(L'integral)</h4>
              <p className="text-sm text-[#737373] mt-4">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between items-center mt-4 text-xs text-[#737373]">
                <span className="flex items-center gap-2">
                  <MdAccessAlarm className="text-[#23A6F0]" />
                  22 April 2021
                </span>
                <span className="flex items-center gap-2">
                  <FaChartArea className="text-[#23A6F0]" />
                  10 comments
                </span>
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-white">
            <img
              src="/home-page/feature-03.jpg"
              alt="Feature 3"
              className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-[#737373]">
                <p className="text-[#8EC2F2]">Google</p>
                <p>Trending</p>
                <p>New</p>
              </div>
              <h4 className="text-lg font-semibold text-[#252B42] mt-4">
                Loudest à la Madison #3
              </h4>
              <h4 className="text-lg font-semibold text-[#252B42]">(L'integral)</h4>
              <p className="text-sm text-[#737373] mt-4">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between items-center mt-4 text-xs text-[#737373]">
                <span className="flex items-center gap-2">
                  <MdAccessAlarm className="text-[#23A6F0]" />
                  22 April 2021
                </span>
                <span className="flex items-center gap-2">
                  <FaChartArea className="text-[#23A6F0]" />
                  10 comments
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
