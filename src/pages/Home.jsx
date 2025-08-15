import HeroSection from "../components/HeroSection";
import { HiHome } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router";
import {
  useAddBasketMutation,
  useGetProductByCategoryIdQuery,
  useGetProductQuery,
} from "../store/api";
import BasketModal from "../components/BasketModal";
import { useEffect, useRef, useState } from "react";
import { BsBasket3, BsFillBasket2Fill } from "react-icons/bs";
import Rating from "../components/Rating";
import Collection from "./Collection";
import ProductScroll from "../components/ProductScroll";

const Home = () => {
  const { data: categoriesData } = useGetProductByCategoryIdQuery(7);
  const [knivesData, setKnivesData] = useState([]);

  const [products, setProducts] = useState([]);
  const { data: productsData } = useGetProductQuery();
  useEffect(() => {
    if (productsData) {
      setProducts(productsData);
    }
    if (categoriesData) {
      const productsWithQuantity = categoriesData.map((item) => ({
        ...item,
        quantity: 1,
      }));
      setKnivesData(productsWithQuantity);
    }
  }, [productsData]);

  const scrollContainerRef = useRef(null);
  const [basketModalId, setBasketModalId] = useState(null);
  const [basketModal, setBasketModal] = useState(false);
  const [addBasket, { isLoading: isAdding }] = useAddBasketMutation();

  const handleAddBasket = async (basketId, quantity) => {
    await addBasket({ basketId, quantity }).unwrap();
  };
  return (
    <main className="relative">
      <HeroSection />
      {/* Icon Wrapper  */}
      <div className="flex justify-between items-center gap-3 cont !py-10 overflow-x-auto">
        <div className="flex gap-3 items-center cursor-pointer">
          <div>
            <img
              className="w-[24px] h-[24px]"
              src="./assets/images/home-icons-1.avif"
              alt="icon"
            />
          </div>
          <p className="uppercase text-[12px] text-[#776c65] whitespace-nowrap">
            Lifetime Guarantee
          </p>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <div>
            <HiHome className="w-[24px] h-[24px] text-[#acabaa]" />
          </div>
          <p className="uppercase text-[12px] text-[#776c65] whitespace-nowrap">
            30 Days Home Trial
          </p>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <div>
            <TbWorld className="w-[24px] h-[24px] text-[#acabaa]" />
          </div>
          <p className="uppercase text-[12px] text-[#776c65] whitespace-nowrap">
            WorldWide Delivery
          </p>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <div>
            <MdOutlinePayment className="w-[24px] h-[24px] text-[#acabaa]" />
          </div>
          <p className="uppercase text-[12px] text-[#776c65] whitespace-nowrap">
            Pay In 3 Instalments
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between  mx-auto !py-10 cont">
        <h2 className="uppercase text-3xl text-[#776c65]">Knives</h2>
        <p className="flex items-center group">
          <NavLink
            to="/main/category?category=knives&category=7"
            className="relative uppercase text-lg text-[#776c65] group cursor-pointer"
          >
            <span>View All</span>
            <span className="absolute top-full left-0 w-0 group-hover:w-full h-[1px] bg-black duration-200"></span>
          </NavLink>
          <BiRightArrowAlt className="group-hover:translate-x-2 text-xl duration-200" />
        </p>
      </div>

      {/* Knives Section */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-3 !py-10 cont scrollbar-hide"
      >
        {knivesData?.map((item) => (
          <NavLink
            to={`/main/product?product=${item.id}&${item.slug}`}
            key={item.id}
            className="min-w-75 relative group"
          >
            <div className="w-full relative">
              <img
                src={item.images[0].url}
                className={`w-full h-auto object-cover transition-opacity duration-500 ${
                  item.images[1] && "group-hover:opacity-0"
                }`}
                alt={item.name}
              />

              <img
                src={item.images[1]?.url}
                className={`w-full h-auto object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 ${
                  item.images[1] && "group-hover:opacity-100"
                }`}
                alt={item.name}
              />
              <div
                onClick={() => {
                  setBasketModal(true);
                }}
                className="group-hover:bottom-[5%] group-hover:opacity-100 opacity-0 duration-300 absolute hidden md:block right-[5%] bottom-[2%] text-black text-[12px] lg:bg-[#e97625] border-2 border-transparent hover:border-[#e97625] bg-white hover:bg-white hover:text-[#e97625] cursor-pointer  px-3 py-2 uppercase"
              >
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setBasketModalId(item.id);
                    setBasketModal(true);
                    handleAddBasket(item.id, item.quantity);
                  }}
                  className="hidden lg:block"
                >
                  Add to Basket
                </span>
                <span className="lg:hidden md:block hidden">
                  <BsFillBasket2Fill className="text-[#e97625] text-2xl" />
                </span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-[#776c65] my-2">{item.name}</h3>
              <p className="text-[#776c65] text-[12px] my-2 uppercase line-clamp-2">
                {item.description.split("=")[1]}
              </p>
              <span className="text-[#776c65] my-2">
                <span className="text-[#776c65] font-semibold font-sans">
                  $
                </span>
                {item.price}.00
              </span>
              <div className="flex justify-between items-center">
                <Rating />
                <div
                  onClick={() => setBasketModal(true)}
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
      </div>
      <ProductScroll scrollContainerRef={scrollContainerRef} />

      <Collection />

      <div className="flex md:flex-row flex-col items-center gap-5 py-5 p-[68px_48px] max-w-[1600px] mx-auto bg-[#323236] text-white">
        <div className="flex-1 flex items-center justify-center">
          <img src="/assets/images/home01.webp" alt="Man image" />
        </div>
        <div className="flex flex-col flex-1 gap-5  ">
          <h3 className="sm:leading-[5vw] font-sans sm:text-[3vw] text-2xl sm:pt-8 pt-3">
            "After 30 years slicing, dicing, filleting and chopping, I’ve
            finally got the right knife in my hand every day. TOG are the
            sharpest, smartest, most balanced knives I’ve ever used."
          </h3>
          <p>Nathan Outlaw</p>
          <p>
            Michelin Star Chef and TOG Ambassador <br />
            Owner of Outlaw’s New Road and Outlaw’s Fish Kitchen, Port Isaac
          </p>
          <NavLink
            to="/main/about"
            className="flex group items-center gap-2 px-4 py-3 w-max bg-white text-[13px] text-[#e97625] uppercase "
          >
            <span className="group-hover:text-black duration-300">
              What chefs say
            </span>
            <span className="text-lg inline-block transition-all duration-300  group-hover:translate-x-2">
              <BiRightArrowAlt className="text-black group-hover:text-[#e97625]  " />
            </span>
          </NavLink>
        </div>
      </div>

      <div className="main_end_grid grid lg:grid-cols-3 gap-3 grid-cols-1 bg-[#f7f6f5] p-[98px_48px] max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="h-[40px]">
            <img
              className="w-auto h-full mx-auto"
              src="/assets/images/main-end01.webp"
              alt="logo"
            />
          </div>
          <p className="text-[#776c65] whitespace-nowrap text-left text-[13px] font-extralight leading-[15px] cursor-pointer py-3 uppercase">
            Used weekly on Saturday Kitchen Live BBC1
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="h-[40px]">
            <img
              className="w-auto h-full mx-auto"
              src="/assets/images/main-end02.webp"
              alt="logo"
            />
          </div>
          <p className="text-[#776c65] whitespace-nowrap text-left text-[13px] font-extralight leading-[15px] cursor-pointer py-3 uppercase">
            BEST CHEF’S KNIFE 2024, T3 PLATINUM AWARD
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="h-[40px]">
            <img
              className="w-auto h-full mx-auto"
              src="/assets/images/main-end03.avif"
              alt="logo"
            />
          </div>
          <p className="text-[#776c65] whitespace-nowrap text-left text-[13px] font-extralight leading-[15px] cursor-pointer py-3 uppercase">
            BEST CHEF’S KNIFE 2024, T3 PLATINUM AWARD
          </p>
        </div>
      </div>

      {basketModal && (
        <BasketModal
          setBasketModal={setBasketModal}
          products={products}
          basketModalId={basketModalId}
        />
      )}
    </main>
  );
};

export default Home;
