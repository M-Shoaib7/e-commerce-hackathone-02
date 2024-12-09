import React from 'react';
import Ugheader from '../components/ugheader';
import Header from '../components/header';
import Footer from '../components/footer';
import Seller from '../components/seller';
import { FaChevronRight } from "react-icons/fa";

const Shop = () => {
  return (
    <>
      <section >
        {/* Upper black navbar */}
        <Ugheader />
        {/* Upper black navbar end */}
        <Header />

        {/* Breadcrumb section */}
        <div className="wrapper w-full max-w-screen-xl h-[92px] px-4 sm:px-8">
          <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#252B42] text-center pl-14">Shop</h2>
            <div className="flex items-center gap-4 text-sm text-[#BDBDBD]">
              <p className="font-bold text-[#252B42]">Home</p>
              <p><FaChevronRight className="text-[#BDBDBD]" /></p>
              <p>Shop</p>
            </div>
          </div>
        </div>

        {/* Product images section */}
        <div className=" max-w-screen-xl h-auto pb-12 flex flex-wrap gap-4 justify-between px-4 sm:px-8 mx-auto">
          <img src="/card/card-01.png" alt="Card 1" className="w-full sm:w-[22%] max-w-full h-auto object-contain" />
          <img src="/card/card-02.png" alt="Card 2" className="w-full sm:w-[22%] max-w-full h-auto object-contain" />
          <img src="/card/card-03.png" alt="Card 3" className="w-full sm:w-[22%] max-w-full h-auto object-contain" />
          <img src="/card/card-04.png" alt="Card 4" className="w-full sm:w-[22%] max-w-full h-auto object-contain" />
          <img src="/card/card-05.png" alt="Card 5" className="w-full sm:w-[22%] max-w-full h-auto object-contain" />
          <img src="/card/card-03.png" alt="Card 3" className="w-full sm:w-[22%] max-w-full h-auto object-contain" />
          <img src="/card/card-04.png" alt="Card 4" className="w-full sm:w-[22%] max-w-full h-auto object-contain" />
          <img src="/card/card-01.png" alt="Card 1" className="w-full sm:w-[22%] max-w-full h-auto object-contain" />



        </div>

        {/* Brand images section */}
        <div className="hidden max-w-screen-xl h-auto pb-12  justify-center gap-4 px-4 sm:px-8 mx-auto">
          <img src="/card/brand-02.png" alt="Brand 2" className="w-full sm:w-[45%] max-w-full h-auto object-contain" />
          <img src="/card/brand-01.png" alt="Brand 1" className="w-full sm:w-[45%] max-w-full h-auto object-contain" />
        </div>

        {/* Footer and Seller section */}
        
        

        {/* Down Image */}
        <div className="flex items-center justify-center  w-full h-auto">
          <img src="home-page/down-01.png" alt="Down Image" className="h-auto max-w-full" />
        </div>
      </section>
      <Seller />
      <Footer />
    </>
  );
};

export default Shop;
