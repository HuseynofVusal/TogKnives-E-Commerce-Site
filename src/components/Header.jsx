import React from "react";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { BsBasket3 } from "react-icons/bs";
import { Badge } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 md:grid-cols-2 lg-grid-cols-3 items-center justify-between max-w-[1320px] mx-auto py-4 px-6 lg:px-8">
        <div className="flex items-center gap-2 text-2xl md:hidden">
          <MdMenu />
          <CiSearch className="sm:hidden block" />
        </div>
        <div>
          <img
            className="w-[115px] md:w-[155px] "
            src="./assets/images/logo-black.png"
            alt="Logo"
          />
        </div>
        <div className="flex items-center justify-end gap-2 text-2xl w-full">
          <CiSearch className="hidden sm:block" />
          <LuUser />
          <div className="relative">
            <BsBasket3 />
            <div className="absolute -top-3 -right-3 bg-amber-400 w-6 h-6 rounded-full ">
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
