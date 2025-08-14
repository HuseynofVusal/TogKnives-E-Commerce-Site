import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router";

const BasketModal = ({ setBasketModal,basketModalId,products}) => {
  
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const modalId = products.find(item=>item.id==basketModalId)
  

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setBasketModal(false);
    }, 300);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: mousePosition.y,
          left: mousePosition.x,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 100,
        }}
        className="w-10 h-10 text-[12px] rounded-full bg-[#e97625] text-white flex items-center justify-center shadow-lg"
      >
        ✕
      </div>
      <div
        onClick={handleClose}
        className="fixed left-0 top-0 w-screen h-screen bg-[#333] opacity-50 z-40 cursor-none"
      ></div>
      <div
        className={`fixed z-101 bg-white shadow-lg
        bottom-[20px]
        left-[20px] sm:left-auto sm:right-[20px]
        w-[calc(100%-40px)] md:w-1/2
        sm:h-[52%] h-max
        rounded-lg p-6
        transition-transform duration-300 ease-in-out
        transform ${isVisible ? "translate-y-0" : "translate-y-full"}
      `}
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-[#eeebeb] justify-center">
          <FaCheckCircle className="text-[#065f06] text-xl" />
          <span className="text-[13px] text-[#065f06] font-sans">
            Added to your basket!
          </span>
        </div>
        
          <div
            key={modalId?.id}
            className="w-full relative flex items-center gap-3 py-4"
          >
            <div className="max-w-30 h-auto relative">
              <img
                src={modalId?.image}
                className="max-h-[615px] w-full object-cover"
                alt=""
              />
            </div>
            <div className="p-3">
              <h3 className="text-[#776c65] my-2">{modalId?.name}</h3>
              <span className="text-[#776c65] my-2">
                <span className="text-[#776c65] font-semibold font-sans">
                  $
                </span>
                {modalId?.price}.00
              </span>
              <div className="flex justify-between items-center"></div>
            </div>
          </div>
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
              <g id="Clock-Icon" transform="translate(1.000000, 2.000000)">
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
            Order within {new Date().getHours()} hours {new Date().getMinutes()}{" "}
            minutes for UK delivery by Monday {new Date().getMonth()}th July
            <span className="text-[#776c65] text-[12px] my-2 uppercase">
              (ASSUMES IMMEDIATE AGE VERIFICATION)
            </span>
          </p>
        </div>
        <div className="flex w-full gap-2 mt-auto">
            <NavLink to='/main/basket' className="w-full bg-[#e97625] border-3 border-transparent whitespace-nowrap hover:border-[#e97625] text-center   hover:bg-white hover:text-[#e97625] duration-300 cursor-pointer  px-3 py-1 sm:py-2 uppercase">
              View Basket
            </NavLink>
          <NavLink to="/main/checkout" className="w-full bg-[#e97625] border-3 border-transparent whitespace-nowrap hover:border-[#e97625] text-center   hover:bg-white hover:text-[#e97625] duration-300 cursor-pointer  px-3 py-1 sm:py-2 uppercase">
            CheckOut
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BasketModal;
