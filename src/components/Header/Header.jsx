import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { BsBasket3 } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [burger, setBurger] = useState(false);
  return (
    <header className="py-4 bg-white shadow-md sticky top-0 z-50 ">
      <div className="grid grid-cols-3 items-center justify-between max-w-[1320px] mx-auto py-4 px-6 lg:px-8">
        <div className="flex items-center gap-2 text-2xl lg:hidden">
          <MdMenu onClick={() => setBurger(true)} />
          <CiSearch className="sm:hidden block" />
        </div>
        <div>
          <img
            className="w-[115px] md:w-[155px] "
            src="./assets/images/logo-black.png"
            alt="Logo"
          />
        </div>
        <ul className="hidden lg:flex items-center justify-center uppercase gap-2">
          <li className="relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2">
            <span>Knives</span>
            <span className="absolute left-0 top-full w-0 h-[2px] bg-amber-500 group-hover:w-full duration-300 "></span>
          </li>
          <li className="relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2">
            <span>Sets</span>
            <span className="absolute left-0 top-full w-0 h-[2px] bg-amber-500 group-hover:w-full duration-300 "></span>
          </li>
          <li className="relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2">
            <span>Storage</span>
            <span className="absolute left-0 top-full w-0 h-[2px] bg-amber-500 group-hover:w-full duration-300 "></span>
          </li>
          <li className="relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2">
            <span>Sharpening</span>
            <span className="absolute left-0 top-full w-0 h-[2px] bg-amber-500 group-hover:w-full duration-300 "></span>
          </li>
          <li className="relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2">
            <span>Board</span>
            <span className="absolute left-0 top-full w-0 h-[2px] bg-amber-500 group-hover:w-full duration-300 "></span>
          </li>
          <li className="relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2">
            <span>Higonokami</span>
            <span className="absolute left-0 top-full w-0 h-[2px] bg-amber-500 group-hover:w-full duration-300 "></span>
          </li>
          <li className="relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2">
            <span>Accessories</span>
            <span className="absolute left-0 top-full w-0 h-[2px] bg-amber-500 group-hover:w-full duration-300 "></span>
          </li>
        </ul>
        <div className="flex items-center justify-end gap-2 text-2xl w-full">
          <CiSearch className="hidden sm:block" />
          <LuUser />
          <div className="relative">
            <BsBasket3 />
            <div className="absolute -top-3 -right-3 bg-amber-400 w-5 h-5 rounded-full flex items-center justify-center">
              <span className="text-sm">0</span>
            </div>
          </div>
        </div>
      </div>
      {burger && <BurgerMenu setBurger={setBurger} />}
    </header>
  );
};

export default Header;
