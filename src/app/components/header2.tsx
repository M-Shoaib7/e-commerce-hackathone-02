"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-[72px] bg-white shadow-sm top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 font-bold">
            <Link href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
            <Link href="/product" className="text-gray-600 hover:text-blue-500">
              Product
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-500">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Buttons (Always visible) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-blue-500 hover:text-blue-600">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Become a Member
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (when the hamburger is clicked) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-white shadow-lg z-40">
          <div className="flex flex-col items-center space-y-4 py-6">
            <Link href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
            <Link href="/product" className="text-gray-600 hover:text-blue-500">
              Product
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-500">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </Link>
            {/* Buttons in Mobile Menu */}
            <div className="flex flex-col items-center space-y-4 mt-6">
              <button className="px-4 py-2 text-blue-500 hover:text-blue-600">
                Login
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Become a Member
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
