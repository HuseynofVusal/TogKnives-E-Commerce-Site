import React, { useEffect } from "react";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useLocation } from "react-router";

const Contact = () => {
    const location = useLocation()

     useEffect(() => {
        window.scrollTo(0, 0);
      }, [location.pathname, location.search]);
  return (
    <main className="cont !py-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 px-10">
        <div className="w-full">
          <h1 className="text-3xl uppercase text-[#776c65]">Get in Touch</h1>
          <p className="font-sans text-[13px]">
            Our team would love to hear from you
          </p>
          <form className="py-5 flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <p className="text-[#484646] text-[13px]">Full Name</p>
                <input
                  className="outline-2 outline-[#b5b0ad] focus:outline-[#776c65] mt-3 w-full  px-4 py-3 text-[12px]"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <p className="text-[#484646] text-[13px]">Email </p>
                <input
                  className="outline-2 outline-[#b5b0ad] focus:outline-[#776c65] mt-3 w-full  px-4 py-3 text-[12px]"
                  type="email"
                  placeholder="Email adress"
                />
              </div>
              <div>
                <p className="text-[#484646] text-[13px]">Phone Number</p>
                <input
                  className="outline-2 outline-[#b5b0ad] focus:outline-[#776c65] mt-3 w-full  px-4 py-3 text-[12px]"
                  type="number"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div>
              <p className="text-[#484646] text-[13px]">Messages</p>
              <textarea
                className="outline-2 outline-[#b5b0ad] resize-none scrollbar-hide focus:outline-[#776c65] mt-3 w-full  px-4 py-3 text-[12px] h-[200px]"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button type="submit" className="text-white bg-[#e97625] border-3 border-transparent whitespace-nowrap cursor-pointer hover:border-[#e97625] text-center   hover:bg-white hover:text-[#e97625] duration-300 w-max text-[13px] flex items-center gap-2 px-4 py-3 rounded-lg">
                <SlEnvolopeLetter />
                <span className="uppercase ">Submit</span>
            </button>
          </form>
        </div>
        <div className="md:block hidden p-5">
          <img src="/assets/images/contact-img.webp" alt="Contact image" />
        </div>
      </div>
    </main>
  );
};

export default Contact;
