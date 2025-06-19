import React from 'react';

const Cover = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/home/Balco Cover Animation.webm"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Cover;
