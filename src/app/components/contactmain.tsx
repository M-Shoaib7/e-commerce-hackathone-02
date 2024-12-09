import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const ContactMain = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <p className="text-xl font-bold text-gray-800">CONTACT US</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-6">
            Get in touch today!
          </h1>
          <p className="text-sm text-gray-500 mt-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-8">
            Phone: +451 215 215
          </h2>
          <h3 className="text-2xl font-bold text-gray-800 mt-4">
            Fax: +451 215 215
          </h3>
          {/* Social Icons */}
          <div className="flex gap-5 text-gray-800 text-2xl mt-8">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/product/contact-02.png"
            alt="Contact illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
