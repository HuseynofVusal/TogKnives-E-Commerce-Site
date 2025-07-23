import React from "react";
import { NavLink } from "react-router";

const ProductDetails = () => {
  return (
    <main>
      <div className="absolute lg:top-[15%] top-[20%] left-0 lg:text-6xl md:text-4xl text-3xl uppercase cont text-[#333] flex items-center">
        <NavLink
          className={
            "text-[14px] font-extralight text-[#a9a39f] leading-[15px] cursor-pointer py-1 uppercase border-r border-[#776c65] px-2"
          }
          to="/"
        >
          Home
        </NavLink>
        <span className="text-[14px] font-extralight text-[#a9a39f] leading-[15px] cursor-pointer py-1 uppercase border-r border-[#776c65] px-2">
          Collection
        </span>
        <span className="text-[14px] font-extralight text-[#f8f8f8] leading-[15px] cursor-pointer py-1 uppercase px-2">
          Product Name
        </span>
      </div>
    </main>
  );
};

export default ProductDetails;
