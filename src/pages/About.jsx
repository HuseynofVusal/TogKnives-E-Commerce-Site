import React from "react";
import { HiHome } from "react-icons/hi";
import { MdOutlinePayment } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const About = () => {
  return (
    <main>
      <div className="background_img w-screen lg:h-screen h-[60vh] relative">
        <img
          className="w-full h-full object-cover opacity-98"
          src="./assets/images/About-Background.webp"
          alt="Back-img"
        />
        <p className="absolute bottom-[50%] left-[10%] lg:text-6xl md:text-4xl text-3xl uppercase text-[#333]">
          About us
        </p>
      </div>
      <div className="cont lg:px-8 px-6 py-10">
        <div>
          <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
            <div className="w-[36px]">
              <img
                className="w-full object-cover"
                src="./assets/images/about-icon02.webp"
                alt="icon"
              />
            </div>
            <div className="text-xl font-extralight text-[#868280] uppercase ">
              Our Origins
            </div>
          </div>
          <h2 className="uppercase text-3xl lg:text-left text-center text-[#776c65] mb-2">
            WHY WE MAKE KNIVES
          </h2>
          <p className="text-[#868280] max-w-250 text-justify lg:px-0 px-4">
            Knives were the first tools humans invented. We are drawn to them
            with primitive fascination in the same way we are drawn to the
            flickering flames of a fire. We show our respect through patiently
            sharpening and caring for our blades, repairing them when they are
            worn, and making sure they last a lifetime. Because you can’t honour
            a knife unless you use it.
          </p>
        </div>
        <div className="py-10">
          <img
            src="./assets/images/TOG-Sharp-Service-2019-scaled.webp"
            alt="Sharp"
          />
        </div>
      </div>
      <div className="p-[68px_50px] bg-[#323236]  cont  flex lg:flex-row flex-col items-center gap-5">
        <div className="lg:w-1/3 w-full flex justify-center items-center">
          <img
            src="./assets/images/TOG_-_Website_Imagery_-_Chef_Quote_-_Sat_Bains.webp"
            alt="Shef"
          />
        </div>
        <div className="flex flex-col lg:w-2/3 w-full px-10 text-white">
          <h3 className="lg:text-[40px] text-2xl lg:leading-[56px] leading-[36px]  mb-4">
            "I have been using this knife at home for the last six months and
            have to say, it's been brilliant."
          </h3>
          <p className="uppercase text-xl mb-6">Sat Bains</p>
          <p className="text-[.8rem]">
            Chef/Owner, Restaurant Sat Bains with Rooms, Nottingham (2 Michelin
            stars)
          </p>
        </div>
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

export default About;
