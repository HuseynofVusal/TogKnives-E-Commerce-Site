import { AiFillMessage } from "react-icons/ai";
import HeroSection from "../components/HeroSection";
import { HiHome } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";

const Home = () => {
  

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

      {/* Chat Button  */}
      <div className="bg-[#e97625] fixed right-[3%] bottom-[3%] z-50 flex items-center gap-2 px-4 py-3 rounded-xl hover:scale-[1.1] duration-200 text-white cursor-pointer">
        <AiFillMessage className="text-white text-xl" />
        <span className="font-semibold">Chat with us</span>
      </div>
    </main>
  );
};

export default Home;
