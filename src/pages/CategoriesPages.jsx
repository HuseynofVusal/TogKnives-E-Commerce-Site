import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import { BsFillBasket2Fill } from "react-icons/bs";

const CategoriesPages = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  const params = new URLSearchParams(location.search);

  const selectedKey = params.get("category") || "knives";

  const selectedItem = categories.find((item) => item.key == selectedKey);

  const { name, desc, img, descBonus } = selectedItem;

  const toCategories = [
    { name: "knives", img: "/assets/images/knivess.webp",id: 7 },

    { name: "sets", img: "/assets/images/setss.webp", id: 8  },
    { name: "storage", img: "/assets/images/storagee.webp", id: 9 },
    { name: "sharpening", img: "/assets/images/sharpeningg.webp", id: 10 },
    { name: "boards", img: "/assets/images/boardss.webp" , id: 11 },
    { name: "higonokami", img: "/assets/images/higonokamii.webp",  },
    { name: "accessories", img: "/assets/images/accessoriess.webp", id: 12 },
  ];

  return (
    <main>
      <div className="background_img w-screen lg:h-screen h-[60vh] relative">
        <img
          className="w-full h-full object-cover opacity-100 grayscale-[10%]"
          src={img}
          alt={name}
        />
        <div className="absolute lg:top-[15%] top-[20%] lg:left-[5%] left-0 lg:text-6xl md:text-4xl text-3xl uppercase cont text-[#333] flex items-center">
          <NavLink
            className={
              "text-[14px] font-extralight text-[#a9a39f] leading-[15px] cursor-pointer py-1 uppercase border-r border-[#776c65] px-2"
            }
            to="/main"
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
      {/* PRODUCTS  */}

      <ProductCard />

      {/* COLLECTION  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-3 !py-10 cont ">
        {toCategories?.map(
          (item) =>
            selectedKey !== item.name && (
              <NavLink
                to={`/main/category?category=${item.name}&category=${item.id}`}
                className="w-full bg-black h-[300px] relative !block group overflow-hidden duration-300 transition-all"
              >
                <img
                  src={item.img}
                  className={`w-full h-full  object-cover transform transition-transform duration-[500ms] ease-in-out group-hover:scale-105 `}
                  alt={item.name}
                />
                <div className="absolute left-[50%] group-hover:top-[50%] top-[55%] bg-black group-hover:bg-white duration-200 -translate-x-[50%] border-2 border-white -translate-y-[50%] bg-opacity-50 text-white !py-3 px-8 ">
                  <span className="uppercase text-[13px] text-white group-hover:text-black duration-200 ">{item.name}</span>
                  {/* <span className="">
                    <BsFillBasket2Fill className="text-[#e97625] text-2xl" />
                  </span> */}
                </div>
              </NavLink>
            )
        )}
      </div>
    </main>
  );
};

export default CategoriesPages;
