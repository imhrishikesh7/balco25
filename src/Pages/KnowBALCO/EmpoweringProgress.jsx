import React from "react";

const EmpoweringProgress = () => {
  return (
    <div className="bg-[#f3eae3]">
    <div className="w-full h-screen flex flex-col lg:flex-row overflow-hidden marginal">
      {/* Left Image + Overlay Section */}
      <div className="w-full  relative bg-white flex justify-end items-center pr-6 sm:pr-10">
        {/* Background Image */}
        <img
          src="public/EmpoweringProcess/Cover-Balco.png"
          alt="Empowering Progress"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Text Content on top of image, right centered */}
        <div className="relative z-10 text-right">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-[#0281b5] to-[#70bf44] bg-clip-text text-transparent leading-tight w-fit">
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
      </div>

      {/* Right Text Section with Sticky Inner Text */}
      <div className="w-full lg:w-[60%] bg-[#f3eae3] h-screen overflow-y-auto relative">
        <div className="sticky top-24 z-20 px-6 sm:px-10 py-10 bg-[#f3eae3]">
          {/* 👆 top-24 = to keep space below navbar (adjust if your navbar is taller or shorter) */}
          <h2 className="text-[#0071ce] text-lg sm:text-xl font-bold mb-4 leading-relaxed">
            As India marches confidently towards becoming a global superpower by 2050, infrastructure development is poised to play a significant role. We, at BALCO, understand the key role that aluminium plays in powering the nation’s industrial evolution. Capitalising on this opportunity, we are focused on delivering value through innovative manufacturing technologies and solutions.
          </h2>

          <p className="text-black text-sm sm:text-base leading-relaxed mb-4">
            Being a ‘Value-focused’ organisation, we ensure that we continuously improve the quality of our products while optimising operations to create long-term value for our stakeholders.
          </p>
          <p className="text-black text-sm sm:text-base leading-relaxed mb-4">
            By embracing a ‘Future-ready’ approach, we have deployed advanced technology, introduced people-centric processes and maintained superior-quality standards to accelerate our growth.
          </p>
          <p className="text-black text-sm sm:text-base leading-relaxed mb-4">
            Our ‘Sustainability-first’ strategy enables us to align our operations with global sustainability standards, including the United Nations Sustainable Development Goals (UNSDGs). This approach enables us to drive growth responsibly, reduce environmental footprint and contribute to inclusive social progress.
          </p>
          <p className="text-black text-sm sm:text-base leading-relaxed">
            Through these efforts, we are not just building a better business, we are empowering progress and shaping a sustainable future of the country.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EmpoweringProgress;
