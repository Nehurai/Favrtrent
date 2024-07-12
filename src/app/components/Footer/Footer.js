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
    <footer className=" mt-8  w-screen lg:w-full    font-poppins text-left">
      <div className="w-full bg-gray-100">
        <div className="w-[90%] sm:w-[85%] mx-auto flex lg:flex-row flex-col  justify-center   h-full lg:justify-between py-10 font-poppins border-b border-gray-300 mb-8">
          <div className="lg:text-left text-center font-poppins">
            <div className="flex lg:gap-x-4 gap-y-4 justify-center lg:justify-start items-center">
              <TbTruckDelivery
                size="36px"
                color="#005D76"
                className="transform scale-x-[-1]"
              />
              <h3 className="text-xl font-poppins font-medium mb-2">
                <p className="text-customBlue font-semibold">
                  Free <span className="font-medium text-black">Delivery</span>{" "}
                </p>
                <p className="text-base text-[#606060] mt-1.5">
                  Enjoy free delivery with every order.
                </p>
              </h3>
            </div>
          </div>
          <div className="lg:text-left text-center font-poppins">
            <div className="flex lg:gap-x-4 gap-y-4 justify-center lg:justify-start items-center">
              <GrLocation size="36px" color="#005D76" />
              <h3 className="text-xl font-poppins font-medium mb-2">
                <p className="text-customBlue font-semibold">
                  Wide{" "}
                  <span className="font-medium text-black">Delivery Range</span>{" "}
                </p>
                <p className="text-base text-[#606060] mt-1.5">
                  We deliver to various locations.
                </p>
              </h3>
            </div>
          </div>
          <div className="lg:text-left text-center font-poppins">
            <div className="flex lg:gap-x-4 gap-y-4 justify-center lg:justify-start items-center">
              <LuShield size="36px" color="#005D76" />
              <h3 className="text-xl font-poppins font-medium mb-2">
                <p className="text-customBlue font-semibold">
                  Safe{" "}
                  <span className="font-medium text-black">And Secure</span>{" "}
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
      <div className="w-[90%] sm:w-[85%] mx-auto flex flex-col lg:flex-row font-poppins lg:justify-between mb-8 gap-y-4 lg:gap-x-8">
        <div>
          <h3 className="lg:text-3xl text-sm font-semibold mb-2">
            Re<span className="font-extralight">nt</span>{" "}
          </h3>
          <a href="/" className="text-[#606060] text-base">
            Help
          </a>
        </div>
        <div className="">
          <h3 className="lg:text-lg text-sm font-medium font-poppins lg:mb-2">
            Popular Locations
          </h3>
          <ul className="list-none p-0 lg:text-base text-xs text-[#606060]">
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
        <div>
          <h3 className="lg:text-lg text-sm font-medium lg:mb-2">
            Trending Locations
          </h3>
          <ul className="list-none p-0 lg:text-base text-sm text-[#606060]">
            <li>Bhubaneswar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>
        <div>
          <h3 className="lg:text-lg text-sm font-medium lg:mb-2">More Links</h3>
          <ul className="list-none p-0 lg:text-base text-sm text-[#606060]">
            <li>
              <Link href="/about-us" className="">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/site-map" className="">
                Sitemap
              </Link>
            </li>
            <li>
              <a href="/" className="">
                Legal & Privacy Information
              </a>
            </li>
            <li>
              <Link href="/contact-us" className="">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-col">
          <h3 className="lg:text-lg text-sm font-medium lg:mb-2">Follow Us</h3>
          <ul className="lg:list-none lg:p-0 lg:text-lg text-xs flex gap-x-4 flex-row">
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
      <div className="text-center text-base justify-center py-4 bg-customBlue text-white font-poppins h-full  border-t border-gray-300 ">
        <p>All rights reserved © 2020-2024 Rent</p>
      </div>
    </footer>
  );
};

export default Footer;
