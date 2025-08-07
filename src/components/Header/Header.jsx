import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { BsBasket3 } from "react-icons/bs";
import BurgerMenu from "./BurgerMenu";
import { NavLink, useLocation } from "react-router";
import { useGetCategoryQuery } from "../../store/api";

const Header = ({basket}) => {
  const [burger, setBurger] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [categories,setCategories] = useState()
  
  const location = useLocation().pathname;

  const {data:categoriesData} = useGetCategoryQuery()
  
  useEffect(()=>{
    if(categoriesData){
      setCategories(categoriesData)
    }
  },[categoriesData])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  return (
    <header
      className={` overflow-x-hidden  ${
        isScrolled || location != "/main/category"
          ? "bg-white !text-[#776c65] fixed w-full top-0 left-0 z-50 duration-300 "
          : "text-white bg-transparent absolute z-50 left-0 top-0 w-full"
      } shadow-md `}
    >
      <div className="grid grid-cols-3 items-center justify-between max-w-[1320px] mx-auto py-4 px-6 lg:px-8">
        <div className="flex items-center gap-2 text-2xl lg:hidden">
          <MdMenu onClick={() => setBurger(true)} />
          <CiSearch className="sm:hidden block" />
        </div>
        <NavLink className={"flex lg:justify-start justify-center"} to="/main">
          <img
            className="w-[115px] md:w-[155px] "
            src={`${
              isScrolled || location != "/main/category"
                ? "/assets/images/logo-black.png"
                : "/assets/images/logo.png"
            }`}
            alt="Logo"
          />
        </NavLink>

        {/* Categories  */}
        <ul className="hidden lg:flex items-center justify-center uppercase gap-4">
          {categories?.map(item=>(
             <NavLink
             key={item.id}
            to={`/main/category?category=${item.slug}`}
            className={`${
              isScrolled || location != "/main/category"
                ? "text-[#776c65]"
                : "text-[#e97625]"
            } relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer`}
          >
            <span className="font-semibold">{item.name}</span>
            <span
              className="absolute left-0 top-full w-0 h-[2px] bg-[#e97625]
 group-hover:w-full duration-300 "
            ></span>
          </NavLink>
          ))}
        </ul>
        <div className="flex justify-end items-center  gap-2">
          <div className="hidden lg:block content-end">
            <NavLink
              to="/main/about"
              className={`${
                isScrolled || location != "/main/category"
                  ? "text-[#776c65]"
                  : "!text-white"
              } relative text-[13px] group text-[#776c65] leading-[15px] cursor-pointer pb-2`}
            >
              <span className="uppercase font-semibold">About</span>
              <span className="absolute left-0 top-full w-0 h-[2px] bg-[#e97625] group-hover:w-full duration-300 "></span>
            </NavLink>
          </div>
          <div className="flex items-center content-end gap-2 text-2xl">
            <CiSearch className="hidden sm:block" />
            <LuUser />
            <NavLink to="/main/basket" className="relative">
              <BsBasket3 />
              <div className="absolute -top-3 -right-3 bg-[#e97625] w-5 h-5 rounded-full flex items-center justify-center">
                <span className="text-sm text-white">{basket?.length}</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {burger && <BurgerMenu setBurger={setBurger} />}
    </header>
  );
};

export default Header;
