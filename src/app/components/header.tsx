 "use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
   <>
     <header className='h-[58px] w-full px-4 md:px-10 mt-[32px]'>
       <div className='flex items-center justify-between'>
        {/* logo */}
        <div className='flex items-center gap-4'> 
          <div className='block md:hidden'>
            <HiMenu className='w-6 h-6 cursor-pointer' onClick={toggleMenu} />
          </div>
          <Link href={"/"}><h1 className='text-[#252B42] font-bold text-2xl tracking-wider'>Bandage</h1></Link>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
          <div className='p-4'>
            <IoMdClose className='w-6 h-6 mb-6 cursor-pointer' onClick={toggleMenu} />
            <nav>
              <ul className='flex flex-col gap-4'>
                <Link href={"/"} className='text-[#737373] font-bold text-[14px] hover:text-[#23A6F0]'>Home</Link>
                <Link href={"/shop"} className='text-[#252B42] font-semibold text-[14px] hover:text-[#23A6F0]'>Shop</Link>
                <Link href ={"/about"} className='text-[#737373] font-bold text-[14px] hover:text-[#23A6F0]'>About</Link>
                <Link href={"/pricing"} className='text-[#737373] font-bold text-[14px] hover:text-[#23A6F0]'>Pricing</Link>
                <Link href={'/contact'} className='text-[#737373] font-bold text-[14px] hover:text-[#23A6F0]'>Contact</Link>
              </ul>
            </nav>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-10 pr-20'>
          <nav>
            <ul className='flex items-center gap-7'>
              <Link href={"/"} className='text-[#737373] font-bold text-[14px] hover:text-[#23A6F0]'>Home</Link>
              <Link href={"/shop"} className='text-[#252B42] font-semibold text-[14px] hover:text-[#23A6F0]'>Shop</Link>
              <Link href ={"/about"} className='text-[#737373] font-bold text-[14px] hover:text-[#23A6F0]'>About</Link>
              <Link href={"/pricing"} className='text-[#737373] font-bold text-[14px] hover:text-[#23A6F0]'>Pricing</Link>
              <Link href={'/contact'} className='text-[#737373] font-bold text-[14px] hover:text-[#23A6F0]'>Contact</Link>
            </ul>
          </nav>
        </div>

        {/* Icons */}
        <div className='flex items-center gap-4'>
          <FaSearch className='w-[26px] h-[26px] text-[#23A6F0]'/>
          <FaShoppingCart className='w-[26px] h-[26px] text-[#23A6F0]'/>
        </div>
       </div>
   </header>
   </>
  )
}

export default Header