import React, { useState } from "react";
import { motion } from "framer-motion";

const pointers = [
  {
    name: "Croatia",
    revenue: "Revenue",
    top: "48%",
    left: "40%",
    flag: "BorderDemand/Croatia.webp",
    data: "₹370.20 crore",
  },
  {
    name: "India",
    revenue: "Revenue",
    top: "55%",
    left: "58%",
    flag: "BorderDemand/India.webp",
    data: "₹14,835.30 crore",
  },
  {
    name: "Turkey",
    revenue: "Revenue",
    top: "51%",
    left: "47%",
    flag: "BorderDemand/Turkey.webp",
    data: "₹210.75 crore",
  },
  {
    name: "Nepal",
    revenue: "Revenue",
    top: "52%",
    left: "60%",
    flag: "BorderDemand/Nepal.webp",
    data: "₹95.10 crore",
  },
  {
    name: "Japan",
    revenue: "Revenue",
    top: "50%",
    left: "72%",
    flag: "BorderDemand/Japan.webp",
    data: "₹600.00 crore",
  },
  {
    name: "South Korea",
    revenue: "Revenue",
    top: "51%",
    left: "70%",
    flag: "BorderDemand/Korea.webp",
    data: "₹480.60 crore",
  },
  {
    name: "Bangladesh",
    revenue: "Revenue",
    top: "54%",
    left: "61%",
    flag: "BorderDemand/Bangladesh.webp",
    data: "₹310.20 crore",
  },
  {
    name: "Montenegro",
    revenue: "Revenue",
    top: "52%",
    left: "40%",
    flag: "BorderDemand/Montenogro.webp",
    data: "₹180.00 crore",
  },
  {
    name: "Italy",
    revenue: "Revenue",
    top: "48%",
    left: "42%",
    flag: "BorderDemand/Italy.webp",
    data: "₹500.40 crore",
  },
  {
    name: "Tanzania",
    revenue: "Revenue",
    top: "69%",
    left: "48%",
    flag: "BorderDemand/Tanzania.webp",
    data: "₹120.90 crore",
  },
  {
    name: "Mexico",
    revenue: "Revenue",
    top: "58%",
    left: "18%",
    flag: "BorderDemand/Mexico.webp",
    data: "₹240.00 crore",
  },
];

const MapPointers = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="relative w-full h-[100vh] sm:h-[100vh]">
      {/* Desktop View: Absolute Positioned Pointers */}
      <div className="hidden sm:block">
        {pointers.map((pointer, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={idx}
              className="absolute flex flex-col items-center z-10"
              style={{
                top: pointer.top,
                left: pointer.left,
                transform: "translate(-50%, -100%)",
                cursor: "pointer",
              }}
              onClick={() => setActiveIndex(isActive ? null : idx)}
            >
              <motion.img
                src={pointer.flag}
                alt={pointer.name}
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />

              {isActive && (
                <>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "60px" }}
                    transition={{ duration: 0.4 }}
                    className="w-[2px] bg-black mt-2"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 bg-white rounded shadow-lg p-3 text-sm text-center w-max max-w-[180px] border border-gray-300"
                  >
                    <div className="font-semibold">{pointer.name}</div>
                    <div className="font-light">{pointer.revenue}</div>
                    <div className="text-[#0064a8] text-2xl font-extrabold">{pointer.data}</div>
                  </motion.div>
                </>
              )}
            </div>
          );
        })}
        {/* Left Bottom Image */}
        <div className="absolute bottom-4 left-4 z-5">
          <img
            src="BorderDemand/Page-10-Image.webp"
            alt="Left decoration"
            className="h-[40vh] object-contain "
          />
        </div>

        {/* Right Bottom Image */}
        <div className="absolute bottom-4 right-4 z-5">
          <img
            src="BorderDemand/Page-11-Image.webp"
            alt="Right decoration"
            className="object-contain h-[30vh]"
          />
        </div>
      </div>

      {/* Mobile View: Horizontal Scrollable Row */}
      <div className="block sm:hidden overflow-x-auto whitespace-nowrap px-4 py-6">
        <div className="flex gap-4">
          {pointers.map((pointer, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-start min-w-[120px] max-w-[160px] px-2 py-4 bg-white rounded shadow border border-gray-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={pointer.flag}
                alt={pointer.name}
                className="w-12 h-12 rounded-full border border-gray-300 mb-2"
              />
              <div className="text-sm font-semibold">{pointer.name}</div>
              <div className="text-xs font-light">{pointer.revenue}</div>
              <div className="text-[#0064a8] font-bold text-sm mt-1">{pointer.data}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapPointers;
