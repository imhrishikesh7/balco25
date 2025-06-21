import { div } from "framer-motion/client";
import React from "react";

const EmpoweringProgress = () => {
  return (
    <div className="bg-[#f3eae3]">
      <div className="marginal">
    <div>
      {/* Top Section with Flex Layout */}
      <div className="w-full flex flex-col items-end lg:flex-row">
        {/* Left Text Section - 2/3 width */}
        <div className="w-full lg:w-2/3 bg-[#f3eae3] order-2 lg:order-1">
          <div className="relative z-10 text-left">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-[#0281b5] to-[#70bf44] bg-clip-text text-transparent mb-5 w-fit leading-tight">
              Empowering<br />
              Progress
            </h1>
            <p className="text-black text-xl font-semibold mt-2">
              while Shaping the Future
            </p>
            <p className="text-xs sm:text-sm text-[#3f79af] mt-2">
              Value-focused | Future-ready | Sustainability-first
            </p>
          </div>
          <h2 className="text-[#0071ce] text-lg sm:text-xl font-bold mt-6">
            As India marches confidently towards becoming a global superpower by 2050, infrastructure development is poised to play a significant role. We, at BALCO, understand the key role that aluminium plays in powering the nation's industrial evolution. Capitalising on this opportunity, we are focused on delivering value through innovative manufacturing technologies and solutions.
          </h2>
        </div>

        {/* Right Image Section - 1/3 width */}
        <div className="w-full lg:w-1/3 relative flex justify-center items-center order-1 lg:order-2 min-h-[400px] lg:min-h-[500px]">
          <img
            src="EmpoweringProcess/Balco-Collage.png"
            alt="Empowering Progress"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Full Width Content Section */}
      <div className=" bg-[#f3eae3] pb-10 mt-8">
        <p className="text-black text-sm sm:text-base mb-4">
          Being a 'Value-focused' organisation, we ensure that we continuously improve the quality of our products while optimising operations to create long-term value for our stakeholders.
        </p>
        <p className="text-black text-sm sm:text-base mb-4">
          By embracing a 'Future-ready' approach, we have deployed advanced technology, introduced people-centric processes and maintained superior-quality standards to accelerate our growth.
        </p>
        <p className="text-black text-sm sm:text-base mb-4">
          Our 'Sustainability-first' strategy enables us to align our operations with global sustainability standards, including the United Nations Sustainable Development Goals (UNSDGs). This approach enables us to drive growth responsibly, reduce environmental footprint and contribute to inclusive social progress.
        </p>
        <p className="text-black text-sm sm:text-base">
          Through these efforts, we are not just building a better business, we are empowering progress and shaping a sustainable future of the country.
        </p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default EmpoweringProgress;