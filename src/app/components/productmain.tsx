import React from 'react';

const ProductMain = () => {
  return (
    <>
      <section className="w-full px-4 py-8 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Main Image */}
          <div className="flex justify-center items-center">
            <img
              src="/product/product-01.png"
              alt="Product 1"
              className="w-full h-full max-w-full object-cover"
            />
          </div>

          {/* Column 1 */}
          <div className="grid grid-rows-2 gap-4">
            <div className="flex justify-center items-center">
              <img
                src="/product/product-02.png"
                alt="Product 2"
                className="w-full h-auto max-w-full object-cover"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/product/product-03.png"
                alt="Product 3"
                className="w-full h-auto max-w-full object-cover"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="grid grid-rows-2 gap-4">
            <div className="flex justify-center items-center">
              <img
                src="/product/product-04.png"
                alt="Product 4"
                className="w-full h-auto max-w-full object-cover"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/product/product-05.png"
                alt="Product 5"
                className="w-full h-auto max-w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductMain;
