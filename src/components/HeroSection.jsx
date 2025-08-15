import React from "react";
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router";

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
        <NavLink
          to="/main/category?category=knives&category=7"
          className="uppercase bg-[#e97625] py-3 px-5 flex flex-nowrap items-center justify-center gap-2 mt-6 w-max  mx-auto text-sm cursor-pointer group transition-all duration-300"
        >
          <span className="whitespace-nowrap group-hover:text-white duration-400">Discover Your Knife</span>
          <span className="text-lg inline-block transition-all duration-300 group-hover:translate-x-3">
            <BiRightArrowAlt className="text-white text-2xl" />
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default HeroSection;
