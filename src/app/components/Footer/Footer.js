import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";

const Footer = () => {
  
  return (
    <footer className="w-screen mt-8 text-left lg:w-full font-poppins">
      <div className="w-full bg-gray-100">
        <div className="w-[90%] sm:w-[85%] mx-auto flex lg:flex-row flex-col  justify-center   h-full lg:justify-between py-10 font-poppins border-b border-gray-300 mb-8">
          <div className="text-center lg:text-left font-poppins">
            <div className="flex items-start justify-start lg:items-center sm:px-[16vw] lg:px-0 lg:gap-x-4 gap-y-4 lg:justify-start">
              <TbTruckDelivery
                size="36px"
                color="#005D76"
                className="transform scale-x-[-1]"
              />
              <h3 className="grid items-start justify-start px-2 mb-2 text-xl font-medium lg:px-0 font-poppins">
                <p className="flex items-start justify-start font-semibold text-customBlue">
                  Free <span className="ml-2 font-medium text-black">Delivery</span>{" "}
                </p>
                <p className="text-base text-[#606060] mt-1.5">
                  Enjoy free delivery with every order.
                </p>
              </h3>
            </div>
          </div>
          <div className="text-center lg:text-left font-poppins">
            <div className="flex items-start justify-start sm:px-[16vw] lg:px-0 lg:items-center lg:gap-x-4 gap-y-4 lg:justify-start">
              <GrLocation size="36px" color="#005D76" />
              <h3 className="grid items-start justify-start px-2 mb-2 text-xl font-medium lg:px-0 font-poppins">
                <p className="flex items-start justify-start font-semibold text-customBlue">
                  Wide{" "}
                  <span className="ml-2 font-medium text-black">Delivery Range</span>{" "}
                </p>
                <p className="text-base text-[#606060] mt-1.5">
                  We deliver to various locations.
                </p>
              </h3>
            </div>
          </div>
          <div className="text-center lg:text-left font-poppins">
            <div className="flex items-start justify-start sm:px-[16vw] lg:px-0 lg:items-center lg:gap-x-4 gap-y-4 lg:justify-start">
              <LuShield size="36px" color="#005D76" />
              <h3 className="grid items-start justify-start px-2 text-xl font-medium lg:px-0mb-2 font-poppins">
                <p className="flex items-start justify-start font-semibold text-customBlue">
                  Safe{" "}
                  <span className="ml-2 font-medium text-black">And Secure</span>{" "}
                </p>
                <p className="text-base text-[#606060] mt-1.5">
                  Your order is handled with care and security.
                </p>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* <div> */}
      <div className="w-[90%] sm:w-[85%] mx-auto flex flex-col lg:flex-row font-poppins justift-center items-center lg:justify-between mb-8 gap-y-4 lg:gap-x-8">
        <div>
          <Link href="/"><h3 className="mb-2 text-sm font-semibold lg:text-3xl">
            Re<span className="font-extralight">nt</span>{" "}
          </h3>
          </Link>
          <a href="/" className="text-[#606060] text-base">
            Help
          </a>
          
        </div>
        <div className="">
          <h3 className="text-sm font-medium lg:text-lg font-poppins lg:mb-2">
            Popular Locations
          </h3>
          <ul className="list-none justify-center lg:justify-start items-center grid p-0 lg:text-base text-xs text-[#606060]">
            <li><Link href="/">Kolkata</Link></li>
            <li><Link href="/">Mumbai</Link></li>
            <li><Link href="/">Chennai</Link></li>
            <li><Link href="/">Pune</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="grid items-center justify-center text-sm font-medium lg:text-lg lg:mb-2">
            Trending Locations
          </h3>
          {/* <ul className="list-none p-0 lg:justify-start justify-center items-center grid  lg:text-base text-sm text-[#606060]"> */}
          <ul className="list-none justify-center lg:justify-start items-center grid p-0 lg:text-base text-xs text-[#606060]">
            <li><Link href="/">Bhubaneswar</Link></li>
            <li><Link href="/">Hyderabad</Link></li>
            <li><Link href="/">Chandigarh</Link></li>
            <li><Link href="/">Nashik</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="grid items-center justify-center text-sm font-medium lg:justify-start lg:text-lg lg:mb-2">More Links</h3>
          <ul className="list-none   p-0 lg:text-base text-sm text-[#606060]">
            <li>
              <Link href="/about-us" className="grid items-center justify-center lg:justify-start ">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="grid items-center justify-center lg:justify-start ">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/site-map" className="grid items-center justify-center lg:justify-start ">
                Sitemap
              </Link>
            </li>
            <li>
              <a href="/" className="grid items-center justify-center lg:justify-start ">
                Legal & Privacy Information
              </a>
            </li>
            <li>
              <Link href="/contact-us" className="grid items-center justify-center lg:justify-start ">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-col">
          <h3 className="text-sm font-medium lg:text-lg lg:mb-2">Follow Us</h3>
          <ul className="flex flex-row text-xs lg:list-none lg:p-0 lg:text-lg gap-x-4">
            <li>
              <FaInstagram size="25px" color="#005D76" />
            </li>
            <li>
              <FaFacebook size="25px" color="#005D76" />
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
      <div className="justify-center h-full py-4 text-base text-center text-white border-t border-gray-300 bg-customBlue font-poppins ">
        <p>All rights reserved © 2020-2024 Rent</p>
      </div>
    </footer>
  );
};

export default Footer;
