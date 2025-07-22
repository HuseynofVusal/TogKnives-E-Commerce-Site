import React, { useEffect, useState } from "react";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { NavLink } from "react-router";

const BurgerMenu = ({ setBurger }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setBurger(false); //
    }, 300);
  };

  return (
    <>
      <div
        onClick={handleClose}
        className="fixed left-0 top-0 w-screen h-screen bg-[#333] opacity-50 z-40"
      ></div>

      <div
        className={`fixed z-50 bg-white shadow-lg
        top-[20px] bottom-0
        left-[20px] sm:left-auto sm:right-[20px]
        w-[calc(100%-40px)] sm:w-1/2
        h-[94%]
        rounded-lg p-4
        transition-transform duration-300 ease-in-out
        transform ${isVisible ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <MdOutlineCancel
          className="text-3xl text-[#333] cursor-pointer"
          onClick={handleClose}
        />
        <ul className="mt-4">
          {[
            "Knives",
            "Sets",
            "Storage",
            "Sharpening",
            "Boards",
            "Higonokami",
            "About",
            "News",
          ].map((item, i) => (
            <NavLink
              to={`/${item.toLowerCase()}`}
              key={i}
              className="text-[16px] font-extralight text-[#776c65] leading-[15px] cursor-pointer py-3 uppercase flex flex-col"
            >
              {item}
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center text-3xl gap-3 text-[#776c65] mt-6 border-b border-[#3a3737] pb-4">
          <CiFacebook />
          <CiInstagram />
          <CiYoutube />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
