import React from "react";
import { toCategories } from "../data/products";
import { NavLink, useLocation } from "react-router";

const Collection = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const selectedKey = params.get("category") || "knives";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-3 !py-10 cont ">
      {toCategories?.map(
        (item) =>
          selectedKey !== item.name && (
            <NavLink
              key={item.name}
              to={`/main/category?category=${item.name}&category=${item.id}`}
              className="w-full bg-black h-[300px] relative !block group overflow-hidden duration-300 transition-all"
            >
              <img
                src={item.img}
                className={`w-full h-full  object-cover transform transition-transform duration-[500ms] ease-in-out group-hover:scale-105 `}
                alt={item.name}
              />
              <div className="absolute left-[50%] group-hover:top-[50%] top-[55%] bg-black group-hover:bg-white duration-200 -translate-x-[50%] border-2 border-white -translate-y-[50%] bg-opacity-50 text-white !py-3 px-8 ">
                <span className="uppercase text-[13px] text-white group-hover:text-black duration-200 ">
                  {item.name}
                </span>
                {/* <span className="">
                    <BsFillBasket2Fill className="text-[#e97625] text-2xl" />
                  </span> */}
              </div>
            </NavLink>
          )
      )}
    </div>
  );
};

export default Collection;
