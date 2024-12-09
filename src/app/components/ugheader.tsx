import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitterSquare } from "react-icons/fa";

const UbHeader = () => {
  return (
    <section>
      {/* Upper black navbar */}
      <div className="hidden md:flex h-[46px] w-full bg-[#23856D] items-center justify-between px-4 lg:px-10">
        {/* Contact Information */}
        <div className="flex items-center gap-4 lg:gap-10">
          <span className="text-white font-bold text-sm flex items-center gap-2">
            <IoCallOutline />
            (225) 555-0118
          </span>
          <span className="text-white font-bold text-sm flex items-center gap-2">
            <IoIosMail />
            michelle.rivera@example.com
          </span>
        </div>

        {/* Promotional Text */}
        <div className="hidden lg:block">
          <p className="text-white font-bold text-sm">
            Follow Us and get a chance to win 80% off
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <p className="text-white font-bold text-sm flex items-center gap-2">
            Follow Us:
            <span className="text-lg"><FaInstagram /></span>
            <span className="text-lg"><FaYoutube /></span>
            <span className="text-lg"><FaFacebook /></span>
            <span className="text-lg"><FaTwitterSquare /></span>
          </p>
        </div>
      </div>
      {/* Upper black navbar end */}
    </section>
  );
};

export default UbHeader;
