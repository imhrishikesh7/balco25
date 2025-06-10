import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const CircleGraph = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const indianPercent = 94;
  const foreignPercent = 6;

  useEffect(() => {
    if (isInView) {
      controls.start({
        indian: indianPercent,
        foreign: foreignPercent,
      });
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="w-[250px] h-[250px] bg-white rounded-2xl shadow-lg  flex flex-col items-center justify-center"
    >
      <h3 className="text-center text-base font-semibold mb-1">Revenue by Geography</h3>
      <p className="text-sm text-gray-500 mb-4">FY 2024-25 - (In %)</p>

      <svg width="150" height="150" className="rotate-[-90deg]">
        {/* Background circle */}
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="#eee"
          strokeWidth="12"
        />

        {/* Indian Market - Blue */}
        <motion.circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="#1d4ed8"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - indianPercent / 100)}
          initial={{ strokeDashoffset: circumference }}
          animate={controls}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        {/* Foreign Market - Green */}
        <motion.circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="#10b981"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - (indianPercent + foreignPercent) / 100) }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        />

        {/* Center Circle */}
        <circle cx="75" cy="75" r="40" fill="white" />
      </svg>

      <div className="flex justify-between w-full px-4 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
          Indian - 94%
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          Foreign - 6%
        </div>
      </div>
    </div>
  );
};

export default CircleGraph;
