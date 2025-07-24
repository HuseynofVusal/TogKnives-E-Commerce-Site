import React, { useState } from "react";
import { products } from "../data/products";
import Rating from "./Rating";
import { BsBasket3, BsFillBasket2Fill } from "react-icons/bs";
import { NavLink } from "react-router";
import BasketModal from "./BasketModal";

const ProductCard = () => {
  const [basketModal, setBasketModal] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-3">
      {products.map((item) => (
        <NavLink to="/details" key={item.id} className="w-full relative">
          <div className="w-full relative">
            <img
              src={item.image}
              className="max-h-[615px] w-full object-cover"
              alt=""
            />
            <div
              onClick={() => {
                setBasketModal(true);
              }}
              className="absolute hidden md:block right-[5%] bottom-[5%] text-white text-[12px] lg:bg-[#e97625] bg-white hover:bg-white hover:text-[#e97625] duration-300 cursor-pointer  px-3 py-2 uppercase"
            >
              <span className="hidden lg:block">Add to Basket</span>
              <span className="lg:hidden md:block hidden">
                <BsFillBasket2Fill className="text-[#e97625] text-2xl" />
              </span>
            </div>
          </div>
          <div className="p-3">
            <h3 className="text-[#776c65] my-2">{item.name}</h3>
            <p className="text-[#776c65] text-[12px] my-2 uppercase">
              {item.description}
            </p>
            <span className="text-[#776c65] my-2">
              <span className="text-[#776c65] font-semibold font-sans">$</span>
              {item.price}.00
            </span>
            <div className="flex justify-between items-center">
              <Rating />
              <div
                onClick={()=>setBasketModal(true)}
                className="flex items-start gap-2 md:hidden"
              >
                <BsBasket3 className="text-[#e97625]" />
                <span className="uppercase text-[13px] text-[#e97625] ">
                  Add
                </span>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
      {basketModal && <BasketModal setBasketModal={setBasketModal} />}
    </div>
  );
};

export default ProductCard;
