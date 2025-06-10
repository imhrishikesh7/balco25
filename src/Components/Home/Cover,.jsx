import React from 'react';

const Cover = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-ful object-contain"
        src={"/home/Balco Cover Animation.webm"}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Cover;
