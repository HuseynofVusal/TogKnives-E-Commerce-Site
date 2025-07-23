import React from "react";
import { NavLink, useLocation } from "react-router";
import { categories } from "../data/products";
import ProductCard from "../components/ProductCard";

const CategoriesPages = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const selectedKey = params.get("category") || "knives";

  const selectedItem = categories.find((item) => item.key == selectedKey);
  const { name, desc, img, descBonus } = selectedItem;

  return (
    <main>
      <div className="background_img w-screen lg:h-screen h-[60vh] relative">
        <img
          className="w-full h-full object-cover opacity-100 grayscale-[10%]"
          src={img}
          alt={name}
        />
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
            {name}
          </span>
        </div>
        <div className="absolute top-[35%] left-[5%]">
          <p className=" lg:text-6xl md:text-4xl text-3xl uppercase text-[#fff]">
            {name}
          </p>
          <p className="text-[14px] my-3 lg:max-w-[50%] max-w-[70%]  text-white">
            {desc}
          </p>
          <p className="text-[14px] my-3 lg:max-w-[50%] max-w-[70%]  text-white">
            {descBonus && descBonus}
          </p>
        </div>
      </div>
      <ProductCard />
    </main>
  );
};

export default CategoriesPages;
