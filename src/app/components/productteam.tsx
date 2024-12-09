import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ProductTeam = () => {
  const teamMembers = [
    { id: 1, image: '/about/about-03.png', name: 'Username' },
    { id: 2, image: '/about/about-04.png', name: 'Username' },
    { id: 3, image: '/about/about-05.jpg', name: 'Username' },
    { id: 4, image: '/product/product-06.jpg', name: 'Username' },
    { id: 5, image: '/product/product-07.jpg', name: 'Username' },
    { id: 6, image: '/product/product-08.jpg', name: 'Username' },
    { id: 7, image: '/product/product-09.jpg', name: 'Username' },
    { id: 8, image: '/product/product-10.jpg', name: 'Username' },
    { id: 9, image: '/product/product-11.jpg', name: 'Username' },
  ];

  return (
    <section className="px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-[#252B42]">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover"
            />
            <div className="text-center p-4">
              <h5 className="text-lg font-bold">{member.name}</h5>
              <div className="flex justify-center gap-4 mt-3">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductTeam;
