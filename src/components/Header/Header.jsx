import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { BsBasket3 } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import BurgerMenu from "./BurgerMenu";
import { NavLink, useLocation } from "react-router";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-4  ${
        isScrolled || location != "/category"
          ? "bg-white !text-[#776c65] fixed w-full top-0 left-0 z-50 duration-300 "
          : "text-white bg-transparent absolute z-50 left-0 top-0 w-full"
      } shadow-md `}
    >
      <div className="grid grid-cols-3 items-center justify-between max-w-[1320px] mx-auto py-4 px-6 lg:px-8">
        <div className="flex items-center gap-2 text-2xl lg:hidden">
          <MdMenu onClick={() => setBurger(true)} />
          <CiSearch className="sm:hidden block" />
        </div>
        <NavLink className={"flex lg:justify-start justify-center"} to="/">
          <img
            className="w-[115px] md:w-[155px] "
            src={`${
              isScrolled || location != "/category"
                ? "./assets/images/logo-black.png"
                : "./assets/images/logo.png"
            }`}
            alt="Logo"
          />
        </NavLink>
        <ul className="hidden lg:flex items-center justify-center uppercase gap-4">
          <NavLink
            to="/category?category=knives"
            className={`${
              isScrolled || location != "/category" ? "text-[#776c65]" : "!text-white"
            } relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2`}
          >
            <span>Knives</span>
            <span
              className="absolute left-0 top-full w-0 h-[2px] bg-[#e97625]
 group-hover:w-full duration-300 "
            ></span>
          </NavLink>
          <NavLink
            to="/category?category=sets"
            className={`${
              isScrolled || location != "/category" ? "text-[#776c65]" : "!text-white"
            } relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2`}
          >
            <span>Sets</span>
            <span
              className="absolute left-0 top-full w-0 h-[2px] bg-[#e97625]
 group-hover:w-full duration-300 "
            ></span>
          </NavLink>
          <NavLink
            to="/category?category=storage"
            className={`${
              isScrolled || location != "/category" ? "text-[#776c65]" : "!text-white"
            } relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2`}
          >
            <span>Storage</span>
            <span
              className="absolute left-0 top-full w-0 h-[2px] bg-[#e97625]
 group-hover:w-full duration-300 "
            ></span>
          </NavLink>
          <NavLink
            to="/category?category=sharpening"
            className={`${
              isScrolled || location != "/category" ? "text-[#776c65]" : "!text-white"
            } relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2`}
          >
            <span>Sharpening</span>
            <span
              className="absolute left-0 top-full w-0 h-[2px] bg-[#e97625]
 group-hover:w-full duration-300 "
            ></span>
          </NavLink>
          <NavLink
            to="/category?category=board"
            className={`${
              isScrolled || location != "/category" ? "text-[#776c65]" : "!text-white"
            } relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2`}
          >
            <span>Board</span>
            <span
              className="absolute left-0 top-full w-0 h-[2px] bg-[#e97625]
 group-hover:w-full duration-300 "
            ></span>
          </NavLink>
          <NavLink
            to="/category?category=higonokami"
            className={`${
              isScrolled || location != "/category" ? "text-[#776c65]" : "!text-white"
            } relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2`}
          >
            <span>Higonokami</span>
            <span
              className="absolute left-0 top-full w-0 h-[2px] bg-[#e97625]
 group-hover:w-full duration-300 "
            ></span>
          </NavLink>
          <NavLink
            to="/category?category=accessories"
            className={`${
              isScrolled || location != "/category" ? "text-[#776c65]" : "!text-white"
            } relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2`}
          >
            <span>Accessories</span>
            <span
              className="absolute left-0 top-full w-0 h-[2px] bg-[#e97625]
 group-hover:w-full duration-300 "
            ></span>
          </NavLink>
        </ul>
        <div className="flex justify-end items-center  gap-2">
          <div className="hidden lg:block content-end">
            <NavLink
              to="/about"
              className={`${
                isScrolled || location != "/category" ? "text-[#776c65]" : "!text-white"
              } relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2`}
            >
              <span className="uppercase">About</span>
              <span className="absolute left-0 top-full w-0 h-[2px] bg-[#e97625] group-hover:w-full duration-300 "></span>
            </NavLink>
          </div>
          <div className="flex items-center content-end gap-2 text-2xl">
            <CiSearch className="hidden sm:block" />
            <LuUser />
            <div className="relative">
              <BsBasket3 />
              <div className="absolute -top-3 -right-3 bg-[#e97625] w-5 h-5 rounded-full flex items-center justify-center">
                <span className="text-sm">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {burger && <BurgerMenu setBurger={setBurger} />}
    </header>
  );
};

export default Header;
