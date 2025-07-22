import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-screen relative ">
      <video
        className="w-full h-full object-cover"
        src="/assets/videos/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div>
          <p className="uppercase text-black md:text-6xl text-3xl whitespace-nowrap font-semibold mb-3">
            Designed in Britain.
          </p>
          <p className="uppercase text-white md:text-6xl text-3xl whitespace-nowrap font-semibold">
            Crafted in Japan.
          </p>
        </div>
        <div className="uppercase bg-[#e97625] py-3 flex flex-nowrap items-center justify-center gap-2 mt-6 w-max px-2 mx-auto text-sm cursor-pointer group transition-all duration-300">
          <span className="whitespace-nowrap">Discover Your Knife</span>
          <span className="text-lg inline-block transition-all duration-300 group-hover:translate-x-3">
            ➞
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
