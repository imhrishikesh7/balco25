import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 bg-linear-to-r from-[#1168b3] to-[#00aabb]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Company Logo */}
        <div className="flex items-center gap-2 bg-white p-2 rounded">
          <a href="https://www.tataconsumer.com/"> <img
            src="/outlook.png" // Replace with your path
            alt="Company Logo"
            className="w-60  object-contain"
          /></a>
         
        </div>

        {/* Center: Company name with © */}
        <div className="text-sm text-white text-center">
          © {new Date().getFullYear()} Bharat Aluminium Company Limited. All rights reserved.
        </div>

        {/* Right: Developer Logo */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-200">Crafted by</span>
          <a href="https://kalolwala.com/" target="_blank"><img
            src="/k&a logo.svg" // Replace with your path
            alt="Developer Logo"
            className="w-8 h-8 object-contain"
          /></a>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
