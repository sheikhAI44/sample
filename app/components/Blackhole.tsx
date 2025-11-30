import React from 'react';

export default function Blackhole() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[300px] sm:h-[400px] overflow-hidden">
      {/* The Glow/Eclipse Effect */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-600 rounded-full blur-[100px] opacity-20 animate-pulse" />
      
      {/* The Rim Light (Blue/Purple Gradient) */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-t from-black via-black to-indigo-500 blur-md z-10" />

      {/* The Black Void */}
      <div className="relative z-20 w-[278px] h-[278px] sm:w-[398px] sm:h-[398px] bg-[#0A0A0A] rounded-full top-[40%] -translate-y-1/2" />

      {/* Text Overlay (Optional, sticking to reference style) */}
      <div className="relative z-30 mt-[-60px] sm:mt-[-80px] tracking-[1em] sm:tracking-[1.5em] text-xs sm:text-sm font-light text-white/80 uppercase text-center pl-[1em] sm:pl-[1.5em]">
        Coming Soon
      </div>
    </div>
  );
}



