import React from "react";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="!bg-[rgb(50,50,54)]">
      <div className="max-w-[1320px] mx-auto py-4 px-6 lg:px-8 text-center">
        <NavLink to="/" className="flex justify-center items-center py-5">
          <img className="w-[155px]" src="/assets/images/logo.png" alt="logo" />
        </NavLink>
        <div className="flex flex-wrap justify-between  gap-5">
          <div className="max-w-[200px]">
            <p className="text-white text-left text-[13px] font-extralight leading-[15px] cursor-pointer py-3 uppercase">
              Shop
            </p>
            <ul className="mt-4 flex flex-col justify-start text-left">
              <NavLink
                to="/main/category?category=knives&category=7"
                className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase"
              >
                Kitchen Knives
              </NavLink>
              <NavLink
                to="/main/category?category=knives&category=8"
                className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase"
              >
                Storage
              </NavLink>
              <NavLink
                to="/main/category?category=knives&category=9"
                className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase"
              >
                Sharpening
              </NavLink>
              <NavLink
                to="/main/category?category=knives&category=10"
                className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase"
              >
                Chopping Boards
              </NavLink>
              <NavLink
                to="/main/category?category=knives&category=11"
                className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase"
              >
                Higonokami
              </NavLink>
              <NavLink
                to="/main/category?category=knives&category=12"
                className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase"
              >
                Accessories
              </NavLink>
              <li className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase">
                Gift Vouches
              </li>
            </ul>
          </div>
          <div className="max-w-[200px]">
            <p className="text-white text-left  text-[12px] font-extralight  leading-[15px] cursor-pointer py-3 uppercase">
              Tog Knives
            </p>
            <ul className="mt-4 flex flex-col justify-start text-left ">
              <NavLink
                to="/main/about"
                className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase"
              >
                About
              </NavLink>
              <li className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase">
                What Chef Say
              </li>
              <li className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase">
                News
              </li>
              <NavLink
                to="/main/contact"
                className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase"
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          <div className="max-w-[200px]">
            <p className="text-white text-left text-[12px] font-extralight  leading-[15px] cursor-pointer py-3 uppercase">
              Information
            </p>
            <ul className="mt-4 flex flex-col justify-start text-left">
              <li className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase">
                30 Days Home Trial
              </li>
              <li className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase">
                Knife Buying Guide
              </li>
              <li className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase">
                After Care
              </li>
              <li className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase">
                Sharpenning Guide
              </li>
              <li className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase">
                Sharpenning Service
              </li>
              <li className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase">
                Returns
              </li>
              <li className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase">
                Shipping & Taxes
              </li>
              <li className="text-[12px] font-extralight group text-[#dfdfdf] hover:text-[#e97625] leading-[15px] cursor-pointer py-3 uppercase">
                Clarna
              </li>
            </ul>
          </div>
          <div className="text-white lg:max-w-1/3 max-w-3/4 mx-auto">
            <h6 className="whitespace-nowrap text-white text-left text-[12px] font-extralight leading-[15px] cursor-pointer py-3 uppercase">
              Subscribe to our newsletter
            </h6>
            <p className="text-[12px] leading-[18px] text-justify mt-6 mb-3 text-[#dfdfdf]">
              Be first in line when we release new products. Learn everything we
              know about knives. You'll also be automatically entered into our
              rolling knife draw: each month a random winner will be sent a
              knife.
            </p>
            <div className="bg-white rounded-sm p-2">
              <form className="flex flex-col gap-2">
                <div className="">
                  <input
                    className=" text-[#0a0a0a] px-3 py-2 w-full rounded-sm border border-gray-300 p-3 
             focus:outline-none focus:orange-500 
             focus:ring-2 focus:ring-orange-300 
             transition duration-300"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-sm cursor-pointer bg-[#e97625]
 text-white px-3 py-3 text-center flex justify-center items-center"
                >
                  <FaLongArrowAltRight className="text-xl" />
                </button>
              </form>
            </div>
            <div className="flex items-center text-2xl justify-center gap-3 text-[#fafafa] mt-6 border-b border-[#fafafa] pb-4">
              <CiFacebook />
              <CiInstagram />
              <CiYoutube />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center py-5 gap-4">
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="flex-0 text-white text-xs font-extralight flex gap-2">
              <p className="whitespace-nowrap">Terms & Conditions</p>
              <p className="whitespace-nowrap">Privacy Policy</p>
            </div>
            <div className="text-white text-xs font-extralight">
              @{new Date().getFullYear()}TOG KNIVES LTD. Website maintained by
              Graftstudio
            </div>
          </div>
          <div className="flex flex-wrap sm:order-1 -order-1 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="pi-american_express"
              viewBox="0 0 38 24"
              width="38"
              height="24"
            >
              <title id="pi-american_express">American Express</title>
              <path
                fill="#000"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"
                opacity=".07"
              ></path>
              <path
                fill="#006FCF"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"
              ></path>
              <path
                fill="#FFF"
                d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"
              ></path>
              <path
                fill="#006FCF"
                d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"
              ></path>
              <path
                fill="#006FCF"
                d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"
              ></path>
              <path
                fill="#FFF"
                d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"
              ></path>
              <path
                fill="#006FCF"
                d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"
              ></path>
              <path
                fill="#006FCF"
                d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"
              ></path>
            </svg>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              x="0"
              y="0"
              width="38"
              height="24"
              viewBox="0 0 165.521 105.965"
              xmlSpace="preserve"
              aria-labelledby="pi-apple_pay"
            >
              <title id="pi-apple_pay">Apple Pay</title>
              <path
                fill="#000"
                d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"
              ></path>
              <path
                fill="#FFF"
                d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"
              ></path>
              <g>
                <g>
                  <path
                    fill="#000"
                    d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"
                  ></path>
                  <path
                    fill="#000"
                    d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"
                  ></path>
                </g>
                <g>
                  <path
                    fill="#000"
                    d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"
                  ></path>
                  <path
                    fill="#000"
                    d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"
                  ></path>
                  <path
                    fill="#000"
                    d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"
                  ></path>
                </g>
              </g>
            </svg>
            <svg
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="38"
              height="24"
              aria-labelledby="pi-diners_club"
            >
              <title id="pi-diners_club">Diners Club</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              ></path>
              <path
                d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z"
                fill="#3086C8"
              ></path>
            </svg>
            <svg
              viewBox="0 0 38 24"
              width="38"
              height="24"
              role="img"
              aria-labelledby="pi-discover"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="pi-discover">Discover</title>
              <path
                fill="#000"
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                fill="#fff"
              ></path>
              <path
                d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z"
                fill="#231F20"
              ></path>
              <path
                d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                fill="url(#pi-paint0_linear)"
              ></path>
              <path
                opacity=".65"
                d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                fill="url(#pi-paint1_linear)"
              ></path>
              <path
                d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z"
                fill="#231F20"
              ></path>
              <path
                d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z"
                fill="#231F20"
              ></path>
              <path
                d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z"
                fill="#F48120"
              ></path>
              <defs>
                <linearGradient
                  id="pi-paint0_linear"
                  x1="21.657"
                  y1="12.275"
                  x2="19.632"
                  y2="9.104"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F89F20"></stop>
                  <stop offset=".25" stopColor="#F79A20"></stop>
                  <stop offset=".533" stopColor="#F68D20"></stop>
                  <stop offset=".62" stopColor="#F58720"></stop>
                  <stop offset=".723" stopColor="#F48120"></stop>
                  <stop offset="1" stopColor="#F37521"></stop>
                </linearGradient>
                <linearGradient
                  id="pi-paint1_linear"
                  x1="21.338"
                  y1="12.232"
                  x2="18.378"
                  y2="6.446"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F58720"></stop>
                  <stop offset=".359" stopColor="#E16F27"></stop>
                  <stop offset=".703" stopColor="#D4602C"></stop>
                  <stop offset=".982" stopColor="#D05B2E"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 38 24"
              width="38"
              height="24"
              aria-labelledby="pi-google_pay"
            >
              <title id="pi-google_pay">Google Pay</title>
              <path
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                fill="#000"
                opacity=".07"
              ></path>
              <path
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                fill="#FFF"
              ></path>
              <path
                d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z"
                fill="#5F6368"
              ></path>
              <path
                d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z"
                fill="#4285F4"
              ></path>
              <path
                d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z"
                fill="#34A853"
              ></path>
              <path
                d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z"
                fill="#FBBC04"
              ></path>
              <path
                d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z"
                fill="#EA4335"
              ></path>
            </svg>
            <svg
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="24"
              role="img"
              aria-labelledby="pi-maestro"
            >
              <title id="pi-maestro">Maestro</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              ></path>
              <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
              <circle fill="#00A2E5" cx="23" cy="12" r="7"></circle>
              <path
                fill="#7375CF"
                d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
              ></path>
            </svg>
            <svg
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="38"
              height="24"
              aria-labelledby="pi-master"
            >
              <title id="pi-master">Mastercard</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              ></path>
              <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
              <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
              <path
                fill="#FF5F00"
                d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
              ></path>
            </svg>
            <svg
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="24"
              role="img"
              aria-labelledby="pi-paypal"
            >
              <title id="pi-paypal">PayPal</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              ></path>
              <path
                fill="#003087"
                d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
              ></path>
              <path
                fill="#3086C8"
                d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
              ></path>
              <path
                fill="#012169"
                d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
