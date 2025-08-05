import React, { useState } from "react";
import { NavLink } from "react-router";
import { products } from "../../data/products";
import Rating from "../../components/Rating";
import Tabs from "./Tabs";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { PiPaintBrush, PiPaintBrushBold } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { HiHome } from "react-icons/hi";
import BasketModal from "../../components/BasketModal";

const ProductDetails = () => {
  const allImages = [
    "/assets/images/Sets.webp",
    "/assets/images/Knives.webp",
    "/assets/images/accessories.webp",
    "/assets/images/Boards.webp",
    "/assets/images/Boards.webp",
    "/assets/images/Boards.webp",
    "/assets/images/Boards.webp",
    "/assets/images/Boards.webp",
    "/assets/images/Boards.webp",
    "/assets/images/Boards.webp",
    "/assets/images/Boards.webp",
  ];

  const [mainImage, setMainImage] = useState(allImages[0]);
  const [thumbnails, setThumbnails] = useState(allImages.slice(1));
  const [basketModal, setBasketModal] = useState(false);
  const {data:products={}}=useGet

  const handleImageClick = (clickedImage) => {
    const newThumbs = [...thumbnails];
    const index = newThumbs.findIndex((img) => img === clickedImage);
    if (index !== -1) {
      newThumbs[index] = mainImage;
      setMainImage(clickedImage);
      setThumbnails(newThumbs);
    }
  };
  return (
    <main className="mt-40">
      <div className="w-full cont mt-5">
        {products.map((item) => (
          <div key={item.id}>
            <div className="lg:text-6xl md:text-4xl text-3xl mb-5 uppercase text-[#333] flex items-center">
              <NavLink
                className={
                  "text-[13px] font-extralight text-[#dad7d5] leading-[15px] cursor-pointer py-1 uppercase border-r-2 border-[#776c65] px-2"
                }
                to="/"
              >
                Home
              </NavLink>
              <span className="text-[13px] font-extralight text-[#dad7d5] leading-[15px] cursor-pointer py-1 uppercase border-r-2 border-[#776c65] px-2">
                Category
              </span>
              <span className="text-[13px] font-extralight text-[#a9a39f] leading-[15px] cursor-pointer py-1 uppercase px-2">
                Product Name
              </span>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 ">
              <div className="flex-1 lg:flex-col flex-row overflow-x-auto sm:max-h-200 max-h-100 overflow-y-auto scrollbar-hide px-2">
                {/* Main Image */}
                <div className="w-full aspect-[4/3] mb-4">
                  <img
                    src={mainImage}
                    alt="Main product"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                  {thumbnails.map((img, i) => (
                    <div
                      key={i}
                      className="cursor-pointer border-2 rounded-lg hover:border-orange-500"
                    >
                      <img
                        onClick={() => handleImageClick(img)}
                        src={img}
                        alt={`thumbnail-${i}`}
                        className="w-full h-24 object-cover rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 px-5">
                <div className="w-full relative">
                  <div className="">
                    <h3 className="text-[#776c65] mb-5 text-4xl">
                      {item.name}
                    </h3>
                    <p className="text-[#776c65] text-[15px] my-5 uppercase">
                      {item.description}
                    </p>
                    <span className="text-[#776c65] my-5 text-lg">
                      <span className="text-[#776c65] font-semibold font-sans">
                        $
                      </span>
                      {item.price}.00
                    </span>
                    <p className="text-[#776c65] text-[15px] my-5 uppercase">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-full mt-3">
                    <div
                      onClick={() => {
                        setBasketModal(true);
                      }}
                      className="block  text-black text-[18px] bg-[#e97625] border-3 border-transparent hover:border-[#e97625] text-center   hover:bg-white hover:text-[#e97625] duration-300 cursor-pointer  px-3 py-4 uppercase"
                    >
                      Add to Basket
                    </div>
                  </div>
                  <div className="my-5">
                    <Rating />
                  </div>
                  <div>
                    <Tabs />
                  </div>
                  <div className="p-3 border border-[#e97625] text-[#776c65] m-5">
                    <h6 className="uppercase">Free Blade Guard</h6>
                    <p className="text-[14px]">
                      A TOG recycled blade guard will be included with your
                      knife at no additional charge.{" "}
                    </p>
                  </div>
                  <div className="flex m-5 gap-4 items-center text-lg">
                    <p>Share</p>
                    <FaFacebook />
                    <BsTwitter />
                    <GiProgression />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {basketModal && <BasketModal setBasketModal={setBasketModal} />}
      </div>
      {/* Icon Wrapper  */}
      <div className="flex justify-between items-center gap-3 cont !py-10 flex-col lg:flex-row px-5">
        <div className="flex gap-3 lg:w-full w-1/3 lg:border-r lg:pr-6 lg:border-[#776c65] border-b pb-6 lg:border-b-0 border-[#776c65]  flex-col items-center cursor-pointer">
          <div>
            <img
              className="w-[40px] h-[40px]"
              src="./assets/images/home-icons-1.avif"
              alt="icon"
            />
          </div>
          <p className="uppercase text-[12px] text-[#776c65] whitespace-nowrap">
            Lifetime Guarantee
          </p>
        </div>
        <div className="flex gap-3 lg:w-full w-1/3 lg:border-r lg:pr-6 lg:border-[#776c65] border-b pb-6 lg:border-b-0 border-[#776c65]  flex-col items-center cursor-pointer">
          <div>
            <HiHome className="w-[40px] h-[40px] text-[#acabaa]" />
          </div>
          <p className="uppercase text-[12px] text-[#776c65] whitespace-nowrap">
            30 Days Home Trial
          </p>
        </div>
        <div className="flex gap-3 lg:w-full w-1/3 lg:border-r lg:pr-6 lg:border-[#776c65] border-b pb-6 lg:border-b-0 border-[#776c65]  flex-col items-center cursor-pointer">
          <div>
            <TbWorld className="w-[40px] h-[40px] text-[#acabaa]" />
          </div>
          <p className="uppercase text-[12px] text-[#776c65] whitespace-nowrap">
            WorldWide Delivery
          </p>
        </div>
        <div className="flex gap-3 lg:w-full w-1/3 flex-col items-center cursor-pointer">
          <div>
            <MdOutlinePayment className="w-[40px] h-[40px] text-[#acabaa]" />
          </div>
          <p className="uppercase text-[12px] text-[#776c65] whitespace-nowrap content-start">
            Pay In 3 Instalments
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
