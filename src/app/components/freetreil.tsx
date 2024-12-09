import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const FreeTrial = () => {
  return (
    <section className="px-6 py-12 bg-gray-100">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42]">
          Start your 14 days free trial
        </h2>
        <p className="text-sm md:text-base text-[#737373] pt-6">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
        <p className="text-sm md:text-base text-[#737373]">
          RELIT official consequent.
        </p>
        <button className="mt-8 px-6 py-3 text-sm font-bold text-white bg-[#23A6F0] hover:bg-[#154a69] rounded-lg transition-colors">
          Try it free now
        </button>
        <div className="flex items-center justify-center gap-6 pt-8 text-[#23A6F0] text-2xl">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
