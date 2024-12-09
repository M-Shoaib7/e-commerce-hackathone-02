import React from 'react'
import Header2 from '../components/header2'
import Productmain from '../components/productmain';
import Productteam from '../components/productteam';
import Freetreil from '../components/freetreil';
import Footer from '../components/footer';
import { FaChevronRight } from "react-icons/fa";

const page = () => {
  return (
    <>
      <section>
        <Header2 />
        <div className=' justify-center'> 
            <div className=' text-center justify-center pt-10 '>
                <h5 className='text-base font-bold text-center text-[#737373]'>WHAT WE DO</h5>
                <h1 className='text-6xl font-bold text-center pt-8 text-[#252B42]'>Innovation tailored for you</h1>
                <p className='flex items-center  justify-center pl-19 gap-3 pt-16'><span className='text-sm font-bold'>Home</span><span><FaChevronRight className='text-xs font-normal text-[#BDBDBD]' /></span><span className='text-sm font-bold text-[#BDBDBD]'>Products</span></p>
               </div></div>

        <Productmain /> 
        <Productteam /> 
        <Freetreil /> 
        <Footer />   
      </section>
    </>
  )
}

export default page