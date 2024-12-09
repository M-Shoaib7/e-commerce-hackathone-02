import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <>
      <section className="w-full px-6 py-12 md:px-36">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#252B42]">Meet Our Team</h2>
          <p className="text-sm font-normal text-[#252B42] pt-3">Problems trying to resolve the conflict between</p>
          <p className="text-sm font-normal text-[#252B42] pt-1">the two major realms of Classical physics: Newtonian mechanics</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Team Member 1 */}
          <div className="w-full flex flex-col items-center">
            <img src="/about/about-03.png" className="w-72 h-56 object-cover rounded-lg" alt="Team Member 1" />
            <h5 className="text-base pt-3 font-bold text-center">Username</h5>
            <div className="flex space-x-4 text-center pt-5">
              <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="w-full flex flex-col items-center">
            <img src="/about/about-04.png" className="w-72 h-56 object-cover rounded-lg" alt="Team Member 2" />
            <h5 className="text-base pt-3 font-bold text-center">Username</h5>
            <div className="flex space-x-4 text-center pt-5">
              <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="w-full flex flex-col items-center">
            <img src="/about/about-05.jpg" className="w-72 h-56 object-cover rounded-lg" alt="Team Member 3" />
            <h5 className="text-base pt-3 font-bold text-center">Username</h5>
            <div className="flex space-x-4 text-center pt-5">
              <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
