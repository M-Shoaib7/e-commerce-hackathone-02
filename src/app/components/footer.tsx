import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Top Footer Section */}
      <div className="w-full max-w-screen-xl h-[142px] bg-[#FAFAFA] flex flex-col md:flex-row justify-between items-center px-9 py-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Bandage</h2>
        </div>
        <div className="flex items-center space-x-6 mt-4 md:mt-0 text-[#23A6F0]">
          <span className="text-2xl hover:text-blue-600 transition-colors"><FaFacebook /></span>
          <span className="text-2xl hover:text-blue-600 transition-colors"><FaInstagram /></span>
          <span className="text-2xl hover:text-blue-600 transition-colors"><FaTwitter /></span>
        </div>
      </div>

      {/* Main Footer Content */}
      <footer className="bg-white text-gray-700 w-full">
        <div className="max-w-7xl mx-auto px-4 py-9">
          {/* Footer Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Logo and Social Icons */}
            <div className="lg:col-span-1 flex flex-col items-start space-y-4">
              <h3 className="font-semibold text-gray-800">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500 transition-colors">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Company Info</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">We are hiring</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Refund Policy</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Cookies Policy</a></li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Features</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Business Marketing</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">User Analytics</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Live Chat</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Unlimited Support</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-blue-500 transition-colors">iOS & Android</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Watch a Demo</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Customers</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">API</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-gray-800 mb-4">Get In Touch</h3>
              <form>
                <div className="flex flex-col sm:flex-row items-center">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="flex-1 p-3 border border-gray-300 rounded-t-md sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button
                    type="submit"
                    className="mt-2 sm:mt-0 sm:ml-2 bg-blue-500 text-white px-4 py-2 rounded-b-md sm:rounded-r-md hover:bg-blue-600 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
            Made With Love By Muhammad Shoaib. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
