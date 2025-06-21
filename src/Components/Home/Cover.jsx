import React from 'react';

const Cover = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover md:object-cover object-contain"
        src="/home/Balco Cover Animation.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/home/balco-poster.jpg" // Add a poster image as fallback
      />
      

    </div>
  );
};

export default Cover;