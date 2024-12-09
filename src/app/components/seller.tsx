import React from 'react';

const Products = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-10">
      {/* Section Header */}
      <div className="text-center">
        <h4 className="text-lg font-normal text-[#737373]">Featured Products</h4>
        <h3 className="text-2xl font-bold text-[#252B42] mt-2">BESTSELLER PRODUCTS</h3>
        <p className="text-sm font-normal text-[#737373] mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6 md:px-12">
        {/* Product Card */}
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-[#F8F8F8] p-4 rounded-lg shadow-sm">
            <img
              src={`/home-page/best-0${index + 1}.jpg`}
              alt={`Product ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h5 className="text-base font-bold text-[#252B42] mt-4">
              Graphic Design
            </h5>
            <p className="text-sm font-normal text-[#737373]">
              English Department
            </p>
            <p className="text-base font-bold text-[#23856D]">$6.48</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="h-4 w-4 bg-[#23A6F0] rounded-full"></div>
              <div className="h-4 w-4 bg-[#23856D] rounded-full"></div>
              <div className="h-4 w-4 bg-[#E77C40] rounded-full"></div>
              <div className="h-4 w-4 bg-[#252B42] rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
