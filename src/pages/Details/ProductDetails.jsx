import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
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
import { useAddBasketMutation, useGetProductQuery } from "../../store/api";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState();
  const [basketModal, setBasketModal] = useState(false);
  // const [basketId, setBasketId] = useState(null);
  const [basketModalId, setBasketModalId] = useState(null);

  const [products, setProducts] = useState([]);
  

  const { data: fetchedProducts, ...getStatus } = useGetProductQuery();
  const [addBasket, { data: basketProduct }] = useAddBasketMutation();

  getStatus,
  basketProduct

  const location = useLocation().search.split("=")[1].split("&")[0];

  useEffect(() => {
    if (fetchedProducts) {
      const productsWithQuantity = fetchedProducts.map((item) => ({
        ...item,
        quantity: 1,
      }));

      setProducts(productsWithQuantity);
      const currentProduct = fetchedProducts.find(
        (item) => item.id == location
      );

      if (currentProduct && currentProduct.images.length > 0) {
        setMainImage(currentProduct.images[0].url);
      }
    }
  }, [fetchedProducts, location]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  const handleImageClick = (clickedImage) => {
    setMainImage(clickedImage);
  };

  const handleAddBasket = async (basketId, quantity) => {
    await addBasket({ basketId, quantity });
  };

  return (
    <main className="md:mt-30 mt:40">
      <div className="w-full cont mt-5">
        {products.map(
          (item) =>
            item.id == location && (
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
                  <NavLink to={`/main/category?category=${item.category.slug}&category=${item.category.id}`} className="text-[13px] font-extralight text-[#dad7d5] leading-[15px] cursor-pointer py-1 uppercase border-r-2 border-[#776c65] px-2">
                    {item.category.name}
                  </NavLink>
                  <span className="text-[13px] font-extralight text-[#a9a39f] leading-[15px] cursor-pointer py-1 uppercase px-2">
                    {item.name}
                  </span>
                </div>
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 mt-10 ">
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
                      {item.images.map((img, i) => (
                        <div
                          key={i}
                          className="cursor-pointer border-2 rounded-lg hover:border-orange-500"
                        >
                          <img
                            onClick={() => handleImageClick(img.url)}
                            src={img.url}
                            alt={`thumbnail-${i}`}
                            className="w-full h-35 object-cover rounded-md"
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
                          {item.price}
                        </span>
                        <p className="text-[#776c65] text-[15px] my-5">
                          If you’re not fully satisfied with your knife after 30
                          days, return it for a full refund, no questions asked.
                        </p>
                        <div className="flex gap-3 sm:mb-4">
                          <svg
                            width="64px"
                            height="64px"
                            viewBox="0 0 34 34"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="Clock-Icon"
                                transform="translate(1.000000, 2.000000)"
                              >
                                <path
                                  d="M15.81,30 C24.08,30 30.78,23.3 30.78,15.03 C30.78,6.76 24.08,0.06 15.81,0.06"
                                  id="Path"
                                  stroke="#776C66"
                                  strokeWidth="2.8346"
                                ></path>
                                <path
                                  d="M15.81,30 C7.54,30 0.84,23.3 0.84,15.03 C0.84,6.76 7.54,0.06 15.81,0.06"
                                  id="Path"
                                  stroke="#776C66"
                                  strokeWidth="2.8346"
                                ></path>
                                <polygon
                                  id="Path"
                                  fill="#776C66"
                                  fillRule="nonzero"
                                  points="14.87 18.05 12.82 16.09 23.73 5.68 24.66 6.57"
                                ></polygon>
                                <polygon
                                  id="Path"
                                  fill="#776C66"
                                  fillRule="nonzero"
                                  points="18.81 16.05 16.79 18.04 10.41 10.55 11.33 9.64"
                                ></polygon>
                              </g>
                            </g>
                          </svg>
                          <p className="text-[#575553] ">
                            Order within {new Date().getHours()} hours{" "}
                            {new Date().getMinutes()} minutes for UK delivery by
                            Monday {new Date().getMonth()}th July
                            <span className="text-[#776c65] text-[12px] my-2 uppercase">
                              (ASSUMES IMMEDIATE AGE VERIFICATION)
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="w-full mt-3">
                        <div
                          onClick={() => (
                            handleAddBasket(item.id, item.quantity),
                            setBasketModal(true),
                            setBasketModalId(item.id)
                          )}
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
            )
        )}
        {basketModal && (
          <BasketModal
            setBasketModal={setBasketModal}
            basketModalId={basketModalId}
            products={products}
          />
        )}
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
